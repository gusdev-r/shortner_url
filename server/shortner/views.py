import datetime
import os
from .serializers import LinkSerializer
from rest_framework import generics
from .models import Links
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.shortcuts import redirect, get_object_or_404
from .utils import generate_hash
from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator


class LinkCreateShortUrlView(generics.CreateAPIView):
    queryset = Links.objects.all()
    serializer_class = LinkSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        original_url = request.data.get("url")

        if not original_url:
            return Response({"error": "URL não fornecida."}, status=400)

        existing_link = Links.objects.filter(url=original_url).first()
        if existing_link:
            short_url = f"{os.environ.get('SITE_URL')}{existing_link.short_hash}"
            return Response({"original_url": original_url, "short_url": short_url})

        short_hash = generate_hash()

        link = Links.objects.create(url=original_url, short_hash=short_hash)

        short_url = f"{os.environ.get('SITE_URL')}{link.short_hash}"
        return Response({"original_url": original_url, "short_url": short_url})


class LinkRedirectToUrlView(generics.GenericAPIView):
    @method_decorator(cache_page(60 * 15))
    def get(self, request, short_hash, *args, **kwargs):
        error_page_url = os.environ.get(
            "ERROR_PAGE_URL", "http://127.0.0.1:4137/api/error_page"
        )
        found_link = get_object_or_404(Links, short_hash=short_hash)
        return (
            redirect(error_page_url)
            if found_link.is_expired()
            else self.redirect_to_url(found_link)
        )

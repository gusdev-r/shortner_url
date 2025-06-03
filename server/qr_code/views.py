from datetime import timezone
from datetime import timedelta, datetime
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from rest_framework.views import APIView
from .models import QrCode
from .serializers import QRCodeSerializer as QRCOS
from rest_framework.response import Response
import uuid
from rest_framework import status


class QRCodeScanView(APIView):
    def post(self, request, qr_code_id, *args, **kwargs):
        try:
            qr_code_id = uuid.UUID(qr_code_id)
        except ValueError:
            return Response("Invalid QR Code ID", status=400)

        qr_code: QrCode = get_object_or_404(QrCode, id=qr_code_id)
        qr_code.scan_count += 1
        qr_code.last_scanned = timezone.now()
        qr_code.save()

        if qr_code.is_url:
            return HttpResponseRedirect(qr_code.content)
        return Response(qr_code.content, content_type="text/plain", status=200)


class LinkExtendExpirationView(APIView):
    def patch(self, request, short_hash, *args, **kwargs):
        serializer = QRCOS(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        extend_expiration = serializer.validated_data.get("extend_expiration")
        if not extend_expiration:
            return Response(
                {"error": "Field 'extend_expiration' is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        found_link = get_object_or_404(QrCode, short_hash=short_hash)
        found_link.expiration_date = (
            found_link.expiration_date + extend_expiration
            if found_link.expiration_date
            else datetime.now() + extend_expiration
        )
        found_link.save()

        return Response(
            {"message": "Expiration date extended successfully."},
            status=status.HTTP_200_OK,
        )


class QRCodeCreateView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = QRCOS(data=request.data)
        if serializer.is_valid():
            qr_code = serializer.save()

            return Response(
                {
                    "id": str(qr_code.id),
                    "name": qr_code.name,
                    "content": qr_code.content,
                    "qr_image_url": request.build_absolute_uri(qr_code.qr_image.url),
                    "scan_count": qr_code.scan_count,
                },
                status=201,
            )
        return Response(serializer.errors, status=400)

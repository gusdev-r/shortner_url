from django.urls import path
from .views import LinkCreateShortUrlView, LinkRedirectToUrlView

urlpatterns = [
    path("url/shorten/", LinkCreateShortUrlView.as_view(), name="create_short_url"),
    path("<str:short_hash>/", LinkRedirectToUrlView.as_view(), name="redirect_to_url"),
]

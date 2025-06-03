from django.urls import path
from .views import QRCodeScanView, QRCodeCreateView

urlpatterns = [
    path("create-qr/", QRCodeCreateView.as_view(), name="create-qrcode"),
    path("qrcodes/<uuid:qr_code_id>/", QRCodeScanView.as_view(), name="scan-qrcode"),
]

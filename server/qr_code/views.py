from datetime import timezone
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from rest_framework.views import APIView
from .models import QrCode
from .serializers import QRCodeSerializer as QRCOS
import uuid


class QRCodeScanView(APIView):
    def post(self, request, qr_code_id, *args, **kwargs):
        try:
            qr_code_id = uuid.UUID(qr_code_id)
        except ValueError:
            return HttpResponse("Invalid QR Code ID", status=400)

        qr_code: QrCode = get_object_or_404(QrCode, id=qr_code_id)
        qr_code.scan_count += 1
        qr_code.last_scanned = timezone.now()
        qr_code.save()

        if qr_code.is_url:
            return HttpResponseRedirect(qr_code.content)
        return HttpResponse(qr_code.content, content_type="text/plain", status=200)


class QRCodeCreateView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = QRCOS(data=request.data)
        if serializer.is_valid():
            qr_code = serializer.save()

            return HttpResponse(
                {
                    "id": str(qr_code.id),
                    "name": qr_code.name,
                    "content": qr_code.content,
                    "qr_image_url": request.build_absolute_uri(qr_code.qr_image.url),
                    "scan_count": qr_code.scan_count,
                },
                status=201,
            )
        return HttpResponse(serializer.errors, status=400)

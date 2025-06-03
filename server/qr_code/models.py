from io import BytesIO
from PIL import Image
from django.db import models
from uuid import uuid4
from django.core.validators import URLValidator
import qrcode
import qrcode.constants
from django.core.files import File


class QrCode(models.Model):
    id = models.UUIDField(default=uuid4, primary_key=True, editable=False)
    name = models.CharField(max_length=100, help_text="Human-redable identifier")
    content = models.TextField(help_text="URL or text to encode")
    size = models.PositiveIntegerField(default=300)
    is_url = models.BooleanField(default=True)
    background_color = models.CharField(max_length=7, default="#FFFFFF")
    color = models.CharField(max_length=7, default="#000000")
    scan_count = models.PositiveIntegerField(default=0)
    last_scanned = models.DateField(null=True, blank=True)
    qr_image = models.ImageField(upload_to="qrcodes/", blank=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    expiration_date = models.DateField(
        null=True,
        blank=True,
        help_text="Date when the QR code will no longer be valid",
    )

    def handle_url_validator(self, url: str):
        if url:
            validator = URLValidator
            validator(self.content)

    def __str__(self):
        return "f{self.name} ({self.id})"

    def save(self, *args, **kwargs):
        self.handle_url_validator(self.is_url)

        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(self.content)
        qr.make(fit=True)

        img = qr.make_image(
            fill_color=self.color, back_color=self.background_color
        ).convert("RGB")

        resample_filter = Image.Resampling.LANCZOS

        if self.size != 300:
            img = img.resize((self.size, self.size), resample_filter)

        buffer = BytesIO()
        img.save(buffer, format="PNG")
        filename = f"qrcode_{self.id}.png"
        print(f"Saving QR code image as {filename}")
        self.qr_image.save(filename, File(buffer), save=True)
        super().save(*args, **kwargs)

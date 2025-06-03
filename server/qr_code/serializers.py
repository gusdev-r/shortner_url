import datetime
from rest_framework import serializers
from .models import QrCode


class QRCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QrCode
        fields = [
            "name",
            "content",
            "is_url",
            "color",
            "background_color",
            "size",
            "expiration_date",
        ]
        extra_kwargs = {
            "color": {"required": False, "default": "#000000"},
            "background_color": {"required": False, "default": "#FFFFFF"},
            "size": {"required": False, "default": 300},
            "is_url": {"required": False, "default": True},
        }

    expiration_date = serializers.DateField(required=False, allow_null=True)

    def validate_expiration_date(self, value):
        if value and value < self.instance.created_at:
            raise serializers.ValidationError(
                "Expiration date cannot be before the creation date."
            )
        if value and value < datetime.now().date():
            raise serializers.ValidationError("Expiration date cannot be in the past.")
        return value

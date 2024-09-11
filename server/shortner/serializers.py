from rest_framework.serializers import ModelSerializer
from .models import Links


class LinkSerializer(ModelSerializer):
    class Meta:
        model = Links
        fields = ["url", "short_hash"]
        read_only_fields = ["url", "short_hash"]

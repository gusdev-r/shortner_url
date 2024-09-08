from django.db import models
from .utils import generate_hash


class Links(models.Model):
    url = models.CharField(max_length=1000, null=False)
    short_hash = models.CharField(max_length=100, default=generate_hash, unique=True)

    def __str__(self):
        return self.short_hash

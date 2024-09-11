import hashlib
from uuid import uuid4


def generate_hash():
    id = uuid4().hex
    hash_obj = hashlib.md5(id.encode())
    hex = hash_obj.hexdigest()
    return hex[:5].lower()

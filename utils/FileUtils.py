import xxhash

def hash(file: bytes) -> int:
    return xxhash.xxh32_intdigest(file)
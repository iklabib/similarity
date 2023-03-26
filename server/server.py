from typing import List, Dict
from fastapi import FastAPI, UploadFile, File
from ..server import extractor
server = FastAPI()


@server.post('/upload/document')
async def upload(file: UploadFile) -> Dict[str, str]:
    content = file.file.read()
    # cid = FileUtils.hash(content)
    return {'filename': file.filename}


@server.post('/upload/documents')
async def upload(files: List[UploadFile]) -> Dict[str, List[str]]:
    contents = []
    filenames = []
    for file in files:
        content = file.file.read()
        contents.append(content)
        filenames.append(file.filename)
    return {'filenames': filenames}

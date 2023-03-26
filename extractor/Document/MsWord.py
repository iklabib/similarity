import docx
from pathlib import Path
from . import Document


class MsWord(Document.Document):
    def __init__(self, file: Path):
        self.doc = docx.Document(file)

    def text(self):
        return "\n".join([p.text for p in self.doc.paragraphs])

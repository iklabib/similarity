from pathlib import Path
import pypdfium2 as pdfium
from . import Document


class Pdf(Document.Document):
    def __init__(self, file: Path | bytes):
        self.pdf = pdfium.PdfDocument(file)
    
    def text(self) -> str:
        pages = []
        for p in range(len(self.pdf)):
            page = self.pdf.get_page(p)
            text_page = page.get_textpage()
            text = text_page.get_text_range()
            pages.append(text)
        return "\n".join(pages)
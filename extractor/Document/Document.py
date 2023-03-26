from abc import ABC, abstractmethod 
from pathlib import Path

class Document(ABC):
    @abstractmethod
    def text():
        raise NotImplementedError
from pathlib import Path
wordlist = Path(__file__).parent / 'stopwords.list'

stopwords = []


def reload_stopwords():
    with wordlist.open() as w:
        words = w.read().strip()
        return set(words.split())


def update():
    global stopwords
    stopwords = reload_stopwords()


def contains(word: str) -> bool:
    return word in stopwords


def filter_from_pairs(seq: list[tuple[str, str]], reload=True) -> list[tuple[str, str]]:
    if reload:
        update()
    
    disallowed_tags = {'SYM', 'PUNCT'}

    pairs = []
    for lemma, tag in seq:
        if tag not in disallowed_tags and lemma not in stopwords:
            pairs.append((lemma, tag))
    return pairs


def save(words: list):
    words = sorted(words)
    with wordlist.open('w') as w:
        for word in words:
            w.write(word + '\n')


update()

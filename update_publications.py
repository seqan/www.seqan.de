"""Update ``_data/publications.yml`` from the FU Berlin publication server.

The publications of the AlgBioInf group are downloaded as JSON and BibTeX.
Each JSON entry is given a ``key`` (used by ``_includes/cite.html``) and its
BibTeX record as ``bibtex`` before all entries are written to YAML.
"""

import json
import textwrap
import urllib.request

import bibtexparser
import yaml
from bibtexparser.middlewares import SortFieldsAlphabeticallyMiddleware
from bibtexparser.model import Entry

BIBTEX_URL = "https://publications.imp.fu-berlin.de/cgi/exportview/divisions/group=5Falgbioinf/BibTeX/group=5Falgbioinf.bib"
JSON_URL = "https://publications.imp.fu-berlin.de/cgi/exportview/divisions/group=5Falgbioinf/JSON/group=5Falgbioinf.js"
OUTPUT_FILE = "_data/publications.yml"

BIBTEX_FORMAT = bibtexparser.BibtexFormat()
BIBTEX_FORMAT.indent = " "
BIBTEX_FORMAT.block_separator = ""

# Long fields (abstracts, author lists) are wrapped; continuation lines are indented one more than the field.
BIBTEX_WRAPPER = textwrap.TextWrapper(
    width=100,
    subsequent_indent=BIBTEX_FORMAT.indent * 2,
    break_long_words=False,
    break_on_hyphens=False,
)


def fetch(url: str) -> str:
    with urllib.request.urlopen(url) as response:
        return response.read().decode("utf-8")


def to_bibtex(entry: Entry) -> str:
    """Serialize a single entry with alphabetically sorted fields and wrapped lines."""
    for field in entry.fields:
        # The export contains tabs, CRLF line endings and runs of spaces inside values.
        field.value = " ".join(field.value.split())
    bibtex = bibtexparser.write_string(
        bibtexparser.Library([entry]),
        prepend_middleware=[SortFieldsAlphabeticallyMiddleware()],
        bibtex_format=BIBTEX_FORMAT,
    )
    return "".join(BIBTEX_WRAPPER.fill(line) + "\n" for line in bibtex.splitlines())


def main() -> None:
    bib_entries = bibtexparser.parse_string(fetch(BIBTEX_URL)).entries_dict
    publications = json.loads(fetch(JSON_URL))

    for publication in publications:
        publication["key"] = f"fu_mi_publications{publication['eprintid']}"
        publication["bibtex"] = to_bibtex(bib_entries[publication["key"]])

    publications.sort(key=lambda publication: publication["key"])
    with open(OUTPUT_FILE, "w", encoding="utf-8") as out_file:
        yaml.dump(publications, out_file, explicit_start=True)


if __name__ == "__main__":
    main()

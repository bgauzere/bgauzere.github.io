# /// script
# requires-python = ">=3.9"
# dependencies = [
#     "bibtexparser",
# ]
# ///

import bibtexparser
import json
import os

# S'assurer que le dossier data existe
os.makedirs('data', exist_ok=True)

# Charger le fichier .bib généré par Zotero
with open('publications.bib', 'r', encoding='utf-8') as bibtex_file:
    bib_database = bibtexparser.load(bibtex_file)

# Sauvegarder en .json pour Hugo
with open('data/publications.json', 'w', encoding='utf-8') as json_file:
    json.dump(bib_database.entries, json_file, indent=2, ensure_ascii=False)

print("Conversion BibTeX vers JSON réussie !")

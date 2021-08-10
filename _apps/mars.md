---
title: MaRs
subtitle: Motif-based aligned RNA searcher
layout: app
seqan_version: 3
contact: Jörg Winkler
category: official
links:
  website: https://github.com/seqan/mars
  source: https://github.com/seqan/mars
---

MaRs is a tool that reads a structural multiple RNA alignment (e.g. from [LaRa 2](https://www.seqan.de/apps/lara.html))
and derives fuzzy stem loop descriptors from it. These descriptors are then subject to a search in a genomic database
and MaRs returns the hits where the RNA structure is found, accompanied with a quality value for each hit.

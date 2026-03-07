---
title: TetRex
subtitle: Regular expression matching of biological motifs
layout: app
cite: [fu_mi_publications3284]
seqan_version: 3
contact: Remy Schwab
category: official
links:
  website: https://github.com/remyschwab/TetRex
  source: https://github.com/remyschwab/TetRex
---

Regular Expressions provide a convenient way to model protein signatures, domains, and interaction sites. However,
despite the efficiency of modern tools for regular expression search, their runtime is often dominated by the size
of the input text. We present TetRex, a novel algorithm for regular expression matching of biological motifs that
leverages the (Hierarchical) Interleaved Bloom Filter as an index. This allows for ultra-fast queries of large
sequence collections.

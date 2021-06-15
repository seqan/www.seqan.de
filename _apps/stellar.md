---
title: Stellar
subtitle: A local pairwise aligner
layout: app
seqan_version: 2
cite: fu_mi_publications1092
contact: Birte Kehr
category: official
header:
  app_image: /assets/images/apps/stellar.jpg
links:
  download: http://packages.seqan.de/stellar/
  source: https://github.com/seqan/seqan/tree/master/apps/stellar
redirect_from:
  - /projects/stellar/
---
Large-scale comparison of genomic sequences requires reliable tools for the search of local alignments. Practical local
aligners are in general fast but heuristic, and hence often miss significant matches. We provide here the local pairwise
aligner STELLAR that has full sensitivity, i.e. guarantees to report all matches of a given minimal length and maximal
error rate. The aligner is composed of two steps, filtering and verification. For filtering it applies the SWIFT
algorithm, for which we have developed a new, exact verification strategy. STELLAR is very practical and fast on very
long sequences which makes it a suitable new tool for finding local alignments in the edit or hamming distance model.

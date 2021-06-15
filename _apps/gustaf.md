---
title: Gustaf
subtitle: A generic multi-split detection method
layout: app
seqan_version: 2
cite: fu_mi_publications1455
contact: Kathrin Trappe
category: official
header:
  app_image: /assets/images/apps/gustaf.jpg
links:
  download: http://packages.seqan.de/gustaf/
  source: https://github.com/seqan/seqan/tree/master/apps/gustaf
redirect_from:
  - /projects/gustaf/
---

Large-scale population and disease association studies have shown the importance as well as the difficulty of detecting
structural variants (SVs) in genomic and also transcriptomic sequencing data. Although being very fast and precise,
current read mapping tools usually fail to map sequencing reads that cross SV breakpoints or exon-exon boundaries.
These events cause one or even multiple splits in the read-to-reference alignment, with parts of the read mapping to
various locations on the reference sequence.
We present GUSTAF, a sound generic multi-split detection method. GUSTAF uses SeqAn’s exact local aligner STELLAR to
find partial read alignments. Compatible partial alignments are identified, and a split-read graph storing all
compatibility information is constructed for each read. Vertices in the graph represent partial alignments, edges
represent possible split positions. Using an exact dynamic programming approach, we refine the alignments around
possible split positions to determine precise breakpoint locations at single-nucleotide level. We use a DAG shortest
path algorithm to determine the best combination of refined alignments, and report those breakpoints supported by
multiple reads.

**Usage:** STELLAR is not a read mapper, and hence, GUSTAF is not designed to replace any read mapper pipeline with SV
detection on top. We recommend doing read mapping with your favourite read mapper and then run STELLAR and GUSTAF,
seperately, on the remaining unmappable reads.
Please take a look at the [README](https://github.com/seqan/seqan/blob/develop/apps/gustaf/README) file for usage
instructions.
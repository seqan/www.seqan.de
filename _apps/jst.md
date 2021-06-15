---
title: JST
subtitle: Journal string tree data structure and traverser
layout: app
seqan_version: 2
cite: fu_mi_publications1448
contact: René Rahn
category: official
header:
  app_image: /assets/images/apps/jst.png
links:
  source: https://github.com/rrahn/seqan/tree/feature/jst/extras/include/seqan/journaled_string_tree
redirect_from:
  - /projects/jst/
---

**Motivation**: Next generation sequencing (NGS) has revolutionized biomedical research in the last decade and led to a
continues stream of developments in bioinformatics addressing the need for fast and space efficient solutions for
analyzing NGS data. Often researchers need to analyze a set of genomic sequences which stem from closely related species
or are indeed individuals of the same species. Hence the analyzed sequences are very similar. For analyses where local
changes in the examined sequence induce only local changes in the results it is obviously desirable to examine identical
or similar regions not repeatedly.

**Results**: In this work we provide a datatype which exploits data parallelism inherent in a set of similar sequences
by analyzing shared regions only once. In real-world experiments we show that algorithms which otherwise would scan each
reference sequentially can be speeded up by a factor of 115.

**Main Features**:

* Journaled String Tree data structure and traverser.
* Generic Journaled String Tree finder.
* Online-search functors: Naive, Horspool, Shift-And, Shift-Or, Myers’ Bitvector.
* GDF converter to convert vcf files into our Genome Delta Format.

**Availability**: The data structure and associated tools are publicly available (see LINKS) and are part of SeqAn, the
C++ template library for sequence analysis. The current stable version is based on SeqAn 1.4.2 and is going to be ported
to SeqAn 2.0.0 in the near future.
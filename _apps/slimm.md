---
title: SLIMM
subtitle: Species level identification of microbes from metagenomes
layout: app
seqan_version: 2
cite: fu_mi_publications2119
contact: Temesgen Dadi
category: official
header:
  app_image: /assets/images/apps/slimm.png
links:
  download: https://github.com/seqan/slimm/releases/latest
  source: https://github.com/seqan/slimm
---

SLIMM is a taxonomic profiling tool that investigates which microorganisms are present in a sequenced sample. SLIMM uses
coverage landscape of reference genomes by sequencing reads to remove unlikely genomes from the analysis and
subsequently gain more uniquely-mapped reads to assign at lower ranks of a taxonomic tree. This approach enables SLIMM
to be sensitive in predicting members of a microbial community while maintaining a low false positive rate. It has been
also shown that SLIMM predicts the relative abundances of individual members with lower deviation from the actual
relative abundances compared to other methods. SLIMM requires a BAM/SAM alignment file as an input. One can use a read
mapper of choice to map raw sequencing reads to obtain the BAM/SAM alignment file required as input for SLIMM.

**GETTING STARTED**

More details on how to use SLIMM can be found at the [SLIMM WIKI](https://github.com/seqan/slimm/wiki)

Pre-built executables for Linux and Mac are made available at the
[RELEASE PAGE](https://github.com/seqan/slimm/releases/latest).

You may download already [INDEXED REFERENCE GENOMES](http://ftp.mi.fu-berlin.de/pub/dadi/slimm/) for Bacteria and
Archaea groups (Indexed reference genomes of Bacteria and Archaea groups are provided for Yara and Bowtie2 read mappers)

---
title: Fiona
subtitle: A parallel and automatic strategy for read error correction
layout: app
seqan_version: 2
cite: fu_mi_publications1451
contact: Marcel Schulz
category: official
links:
  download: http://packages.seqan.de/fiona/
  source: https://github.com/seqan/seqan/tree/master/apps/fiona
redirect_from:
  - /projects/fiona/
---

**Motivation**: Fiona is a tool for the automatic correction of sequencing errors in reads produced by high throughput sequencing experiments. It uses an efficient implementation of suffix arrays to detect read overlaps with different seed lengths in parallel. Fiona was compared on several real datasets to state-of-the-art methods and  showed overall superior correction accuracy. It was also among the fastest. Additionaly, Fiona embarks unique characteristics which makes it a good choice over existing programs:

* No parameters to set for the user. You just need to know the length of the genome!
* Correction of both substitution and indel errors.
* Optimal correction over a range of seed values.
* Multicore-Parallelization using OpenMP.
* Efficient, memory-saving implementation.

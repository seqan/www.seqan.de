---
title: Raptor
subtitle: A fast and space-efficient pre-filter for querying very large collections of nucleotide sequences
layout: app
seqan_version: 3
contact: Enrico Seiler
category: wip
links:
  website: https://github.com/seqan/raptor
  source: https://github.com/seqan/raptor
---

Raptor is a system for approximately searching many queries like NGS reads or transcripts in large collections
of nucleotide sequences. Raptor uses winnowing minimizers to define a set of representative k-mers, an extension of the
Interleaved Bloom Filters (IBF) as a set membership data structure, and probabilistic thresholding for minimizers.
Our approach allows compression and partitioning of the IBF to enable the effective use of secondary memory.

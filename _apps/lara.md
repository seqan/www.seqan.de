---
title: LaRA 2
subtitle: Efficient sequence-structure alignments of ncRNA
layout: app
contact: Jörg Winkler
seqan_version: 2
category: official
links:
  website: https://seqan.github.io/lara
  download: https://github.com/seqan/lara/tarball/master
  source: https://github.com/seqan/lara
---

**General Context**: The function of non-coding RNA sequences is largely determined by their spatial conformation, 
formed by Watson-Crick interactions between nucleotides. In order to discover yet unknown RNA families and infer their 
possible functions, the structural alignment of RNAs is an essential task, which demands a lot of computational 
resources and efficient algorithms. Some secondary structures contain overlapping interactions (called pseudoknots), 
which add additional complexity to the problem and are often ignored in available software.

**Tool Description**: LaRA (**La**grangian **R**elaxed structural **A**lignments) is a tool for computing pairwise 
sequence-structure alignments and can be extended with T-Coffee or MAFFT in order to compute structural alignments 
of more than two structured RNA sequences. It is significantly faster than comparable software for accurate 
structural alignments due to its efficient implementation that uses multi-threading and SIMD vectorization. 
In contrast to other programs our approach handles arbitrary pseudoknots.

LaRA employs methods from combinatorial optimization to compute feasible solutions for an integer linear program. 
The optimization process is iterative and the advantage is that it can terminate as soon as the desired precision 
is reached.

**input**: sequence file with two or more sequences, optional with structure annotation

**output**: pairwise structural alignments in library format for T-Coffee or a fasta-like format for MAFFT

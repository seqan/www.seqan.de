---
title: Needle
subtitle: A fast and space-efficient prefilter for estimating the quantification of very large collections of nucleotide sequences
layout: app
seqan_version: 3
contact: Mitra Darvish
category: wip
links:
  website: https://github.com/MitraDarja/needle
  source: https://github.com/MitraDarja/needle
---


**General Context**: The rapid increase of sequencing data in the last years led to an amount of data that is not
manageable with current algorithms and data structures. For instance, at the moment it is not possible to find all
experiments in the SRA containing certain genes with a specified expression profile. But if the data can not be found
in a meaningful way, the information is lost despite the huge affords made to store these experiments.

**Tool Description**: Needle is a tool for storing sequencing experiments in such a way that approximate quantification
of large sequencing data sets is possible.

Needle is based on the Interleaved Bloom Filter (IBF) and its basic idea is to store multiple IBFs for different
expression levels.


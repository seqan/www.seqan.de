---
title: iGenVar - An SV, Indel, and SNP Caller using short and long reads
layout: app
contact: Lydia Buntrock
category: wip
links:
  website: https://github.com/seqan/iGenVar
  source: https://github.com/seqan/iGenVar
---

**General Context**: With the emergence of third-generation sequencing (e.g. PacBio and Oxford Nanopore), new callers
have been developed that can process long-reads to detect large structural variations. Before long-read sequencing,
these were difficult to detect since they often exceed the length of a short-read and thus rarely are completely covered
by a single short-read. Especially the detection of copy number variations (CNVs) suffers from this circumstance.

**Tool Description**: However, long-read callers are susceptible to the inferior quality of long-read data. Therefore,
iGenVar aims to combine long- and short-reads to guarantee better quality and the ability to call large SVs
(CNVs included), as well as smaller indels, and even SNPs.

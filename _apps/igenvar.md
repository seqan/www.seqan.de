---
title: iGenVar - A SV, Indel and SNP Caller using short and long reads.
layout: app
contact: Lydia Buntrock
category: wip
links:
  website: https://github.com/seqan/iGenVar
  source: https://github.com/seqan/iGenVar
---


**General Context**: With the new 3rd generation of sequencing files (long reads) produced e.g. by PacBio or Oxford Nanopoore, new callers have been developed that can also find large structural variations. Until now, these were difficult to detect if they exceeded the length of a short read and thus no complete coverage by one read existed. Especially the detection of copy number variations (CNVs) suffers from this circumstance.

**Tool Description**: However, long read callers suffer from the poorer quality of long read data. Therefore, the goal of iGenVar is to combine long and short reads to guarantee better quality and to be able to call large SVs (CNVs included) as well as smaller indels and even SNPs.

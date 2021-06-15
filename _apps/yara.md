---
title: Yara
subtitle: Yet another read aligner
layout: app
seqan_version: 2
cite: [fu_mi_publications1161, fu_mi_publications2507]
contact: Enrico Siragusa
category: official
links:
  download: http://packages.seqan.de/yara/
  source: https://github.com/seqan/seqan/tree/master/apps/yara
redirect_from:
  - /projects/yara/
---

Yara is an exact tool for aligning DNA sequencing reads to reference genomes.

**Main features:**

* Exhaustive enumeration of sub-optimal end-to-end alignments under the edit distance.
* Excellent speed, memory footprint and accuracy.
* Accurate mapping quality computation.
* Support for reference genomes consisiting of million of contigs.
* Direct output in SAM/BAM format.

**Supported data:**

Yara has been tested on DNA reads (i.e., Whole Genome, Exome, ChIP-seq, MeDIP-seq) produced by the following sequencing
platforms:

* Illumina GA II, HiSeq and MiSeq (single-end and paired-end).
* Life Technologies Ion Torrent Proton and PGM.

Quality trimming is necessary for Ion Torrent reads and recommended for Illumina reads.

**Unsupported data:**

* RNA-seq reads spanning splicing sites.
* Long noisy reads (e.g., Pacific Biosciences RSII, Oxford Nanopore MinION).

**Previous applications:**

Yara is the follow-up of the Masai project. Use of Masai is discouraged. Nonetheless, old Masai binaries can still be
downloaded [here](http://packages.seqan.de/masai/).
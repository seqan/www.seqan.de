---
layout: page
title: Rabema Command Line Interface
permalink: apps/rabema/rabema-cli/
---

This page contains the documentation of the command line interface. You can generate this yourself by passing 
`--export-help=html` to the Rabema programs.

## `rabema_build_gold_standard`

RABEMA Gold Standard Builder

### Synopsis

**rabema_build_gold_standard**   *[OPTIONS]* **–out-gsi** *OUT.gsi* **–reference** *REF.fa* **–in-sam** *PERFECT.sam*
**rabema_build_gold_standard**   *[OPTIONS]* **–out-gsi** *OUT.gsi* **–reference** *REF.fa* **–in-bam** *PERFECT.bam*

### Description

This program allows to build a RABEMA gold standard. The input is a reference FASTA file and a perfect SAM/BAM map
(e.g. created using RazerS 3 in full-sensitivity mode).
The input SAM/BAM file must be sorted by coordinate. The program will create a FASTA index file *REF.fa.fai* for fast
random access to the reference.

**-h, –help**
Displays this help message.

**–version**
Display version information

**-v, –verbose**
Enable verbose output.

**-vv, –very-verbose**
Enable even more verbose output.

### Input / Output:
**-o, –out-gsi *GSI***
Path to write the resulting GSI file to.

**-r, –reference *FASTA***
Path to load reference FASTA from.

**-s, –in-sam *SAM***
Path to load the “perfect” SAM file from.

**-b, –in-bam *BAM***
Path to load the “perfect” BAM file from.

**-z, –gzip-gsi**
Compress GSI output using gzip.

### Gold Standard Parameters:
**–oracle-mode**
Enable oracle mode. This is used for simulated data when the input SAM/BAM file gives exactly one position that is
considered as the true sample position.

**–match-N**
When set, N matches all characters without penalty.

**–distance-metric *METRIC***
Set distance metric. Valid values: hamming, edit. Default: edit.

**-e, –max-error *RATE***
Maximal error rate to build gold standard for in percent. This parameter is an integer and relative to the read length.
The error rate is ignored in oracle mode, here the distance of the read at the sample position is taken, individually
for each read. Default: 0

### Return Values

A return value of 0 indicates success, any other value indicates an error.

### Examples

**rabema_build_gold_standard   -e 4 -o *OUT.gsi* -s *IN.sam* -r *REF.fa***
Build gold standard from a SAM file IN.sam with all mapping locations and a FASTA reference REF.fa to GSI file OUT.gsi
with a maximal error rate of 4.

**rabema_build_gold_standard   –distance-metric *edit* -e 4 -o *OUT.gsi* -b *IN.bam* -r *REF.fa***
Same as above, but using Hamming instead of edit distance and BAM as the input.

**rabema_build_gold_standard   –oracle-mode -o *OUT.gsi* -s *IN.sam* -r *REF.fa***
Build gold standard from a SAM file IN.sam with the original sample position, e.g. as exported by read simulator Mason.

## `rabema_evaluate`

RABEMA Evaluation

### Synopsis

**rabema_evaluate**   *[OPTIONS]* **–reference** *REF.fa* **–in-gsi** *IN.gsi* –**in-sam** *MAPPING.sam*
**rabema_evaluate**   *[OPTIONS]* **–reference** *REF.fa* **–in-gsi** *IN.gsi* **–in-bam** *MAPPING.bam*

### Description

Compare the SAM/bam output *MAPPING.sam/MAPPING.bam* of any read mapper against the RABEMA gold standard previously
built with rabema_build_gold_standard  . The input is a reference FASTA file, a gold standard interval (GSI) file and
the SAM/BAM input to evaluate.
The input SAM/BAM file must be sorted by queryname. The program will create a FASTA index file *REF.fa.fai* for fast
random access to the reference.

**-h, –help**
Displays this help message.

**–version**
Display version information.

**-v, –verbose**
Enable verbose output.

**-vv, –very-verbose**
Enable even more verbose output.

### Input / Output:

**-r, –reference *FASTA***
Path to load reference FASTA from.

**-g, –in-gsi *GSI***
Path to load gold standard intervals from. If compressed using gzip, the file will be decompressed on the fly.

**-s, –in-sam *SAM***
Path to load the read mapper SAM output from.

**-b, –in-bam *BAM***
Path to load the read mapper BAM output from.

**–out-tsv *TSV***
Path to write the statistics to as TSV.

### Benchmark Parameters:

**–oracle-mode**
Enable oracle mode. This is used for simulated data when the input GSI file gives exactly one position that is
considered as the true sample position. For simulated data.

**–match-N**
When set, N matches all characters without penalty.

**–distance-metric *METRIC***
Set distance metric. Valid values: hamming, edit. Default: edit.

**-e, –max-error *RATE***
Maximal error rate to build gold standard for in percent. This parameter is an integer and relative to the read length.
The error rate is ignored in oracle mode, here the distance of the read at the sample position is taken, individually
for each read. Default: 0

**-c, –benchmark-category *CAT***
Set benchmark category. One of {all, all-best, any-best. Default: all

**–trust-NM**
When set, we trust the alignment and distance from SAM/BAM file and no realignment is performed. Off by default.

**–DONT-PANIC**
Do not stop program execution if an additional hit was found that indicates that the gold standard is incorrect.


### Logging:

**–show-missed-intervals**
Show details for each missed interval from the GSI.

**–show-invalid-hits**
Show details for invalid hits (with too high error rate).

**–show-additional-hits**
Show details for additional hits (low enough error rate but not in gold standard.

**–show-hits**
Show details for hit intervals.

**–show-try-hit**
Show details for each alignment in SAM/BAM input.
The occurence of “invalid” hits in the read mapper’s output is not an error. If there are additional hits, however, this
shows an error in the gold standard.

### Return Values

A return value of 0 indicates success, any other value indicates an error.

### Memory Requirements

From version 1.1, great care has been taken to keep the memory requirements as low as possible.
The evaluation step needs to store the whole reference sequence in memory but little more memory. So, for the human
genome, the memory requirements are below 4 GB, regardless of the size of the GSI or SAM/BAM file.

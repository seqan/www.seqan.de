---
layout: page
title: Rabema Command Line Interface
permalink: apps/rabema/rabema-cli/
---

This page contains the documentation of the command line interface. You can generate this yourself by passing
`--export-help=html` to the Rabema programs.

<h1>rabema_build_gold_standard</h1>
<div>RABEMA Gold Standard Builder</div>
<h2>Synopsis</h2>
<p>
<strong>rabema_build_gold_standard</strong> [<em>OPTIONS</em>] <strong>--out-gsi</strong> <em>OUT.gsi</em> <strong>--reference</strong> <em>REF.fa</em> <strong>--in-bam</strong> <em>PERFECT.{sam,bam}</em>
<br />
</p>
<h2>Description</h2>
<p>
This program allows one to build a RABEMA gold standard.  The input is a reference FASTA file and a perfect SAM/BAM map (e.g. created using RazerS 3 in full-sensitivity mode).
</p>
<p>
The input SAM/BAM file must be <em>sorted by coordinate</em>.  The program will create a FASTA index file <em>REF.fa.fai</em> for fast random access to the reference.
</p>
<h2>Options</h2>
<dl>
<dt><strong>-h</strong>, <strong>--help</strong></dt>
<dd>Display the help message.</dd>
<dt><strong>--version-check</strong> <em>BOOL</em></dt>
<dd>Turn this option off to disable version update notifications of the application.  One of <em>1</em>, <em>ON</em>, <em>TRUE</em>, <em>T</em>, <em>YES</em>, <em>0</em>, <em>OFF</em>, <em>FALSE</em>, <em>F</em>, and <em>NO</em>. Default: <em>1</em>.</dd>
<dt><strong>--version</strong></dt>
<dd>Display version information.</dd>
<dt><strong>-v</strong>, <strong>--verbose</strong></dt>
<dd>Enable verbose output.</dd>
<dt><strong>-vv</strong>, <strong>--very-verbose</strong></dt>
<dd>Enable even more verbose output.</dd>
</dl>
<h3>Input / Output:</h3>
<dl>
<dt><strong>-o</strong>, <strong>--out-gsi</strong> <em>OUTPUT_FILE</em></dt>
<dd>Path to write the resulting GSI file to. Valid filetype is: <em>.gsi[.*]</em>, where * is any of the following extensions: <em>gz</em> for transparent (de)compression.</dd>
<dt><strong>-r</strong>, <strong>--reference</strong> <em>INPUT_FILE</em></dt>
<dd>Path to load reference FASTA from. Valid filetypes are: <em>.sam[.*]</em>, <em>.raw[.*]</em>, <em>.gbk[.*]</em>, <em>.frn[.*]</em>, <em>.fq[.*]</em>, <em>.fna[.*]</em>, <em>.ffn[.*]</em>, <em>.fastq[.*]</em>, <em>.fasta[.*]</em>, <em>.fas[.*]</em>, <em>.faa[.*]</em>, <em>.fa[.*]</em>, <em>.embl[.*]</em>, and <em>.bam</em>, where * is any of the following extensions: <em>gz</em>, <em>bz2</em>, and <em>bgzf</em> for transparent (de)compression.</dd>
<dt><strong>-b</strong>, <strong>--in-bam</strong> <em>INPUT_FILE</em></dt>
<dd>Path to load the "perfect" SAM/BAM file from. Valid filetypes are: <em>.sam[.*]</em> and <em>.bam</em>, where * is any of the following extensions: <em>gz</em>, <em>bz2</em>, and <em>bgzf</em> for transparent (de)compression.</dd>
</dl>
<h3>Gold Standard Parameters:</h3>
<dl>
<dt><strong>--oracle-mode</strong></dt>
<dd>Enable oracle mode.  This is used for simulated data when the input SAM/BAM file gives exactly one position that is considered as the true sample position.</dd>
<dt><strong>--match-N</strong></dt>
<dd>When set, N matches all characters without penalty.</dd>
<dt><strong>--distance-metric</strong> <em>STRING</em></dt>
<dd>Set distance metric.  Valid values: hamming, edit.  Default: edit. One of <em>hamming</em> and <em>edit</em>. Default: <em>edit</em>.</dd>
<dt><strong>-e</strong>, <strong>--max-error</strong> <em>INTEGER</em></dt>
<dd>Maximal error rate to build gold standard for in percent.  This parameter is an integer and relative to the read length.  In case of oracle mode, the error rate for the read at the sampling position is used and <em>RATE</em> is used as a cutoff threshold. Default: <em>0</em>.</dd>
</dl>
<h2>Return Values</h2>
<p>
A return value of 0 indicates success, any other value indicates an error.
</p>
<h2>Examples</h2>
<dl>
<dt><strong>rabema_build_gold_standard</strong> <strong>-e</strong> <em>4</em> <strong>-o</strong> <em>OUT.gsi</em> <strong>-s</strong> <em>IN.sam</em> <strong>-r</strong> <em>REF.fa</em></dt>
<dd>Build gold standard from a SAM file <em>IN.sam</em> with all mapping locations and a FASTA reference <em>REF.fa</em> to GSI file <em>OUT.gsi</em> with a maximal error rate of <em>4</em>.</dd>
<dt><strong>rabema_build_gold_standard</strong> <strong>--distance-metric</strong> <em>edit</em> <strong>-e</strong> <em>4</em> <strong>-o</strong> <em>OUT.gsi</em> <strong>-b</strong> <em>IN.bam</em> <strong>-r</strong> <em>REF.fa</em></dt>
<dd>Same as above, but using Hamming instead of edit distance and BAM as the input.</dd>
<dt><strong>rabema_build_gold_standard</strong> <strong>--oracle-mode</strong> <strong>-o</strong> <em>OUT.gsi</em> <strong>-s</strong> <em>IN.sam</em> <strong>-r</strong> <em>REF.fa</em></dt>
<dd>Build gold standard from a SAM file <em>IN.sam</em> with the original sample position, e.g.  as exported by read simulator Mason.</dd>
</dl>
<h2>Memory Requirements</h2>
<p>
From version 1.1, great care has been taken to keep the memory requirements as low as possible. There memory required is two times the size of the largest chromosome plus some constant memory for each match.
</p>
<p>
For example, the memory usage for 100bp human genome reads at 5% error rate was 1.7GB. Of this, roughly 400GB came from the chromosome and 1.3GB from the matches.
</p>

<h1>rabema_evaluate</h1>
<div>RABEMA Evaluation</div>
<h2>Synopsis</h2>
<p>
<strong>rabema_evaluate</strong> [<em>OPTIONS</em>] <strong>--reference</strong> <em>REF.fa</em> <strong>--in-gsi</strong> <em>IN.gsi</em> <strong>--in-bam</strong> <em>MAPPING.{sam,bam}</em>
<br />
</p>
<h2>Description</h2>
<p>
Compare the SAM/bam output <em>MAPPING.sam</em>/<em>MAPPING.bam</em> of any read mapper against the RABEMA gold standard previously built with <strong>rabema_build_gold_standard</strong>.  The input is a reference FASTA file, a gold standard interval (GSI) file and the SAM/BAM input to evaluate.
</p>
<p>
The input SAM/BAM file must be <em>sorted by queryname</em>.  The program will create a FASTA index file <em>REF.fa.fai</em> for fast random access to the reference.
</p>
<h2>Options</h2>
<dl>
<dt><strong>-h</strong>, <strong>--help</strong></dt>
<dd>Display the help message.</dd>
<dt><strong>--version-check</strong> <em>BOOL</em></dt>
<dd>Turn this option off to disable version update notifications of the application.  One of <em>1</em>, <em>ON</em>, <em>TRUE</em>, <em>T</em>, <em>YES</em>, <em>0</em>, <em>OFF</em>, <em>FALSE</em>, <em>F</em>, and <em>NO</em>. Default: <em>1</em>.</dd>
<dt><strong>--version</strong></dt>
<dd>Display version information.</dd>
<dt><strong>-v</strong>, <strong>--verbose</strong></dt>
<dd>Enable verbose output.</dd>
<dt><strong>-vv</strong>, <strong>--very-verbose</strong></dt>
<dd>Enable even more verbose output.</dd>
</dl>
<h3>Input / Output:</h3>
<dl>
<dt><strong>-r</strong>, <strong>--reference</strong> <em>INPUT_FILE</em></dt>
<dd>Path to load reference FASTA from. Valid filetypes are: <em>.sam[.*]</em>, <em>.raw[.*]</em>, <em>.gbk[.*]</em>, <em>.frn[.*]</em>, <em>.fq[.*]</em>, <em>.fna[.*]</em>, <em>.ffn[.*]</em>, <em>.fastq[.*]</em>, <em>.fasta[.*]</em>, <em>.fas[.*]</em>, <em>.faa[.*]</em>, <em>.fa[.*]</em>, <em>.embl[.*]</em>, and <em>.bam</em>, where * is any of the following extensions: <em>gz</em>, <em>bz2</em>, and <em>bgzf</em> for transparent (de)compression.</dd>
<dt><strong>-g</strong>, <strong>--in-gsi</strong> <em>INPUT_FILE</em></dt>
<dd>Path to load gold standard intervals from. If compressed using gzip, the file will be decompressed on the fly. Valid filetype is: <em>.gsi[.*]</em>, where * is any of the following extensions: <em>gz</em> for transparent (de)compression.</dd>
<dt><strong>-b</strong>, <strong>--in-bam</strong> <em>INPUT_FILE</em></dt>
<dd>Path to load the read mapper SAM or BAM output from. Valid filetypes are: <em>.sam[.*]</em> and <em>.bam</em>, where * is any of the following extensions: <em>gz</em>, <em>bz2</em>, and <em>bgzf</em> for transparent (de)compression.</dd>
<dt><strong>--out-tsv</strong> <em>OUTPUT_FILE</em></dt>
<dd>Path to write the statistics to as TSV. Valid filetype is: <em>.rabema_report_tsv</em>.</dd>
<dt><strong>--dont-check-sorting</strong></dt>
<dd>Do not check sortedness (by name) of input SAM/BAM files.  This is required if the reads are not sorted by name in the original FASTQ files.  Files from the SRA and ENA generally are sorted.</dd>
</dl>
<h3>Benchmark Parameters:</h3>
<dl>
<dt><strong>--oracle-mode</strong></dt>
<dd>Enable oracle mode.  This is used for simulated data when the input GSI file gives exactly one position that is considered as the true sample position.  For simulated data.</dd>
<dt><strong>--only-unique-reads</strong></dt>
<dd>Consider only reads that a single alignment in the mapping result file. Useful for precision computation.</dd>
<dt><strong>--match-N</strong></dt>
<dd>When set, N matches all characters without penalty.</dd>
<dt><strong>--distance-metric</strong> <em>STRING</em></dt>
<dd>Set distance metric.  Valid values: hamming, edit.  Default: edit. One of <em>hamming</em> and <em>edit</em>. Default: <em>edit</em>.</dd>
<dt><strong>-e</strong>, <strong>--max-error</strong> <em>INTEGER</em></dt>
<dd>Maximal error rate to build gold standard for in percent.  This parameter is an integer and relative to the read length.  The error rate is ignored in oracle mode, here the distance of the read at the sample position is taken, individually for each read.  Default: 0 Default: <em>0</em>.</dd>
<dt><strong>-c</strong>, <strong>--benchmark-category</strong> <em>STRING</em></dt>
<dd>Set benchmark category.  One of {all, all-best, any-best.  Default: all One of <em>all</em>, <em>all-best</em>, and <em>any-best</em>. Default: <em>all</em>.</dd>
<dt><strong>--trust-NM</strong></dt>
<dd>When set, we trust the alignment and distance from SAM/BAM file and no realignment is performed.  Off by default.</dd>
<dt><strong>--extra-pos-tag</strong> <em>STRING</em></dt>
<dd>If the CIGAR string is absent, the missing alignment end position can be provided by this BAM tag.</dd>
<dt><strong>--ignore-paired-flags</strong></dt>
<dd>When set, we ignore all SAM/BAM flags related to pairing.  This is necessary when analyzing SAM from SOAP's soap2sam.pl script.</dd>
<dt><strong>--DONT-PANIC</strong></dt>
<dd>Do not stop program execution if an additional hit was found that indicates that the gold standard is incorrect.</dd>
</dl>
<h3>Logging:</h3>
<dl>
<dt><strong>--show-missed-intervals</strong></dt>
<dd>Show details for each missed interval from the GSI.</dd>
<dt><strong>--show-invalid-hits</strong></dt>
<dd>Show details for invalid hits (with too high error rate).</dd>
<dt><strong>--show-additional-hits</strong></dt>
<dd>Show details for additional hits (low enough error rate but not in gold standard.</dd>
<dt><strong>--show-hits</strong></dt>
<dd>Show details for hit intervals.</dd>
<dt><strong>--show-try-hit</strong></dt>
<dd>Show details for each alignment in SAM/BAM input.</dd>
</dl>
<p>

</p>
<p>
The occurrence of "invalid" hits in the read mapper's output is not an error.  If there are additional hits, however, this shows an error in the gold standard.
</p>
<h2>Return Values</h2>
<p>
A return value of 0 indicates success, any other value indicates an error.
</p>
<h2>Memory Requirements</h2>
<p>
From version 1.1, great care has been taken to keep the memory requirements as low as possible.
</p>
<p>
The evaluation step needs to store the whole reference sequence in memory but little more memory.  So, for the human genome, the memory requirements are below 4 GB, regardless of the size of the GSI or SAM/BAM file.
</p>

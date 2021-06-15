---
title: RazerS 3
subtitle: A read mapping program with adjustable sensitivity
layout: app
seqan_version: 2
cite: [fu_mi_publications1159,fu_mi_publications453]
contact: David Weese
category: official
header:
  app_image: /assets/images/apps/razers3.png
links:
  download: http://packages.seqan.de/razers3/
  source: https://github.com/seqan/seqan/tree/master/apps/razers3
redirect_from:
  - /projects/razers/
---

**Motivation:** During the last years NGS sequencing has become a key technology for many applications in the biomedical sciences. Throughput continues to increase and new protocols provide longer reads than currently available. In almost all applications, read mapping is a first step. Hence, it is crucial to have algorithms and implementations that perform fast, with high sensitivity, and are able to deal with long reads and a large absolute number of indels.

**Results:** RazerS is a read mapping program with adjustable sensitivity based on counting q-grams. In this work we propose the successor RazerS 3 which now supports shared-memory parallelism, an additional seed-based filter with adjustable sensitivity, a much faster, banded version of the Myers’ bit-vector algorithm for verification, memory saving measures and support for the SAM output format. This leads to a much improved performance for mapping reads, in particular long reads with many errors. We extensively compare RazerS 3 with other popular read mappers and show that its results are often superior to them in terms of sensitivity while exhibiting practical and often competetive run times. In addition, RazerS 3 works without a precomputed index.

**Main Features:**

* import of FASTA/FASTQ read and genome files
* 5 output formats (including SAM)
* reads can be of arbitrary length
* supports Hamming and edit distance read mapping with configurable error rates
* supports paired-end read mapping
* configurable and predictable sensitivity (runtime/sensitivity tradeoff)
* key improvements (compared to RazerS):
  * multicore parallelization
  * additional pigeonhole filter optimized for low error-rates with controllable sensitivity
  * banded Myers’ algorithm for verification
  * full sensitivity under the definition given in Rabema
  * SAM output
  * Availability and Implementation: Source code and binaries are freely available for download at https://www.seqan.de/projects/razers. RazerS 3 is implemented in C++ and OpenMP under a GPL license using the SeqAn library and supports Linux, Mac OS X, and Windows.
---
title: Vaquita
subtitle: Fast and accurate identification of structural variation using combined evidence
layout: app
seqan_version: 2
cite: fu_mi_publications2133
contact: Jongkyu Kim
category: official
header:
  app_image: /assets/images/apps/vaquita_logo.png
links:
  website: https://github.com/seqan/vaquita
  download: https://github.com/seqan/vaquita
  source: https://github.com/seqan/vaquita
---

**Motivation**: Comprehensive identification of structural variations (SVs) is a crucial task for studying genetic
diversity and diseases. However, it remains challenging. There is only a marginal consensus between different methods,
and our understanding of SVs is substantially limited. In general, integration of multiple pieces of evidence including
split-read, read-pair, soft-clip, and read-depth yields the best result regarding accuracy. However, doing this step by
step is usually cumbersome and computationally expensive.

**Result**: We present Vaquita, an accurate and fast tool for the identification of structural variations, which
leverages all four types of evidence in a single program. After merging SVs from split-reads and discordant read-pairs,
Vaquita realigns the soft-clipped reads to the selected regions using a fast bit-vector algorithm. Furthermore, it
also considers the discrepancy of depth distribution around breakpoints using Kullback-Leibler divergence. Finally,
Vaquita provides an additional metric for candidate selection based on voting, and also provides robust prioritization
based on rank aggregation. We show that Vaquita is robust in terms of sequencing coverage, insertion size of the
library, and read length, and is comparable or even better for the identification of deletions, inversions,
duplications, and translocations than state-of-the-art tools, using both simulated and real datasets. In addition,
Vaquita is more than eight times faster than any other tools in comparison.

**Availability**: Vaquita is implemented in C++ using the SeqAn library. The source code is distributed under the BSD
license.

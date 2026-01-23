---
layout: post
title: "Raptor released"
categories: release
excerpt_separator: <!--more-->
redirect_from:
  - /raptor-released/
---

The SeqAn team just finished working on their new tool **Raptor**, a new approach for distributing approximate searches.
<!--more-->
[Find the preprint at BioRXiv](https://www.biorxiv.org/content/10.1101/2020.10.08.330985v1).
It is another tool in the DREAM framework moving it closer to completion
(see also [DREAM-Yara](https://academic.oup.com/bioinformatics/article/34/17/i766/5093228)).
<!-- Raptor will be properly cited when it is properly published (currently preprint). -->
<!-- Raptor will get an application page which will be referenced here after creation. -->
<!-- DREAM-Yara will get an application page which will be referenced here after creation. -->

In comparison with similar tools like Mantis and COBS, Raptor is 12 – 144 times faster and uses up to 30 times
less memory. Raptor uses winnowing minimizers to define a set of representative k-mers, an extension of the
Interleaved Bloom Filters (IBF) as a set membership data structure, and probabilistic thresholding for minimizers.
Our approach allows compression and a partitioning of the IBF to enable the effective use of secondary memory.
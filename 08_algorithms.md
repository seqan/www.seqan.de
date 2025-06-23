---
layout: page
title: Algorithms
permalink: /algorithms/
---

SeqAn contains many efficient implementations of core bioinformatics algorithms. This starts with the standard dynamic programming based alignment algorithms with all its subtypes.
<div class="figures">
  <figure>
    <img src="{{ 'assets/images/overlay/algorithms_stellar.png' | relative_url }}">
    <figcaption class="fig-caption">A depiction of the extension phase of the Stellar algorithm.</figcaption>
  </figure>
  <figure>
    <img src="{{ 'assets/images/overlay/algorithms_fiona.png' | relative_url }}">
    <figcaption class="fig-caption">A depiction of the error correcting algorithm in the Fiona algorithm.</figcaption>
  </figure>
</div>
Global alignment, local alignment, banded and unbanded, for proteins or DNA,
using seeds or not, needing a traceback or not. Check out nearly 200 combinations of this module
which incidentally will soon be fully multithreaded and SIMD accelerated.

SeqAn contains algorithms for read mapping based on q-gram or string indices, multiple alignment algorithms,
filter algorithms for string search as well es error correction methods.

The algorithms are usually generic in the sense that they can be configured via template arguments
and usually work for many, if not arbitrary  alphabets. SeqAn applications are usually short,
very maintainable combinations of those core algorithmic components.
Being well defined, the SeqAn components are quite amenable to optimisation and acceleration using multicore computing,
vectorisation or accelerators.

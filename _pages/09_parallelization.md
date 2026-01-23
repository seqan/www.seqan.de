---
layout: page
title: Parallelization
permalink: /parallelization/
---
Since the end of 2015, SeqAn is also supported by Intel as part of an Intel Parallel Compute Center.
The goal is to parallelize core components of SeqAn using multiple cores as well as vectorization as much as possible.
<div class="figures">
  <figure>
    <img src="{{ 'assets/images/overlay/parallelization_many_against_many.png' | relative_url }}">
    <figcaption class="fig-caption">Core loop of SeqAn’s new many against many alignment interface using vectorization.
    </figcaption>
  </figure>
  <figure>
    <img src="{{ 'assets/images/overlay/parallelization_speedup.png' | relative_url }}">
    <figcaption class="fig-caption">Speedups achieved by prototype implementation using vectorization.
    </figcaption>
  </figure>
</div>
First results were achieved for pairwise alignments and will be incorporated into the next releases of SeqAn.

So stay tuned for more and more components that use  accelerators and multiple cores.
Your application should benefit with no changes or only slight adaptions from serial to parallel interfaces.

---
title: DFI
subtitle: Sequential pattern mining
layout: app
seqan_version: 2
cite: fu_mi_publications412
contact: David Weese
category: official
links:
  download: http://packages.seqan.de/dfi/
  source: https://github.com/seqan/seqan/tree/master/apps/dfi
redirect_from:
  - /projects/dfi/
---

Sequential pattern mining, also known as frequency based string mining, has been the objective of various algorithmic
approaches over the last years. A recent breakthrough, the linear time algorithm by Fischer, Heun and Kramer (FHK), has
turned out to be theoretically optimal and also quite fast in practice. In 2008 we presented a conceptually much simpler
algorithm based on a deferred data structure that is faster and uses less memory at the same time. In this paper we give
an in-depth presentation of this algorithm and show how to use it on multiple databases with a variety of frequency
constraints. As such, we use the notion of entropy from information theory to devise the Entropy Substring Mining
Problem which is a multiple database generalization of the Emerging Substring Mining Problem. In addition we evaluate
the algorithm rigorously using various string domains, e.g., natural language, DNA, or protein sequences. The
experiments demonstrate the improvement of our algorithm compared to recent approaches.

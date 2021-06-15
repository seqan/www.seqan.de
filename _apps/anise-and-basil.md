---
title: ANISE and BASIL
subtitle: Breakpoint detection for structural variants
layout: app
seqan_version: 2
cite: fu_mi_publications1506
contact: Manuel Holtgrewe
category: official
links:
  website: https://seqan.github.io/anise_basil/
  download: https://github.com/seqan/anise_basil/releases
  source: https://github.com/seqan/anise_basil/
redirect_from:
  - /projects/herbarium/
---

**Motivation**: Large insertions of novel sequence are an important type of structural variants. Previous studies used
traditional de novo assemblers for assembling non-mapping high-throughput sequencing (HTS) or capillary reads and then
tried to anchor them in the reference using paired read information.

**Results**: We present approaches for detecting insertion breakpoints and targeted assembly of large insertions from
HTS paired data: BASIL and ANISE. On near identity repeats that are hard for assemblers, ANISE employs a repeat
resolution step. This results in far better reconstructions than obtained by ABYSS. On simulated data, we found our
insert assembler to be competitive with the de novo assembler ABYSS while yielding already anchored inserted sequence
as opposed to unanchored contigs as from ABYSS. On real-world data, we detected novel sequence in a human individual
and thoroughly validated the assembled sequence.

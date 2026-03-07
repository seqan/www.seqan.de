---
title: DREAM-Stellar
subtitle: A parallelized, updated version of the pairwise local aligner Stellar
layout: app
cite: [fu_mi_publications3311]
seqan_version: 3
contact: Evelin Aasna
category: official
links:
  website: https://github.com/seqan/dream-stellar
  source: https://github.com/seqan/dream-stellar
---

We introduce DREAM-Stellar, a parallelized, updated version of the pairwise local aligner Stellar. The new aligner,
DREAM-Stellar, is composed of four steps: preprocessing the queries and references, building a data structure for
distributing the queries, computing in parallel the results and finally combining them. For distributing the queries
we use the IBF data structure and a new prefilter for local alignments.

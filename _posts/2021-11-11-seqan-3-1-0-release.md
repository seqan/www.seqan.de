---
layout: post
title: "SeqAn 3.1.0 released"
categories: release
excerpt_separator: <!--more-->
---

Dear SeqAn users, supporters, and subscribers,

we are thrilled to announce the SeqAn 3.1.0 release with the **first stable seqan module**: *Alphabets*

<!--more-->

The *Alphabet* module is the foundation of SeqAn, thoroughly used and tested in other modules as well as external projects (e.g. [raptor](https://github.com/seqan/raptor/)). We are confident to release the code with few exceptions as the first stable module of SeqAn3.
Check out notes about our [API stability](https://docs.seqan.de/seqan/3.1.0/about_api.html) or the [API documentation](https://docs.seqan.de/seqan/3.1.0/modules.html) for more details.

In the upcoming future we strive to let the other modules follow suit.

While we will present essential changes of the 3.1.0 in this message, you can also find a comprehensive list of the changes in our [changelog](https://docs.seqan.de/seqan/3.1.0/about_changelog.html).

Get to know SeqAn3 with our [tutorials](https://docs.seqan.de/seqan/3.1.0/usergroup1.html).
* Visit our [API documentation](https://docs.seqan.de/seqan/3.1.0/index.html).
* See the [porting guide](https://docs.seqan.de/seqan/3.1.0/howto_porting.html) for some help on porting from SeqAn2.
* Check out our [SeqAn3 Cookbook](https://docs.seqan.de/seqan/3.1.0/cookbook.html). It contains a listing of code examples on how to perform particular tasks using the library.

### 🔒 API Stability

With few exceptions, the [*Alphabet*](https://docs.seqan.de/seqan/3.1.0/group__alphabet.html) module of SeqAn3 is now stable. Additionally, the following entities are marked stable in this release:

* [`seqan3::kmer_hash`](https://docs.seqan.de/seqan/3.1.0/group__search__views.html#ga6e598d6a021868f704d39df73252974f) - A view to compute all kmers of a sequence
* [`seqan3::minimiser`](https://docs.seqan.de/seqan/3.1.0/group__search__views.html#ga191fcd1360fc430441567f3ed0f371d1) - A view to compute [minimisers](https://docs.seqan.de/seqan/3.1.0/tutorial_minimiser.html) of a sequence

**While 3.0.3 only deprecated entities, the affected items are removed in 3.1.0!**

If you are upgrading from an older version than 3.0.3, we strongly recommend first upgrading to 3.0.3, and afterwards to 3.1.0. The version 3.0.3 contains deprecation notices that will help you to transition with ease.

### Notable API changes

There are no API changes upgrading from 3.0.3. [See the 3.0.3 release message](https://github.com/seqan/seqan3/releases/tag/3.0.3#api-stability) for an overview of previous changes.

### Notable bug fixes
* The [`seqan3::fm_index`](https://docs.seqan.de/seqan/3.1.0/classseqan3_1_1fm__index.html)/[`seqan3::bi_fm_index`](https://docs.seqan.de/seqan/3.1.0/classseqan3_1_1bi__fm__index.html) correctly index large texts like the human genome.

### External dependencies

* SeqAn 3.1.0 is known to compile with GCC 7.5, 8.4, 9.4, 10.3, and 11.2. Future versions might work, but were not yet available at the time of this release.
* Other compilers, e.g. GCC 12 (currently in development), clang, and MSVC, are known to not be compatible with SeqAn 3.1.0.
* We support ranges-v3 versions ≥ 0.11.0 and < 0.12.0, sdsl-lite 3.0.0, and cereal 1.3.0.
* We use doxygen 1.9.2 to build our documentation.

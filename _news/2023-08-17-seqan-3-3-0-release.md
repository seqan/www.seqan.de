---
layout: post
title: "SeqAn 3.3.0 released"
categories: release
excerpt_separator: <!--more-->
---

Dear SeqAn users, supporters, and subscribers,

we are glad to announce the [SeqAn 3.3.0 release](https://github.com/seqan/seqan3/releases/tag/3.3.0) that has a major compiler update:
<p style="text-align: center;">We <b>dropped</b> GCC 10 and we <b>added GCC 13 support</b>.</p>

<!--more-->

While we will present essential changes of the 3.3.0 release in this message, you can also find a comprehensive list of the changes in our [changelog](https://docs.seqan.de/seqan3/3.3.0/about_changelog.html).

* Get to know SeqAn3 with our [tutorials](https://docs.seqan.de/seqan3/3.3.0/usergroup1.html).
* Visit our [API documentation](https://docs.seqan.de/seqan3/3.3.0/index.html).
* Check out our [SeqAn3 Cookbook](https://docs.seqan.de/seqan3/3.3.0/cookbook.html) with all the copy & paste snippets you need.

### :tada: New Features

#### Alignment
  * The function `seqan3::alignment_from_cigar` creates an alignment from a CIGAR vector ([\#3057](https://github.com/seqan/seqan3/pull/3057)) or a CIGAR string ([\#3077](https://github.com/seqan/seqan3/pull/3077)).
  * The function `seqan3::cigar_from_alignment` creates a CIGAR vector from an alignment ([\#3057](https://github.com/seqan/seqan3/pull/3057)).

#### Alphabet
  * Improved performance of vector assignment for alphabets by a factor 2.5 ([\#3038](https://github.com/seqan/seqan3/pull/3038)).
  * Improved performance of `seqan3::dna4::complement()` ([\#3026](https://github.com/seqan/seqan3/pull/3026)).
  * Char literals returning `std::vector` are now `constexpr` if supported by the compiler ([\#3073](https://github.com/seqan/seqan3/pull/3073)).

#### I/O
  * Made `seqan3::sam_file_header::program_info_t` easier to copy ([\#3145](https://github.com/seqan/seqan3/pull/3145)).
  * Reading SAM/BAM files is 2x faster than before ([\#3106](https://github.com/seqan/seqan3/pull/3106)).

#### Search
  * The uncompressed `seqan3::interleaved_bloom_filter` (IBF) can now be constructed from a compressed IBF ([\#3082](https://github.com/seqan/seqan3/pull/3082)).

### :bug: Notable bug fixes

#### Alignment
  * Resolved an issue resulting in a wrong alignment score ([\#3098](https://github.com/seqan/seqan3/pull/3098)).

#### I/O
  * Fixed writing an empty SAM-BAM file resulting in an invalid file ([\#3081](https://github.com/seqan/seqan3/pull/3081)).
  * `seqan3::sequence_file_input_traits` now allows `char` as a sequence alphabet ([\#3128](https://github.com/seqan/seqan3/pull/3128)).

#### Utility
  * Fixed spin delay having no effect on the PowerPC platform ([\#3129](https://github.com/seqan/seqan3/pull/3129)).

### :hammer_and_wrench: Notable API changes

#### Alignment
  * The fields `seqan3::field::offset` and `seqan3::field::alignment` have been removed from `seqan3::sam_record` ([\#3058](https://github.com/seqan/seqan3/pull/3058), [\#3089](https://github.com/seqan/seqan3/pull/3089)).
    For `seqan3::field::offset`, please check the soft clipping of the CIGAR string (`seqan3::sam_record::cigar()`).
    For `seqan3::field::alignment`, please use `seqan3::alignment_from_cigar`.

### :electric_plug: External dependencies
  * Dropped support for GCC 10 ([\#3148](https://github.com/seqan/seqan3/pull/3148)).
  * Added support for GCC 13 ([\#3148](https://github.com/seqan/seqan3/pull/3148)).
  * We require at least CMake 3.16 for our test suite. Note that the minimum requirement for using SeqAn3 is unchanged ([\#3050](https://github.com/seqan/seqan3/pull/3050)).
  * We now use Doxygen version 1.9.6 to build our documentation ([\#3116](https://github.com/seqan/seqan3/pull/3116)).
  * Updated sdsl-lite to 3.0.3 ([\#3170](https://github.com/seqan/seqan3/pull/3170), [\#3174](https://github.com/seqan/seqan3/pull/3174)).
  * Compatibility with SeqAn2: SeqAn2's namespace was changed from `seqan` to `seqan2`. For interoperability, an up-to-date checkout of [SeqAn2's main branch](https://github.com/seqan/seqan) is required ([\#3156](https://github.com/seqan/seqan3/pull/3156)).

---
layout: post
title: "SeqAn 3.0.1 released"
categories: release
excerpt_separator: <!--more-->
redirect_from:
  - /seqan-3-0-1-release/
---

We are excited to present a new update of our SeqAn library. This release has been in the making for roughly half a
year now and we are proud to present some great new features and also a lot of improvements with respect to run time
and usability.<!--more--> You can find a comprehensive list of the changes in our
[changelog](http://docs.seqan.de/seqan/3.0.1/about_changelog.html#autotoc_md198).

* Get to know SeqAn3 with our [tutorials](http://docs.seqan.de/seqan/3-master-user/usergroup1.html).
* Visit our [API documentation](http://docs.seqan.de/seqan/3.0.1/index.html).
* See the [porting guide](http://docs.seqan.de/seqan/3-master-user/howto_porting.html) for some help on porting from
SeqAn2.

Note that 3.1.0 will be the first API stable release and interfaces in this release might still change.

## :tada: Notable new features

* We added support for type erasing
[semialphabets](http://docs.seqan.de/seqan/3.0.1/interfaceseqan3_1_1semialphabet.html) that allows you to manage
semialphabets with the same alphabet size in one container. This can have a big effect on your compile-time, in
case you don’t drink as much ☕️ as we do.
* We added parallel support for the alignment algorithm. You can now configure the number of threads you want to use for
the alignment computation. Click for an example
* One to command them all: Our argument parser now supports **subcommands**, such as `git pull`.
A [How-to](https://docs.seqan.de/seqan/3.0.1/subcommand_arg_parse.html) will guide you through setting this up for your
tool.
* The performance of the **I/O was improved** to allow faster file reading. Further, we added support for reading and
writing the CIGAR string through alignment files.
* We added several new ranges and views. Most notably, the `seqan3::views::kmer_hash` view, which transforms a sequence
into a range of k-mer hashes efficiently. Another view of great practice is the `seqan3::views::to`, which can be used
to convert a view into a container. We also added a `seqan3::dynamic_bitset` which is a dynamic version of the
`std::bitset`.
* Memory consumption of the (bidirectional) FM-Index for text collections was reduced by 10%.

## :trollface: Notable API changes

As much as we’d like to reduce inconsistencies between releases, we are sometimes forced to change an interface either
to improve usability or to follow changes made by the ISO C++ committee.

* All our concepts are named in the snake_case style (e.g. `seqan3::WritableAlphabet` -> `seqan3::writable_alphabet`)!
* The directory `seqan3/range/view` has been renamed to `seqan3/range/views`.
* The namespace `seqan3::view` has been renamed to `seqan3::views`.
* The CMake variable `SEQAN3_VERSION_STRING` defined by `find_package(SEQAN3)` was renamed to `SEQAN3_VERSION`.
* You can find a comprehensive list of the changes in our
[changelog](http://docs.seqan.de/seqan/3.0.1/about_changelog.html#autotoc_md198).

## :bug: Notable bug fixes

* Copying and moving the `seqan3::fm_index` and `seqan3::bi_fm_index` now work properly.
* The translation table for nucleotide to amino acid translation was corrected.
* The amino acid score matrices were corrected.

## :electric_plug: External dependencies 
* We now support ranges-v3 versions >= 0.10.0 and < 0.11.0, increasing the previous requirement of >= 0.5.0 and < 0.6.0.
* We now support cereal version 1.3.0, increasing the previous requirement of 1.2.2

## ✍️ Feedback
We would love to hear what you think about the features. Report a problem or provide suggestions if you have ideas on
things you’d like to see us working on. You can contact us directly [@SeqAnLib](https://twitter.com/SeqAnLib),
[![Gitter](https://badges.gitter.im/seqan/Lobby.svg)](https://gitter.im/seqan/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge),
[github](https://github.com/seqan/seqan3/issues) or write us an email at seqan-dev[at]lists.fu-berlin.de.

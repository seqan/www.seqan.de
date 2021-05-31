---
layout: post
title: "SeqAn 3.0.3 released"
categories: release
excerpt_separator: <!--more-->
redirect_from:
  - /seqan-3-0-3-release/
---

Dear SeqAn users, supporters, and subscribers,

we are proud to announce the last `3.0.x` Release of the SeqAn Library.
The following highlights are present in the current release.

<!--more-->

This is a rather big release for us, encompassing `923` commits and changing `1750` files. This sums up to over 75,000 insertions and more than 50,000 deletions.
Despite this huge diff, we have good reasons to believe that upgrading from 3.0.2 will be extremely smooth and easy.

You can find a comprehensive list of the changes in our [changelog](https://docs.seqan.de/seqan/3.0.3/about_changelog.html).

* Get to know SeqAn3 with our [tutorials](https://docs.seqan.de/seqan/3-master-user/usergroup1.html).
* Visit our [API documentation](https://docs.seqan.de/seqan/3.0.3/index.html).
* See the [porting guide](https://docs.seqan.de/seqan/3-master-user/howto_porting.html) for some help on porting from SeqAn2.
* Check out our updated [SeqAn3 Cookbook](https://docs.seqan.de/seqan/3.0.3/cookbook.html). It contains a listing of code
  examples on how to perform particular tasks using the library.

Note that 3.1.0 will be the first API stable release and interfaces in this release might still change.

### Our final push to 3.1.0

For 3.0.3, we heavily focused on making the final push towards 3.1.0 and took our time to really define the scope of our Sequence Analysis Library.

That means the next Release (3.1.0) will be the first stable one, exciting right? :partying_face:

### :open_book: Module structure

We now utilise the following module structure.

#### Sequence Analysis Modules

* `#include <seqan3/alphabet/*.hpp>`:
  Contains alphabet related entities, like `seqan3::dna4`.
* `#include <seqan3/alignment/*.hpp>`:
  Contains sequence alignment related entities, like `seqan3::align_pairwise`.
* `#include <seqan3/io/*.hpp>`:
  Contains I/O related entities, like `seqan3::sequence_file_input`.
* `#include <seqan3/search/*.hpp>`:
  Contains search related entities, like `seqan3::search`.

We also moved containers and views from the former range module into related Sequence Analysis Module (e.g., `seqan3::bitpacked_sequence` and `seqan3::translate` are now part of the alphabet module).

All Sequence Analysis Modules will have strong [API Stability](https://docs.seqan.de/seqan/3.0.3/about_api.html#api_stability) guarantees. So far we finished declaring the stability in our documentation for alphabets, containers, and ranges. Sequence Alignment and I/O will follow in the next release.

#### General Purpose Modules

* `#include <seqan3/argument_parser/*.hpp>`:
  Our argument parser library that helps to write apps.
* `#include <seqan3/range/*.hpp>` (split since 3.0.3):
  We moved most entities within this module into the other modules: alphabet, alignment, io, search or utility. But, we also deprecated some of them that did not fit our scope anymore.
* `#include <seqan3/core/*.hpp>`:
  Our internal module for entities that are shared across our sequence analysis modules and are needed to implement our own algorithms and data structures.
* `#include <seqan3/utility/*.hpp>`:
  utility contains entities that are completely unrelated to biology-problems. We think of these as something that could be made separate libraries.

All General Purpose Modules will have no [API Stability](https://docs.seqan.de/seqan/3.0.3/about_api.html#api_stability) guarantees.

### :lock: API Stability

We are especially thrilled to announce 3.0.3, because this release should be the first one that _just compiles_<sup>:tm:</sup> your app when upgrading from 3.0.2 to 3.0.3. Arguably, you will encounter scattered "deprecation" notices, but all of those messages should point you to an upgrade path. Unless you treat warnings as errors, your app will still compile even when encountering deprecation notices.

Furthermore, we see this release as a test run of our way to handle API Stability in the upcoming era of stable releases. We are happy to hear your feedback, so please let us know whether it worked for you and if something could be improved. We believe we found a good system for hinting changes between releases to our users.

But how do we know that we did not miss anything? Our idea is simple: compile our current SeqAn version (3.0.3 in this case) against the tests of our previous Release (3.0.2). If everything compiles and the previous tests pass, we most likely did not break our API.

We counted just two real breaking API changes that can be found in our [changelog](https://docs.seqan.de/seqan/3.0.3/about_changelog.html).

### PacBio Phred Score alphabet

A new Phred Quality Score alphabet `seqan3::phred94` that represents the full Phred Score range (Sanger format) and is used for PacBio Phred scores of HiFi reads.

### `seqan3::literals` namespace

`seqan3::literals` namespace allows you to import all available seqan3 literal operator at once to simplify code. Of course you can still import individual literal operators.

```cpp
#include <seqan3/alphabet/nucleotide/dna4.hpp>

int main()
{
    using namespace seqan3::literals; // Still works: using seqan3::operator''_dna4;

    seqan3::dna4 adenine = 'A'_dna4;
}
```

### Member functions in record types

Our Records of I/O files have now member functions. We hope that this makes the documentation more clear () With this all our result ranges

```cpp
#include <seqan3/core/debug_stream.hpp>
#include <seqan3/io/sequence_file/input.hpp>

int main()
{
    seqan3::sequence_file_input fin{"my.fastq"};

    for (auto && record: fin)
    {
        seqan3::debug_stream << "id: " << record.id() << '\n';
        seqan3::debug_stream << "sequence: " << record.sequence() << '\n';
        seqan3::debug_stream << "base_qualities: " << record.base_qualities() << '\n';
    }
}
```

### :trollface: Notable breaking changes (API)

  * Starting with 3.0.3, `seqan3::seqan3_version` is a number and equivalent to the `SEQAN3_VERSION` macro. Consequently, `seqan3::seqan3_version_cstring` is the C-String (`char const *`) which was named `seqan3::seqan3_version` in the previous release (and was a `std::string`).
  * The meanings of `seqan3::alphabet_variant::{is_alternative, holds_alternative}` have been swapped.

### :hammer_and_wrench: Notable API changes

  * Entities have been renamed, a short but incomplete excerpt
    * `seqan3::phred68legacy` to `seqan3::phred68solexa`
    * `seqan3::sam_dna16` to `seqan3::dna16sam`
    * `seqan3::bitcompressed_vector` to `seqan3::bitpacked_sequence`
    * `seqan3::alignment_file_*` to `seqan3::sam_file_*`
    * multiple UPPER_CASE to lower_case names, mostly in enums
  * Accessing an I/O file record by `seqan3::get`, e.g., `seqan3::get<seqan3::field::id>(record)`, has been deprecated in favour of the new member accessors, e.g., `record.id()`.

### :bug: Notable bug fixes
  * A couple of fixes in the argument parser.
  * Fixed a nasty issue when combining `seqan3::views::kmer_hash` and `std::views::reverse`.
  * Fixed an issue with compressing `.gz` files with the BGZF compression algorithm.
  * Various fixes to our SAM/BAM file implementation.

### :electric_plug: External dependencies

* SeqAn 3.0.3 is known to compile with GCC 7.5, 8.4, 9.3, 10.3, and 11.1. Future versions (such as GCC 11.2 and 12) might work, but were not yet available at the time of this release.
* We support ranges-v3 versions ≥ 0.11.0 and < 0.12.0.
* We use doxygen 1.9.1 to build our documentation.

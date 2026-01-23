---
layout: post
title: "SeqAn 3.0.2 released"
categories: release
excerpt_separator: <!--more-->
redirect_from:
  - /seqan-3-0-2-release/
---

Dear SeqAn users, supporters, and subscribers,

today we present a new update of the SeqAn library. Hooray!!!
The following highlights are present in the current release.

<!--more-->

### General C++-20 support

The C++-20 support for concepts and type-traits has been fully integrated into SeqAn.
This means that even in C++-17 mode you can use the concept names and type traits as defined by the C++20-specification
and switch to C++-20 without breaking your code.

### Cookbook

We present the new Cookbook, where you can find useful
code examples for typical tasks with SeqAn, e.g. reading a sequence file, or searching for a pattern in a string.

### Application template
In order to get started with new SeqAn3 applications easily, we introduce the new
Application Template, where you can check out a template application with
build system, tests and all necessary requirements set up.

### User callback in alignment and search
The pairwise alignment can now be configured with a user-defined callback, which is called for every computed alignment
result instead of returning a lazy range over the alignment results:

```c++
#include <mutex>
#include <vector>

#include <seqan3/alignment/configuration/align_config_edit.hpp>
#include <seqan3/alignment/configuration/align_config_method.hpp>
#include <seqan3/alignment/configuration/align_config_on_result.hpp>
#include <seqan3/alignment/configuration/align_config_parallel.hpp>
#include <seqan3/alignment/pairwise/align_pairwise.hpp>
#include <seqan3/alphabet/nucleotide/dna4.hpp>
#include <seqan3/core/debug_stream.hpp>

int main()
{
    // Generate some sequences.
    using seqan3::operator""_dna4;
    using sequence_pair_t = std::pair<seqan3::dna4_vector, seqan3::dna4_vector>;
    std::vector<sequence_pair_t> sequences{100, {"AGTGCTACG"_dna4, "ACGTGCGACTAG"_dna4}};

    std::mutex write_to_debug_stream{}; // Need mutex to synchronise the output.

    // Use edit distance with 4 threads.
    auto const alignment_config = seqan3::align_cfg::method_global{} |
                                  seqan3::align_cfg::edit_scheme |
                                  seqan3::align_cfg::parallel{4} |
                                  seqan3::align_cfg::on_result{[&] (auto && result)
                                  {
                                      std::lock_guard sync{write_to_debug_stream}; // critical section
                                      seqan3::debug_stream << result << '\n';
                                  }};

    // Compute the alignments in parallel, and output them unordered using the callback (order is not deterministic).
    seqan3::align_pairwise(sequences, alignment_config);  // seqan3::align_pairwise is now declared void.
}
```

This feature was also added to the `seqan3::search` algorithm, i.e. both algorithms can be customised using a user
callback.

### Lazy search result range

The return type of the search algorithm was adapted to use a lazy result range over the found hits during the
search. This allows you to use the same code to step through the hits independently of having an index over a single
text or a text collection:

```c++
#include <vector>

#include <seqan3/alphabet/nucleotide/dna4.hpp>
#include <seqan3/core/debug_stream.hpp>
#include <seqan3/search/configuration/max_error.hpp>
#include <seqan3/search/configuration/hit.hpp>
#include <seqan3/search/search.hpp>
#include <seqan3/search/fm_index/fm_index.hpp>

int main()
{
    using seqan3::operator""_dna4;

    std::vector<seqan3::dna4_vector> text{"CGCTGTCTGAAGGATGAGTGTCAGCCAGTGTA"_dna4,
                                          "ACCCGATGAGCTACCCAGTAGTCGAACTG"_dna4,
                                          "GGCCAGACAACCCGGCGCTAATGCACTCA"_dna4};
    seqan3::dna4_vector query{"GCT"_dna4};

    seqan3::configuration const search_config = seqan3::search_cfg::max_error_total{
                                                                        seqan3::search_cfg::error_count{1}} |
                                                                        seqan3::search_cfg::hit_all_best{};

    // Always provide a unified interface over the found hits independent of the index its text layout.
    seqan3::debug_stream << "Search in text collection:\n";
    seqan3::fm_index index_collection{text};
    for (auto && hit : search(query, index_collection, search_config)) // Over a text collection.
        seqan3::debug_stream << hit << '\n';

    seqan3::debug_stream << "\nSearch in single text:\n";
    seqan3::fm_index index_single{text[0]};
    for (auto && hit : search(query, index_single, search_config)) // Over a single text.
        seqan3::debug_stream << hit << '\n';
}
```

### Dynamic hit configuration
The hit configuration can now be set dynamically:

```c++
#include <vector>

#include <seqan3/alphabet/nucleotide/dna4.hpp>
#include <seqan3/core/debug_stream.hpp>
#include <seqan3/search/configuration/max_error.hpp>
#include <seqan3/search/configuration/hit.hpp>
#include <seqan3/search/fm_index/fm_index.hpp>
#include <seqan3/search/search.hpp>

int main()
{
    using seqan3::operator""_dna4;

    std::vector<seqan3::dna4_vector> text{"CGCTGTCTGAAGGATGAGTGTCAGCCAGTGTA"_dna4,
                                          "ACCCGATGAGCTACCCAGTAGTCGAACTG"_dna4,
                                          "GGCCAGACAACCCGGCGCTAATGCACTCA"_dna4};
    seqan3::dna4_vector query{"GCT"_dna4};
    seqan3::fm_index index{text};

    // Use the dynamic hit configuration to set hit_all_best mode.
    seqan3::configuration search_config = seqan3::search_cfg::max_error_total{seqan3::search_cfg::error_count{1}} |
                                          seqan3::search_cfg::hit{seqan3::search_cfg::hit_all_best{}};

    seqan3::debug_stream << "All single best hits:\n";
    for (auto && hit : search(query, index, search_config)) // Find all best hits:
        seqan3::debug_stream << hit << '\n';

    // Change the hit configuration to the strata mode with a stratum of 1.
    using seqan3::get;
    get<seqan3::search_cfg::hit>(search_config).hit_variant = seqan3::search_cfg::hit_strata{1};

    seqan3::debug_stream << "\nAll x+1 hits:\n";
    for (auto && hit : search(query, index, search_config)) // Find all strata hits.
        seqan3::debug_stream << hit << '\n';
}
```

### Other important changes and additions

We put much effort into harmonising the algorithm configuration interface for the pairwise alignment and
search algorithm. This involves some structural changes, which break the current code, but make the interfaces much more
stable and easier to use.

SeqAn now offers a data structure called interleaved Bloom filter, which can answer set-membership queries efficiently.
The argument parser supports now advanced options, which are solely displayed on an extended help page of an
application.
A special minimiser-hash view was added to transform a sequence into a minimiser sequence of the hashes.

For more details and changes please review our
[changelog document](https://docs.seqan.de/seqan/3.0.2/about_changelog.html).
Thank you very much for subscribing and enjoy the new version SeqAn 3.0.2!

Your SeqAn Team

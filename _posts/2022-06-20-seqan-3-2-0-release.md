---
layout: post
title: "SeqAn 3.2.0 released"
categories: release
excerpt_separator: <!--more-->
---

Dear SeqAn users, supporters, and subscribers,

we are excited to announce the SeqAn 3.2.0 release that has a major compiler update:
<p style="text-align: center;">We <b>dropped</b> GCC 7, GCC 8, and GCC 9 and we <b>added GCC 12 support</b>.</p>

<!--more-->

As a consequence, we also dropped C\+\+17 support and are fully C\+\+20 compatible.

Furthermore, we could **drop the range-v3 dependency** completely, so be sure to delete the submodule after updating to SeqAn 3.2.0!

While we will present essential changes of the 3.2.0 release in this message, you can also find a comprehensive list of the changes in our [changelog](https://docs.seqan.de/seqan/3.2.0/about_changelog.html).

Get to know SeqAn3 with our [tutorials](https://docs.seqan.de/seqan/3.2.0/usergroup1.html).
* Visit our [API documentation](https://docs.seqan.de/seqan/3.2.0/index.html).
* See the [porting guide](https://docs.seqan.de/seqan/3.2.0/howto_porting.html) for some help on porting from SeqAn2.
* Check out our [SeqAn3 Cookbook](https://docs.seqan.de/seqan/3.2.0/cookbook.html). It contains a listing of code examples on how to perform particular tasks using the library.

### :tada: New Features

We added GCC 12 support!

#### Alphabet
  * `seqan3::cigar` can now be assigned from `std::string_view` which is much faster (no allocations) than the former assignment from `seqan3::small_string`.
  * The new view `seqan3::views::char_strictly_to` behaves like `seqan3::views::char_to`, but throws on invalid input.

#### I/O
 * The new option `seqan3::sequence_file_option::fasta_ignore_blanks_before_id` lets you keep blanks before IDs when reading FASTA files.
   This ensures a "perfekt roundtrip" when reading and writing FASTA files.
   E.g., fasta_ignore_blanks_before_id = true (default): <code>>&nbsp;&nbsp;&nbsp;&nbsp;some_id</code> will only store `"some_id"` as ID.
   E.g., fasta_ignore_blanks_before_id = false: <code>>&nbsp;&nbsp;&nbsp;&nbsp;some_id</code> will store <code>"&nbsp;&nbsp;&nbsp;&nbsp;some_id"</code> as ID.

#### Search
  * Improved performance of `seqan3::counting_vector::operator+=` by 25%.

#### Utility
  * Added `seqan3::list_traits::repeat`.

### :hammer_and_wrench: Notable API changes

#### seqan3::views::to is no view anymore but C++23 conform
We replaced `seqan3::views::to` (implemented via range-v3) with `seqan3::ranges::to` (implemented in SeqAn3). `seqan3::ranges::to` provides a subset of C++23's `std::ranges::to` and will be replaced with the STL-equivalent in a future version.
Since it is not a view anymore, it cannot be properly deprecated. Please keep this in mind if you encounter errors with `seqan3::views::to`.

Example:
```cpp
auto vec = std::views::iota(0, 10) | seqan3::views::to<std::vector>; // Before
auto vec = std::views::iota(0, 10) | seqan3::ranges::to<std::vector>(); // After
```

#### Removed several headers in seqan3/std/
All headers in `seqan3/std/` except `charconv` and `new` have been deprecated, since their STL-equivalents are available in GCC >= 10. Please use the equivalent `std` includes.

Example:
```cpp
// Before
#include <seqan3/std/bit>
#include <seqan3/std/charconv>
// After
#include <bit>
#include <seqan3/std/charconv>
```

#### Removed namespace std::cpp20
The namespace `std::cpp20` has been deprecated, since, e.g., the implementation of the `std::back_inserter` among others are now C++20-conform with GCC >= 10. Please use the `std::` namespace.

Example:
```cpp
std::ranges::copy(range, std::cpp20::back_inserter(other_range)); // Before
std::ranges::copy(range, std::back_inserter(other_range)); // After
```

### :bug: Notable bug fixes

#### Core
  * Added missing implementations for AVX512 .

#### IO
  * FASTA files containing IDs starting with `>`, e.g., `> >MyID`, are now parsed correctly.

#### Search
  * Relaxed `kmer_hash_view::iterator` difference requirement .
  * Relaxed `seqan3::views::minimiser` requirements to be C++20-compatible.
  * Relaxed `seqan3::views::kmer_hash` requirements to be C++20-compatible.

#### Utility
* `seqan3::views::single_pass_input` cannot propagate the `std::ranges::output_range` property because it cannot satisfy the following requirement:
    ```cpp
    *it++ = value;
    // must be the same as
    *it = value; ++it;
    // but it actually would be the same as
    ++it; *it = value;
    ```
* Fixed signature of `seqan3::detail::store_sse4`. This might have affected some public API.
* Relaxed `seqan3::views::to_simd` requirements to be C++20-compatible.

### :electric_plug: External dependencies

* GCC 7, 8, and 9 have been removed.
* SeqAn 3.2.0 is known to compile with GCC 10.3, 11.3, and 12.1. Future versions might work, but were not yet available at the time of this release.
* Other compilers, e.g., clang, and MSVC, are known to not be compatible with SeqAn 3.2.0.
* We removed range-v3, and now require cereal 1.3.2 as well as sdsl-lite 3.0.1.
* We use doxygen 1.9.4 to build our documentation.

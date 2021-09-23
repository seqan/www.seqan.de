---
layout: post
title: "Announcing SeqAn3"
categories: release
excerpt_separator: <!--more-->
redirect_from:
  - /seqan-3-0-0-release/
  - /announcing-seqan3/
---

We are excited to announce version 3 of the SeqAn library. It has been many years in the making and is the largest
change in the development history of SeqAn.<!--more--> SeqAn3 is in fact an entirely new library!

* [**Get it while it’s hot**](https://github.com/seqan/seqan3)
* [**Read our new documentation**](http://docs.seqan.de/seqan/3-master-user/)

## WHAT’S NEW?

The design goals of SeqAn3 remain the same as for SeqAn1 and SeqAn2: be a
**fast, efficient, extensible C++ header library** for sequence analysis. But the core design patterns for achieving
these goals have changed significantly. SeqAn3 embraces “Modern C++” fully, i.e. the entire library is designed to make
use of recent developments in the C++ language and standard library. In some cases we have decided to rely on third
party libraries so that we don’t have to reinvent the wheel where existing solutions are already well-proven. This
allows us to replace many of the more technical (and partly obscure) implementation details with existing code and
focus our work on the actual algorithms and data structures that we need to solve biological problems.

As part of this strategy shift we are announcing a **cooperation with the Succinct Data Structure Library**
([SDSL](https://github.com/simongog/sdsl-lite)), of which version 3 is a hard requirement for using SeqAn3.
The SDSL provides highly optimised data structures, including (compressed) bitvectors and FM indexes. To ease
integration and redistribution together with SeqAn3, the SDSL has changed their license from the LGPL to MIT and is
now also a header-only library. SeqAn project members are now main contributors to the SDSL. More on the changes in
the SDSL will be announced through their respective channels soon.

Regarding **Modern C++**: SeqAn3 is built on the C++17 standard and parts of the upcoming C++20 standard, including C++
Concepts and C++ Ranges. SeqAn3 is modeled strongly after the standard library, adopting many of its design patterns
and code style. It is inspired by many state-of-the-art libraries like range-v3 and abseil; and it follows many C++
paradigms and best-practices developed in recent years. This results in a much **cleaner, smaller and safer code base**,
that is easier to develop, read and maintain. We have put extra effort in providing extensive documentation, in fact
there are more lines of documentation than lines of code.

**C++ Concepts** allow us to move away from “template subclassing” (the mechanism used for polymorphism in SeqAn2) and
enables us to use data types from outside our library as first class citizens. As a developer using SeqAn this means you
finally get readable error messages when misusing an interface and you can safely
**use the STL’s containers or your own datatypes** without any wrappers or glue involved (as long as these types model
the respective concepts).

**C++ Ranges** on the other hand generalise the notion of iterable objects (like containers) to types that perform
certain algorithms when being iterated over. Since we deal with biological sequences in almost all contexts, this has a
huge impact on data handling. In SeqAn3 you can create views on sequences that revert, complement, truncate or trim the
underlying sequence without copying any data. You can even create the six-frame protein translation of a nucleotide
sequence as a view that appears just like if you had generated all frames while in fact symbols are always generated
on-demand and never use up memory.
Files are also ranges in SeqAn3 and even algorithms, like the pairwise sequence alignment, return a dynamic range of
the results that are generated while you iterate over them.

## SOME EXAMPLES

**Complement and translate a sequence without copying any data:**
```c++
seqan3::dna5_vector sequence{"ACGTACGTACGTA"_dna5};
// pipe the vector through two view adaptors:
auto aminoacid_sequence = sequence | seqan3::view::complement | seqan3::view::translate_single;
// v is a view of length 4, accessing the elements on-demand will return
[C,M,H,A]
```
**Read a FastA file and print the entries:**
```c++
sequence_file_input fin{"my.fasta"};
// iterate over every record in the file and split it into fields:
for (auto & [ seq, id, qual ] : fin)
{
    // print the fields:
    debug_stream << "ID:  " << id << '\n';
    debug_stream << "SEQ: " << seq << '\n';
    debug_stream << "QUAL:" << qual << '\n'; // qual is empty for FastA files
}
```
**File format conversion in one line:**
```c++
sequence_file_input{"input.fastq"} | sequence_file_output{"output.fasta"};
// no variables are created here, all input is immediately streamed to the output
// the format is converted on-the-fly
```
## (BEFORE YOU) GET STARTED

We believe SeqAn3 will lower the bar for writing bioinformatics applications in C++ significantly, and that the overall
experience will be much improved for all developers and users of the library. However we want to point out early on
that:

* It will require substantial work to port applications from SeqAn2 to SeqAn3, because SeqAn3 is an entirely new
library.
* The initial release does not contain all the features of SeqAn2; many will be added in the next months, but likely
not all.
* Due to relying on very Modern C++, we currently only support the GCC compiler in version 7 or newer. Experimental
Clang support is being worked on; but it will likely be another year or two before Visual Studio can build apps made
with SeqAn3.
* The first API stable release will be SeqAn-3.1.0, i.e. interfaces in the 3.0 release might change slightly (although
we try to avoid it).

[**Follow the development (and star us!) on GitHub**](https://github.com/seqan/seqan3)

[**Do the beginner tutorial**](http://docs.seqan.de/seqan/3-master-user/usergroup1.html)

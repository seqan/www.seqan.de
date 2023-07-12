---
layout: page
title: SeqAn@FPGA
subtitle: Enabling power saving and ultrafast approximate sequence search
permalink: /seqan@fpga/
header:
  overlay_image: /assets/images/overlay/getting_started.jpg
categories: [official, wip]
---

# Description
-------------

## Motivation

High-performance computing (HPC) is one of the fundamental research methods in many scientific disciplines, for example
in climate modeling, astrophysics and biology. All data centers in Germany consume about 3% of the national electricity.
Even small energy savings in data centers lead to relevant CO2 savings. The aim of the "GreenHPC" funding guideline is
to strengthen innovation in Germany by improving energy efficiency in high-performance computing in research and also
in commercial computing centers.

## Goals and Procedure

The project deals with the implementation of central data structures for bioinformatics sequence analysis, namely the
Hierarchical Interleaved Bloom Filter (HIBF) and the FM-index on an FPGA.
These will then be integrated into the SeqAn C++ library for sequence analysis.
The HIBF has the potential to be used as an in-memory pre-filter for approximate string search, applicable to many
different biomedical problems.
The FM-index, in comparison, is the default data structure on which virtually all read mappers for NGS data are
based.

For both data structures, CPU implementations exist in the SeqAn library that use multi-threading and vectorization.
For this reason, they are efficient, but at the same time have a high power consumption.
SeqAn@FPGA aims to design and implement an FPGA-based solution for the data structures, which have a similar performance
as the CPU-based solutions, but consume significantly less energy.
These solutions will be integrated into the SeqAn library in such a way that application programmers can easily design
programs that can incorporate the FPGA variants, depending on whether the appropriate hardware is available.
This integration shall also easily enable further FPGA-based implementations.

Finally, we will use these implementations to implement, as an example of a typical application, a distributed read
mapper that uses both FPGA-based implementations and compare its performance and power consumption with the
corresponding CPU-based solution.

<img src="/assets/images/overlay/SeqAn@FPGA.svg" style="display: flex; margin-left: auto; margin-right: auto; width: 50%">

## See also

[Gauß-Allianz Project Page](https://gauss-allianz.de/en/project/title/SeqAn@FPGA)

# Meetings
----------

## Kick-off Meeting
  * Date: 27-10-2022
  * Participants:
    * Jochen Kerbusch (Scientific Advisor, BMBF)
    * Knut Reinert (PI, FUB)
    * Thomas Steinke (PI, ZIB)
    * Marius Knaust (Researcher, ZIB)
    * Enrico Seiler (Researcher, FUB)

# Publications
--------------

<img src="/assets/images/icons/BMBF.svg" style="display: flex; margin-left: auto; margin-right: auto; width: 20%;">

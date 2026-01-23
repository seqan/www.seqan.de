---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: page
title: "What is SeqAn?"
header:
  overlay_image: /assets/images/overlay/front_page.jpg
headings:
  - url: "./data-structures"
    title: Data Structures
    image: /assets/images/icons/data-structures.svg
    excerpt: >
      SeqAn offers many data structures for sequence analysis. For example a unified interface for searching in string
      indices or succinct data structures for pangenomics.
  - url: "./algorithms"
    title: Algorithms
    image: /assets/images/icons/algorithms.svg
    excerpt: >
      SeqAn offer many core algorithms for sequence analysis. For example, pairwise and multiple alignments, approximate
      string searches and filter algorithms.
  - url: "./parallelization"
    title: Parallelization
    image: /assets/images/icons/parallelization.svg
    excerpt: >
      SeqAn support modern Hardware. SIMD vectorization and multicore processing are being incorporated in core
      algorithmic components.
  - url: "./input-and-output"
    title: Input and Output
    image: /assets/images/icons/input-output.svg
    excerpt: >
      In times of large sequencing data fast I/O is crucial. Learn about SeqAn I/O modules and supported data formats.
  - url: "./apps"
    title: Apps
    image: /assets/images/icons/applications.svg
    excerpt: >
      Many efficient applications by different scientific groups and companies are based on SeqAn. Official applications
      by SeqAn project members are presented here and also some third party apps.
  - url: "./workflows"
    title: Workflows
    image: /assets/images/icons/workflows.svg
    excerpt: >
      Often several applications are connected in involved scientific workflows. SeqAn supports easy integration of its
      applications into workflows.
---

SeqAn is an open source C++ library of efficient algorithms and data structures for the analysis of sequences with the
focus on biological data. Our library applies a unique generic design that guarantees high performance, generality,
extensibility, and integration with other libraries. SeqAn is easy to use and simplifies the development of new software
tools with a minimal loss of performance.

{% include headings.html %}

## Center for Integrative Bioinformatics

SeqAn is partner of the Center for Integrative Bioinformatics (CIBI) in the de.NBI network and offers services for
analysing sequencing data. Our services include the development and maintenance of the SeqAn library, its associated
applications and the build and test infrastructure of them, as well as, training and education by organising regular
developer and user meetings and providing online training materials.

Learn more about the [CIBI](https://www.denbi.de/network/center-for-integrative-bioinformatics-cibi) center and its
[portfolio](https://www.denbi.de/network/center-for-integrative-bioinformatics-cibi/21-about/508-portfolio-of-center-for-integrative-bioinformatics-cibi)
to find the best solution for your data and your type of project.

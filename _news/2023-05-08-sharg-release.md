---
layout: post
title: "Sharg 1.1.0 released"
categories: release
excerpt_separator: <!--more-->
---

Dear SeqAn users, supporters, and subscribers,

We have just released a new Version of our C++ command line parsing lib: Sharg 1.1.0
Check it out on GitHub: https://github.com/seqan/sharg-parser

It includes a few major bug fixes and Gitpod and CWL support! Best update your apps now.

<!--more-->

## Features

* We support Gitpod. [Click here](https://gitpod.io/#https://github.com/seqan/sharg-parser/)
  to try it out.
* **CWL support** (Common Workflow Language): An app using Sharg can now automatically export a CWL tool
  description file via `--export-help cwl` [#94](https://github.com/seqan/sharg-parser/pull/94).

## Bug fixes

* When using subcommand parsers, e.g., `git push`, typing `git puhs -h` will raise an exception that the user misspelled
  the subcommand instead of printing the help page of `git` ([\#172](https://github.com/seqan/sharg-parser/pull/172)).
* Fixed an issue that caused the validation of a directory via the `sharg::output_file_validator` to delete the
  directory's contents ([\#175](https://github.com/seqan/sharg-parser/pull/175)).
* Segmentation fault when using `sharg::value_list_validator` in conjunction with a `std::filesystem::path` option
  ([\#179](https://github.com/seqan/sharg-parser/pull/179)).

## Dependency updates
  * We now use Doxygen version 1.9.5 to build our documentation ([\#145](https://github.com/seqan/sharg-parser/pull/145)).
  * We require at least CMake 3.16 for our test suite. Note that the minimum requirement for using Sharg is unchanged
    ([\#135](https://github.com/seqan/sharg-parser/pull/135)).


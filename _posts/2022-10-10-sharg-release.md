---
layout: post
title: "Sharg 1.0.0 released"
categories: release
excerpt_separator: <!--more-->
---

Dear SeqAn users, supporters, and subscribers,

We are thrilled to announce the first **Sharg parser release: 1.0.0** with most of the API being **stable**.

We have outsourced the SeqAn3 Argument Parser to its own light-weight, dependency-free repository: 
The [**Sharg parser**](https://github.com/seqan/sharg-parser). 

<!--more-->

Most of the **API stayed similar**. We added a **new, flexible config design** for adding options and flags, improving readability 
and maintainability. Not unexpectedly, we have some **changes in namespace and naming**: 

The former <code>seqan3::argument_parser</code> is now the <code>sharg::parser</code>

If you have any trouble porting your code from SeqAn3 to the Sharg parser, please don't hesitate to **reach out** to us on [GitHub](https://github.com/seqan/sharg-parser/discussions) or [![Gitter](https://badges.gitter.im/seqan/Lobby.svg)](https://gitter.im/seqan/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)!

* Get to know the Sharg parser with our [tutorials](https://docs.seqan.de/sharg/1.0.0/usergroup1.html).
* Visit our [API documentation](https://docs.seqan.de/sharg/1.0.0/group__parser.html).
* Check out our [Sharg Cookbook](https://docs.seqan.de/sharg/1.0.0/cookbook.html). It contains a listing of code examples on how to perform particular tasks using the library.

While we will present essential changes compared to the `seqan3::argument_parser` in this message, you can also find a comprehensive list of the changes in our [changelog](https://docs.seqan.de/sharg/1.0.0/about_changelog.html).

<p style="text-align: center; font-size: 25px;">🎈🎈🎈</p>

### :tada: New Features

#### The new [`sharg::config`](https://docs.seqan.de/sharg/1.0.0/structsharg_1_1config.html) design

An option flag or positional option is added with only two parameters:
1. A value that stores the command line parameter (nothing changed here)
2. A [`sharg::config`](https://docs.seqan.de/sharg/1.0.0/structsharg_1_1config.html) object (NEW)

Before:
```cpp
parser.add_option(val, 'i', "int", "some int");
```
Now:
```cpp
parser.add_option(val, sharg::config{.short_id = 'i', 
                                     .long_id = "int", 
                                     .description = "some int"});
```

Although it is a little longer, it is easier to understand, more flexible and future-proof.

We take advantage of [*Designated initializers*](https://en.cppreference.com/w/cpp/language/aggregate_initialization#Designated_initializers). E.g., you can leave out parameters you don't need, but beware that the order must be as specified in [`sharg::config`](https://docs.seqan.de/sharg/1.0.0/structsharg_1_1config.html).

You can now set an option as required without the need of the `sharg::option_spec`
```cpp
parser.add_option(val, sharg::config{.short_id = 'i', .required = true});
```

#### Alter the default message
You can now [alter the default message]((https://docs.seqan.de/sharg/1.0.0/structsharg_1_1config.html#aec21e88c7a32f4c0cfab9970de89df71)) printed on the help page. E.g.
```cpp
int i{};
parser.add_option(val, sharg::config{.short_id = 'i', .default_message = "Calculated from your data"});
```
Instead of `Default: 0.`, it prints
```
    -i (signed 32 bit integer)
    Default: Calculated from your data.
```

### :hammer_and_wrench: Notable API changes

#### Name changes

If you are switching from the `seqan3::argument_parser` to the `sharg::parser`, there are several name changes. All of them can be fixed with a simple search & replace:
* The namespace of all entities is now `sharg` instead of `seqan3`
* Every occurrence of `argument_parser` has been replaced with `parser`
* The concept `seqan::parser_compatible_option` has been renamed to `sharg::parsable`

#### The new [`sharg::config`](https://docs.seqan.de/sharg/1.0.0/structsharg_1_1config.html) design

The new config design is also an API break because we do not support the former calls from the `seqan3::argument_parser`.

We removed the `sharg::option_spec` as it is obsolete in the new API.

#### Validators

To avoid being dependent on the SeqAn3 I/O module, you now have to give a list of file extensions explicitly to `sharg::input_file_validator` and `sharg::output_file_validator`:
{% raw %}
```cpp
sharg::input_file_validator validator{std::vector<std::string>{{"exe"}, {"fasta"}}};
```
{% endraw %}
Please follow [the SeqAn3 issue](https://github.com/seqan/seqan3/issues/2927) to see how the file extensions can be extracted from SeqAn3 files.

### :electric_plug: Tooling

* Sharg 1.0.0 is known to compile with GCC 10.4, 11.3, and 12.2. Future versions might work, but were not yet available at the time of this release.
* Other compilers, e.g., clang, and MSVC, have not been tested yet with Sharg 1.0.0. 
* We use doxygen 1.9.4 to build our documentation.

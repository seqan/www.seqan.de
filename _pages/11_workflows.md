---
layout: page
title: Workflows
permalink: /workflows/
---
SeqAn is part of the CIBI, the Center for Integrative BIoinformatics, which is itself a center
in the Gemran network for Bioinformatics infrastructure. In the CIBI SeqAn, OpenMS and KNIME are supported.

<figure>
    <img src="{{ 'assets/images/overlay/applications.png' | relative_url }}">
    <figcaption class="fig-caption">Example workflow using the applications Yara and SLIMM</figcaption>
</figure>

As such SeqAn support easy integration of all its applications into workflow and data analysis engines, such as KNIME.
If you use the SeqAn command line parser, your application can write a desription of itself
(command line parameters, usage help, etc.) into an well defined XML format,
and we use this to automatically convert an SeqAn application into a KNIME workflow node.

Pretty convenient, isn’t it?

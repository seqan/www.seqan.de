---
layout: page
title: Applications
permalink: /apps/
header:
  overlay_image: /assets/images/overlay/applications.png
categories: [official, wip, third_party]
redirect_from: 
  - /applications/
  - /projects/
---

SeqAn is the foundation of many modern bioinformatics applications. Some of them are developed by the SeqAn team, mostly
at Freie Universität Berlin. These are listed as Official Applications on the bottom. The downloads for most official
apps, including some older (not listed) ones, can be found at the central [SeqAn package
repository](http://packages.seqan.de/).

Through our developer channels we know that many scientific groups and companies are using SeqAn for developing public
and internal tools, among them Steven Salzberg's team, PacBio, the Max-Planck-Institute for molecular Genetics and the
Charite university hospital. A selection of these applications is listed as “Third-Party Applications” below.

The permissive open source BSD-license of the library enables you to integrate SeqAn into your applications with proper
attribution being the only legal requirement. But, please also cite our most recent SeqAn publication when you use SeqAn
in your academic work.
<ul>
<li>{% include cite.html cite="fu_mi_publications2103" %}</li>
</ul>


{% for category in page.categories %}
{%- if category == "official" -%}
### Official
{% elsif category == "wip" %}
### Coming Soon
{% elsif category == "third_party" %}
### Third-party
{%- endif -%}
{% for app in site.apps %}
{%- if app.category == category %}
{%- if app.subtitle %}
* [**{{ app.title }}** - {{app.subtitle}} ]({{ app.url | relative_url }})
{%- else %}
* [**{{ app.title }}** ]({{ app.url | relative_url }})
{%- endif %}
{%- if app.seqan_version %}
<sup><span class="seqan-version-badge-{{app.seqan_version}}">SeqAn{{app.seqan_version}}</span></sup>
{%- endif %}
{%- endif %}
{% endfor %}
{% endfor %}

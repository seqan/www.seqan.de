---
layout: page
title: Publications
permalink: /publications/
header:
  overlay_image: /assets/images/overlay/publications.png
redirect_from:
  - /publications/2017/
  - /publications/2018/
  - /publications/2016/
  - /publications/2015/
  - /publications/2014/
  - /publications/2013/
  - /publications/2012/
  - /publications/2011/
  - /publications/2010/
  - /publications/2009/
  - /publications/2008/
---

On the bottom you have access to the archive of SeqAn-related publications. Please see [Google
Scholar](https://scholar.google.de/citations?user=JWLBQHwAAAAJ) for a complete list of applications that cite
SeqAn.

If you use SeqAn in any of your academic works, please cite the latest SeqAn paper:

<ul>
<li>{% include cite.html cite="fu_mi_publications2103" %}</li>
</ul>

## Publications by year

{%- assign publications_by_year = site.data.publications | group_by_exp: "item", "item.date | truncate: 4, ''" | sort: "name" | reverse -%}

{% for year in publications_by_year %}

### {{ year.name }}

<ul>
{% for publication in year.items %}
<li>{% include cite.html cite = publication.key %}</li>
{% endfor %}
</ul>

{% endfor %}

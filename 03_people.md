---
layout: page
title: People
permalink: /people/
categories: [Team, Contributor, User, Alumni]
---

{% for category in page.categories %}
## {{category}}
{% for person in site.people %}
{% if person.category == category %}
<details class="person">
    <summary class="person-summary">
        {% if person.avatar %}
        <img class="person-avatar" src="{{person.avatar | relative_url}}">
        {% else %}
        <img class="person-avatar" src="/assets/images/people/avatar_dummy.svg">
        {% endif %}
        <span class="person-name-position">
            <span class="person-name">{{ person.name }}</span>
            <small class="person-position">{{ person.position }}</small>
        </span>
    </summary>
    <div class="person-bio">
    {% if person.content.size > 1 %}
        <h4>Biography:</h4>
        {{ person.content | markdownify }}
    {% endif %}
    {%- if person.social_links %}
        <h4 class="person-social">Get in touch:</h4>
        {%- include social.html social=person.social_links -%}
    {% endif %}
    </div>
</details>
{% endif %}
{% endfor %}
{% endfor %}

----

# Become a contributor!

We welcome contributions to SeqAn!
Just write an email to one of our developers above or send an email to our
[Mailing List](https://lists.fu-berlin.de/listinfo/seqan-dev#subscribe)

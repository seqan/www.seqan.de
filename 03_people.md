---
layout: page
title: People
permalink: /people/
categories: [Team, Contributor, User, Alumni]
redirect_from:
  - /contributors/
  - /seqan-users/
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
    <!-- Show all apps, that a person developed -->
    {%- assign apps = site.apps | where: "contact", person.name -%}
    {% if  apps != empty %}
        <h4>Developed Application(s): </h4>
        {% for app in site.apps %}
            <ul>
            {% if app.contact == person.name %}
                {%- if app.redirect_to -%}
                    <li>&#8599;<a href="{{ app.url }}">{{ app.title }}</a></li>
                {%- else -%}
                    <li><a href="{{ app.url }}">{{ app.title }}</a></li>
                {%- endif %} 
            {% endif %}
            </ul>
        {% endfor %}
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

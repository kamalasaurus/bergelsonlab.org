---
layout: default
title: News
permalink: /news/
---

<ul>
    {% for post in site.posts %}
        <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <p>{{ post.date | date: "%B %d, %Y" }}</p>
            <p>{{ post.excerpt }}</p>
        </li>
    {% endfor %}
</ul>

---
layout: default
title: News
permalink: /news/
---
<h1 style="text-align: center; background-color: #E6F3EE; padding: 30px; margin: 0; color: black; font-size: 36px; border: 1px solid black;">
  <b class="section-title">Latest News</b>
</h1>
<br>
<ul>
    {% for post in site.posts %}
        <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <p>{{ post.date | date: "%B %d, %Y" }}</p>
            <p>{{ post.excerpt }}</p>
        </li>
    {% endfor %}
</ul>

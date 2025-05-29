---
layout: default
title: News
permalink: /news/
---
<h1 style="text-align: center; background-color: #E6F3EE; padding: 30px; margin: 0; color: black; font-size: 36px; border: 1px solid black; border-radius: 4px;">
  <b class="section-title">Latest News</b>
</h1>
<br>

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
  {% for post in site.posts %}
    <div style="width: 300px; padding: 20px; border: 1px solid #ccc; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: #fff;">
      <a href="{{ post.url | relative_url }}" style="font-size: 18px; font-weight: bold; color: #004d40; text-decoration: none;">
        {{ post.title }}
      </a>
      <p style="margin: 8px 0; color: #666;">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt }}</p>
    </div>
  {% endfor %}
</div>





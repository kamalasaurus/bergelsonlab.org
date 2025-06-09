---
layout: default
title: News
permalink: /news/
---
<div class="banner">
  <h1>Latest News</h1>
</div>

<div class="news">
  {% for post in site.posts %}
    <div class="news-post">
      <a href="{{ post.url | relative_url }}" class="news-title">
        {{ post.title }}
      </a>
      <p class="news-date">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt }}</p>
    </div>
  {% endfor %}
</div>





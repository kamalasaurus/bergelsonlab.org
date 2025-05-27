---
layout: default
title: News
permalink: /news/
---
<h1 style="text-align: center; background-color: #E6F3EE; padding: 30px; margin: 0; color: black; font-size: 36px; border: 1px solid black; border-radius: 4px;">
  <b class="section-title">Latest News</b>
</h1>
<br>

<ul style="list-style: none; padding: 0;">
  {% for post in site.posts %}
    <li style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #ccc;">
      <a href="{{ post.url | relative_url }}" style="font-size: 20px; font-weight: bold; color: #004d40; text-decoration: none;">
        {{ post.title }}
      </a>
      <p style="margin: 5px 0; color: #666;">{{ post.date | date: "%B %d, %Y" }}</p>
      <p style="margin: 0;">{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>


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


<hr>

<h1 style="text-align: center; background-color: #E6F3EE; padding: 30px; margin: 0; color: black; font-size: 36px; border: 1px solid black; border-radius: 4px;">
  <b class="section-title">Latest News</b>
</h1>
<br>

<div style="border-left: 3px solid #004d40; padding-left: 20px; margin-left: 20px;">
  {% for post in site.posts %}
    <div style="position: relative; margin-bottom: 30px;">
      <div style="position: absolute; left: -13px; top: 3px; width: 10px; height: 10px; background-color: #004d40; border-radius: 50%;"></div>
      <a href="{{ post.url | relative_url }}" style="font-size: 20px; font-weight: bold; color: #004d40; text-decoration: none;">
        {{ post.title }}
      </a>
      <p style="margin: 5px 0; color: #666;">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt }}</p>
    </div>
  {% endfor %}
</div>
<hr>

<h1 style="text-align: center; background-color: #E6F3EE; padding: 30px; margin: 0; font-size: 36px; border: 1px solid black;">
  <b class="section-title">Latest News</b>
</h1>
<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
  {% for post in site.posts %}
    <div class="flip-container">
      <div class="flip-card">
        <div class="flip-front">
          <h3>{{ post.title }}</h3>
          <p>{{ post.date | date: "%B %d, %Y" }}</p>
        </div>
        <div class="flip-back">
          <p>{{ post.excerpt | truncatewords: 30 }}</p>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<hr>

<h1 style="text-align: center; background-color: #E6F3EE; padding: 30px; margin: 0; font-size: 36px; border: 1px solid black;">
  <b class="section-title">Latest News</b>
</h1>

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; padding: 20px;">
  {% for post in site.posts %}
    <div class="flip-container">
      <div class="flip-card">
        <div class="flip-front">
          <h3>{{ post.title }}</h3>
          <p>{{ post.date | date: "%B %d, %Y" }}</p>
        </div>
        <div class="flip-back">
          <p>{{ post.excerpt | truncatewords: 30 }}</p>
        </div>
      </div>
    </div>
  {% endfor %}
</div>



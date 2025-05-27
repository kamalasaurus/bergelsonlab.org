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

<style>
.flip-container {
  perspective: 1000px;
}

.flip-card {
  width: 300px;
  height: 200px;
  margin: auto;
  margin-bottom: 30px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flip-container:hover .flip-card {
  transform: rotateY(180deg);
}

.flip-front, .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}

.flip-front {
  background: #f5f5f5;
}

.flip-back {
  background: #004d40;
  color: white;
  transform: rotateY(180deg);
}

<hr>
  
</style>

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

<style>
.masonry {
  column-count: 3;
  column-gap: 1rem;
  padding: 30px;
}

.masonry-item {
  background: #ffffff;
  display: inline-block;
  margin-bottom: 1rem;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  break-inside: avoid;
}

.masonry-item h2 {
  font-size: 20px;
  margin: 0 0 10px 0;
}

.masonry-item p {
  color: #333;
}
<hr>
</style>
<h1 style="text-align: center; background-color: #E6F3EE; padding: 30px; margin: 0; font-size: 36px; border: 1px solid black;">
  <b class="section-title">Latest News</b>
</h1>

<div class="masonry">
  {% for post in site.posts %}
    <div class="masonry-item">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p><em>{{ post.date | date: "%B %d, %Y" }}</em></p>
      <p>{{ post.excerpt }}</p>
    </div>
  {% endfor %}
</div>

<hr>
<style>
.news-section {
  padding: 40px 20px;
  background-color: #f8f9fa;
}

.news-title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
  font-weight: bold;
  color: #003366;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.news-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.news-card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.news-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.news-content {
  padding: 20px;
}

.news-content h2 {
  font-size: 20px;
  margin-top: 0;
  color: #003366;
}

.news-content p {
  font-size: 14px;
  color: #444;
}

.news-content .date {
  font-size: 12px;
  color: #777;
  margin-bottom: 10px;
}
</style>

<div class="news-section">
  <div class="news-title">Latest News</div>
  <div class="news-grid">
    {% for post in site.posts %}
    <div class="news-card">
      <img src="{{ post.image | default: '/assets/images/default-news.jpg' }}" alt="News image">
      <div class="news-content">
        <p class="date">{{ post.date | date: "%B %d, %Y" }}</p>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt | truncatewords: 25 }}</p>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
<hr>
<style>
.news-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.news-header {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 30px;
}

.news-item {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
}

.news-item h2 {
  font-size: 22px;
  margin: 0;
  color: #2c3e50;
}

.news-item .date {
  font-size: 13px;
  color: #888;
}

.news-item p {
  font-size: 15px;
  color: #333;
  margin-top: 10px;
}
</style>

<div class="news-section">
  <div class="news-header">Latest News</div>
  {% for post in site.posts %}
    <div class="news-item">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <div class="date">{{ post.date | date: "%B %d, %Y" }}</div>
      <p>{{ post.excerpt | truncatewords: 30 }}</p>
    </div>
  {% endfor %}
</div>
<hr>
<style>
.timeline {
  max-width: 800px;
  margin: 0 auto;
  border-left: 3px solid #003366;
  padding-left: 30px;
}

.timeline h1 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
  color: #003366;
}

.timeline-entry {
  margin-bottom: 40px;
  position: relative;
}

.timeline-entry::before {
  content: "";
  position: absolute;
  left: -13px;
  top: 5px;
  width: 12px;
  height: 12px;
  background-color: #003366;
  border-radius: 50%;
}

.timeline-entry h2 {
  font-size: 20px;
  margin: 0;
}

.timeline-entry .date {
  font-size: 13px;
  color: #888;
  margin-bottom: 10px;
}

.timeline-entry p {
  font-size: 15px;
  color: #333;
}
<hr>
</style>
<div class="timeline">
  <h1>Latest News</h1>
  {% for post in site.posts %}
    <div class="timeline-entry">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <div class="date">{{ post.date | date: "%B %d, %Y" }}</div>
      <p>{{ post.excerpt | truncatewords: 25 }}</p>
    </div>
  {% endfor %}
</div>


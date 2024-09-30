---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div class="cube-container">
    <div class="cube">
        <div class="face front">
            <span>Adaptation</span>
        </div>
        <div class="face back">
        </div>
        <div class="face left">
        </div>
        <div class="face right">
            <span>Microbe-Host Co-Evolution</span>
        </div>
        <div class="face top">
            <span>Microbial Networks & Communities</span>
        </div>
        <div class="face bottom">
            <span>Genomics</span>
        </div>
    </div>
</div>

<ul>
    {% for post in site.posts %}
        <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <p>{{ post.date | date: "%B %d, %Y" }}</p>
            <p>{{ post.excerpt }}</p>
        </li>
    {% endfor %}
</ul>
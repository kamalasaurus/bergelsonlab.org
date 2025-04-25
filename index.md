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
<br />
<div class="index">
    <b class="about-title">About Us</b>
    <p>
    We study the ecology and evolution of plant–pathogen interactions, focusing primarily on Arabidopsis thaliana and the bacteria that reside within it. Our approach is interdisciplinary; we draw upon tools from molecular genetics, molecular evolution, computation, field biology, chemistry, and population genetics to understand how ecological interactions shape evolutionary dynamics. Many of our field experiments are performed in the Midwest, or abroad, at sites in Sweden and France.
    </p>
</div>
<div class="news">
    <b>
        {% for page in site.pages %}
            {% if page.title == "News" %}
                <a href="{{ page.url | relative_url }}">News</a>
            {% endif %}
        {% endfor %}
    </b>
    <ul>
        {% for post in site.posts %}
            <li>
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                <p>{{ post.date | date: "%B %d, %Y" }}</p>
                <p>{{ post.excerpt }}</p>
            </li>
        {% endfor %}
    </ul>
</div>
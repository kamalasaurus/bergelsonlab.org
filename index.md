---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---



<hr>
<div class="container">
  <img src="assets/images/Main_Banner3.png" alt="Banner" style="width:100%;">
</div>

<div class="index">
    <b class="section-title">About Us</b>
    <p>
    We study the ecology and evolution of plant–pathogen interactions, focusing primarily on <em>Arabidopsis thaliana</em> and the bacteria that reside within it. Our approach is interdisciplinary; we draw upon tools from molecular genetics, molecular evolution, computation, field biology, chemistry, and population genetics to understand how ecological interactions shape evolutionary dynamics. Many of our field experiments are performed in the Midwest, or abroad, at sites in Sweden and France.
    </p>

<div class="callouts">
  <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/microbial-interactions-communities'"
       style="width: 150px; aspect-ratio: 1 / 1; position: relative; cursor: pointer; border-radius: 10px; overflow: hidden;">
    <img src="{{ site.baseurl }}/assets/images/MIC-Box2.png" alt="Microbial Interactions"
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.7); color: white; padding: 5px 10px;
                font-weight: bold; text-align: center; border-radius: 0px;
                font-size: 12px;">
      Microbial Interactions
    </div>
  </div>

  <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/NLR-evolution'"
       style="aspect-ratio: 1 / 1; position: relative; cursor: pointer; border-radius: 10px; overflow: hidden;">
    <img src="{{ site.baseurl }}/assets/images/NLR-Box2.png" alt="NLR Evolution"
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.7); color: white; padding: 5px 10px;
                font-weight: bold; text-align: center; border-radius: 0px;
                font-size: 12px;">
      NLR Evolution
    </div>
  </div>

  <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/ecoevolutionary-interactions'"
       style="aspect-ratio: 1 / 1; position: relative; cursor: pointer; border-radius: 10px; overflow: hidden;">
    <img src="{{ site.baseurl }}/assets/images/CI-Box3.png" alt="Microbe-Host Co-evolution"
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.7); color: white; padding: 5px 10px;
                font-weight: bold; text-align: center; border-radius: 0px;
                font-size: 12px;">
      Co-evolutionary Interactions
    </div>
  </div>
</div>


<hr>
<div class="news" style="width: 100%; margin-top: 40px;">
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




---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<hr>

<div class="container">
  <img src="assets/images/Main_Banner3.png" alt="Banner" style="width:100%;">
</div>
<br>
<div class="main-content"
     style="display: flex; align-items: flex-start; gap: 20px; margin-top: 10px; flex-wrap: wrap;">
  <div class="index" style="flex: 1 1 0; min-width: 0;">
    <h2><b class="section-title">About Us</b></h2>
    <hr>
    <p>
    We study the ecology and evolution of plant–pathogen interactions, focusing primarily on <em>Arabidopsis thaliana</em> and the bacteria that reside within it. Our approach is interdisciplinary; we draw upon tools from molecular genetics, molecular evolution, computation, field biology, chemistry, and population genetics to understand how ecological interactions shape evolutionary dynamics. Many of our field experiments are performed in the Midwest, or abroad, at sites in Sweden and France.
    </p>


<!-- Microbial Interactions box -->
<div class="callouts">
  <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/microbial-interactions-communities'"
      onmouseover="this.style.backgroundColor='#D0E9DC';"
       onmouseout="this.style.backgroundColor='#E6F3EE';"
       style="width: 500px; aspect-ratio: 1 / 1; position: relative; cursor: pointer;
              border-radius: 10px; overflow: hidden; background-color: #E6F3EE;
              display: flex; align-items: center; justify-content: center;">
    <div style="color: #003300; font-weight: bold; text-align: center;
                font-size: 20px; letter-spacing: 1px;">
      Microbial Interactions
    </div>
  </div>

<!-- NLR Evolution box -->
               
  <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/NLR-evolution'"
       style="width: 500px; aspect-ratio: 1 / 1; position: relative; cursor: pointer; border-radius: 10px; overflow: hidden;">
    <img src="{{ site.baseurl }}/assets/images/NLR-Box2.png" alt="NLR Evolution"
              style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px; filter: grayscale(100%);">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.7); color: white; padding: 10px 20px;
                font-weight: bold; text-align: center; border-radius: 0px;
                font-size: 9px;">
      NLR Evolution
    </div>
  </div>

<!-- Eco-evolutionary Interactions box -->
      
  <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/ecoevolutionary-interactions'"
          style="width: 500px; aspect-ratio: 1 / 1; position: relative; cursor: pointer; border-radius: 10px; overflow: hidden;">
    <img src="{{ site.baseurl }}/assets/images/CI-Box3.png" alt="Eco-evolution"
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
    </div>
  <div style="margin-top: 10px; text-align: center; font-weight: bold; font-size: 14px;">
    Eco-evolutionary Interactions
  </div>
  </div>

  </div>
</div>

</div>

 <div class="news" style="flex: 0 1 240px; min-width: 180px; font-size: 11px;">
  <b>
    {% for page in site.pages %}
      {% if page.title == "News" %}
        <a href="{{ page.url | relative_url }}">News</a>
      {% endif %}
    {% endfor %}
  </b>
  <ul style="list-style: none; padding-left: 0;">
    {% for post in site.posts limit:3 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <p>{{ post.date | date: "%B %d, %Y" }}</p>
        <p>{{ post.excerpt }}</p>
      </li>
    {% endfor %}
  </ul>
  <div style="margin-top: 11px;">
    <a href="{{ '/news' | relative_url }}">See all news →</a>
  </div>
</div>


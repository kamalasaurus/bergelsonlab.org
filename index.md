---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<hr>
<body>
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

<div class="callouts">
  <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/microbial-interactions-communities'"
     style="width: 500px; aspect-ratio: 1 / 1; position: relative; cursor: pointer; border-radius: 10px; overflow: hidden; display: flex; flex-direction: column;">
  
  <img src="{{ site.baseurl }}/assets/images/MIC-Box2.png" alt="Microbial Interactions"
       style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">

  <div style="background: rgba(0, 0, 0, 0.7); color: white; padding: 10px 20px; 
    font-weight: bold; text-align: center; 
    border-radius: 0 0 10px 10px; font-size: 9px;">
    Microbial Interactions
  </div>
</div>
         
  <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/NLR-evolution'"
       style="width: 500px; aspect-ratio: 1 / 1; position: relative; cursor: pointer; border-radius: 10px; overflow: hidden;">
    <img src="{{ site.baseurl }}/assets/images/NLR-Box2.png" alt="NLR Evolution"
              style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
 <div style="width: 100%; display: flex; justify-content: center; margin-top: 8px;">
      <div style="display: inline-block; background: rgba(0, 0, 0, 0.7); color: white;
              padding: 12px 24px; font-weight: bold;
              font-size: 12px; border-radius: 0 0 10px 10px; margin-top: 8px;">
      NLR Evolution
    </div>
  </div>

  <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/ecoevolutionary-interactions'"
       style="width: 500px; aspect-ratio: 1 / 1; position: relative; cursor: pointer; border-radius: 10px; overflow: hidden; display: flex; flex-direction: column;">
    <img src="{{ site.baseurl }}/assets/images/CI-Box3.png" alt="Eco-evolution"
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.7); color: white; padding: 10px 20px;
                font-weight: bold; text-align: center; border-radius: 0px;
                font-size: 9px;">
      Eco-evolutionary Interactions
    </div>
  </div>
  </div>
</div>

 <div class="news" style="flex: 0 1 240px; min-width: 180px; font-size: 10px;">
    <b>
        {% for page in site.pages %}
            {% if page.title == "News" %}
                <a href="{{ page.url | relative_url }}">News</a>
            {% endif %}
        {% endfor %}
    </b>
    <ul style="list-style: none; padding-left: 0;">
        {% for post in site.posts % limit:4 %}
            <li>
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                <p>{{ post.date | date: "%B %d, %Y" }}</p>
                <p>{{ post.excerpt }}</p>
            </li>
        {% endfor %}
    </ul>

   <!-- See more news link -->
  {% for page in site.pages %}
    {% if page.title == "News" %}
      <a href="{{ page.url | relative_url }}" style="display: inline-block; margin-top: 10px; font-weight: bold; text-decoration: none;">
        See all news →
      </a>
    {% endif %}
  {% endfor %}
</div>
</div>
</body>


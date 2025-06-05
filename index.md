---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<body>
<div class="container">
  <img src="assets/images/Main_Banner3.png" alt="Banner" style="width:100%;">
</div>
<br>
<div class="main-content">
  <div class="index">
    <h2><b class="section-title">About Us</b></h2>
    <hr>
    <p>
    We study the ecology and evolution of plant–pathogen interactions, focusing primarily on <em>Arabidopsis thaliana</em> and the bacteria that reside within it. Our approach is interdisciplinary; we draw upon tools from molecular genetics, molecular evolution, computation, field biology, chemistry, and population genetics to understand how ecological interactions shape evolutionary dynamics. Many of our field experiments are performed in the Midwest, or abroad, at sites in Sweden and France.
    </p>

    <div class="callouts">
      <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/microbial-interactions-communities'">
      
        <img src="{{ site.baseurl }}/assets/images/MIC-Box2.png" alt="Microbial Interactions" />

        <div class="label">
          Microbial Interactions
        </div>
      </div>
            
      <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/NLR-evolution'">

        <img src="{{ site.baseurl }}/assets/images/NLR-Box2.png" alt="NLR Evolution" />

      <div class="label">
          NLR Evolution
        </div>
      </div>

      <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/ecoevolutionary-interactions'">

        <img src="{{ site.baseurl }}/assets/images/CI-Box3.png" alt="Eco-evolution" />

        <div class="label">
          Eco-evolutionary Interactions
        </div>
      </div>
    </div>
  </div>

  <div class="news">
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


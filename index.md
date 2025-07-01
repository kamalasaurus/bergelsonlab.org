---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div class="container">
  <img src="assets/images/Main_Banner3.png" alt="Banner">
</div>

<div class="index">
  <div class="main-content">
    <h2>About Us</h2>
    <p>
      We study the ecology and evolution of plant–pathogen interactions, focusing primarily on <em>Arabidopsis thaliana</em> and the bacteria that reside within it. Our approach is interdisciplinary; we draw upon tools from molecular genetics, molecular evolution, computation, field biology, chemistry, and population genetics to understand how ecological interactions shape evolutionary dynamics. Many of our field experiments are performed in the Midwest, or abroad, at sites in Sweden and France.
    </p>
    <div class="callouts">
      <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/microbial-interactions-and-communities'">
        <img src="{{ site.baseurl }}/assets/images/1MIC-Box.jpg" alt="Microbial Interactions" />
        <div class="label">
          Microbial Interactions
        </div>
      </div>
      <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/NLR-evolution'">
        <img src="{{ site.baseurl }}/assets/images/NLR-Home.png" alt="NLR Evolution" />
        <div class="label">
          NLR Evolution
        </div>
      </div>
      <div class="study-area" onclick="window.location.href='{{ site.baseurl }}/eco-evolutionary-dynamics/'">
        <img src="{{ site.baseurl }}/assets/images/CI-Box3.png" alt="Eco-evolution" />
        <div class="label">
          Eco-evolutionary Interactions
        </div>
      </div>
    </div>
  </div>

  <div class="news_column">
      <b><a href="{{ site.news_url | relative_url }}">News</a></b>
      <ul>
          {% for post in site.posts limit:4 %}
              <li>
                  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                  <p>{{ post.date | date: "%B %d, %Y" }}</p>
                  <p>{{ post.excerpt }}</p>
              </li>
          {% endfor %}
      </ul>
      <b><a href="{{ site.news_url | relative_url }}">See all news →</a></b>
  </div>
</div>


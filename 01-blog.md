---
layout: page
title: Blog
permalink: /blog/
---
<ul class="post-list">

  {% for post in site.posts %}
    <li>
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">

        <div class="row">
          <div class="col-md-12">
            <h3 class="panel-title">{{ post.title }}</h3>
            <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            {% if post.image.feature %}
              <img src="/img/feature/{{post.image.feature}}" alt="feature image for {{post.title}}" class="feed-feature-image">
            {% else %}
              <img src="/img/default-blog-list-img.jpg" alt="feature image for {{post.title}}" class="feed-feature-image">
            {% endif %}
          </div>
          <div class="col-md-6">
            {{ post.excerpt }}
          </div>
        </div>
      </a>
      <p><a class="read-more" href="{{ post.url | prepend: site.baseurl }}">... Read More &#8594;</a></p>
    </li>
    <hr />
    <br />
  {% endfor %}
</ul>
<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>


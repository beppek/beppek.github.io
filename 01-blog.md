---
layout: page
title: Blog
permalink: /blog/
---

  <ul class="post-list">

    {% for post in site.posts %}
      <li>
        <a class="panel panel-primary post-link" href="{{ post.url | prepend: site.baseurl }}">

          <div class="panel-heading">
            <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

            <h3 class="panel-title">{{ post.title }}</h3>

            <!-- {% if post.image.feature %}
              <img src="{{post.image.feature}}" alt="feature image for {{post.title}}" class="feed-feature-image">
            {% endif %} -->
          </div>
          <div class="panel-body">
            <p class="post-excerpt" >{{ post.excerpt }}</p>

          </div>
        </a>
        <p><a class="read-more" href="{{ post.url | prepend: site.baseurl }}">... Read More &#8594;</a></p>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>


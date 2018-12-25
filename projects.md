---
bg: "boatcontrol-min.jpg"
layout: page
permalink: /projects/
title: "Projects"
crawlertitle: "Projects - Angelo Lu"
summary: "Projects I've worked on"
active: projects
---
{% for tag in site.tags %}
{% if tag contains "projects" %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}
##### This site is currently being updated, more content will be available soon!
  <h2 class="category-key" id="{{ t | downcase }}">{{ t | capitalize }}</h2>
  <div class="container">
    {% for post in posts %}
      {% if post.tags contains t %}
          {% if post.lastmod %}
            <a href="{{ post.url | relative_url}}">{{ post.title }}</a>
            <span class="date">{{ post.lastmod | date: "%d-%m-%Y"  }}</span>
          {% else %}
            <div class="card">
            <img src="/assets/images/{{ post.cardbg }}" style="width:100%">
            <div class="card_content">
            <a href="{{ post.url | relative_url}}"><span class="project_title">{{ post.title }}</span></a><br>
            <p class="project_summary">{{ post.excerpt }}</p>
            <div class="section">
            {% for element in post.tech %}
            <div class="highlight">{{ element }}</div>
            {% endfor %}
            </div>
            </div>
            </div>
          {% endif %}
      {% endif %}
    {% endfor %}
  </div>

  {% endif %}
{% endfor %}

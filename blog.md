---
layout: blog
---

<!--{% for post in site.posts reversed %}
1. [{{ post.title }}]({{ site.baseurl }}{{ post.url }}){% endfor %}-->
{% for post in site.posts reversed %}
  <h2>
    <a class="post-link" href="{{ post.url | prepend: site.url }}">{{ post.title }}</a>
  </h2>
  <div class="meta-container">
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span class="disqus-comment-count" data-disqus-url="{{ post.url | prepend: site.url }}">0 Comments</span>
  </div>
  <div class="blog-excerpt">
    {{ post.excerpt }}
  </div>
  <div class='blog-readmore'>
    <a href="{{ post.url | prepend: site.url }}">continue reading ..</a>
  </div>
  <div class="blog-separator"></div>
{% endfor %}

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
    <!--svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="100mm" width="100mm" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 354.33071 354.33071">
      <g transform="translate(0 -698)">
        <path style="fill: #ADADAD; fill-opacity:.6811" d="m66.56 831.1c-5.022 0-9.065 4.631-9.065 10.38v145.4c0 5.752 4.043 10.38 9.065 10.38h49.78l-9.002 51.67 78.49-51.67h101.7c5.022 0 9.065-4.631 9.065-10.38v-145.4c0-5.752-4.043-10.38-9.065-10.38z"/>
        <rect style="fill:#fff;fill-opacity:.6811" ry="10.82" height="91.43" width="274.3" y="732.4" x="25.71"/>
      </g>
    </svg-->
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

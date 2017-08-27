---
layout: blog
---

{% for post in site.posts reversed %}
1. [{{ post.title }}]({{ site.baseurl }}{{ post.url }}){% endfor %}

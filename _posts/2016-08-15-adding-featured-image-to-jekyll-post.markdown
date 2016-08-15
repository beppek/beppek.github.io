---
layout: post
title:  "Adding Featured Image to Post in Jekyll"
date:   2016-08-15 18:00:00
image:
    feature: /img/feature/5.jpg
comments: true
---
To spice up the looks of the blog a bit I decided to add a feature image for each post. Doing so with Jekyll seems like a breeze. You just store the image information in the front matter like so:

{% highlight yaml linenos %}
---
layout: post
title:  "Post Title Goes Here"
image:
    feature: image-title.jpg
comments: true
---
{% endhighlight %}

Then all you need to do is adjust your html to display the image in all the places you would like it displayed.
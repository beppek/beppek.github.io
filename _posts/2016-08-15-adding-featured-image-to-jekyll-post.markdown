---
layout: post
title:  "Adding Featured Image to Post in Jekyll"
date:   2016-08-15 18:00:00
image:
    feature: 5.jpg
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

Then all you need to do is adjust your html to display the image in all the places you would like it displayed like so:

{% highlight html linenos %}
<style>
    .post-header {
        background-image: url('{{page.image.feature}}');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
</style>
{% endhighlight %}

Of course you change the html and css to match your own design.

Next thing you do is completely break the design of your page and spend a couple of hours fixing what you wrecked. Not to mention messing the mobile version up even more. I still have a lot of work ahead of me before this site is updated to a good looking version, but I am slowly getting there, step by step.
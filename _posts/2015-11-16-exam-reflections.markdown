---
layout: post
title:  "Exam Reflections"
date:   2015-11-16 20:30:24
comments: true
---
In this post I go a bit deeper in my description of my own personal experience working with the tools we've used for this assignment.
This is a long post - I love to write - but it's got some pretty syntax highlighting as a reward for the reader who carries on to the end.

####Precompiling CSS
After having worked some more with SASS since my first blog post about it I stayed on the positive path.
I find precompiling CSS to be really useful and the advantages way outweigh the disadvantages in my opinion.

I used variables to store information in a way that made the code easy to maintain - or change when needed.
Say you want to see what it will look like with a different color somewhere,
then instead of having to find every place you used that color you just go to the main file and change the color there,
everywhere else you just use the variable. Done! Instant magic!

I also used functions a lot for setting width, doing simple calculations or darkening/lightening colors.
I feel this might be one of the most powerful tools that SASS introduces.

The way you write the code also makes it easier with a clearer structure for selectors.

The drawback is of course that you get one single file put together from several different ones.
That might mean you struggle with debugging, however it was not something I noticed much of when I was working.
On the other hand this project is not that big,
I could imagine it becoming a problem when you have upwards of a thousand lines of code.

*//Edit: I discovered how annoying it can be while updating the styles during breaks from the writing of this post.
I accidentally added an extra "}" at the end of one of the .scss docs. It took ages to find.*

On the other hand, when you start getting that many lines of CSS code it becomes really difficult to find what you are looking for if you want to change something.

I guess it really just depends on the project you're working on and what you prefer personally.

####Static Site Generators
Static Site Generators, or SSG for short, are great for quickly putting up a static site.
IT does involve a bit of initial setup but once that is done you quickly gain that time.
If all you need is some info and maybe a blog - then a database is too much of a burden, both in resources and security.
As there are no databases on a static site you don't need to worry about a weak spot that could expose your databases,
there's just less to keep up to date.

Of course, if the project requires databases or user generated anything - a static site might not be the way to go.

That aside, for a smaller project SSGs are great for putting together a website without having to fight with the menu and the footer on every single page,
or any number of other code that might repeat itself - like the comments on this site.

It's also a really quick and easy way to spit out several pages, and posts, in a really short amount of time.

Basically SSGs follow the DRY principle really well and allows one to be more productive.

####Robots.txt
Robots.txt is a simple text file that contains information for robots,
crawlers, spiders or whatever you personally prefer to call them.

I have configured the site as follows:

{% highlight html linenos %}

User-agent: *
Disallow: /

{% endhighlight %}

This blocks crawlers from searching through my site, at least as long as they follow protocol.
I am not currently ready to have the site indexed by search engines,
that's why I make no exceptions.

Later on as the site is ready to be indexed I will lift the ban for those crawlers by changing the configuration.

####Humans.txt
Humans.txt is for humans! Basically it's a place to put information about the team behind the site.
You can kinda compare it to the end credits of a movie or a game,
combined with the forewords to a book, a place for the author to thank whoever made whatever he wrote possible.

My humans.txt looks as follows:

{% highlight html linenos %}

/*TEAM*/
Creator: Beppe Karlsson
Contact: bk222bh@student.lnu.se
From: Lagan, Sweden

/*THANKS*/
Name: Linnaeus University
Link: www.lnu.se

/*SITE*/
Last update: 2015/11/13
Language: English
Standards: HTML5, CSS3,
Components: Jekyll, SASS
Software: Git, WebStorm, Illustrator, Photoshop
Powered by: Caffeine

{% endhighlight %}

####Blog Comments
On this site I use a Disqus integration to allow for comments on my posts.
The setup was really simple, it's not harder than a case of copy and paste.
I already had an old Disqus account so I just created a new handler and had to change the shortname in the integration code,
it had originally generated one for a different domain I used to use.

At first I just had the code copied to the bottom of the posts page,
but I later realised it's a more future proof way to separate it into it's own html document and place it in _includes.
That way I can just bring it out on whatever page I feel, much easier.

Bear with me now, I just like to show off the syntax highlighter built into Jekyll -
along with my own minor changes to the styling -
so you can view the disqus integration code below:

{% highlight html linenos %}

<div id="disqus_thread"></div>
<script>
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     */
    /*
     var disqus_config = function () {
     this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
     this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
     };
     */
    (function() {  // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');

        s.src = '//beppekarlsson.disqus.com/embed.js';

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
{% endhighlight %}

Now wasn't that pretty? You can even scroll to see more when the code is too long.

####Open Graph
These days social media is really important to websites, and then of course it helps to make your site easier - and nicer - to share.

Open Graph is a tool that enables you to set the information that will be displayed by social media when a link to your site is posted.
So far I am really only making the most basic use of Open Graph, like so:

{% highlight html linenos %}

<meta property="og:title" content="Beppe Karlsson" />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://beppek.github.io/" />
<meta property="og:image" content="http://beppek.github.io/img/bk.png" />

{% endhighlight %}

I will later on add some more info.
At the moment facebook reads the site description meta tag and they're complaining that it's not explicitly provided.
Meaning I'm writing it to the head using liquid and not hardcoding it.
At the moment it's not that important,
but it is something I will look into when I want the site to start being shared here and there.
The image I'm using is hideous, I know, it's on my to do list.

####Summary
This was a longer post,
but just look at how beautiful it looks with the syntax highlighting thanks to Jekyll and liquid
(and my own minor changes to the styling).
All in all I am rather happy with the results produced in such a short time and small amount of effort - even as a beginner.

I will definitely use this to get started again on future projects that require nothing other than simple static websites.

10/10 - would code again.

---
layout: page
title: Resources
order: 3
image: "/assets/images/og-image.png"
top_image: '/assets/images/resources_header.png'
top_quote: ''
#header:
  #text: "# Resources"
  #full: false
  #image:
    #link: '/assets/images/home-header-bankers.png'
    #location: right
---
{% assign posts = site.data.resources %}
{% include blog-list.html date=false share_buttons=true %}

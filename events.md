---
layout: page
tags: []
title: Upcoming Events
permalink: events
top_image: ''
top_quote: ''
image: ''
credits: ''
summary: ''
share:
  whatsapp: ''
  text: ''
  tweet: ''
logo: ''
logo_square: ''
menu:
  footer:
    weight: 7
    title: Events

---
# Upcoming events

{% assign events = site.actions | where: "future", 1 %}
{% include events-gallery.html date_field='start_date' summary=true %}
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
# Upcoming Events and actions

{% assign events = site.actions | where: "future", 1 | where: "event_type", "Protest" %}
{% include events-gallery.html date_field='start_date' summary=true %}

# Upcoming Trainings

{% assign events = site.actions | where: "future", 1 | where: "event_type", "Training" %}
{% include events-gallery.html date_field='start_date' summary=true %}
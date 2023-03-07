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

{% assign protest = site.actions | where: "future", 1 | where: "event_type", "Protest" %}
{% assign films = site.actions | where: "future", 1 | where: "event_type", "Film" %}
{% assign whildwinds = site.actions | where: "future", 1 | where: "event_type", "Whirlwind moment / Mass Mobilisation" %}
{% assign meetings = site.actions | where: "future", 1 | where: "event_type", "Meeting" %}
{% assign events = meetings | concat: whildwinds | concat: whildwinds | concat: films | concat: protest  %}
{% include events-gallery.html date_field='start_date' summary=true %}

# Upcoming Trainings

{% assign events = site.actions | where: "future", 1 | where: "event_type", "Training" %}
{% include events-gallery.html date_field='start_date' summary=true %}
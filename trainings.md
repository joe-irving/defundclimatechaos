---
title: Trainings
layout: page
main_nav_exclude: true
footer_nav_include: true
order: null
image: ''
top_image: ''
top_quote: ''
background_image: assets/images/street-mural.png
_template: page
---

# Trainings

{% assign events = site.trainings | sort: "start_date" %}
{% include events-gallery.html summary=true date_field='start_date' %}

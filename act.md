---
title: Act
order: 1
layout: page
main_nav_exclude: true
image: "/assets/images/og-image.png"
top_image: ''
top_quote: ''
credits: ''

---
{% for a in site.actions %}
  {{ a | jsonify }}
{% endfor %}

# Joining the day of action

## Actions

A map of all actions is coming soon...

## Upcoming Trainings

{% assign posts = site.trainings %}
{% include blog-list.html limit=3  %}

[See all upcoming trainings...](/trainings)

## Updates

<div>{%- include signup-form.html -%}</div>

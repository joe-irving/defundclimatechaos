---
title: Action Network Event
slug: an-event
template: |-
  # _{{ title }}_

  {{ share_buttons }}
  {{ image }}
  {{ date }}

  {% if page.online == 1 %}_This event is online._{% endif %}

  ## What

  {{ content }}

  ## RSVP

  {{ form }}

  {% if page.online != 1 %}
  ## Where

  {{ address }}

  {{ map }}
  {% endif %}
_template: template
---


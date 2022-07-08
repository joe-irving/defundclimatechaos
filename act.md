---
layout: page
image: "/assets/images/og-image.png"
blocks:
- map: false
  text: ''
  id: ''
  buttons: []
  decoration: ''
  background_image: "/assets/images/stopeacop.jpg"
- map: false
  text: |-
    French oil giant Total and the China National Offshore Oil Corporation are on the cusp of building a massive crude oil pipeline right through the heart of Africa – displacing communities, endangering wildlife and tipping the world closer to full-blown climate catastrophe.

    UK insurers and bankers are thinking about supporting the pipeline. Take action today and join the global movement to #StopEACOP.
  id: ''
  buttons:
  - target: ''
    image: ''
    new_tab: false
    text: Email Inurers
  - text: Adopt an Insurer
    target: ''
    image: ''
    new_tab: false
  - text: Pass a Trade Union Motion
    target: ''
    image: ''
    new_tab: false
  decoration: ''
  background_image: ''
- map: false
  text: |-
    {% assign posts = site.data.resources | where: "category", "Digital Action" %}

    {% include blog-list.html date=false share_buttons=true %}
  id: ''
  buttons: []
  decoration: ''
  background_image: ''
- buttons:
  - text: See map
    target: "#tribute-map"
    image: ''
    new_tab: false
  text: |-
    # Add your tribute

    Add your tribute to the National Climate Memorial today, and see it appear below on the map.

    <link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css' /><script src='https://actionnetwork.org/widgets/v4/form/your-message-for-the-national-climate-justice-memorial?format=js&source=widget'></script><div id='can-form-area-your-message-for-the-national-climate-justice-memorial' style='width: 100%'><!-- this div is the target for our HTML insertion --></div>
  decoration: "![](/assets/images/alarm.png)"
  map: false
  background_image: ''
  id: tribute
- embed: '<iframe src="/boe-memorial" id="tribute-map" class="Chaos-Map" style="height:
    80vh;width: 100%;border: none;padding: 0;margin: 0;"  height=100% width=100% frameborder="0"></iframe>'
  map: false
  text: ''
  id: ''
  buttons: []
  decoration: ''
  background_image: ''
- buttons: []
  text: |-
    # Resources

    Want to keep organising to #DefundClimateChaos beyond today.   Here's all the resources you’ll need to keep taking action throughout COP26 and beyond

    {% include resources.html %}
  decoration: ''
  map: false
  background_image: ''
  id: ''
- buttons: []
  text: |-
    # Find out more

    Some frequently asked questions and answers

    {% include accordion.html data=site.data.faqs %}
  decoration: ''
  map: false
  background_image: ''
  id: faqs
credits: ''
invert: odd
title: Act
tags: []
permalink: act
summary: ''
share:
  whatsapp: ''
  text: ''
  tweet: ''
logo: ''
logo_square: ''
header:
  text: "## "
  buttons: []
  border_bottom:
    image: ''
    reflect: false

---

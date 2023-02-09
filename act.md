---
layout: page
image: "/assets/images/og-image.png"
blocks:
- map: false
  text: |-
    # #StopEACOP

    French oil giant Total and the China National Offshore Oil Corporation are on the cusp of building a massive crude oil pipeline right through the heart of Africa – displacing communities, endangering wildlife and tipping the world closer to full-blown climate catastrophe.

    Building the longest heated oil pipeline in the world is risky work, and Total can’t do it alone. They are seeking insurance and funding from some of the world’s largest insurance companies and banks to get this project off the ground.
  id: stopeacop
  buttons:
  - target: "#StopEACOPact"
    image: ''
    new_tab: false
    text: Take Action
  - text: Pass a Trade Union Motion
    target: "#StopEACOPtu"
    image: ''
    new_tab: false
  decoration: ''
  background_image: ''
- map: false
  text: |-
    ## Cut Off Insurance

    Right now, UK insurers are thinking about backing the EACOP. But people across the world are demanding they rule it out.

    <link href='https://actionnetwork.org/css/style-embed-v3.css' rel='stylesheet' type='text/css' /><script src='https://actionnetwork.org/widgets/v4/letter/tell-insurance-ceos-its-time-to-drop-the-toxic-east-africa-crude-pipeline?format=js&source=widget'></script><div id='can-letter-area-tell-insurance-ceos-its-time-to-drop-the-toxic-east-africa-crude-pipeline' style='width: 100%'><!-- this div is the target for our HTML insertion --></div>
  id: StopEACOPwrite
  buttons: []
  decoration: ''
  background_image: ''
- map: false
  text: |-
    ## Trade Union Motion

    If you are part of a Trade Union, you can support the #StopEACOP campaign by passing this motion at your local branch.

    {% include motions.html limit=1 %}
  id: StopEACOPtu
  buttons: []
  decoration: ''
  background_image: ''
- map: false
  text: |-
    # Digital Actions

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
  text: |-
    ## Money is fuelling climate chaos. Climate justice means keeping fossil fuels in the ground. We can support struggles across the globe by cutting off the money and insurance for new projects.

    {% include an-email-only-form.html endpoint="https://actionnetwork.org/api/v2/petitions/e0c7e2f4-925f-448c-9558-57c1997b5408/signatures" jump="actions" %}
  buttons: []
  border_bottom:
    image: ''
    reflect: false
menu:
  header:
    title: Take Action
    weight: 1

---

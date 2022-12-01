---
layout: page
tags: []
title: Nurses Strike
top_image: ''
top_quote: ''
image: ''
credits: ''
permalink: nhs
summary: ''
share:
  whatsapp: Join me in showing support for the nurses on strike
  text: Support the NHS. Support the strike.
  tweet: 'I support the #NHS strike. Will you join the fight?'
logo: ''
logo_square: ''
invert: odd
header:
  text: |-
    # Support the NHS. Support the strikes.

    {% include an-email-only-form.html endpoint="https://actionnetwork.org/api/v2/petitions/65b32fbe-86ae-4037-8f56-73f5881ec34a/signatures" jump="pickets" %}
  buttons: []
  border_bottom:
    image: ''
    reflect: false
blocks:
- map: false
  text: |-
    # Join the pickets in solidarity

    Thousands of nurses will be walking out over pay and conditions. Join them on the picket lines to show your support for the NHS.

    Powered by [Strike Map UK](https://strikemap.co.uk/)

    {% include strikes.html id="strike-map" %}
  id: pickets
  buttons:
  - text: See Map
    target: "#strike-map"
    image: ''
    new_tab: false
  decoration: '[![](/assets/images/strike_map.png)](#strike-map "View map")'
  background_image: ''
- map: false
  text: |-
    # Show your support online

    Share the example tweets {% include resize.html mobile="below" desktop="on the right" %}
  id: online
  buttons:
  - text: Facebook share
    target: https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdefundclimatechaos.uk%2Fnhs
    image: ''
    new_tab: false
  decoration: ''
  background_image: ''
- map: false
  text: |-
    # Posters to show support

    Put up posters in the window of your house, work or school to show support with striking nurses.

    The Royal College of Nursing has posters you can [order and have delivered](https://shop.rcn.org.uk/collections/free-campaigning-materials) completely for free.
  id: posters
  buttons:
  - text: Order posters
    target: https://shop.rcn.org.uk/collections/free-campaigning-materials?page=1
    image: ''
    new_tab: true
  decoration: "![](/assets/images/nhs-strike.jpg)"
  background_image: ''
- map: false
  text: |-
    # Donate

    Could you contribute to the nurses strike fund?
  id: ''
  buttons:
  - text: Donate
    target: "#"
    image: ''
    new_tab: false
  decoration: ''
  background_image: ''
- map: false
  id: ''
  buttons: []
  decoration: ''
  background_image: ''
  text: |-
    # Register a solidarity action

    register your solidarity action here:

    {% include an-form/base.html endpoint="https://actionnetwork.org/api/v2/forms/d917ffed-2525-455e-94e5-afc7cd1be39b/submissions" button="Register" lines="first-name,email.action-title,action-start-date.action-description.map.submit" %}
published: false

---

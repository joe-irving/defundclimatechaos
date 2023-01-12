---
layout: page
tags: []
title: Support NHS Strike
top_image: ''
top_quote: ''
image: "/assets/images/pay-nhs-heroes-banner-1200px-wide.png"
credits: Original artwork by Suzy Riot
permalink: nhs
style: nhs
summary: ''
custom_menu: nhs_strike
share:
  whatsapp: Join me in showing support for the nurses on strike
  text: Support the NHS. Support the strike.
  tweet: 'I support the #NHS strikes for #FairPayForNursing. It''s time for a raise
    not empty praise.  Will you join me and show your solidarity too?'
logo: ''
logo_square: ''
invert: odd
header:
  full: true
  text: |-
    # Protect the NHS. Support the strikers.

    {% include an-form/base.html lines="first-name,email.organisation,postal-code.submit." endpoint="https://actionnetwork.org/api/v2/petitions/65b32fbe-86ae-4037-8f56-73f5881ec34a/signatures" %}
  buttons: []
  border_bottom:
    image: ''
    reflect: false
  background_image: "/assets/images/nurse.png"
blocks:
- map: false
  text: |-
    # Stand in solidarity with NHS picket lines

    Thousands of brave nurses, ambulance and NHS workers will be walking out over pay and conditions and to save our NHS. Join them on the picket lines to show your support and gratitude for the NHS.

    Find your nearest strike and keep scrolling for ideas on how to show your solidarity on the picket lines on **18th, 19th and 23rd January** and beyond.

    Powered by [Strike Map UK](https://strikemap.co.uk/)

    {% include strikes.html id="strike-map" %}
  id: pickets
  buttons:
  - text: See Map
    target: https://strikemap.co.uk/union/rcn
    image: ''
    new_tab: true
  decoration: |2-

    [![](/assets/images/screenshot-2022-12-06-at-22-45-28-strikemap-uk-find-your-nearest-strike.png)](https://strikemap.co.uk/union/rcn "See picket locations")
  background_image: ''
- map: false
  text: "# Window posters\n\nA really easy action you can take to support the NHS
    workers on strike is to print off our Pay NHS Heroes A Hero's Wage poster and
    put it up in your window.\n\nPut them up at home, at work, at school, in local
    shop windows, anywhere and everywhere!  Scroll on for online versions to share
    on socials too. \n\nThis beautiful linocut poster was created by [Suzy Riot](https://suzyriot.com/)"
  id: posters
  buttons:
  - text: Download window poster
    target: https://actionnetwork.org/user_files/user_files/000/085/083/original/Pay_NHS_Heroes_poster.png
    image: ''
    new_tab: true
  decoration: "![](/assets/images/Pay NHS Heroes poster small.png)"
  background_image: ''
- map: false
  text: |-
    # Solidarity Action Guide

    There's lots of ways to show your solidarity - from window posters to massive banner drops or simply showing up on the picket lines with some solidari-tea and biscuits for strikers.

    Read the action guide for more ideas and resources to help build a massive wave of public support for NHS workers.
  id: solidarity
  buttons:
  - text: Solidarity Action Guide
    target: https://docs.google.com/document/d/1SdvgUohM9CrRod8QbWmyvCu9yBC4qLeCm7xI0XgxF6U/edit#
    image: ''
    new_tab: false
  decoration: '    <iframe width="560" height="315" src="https://www.youtube.com/embed/7HD9_idrM8Y"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  background_image: ''
- map: false
  text: |-
    # Show your support online

    Share the example tweets {% include resize.html mobile="below" desktop="on the right" %}
  id: online
  buttons:
  - text: Social Media pack (coming soon)
    target: ''
    image: ''
    new_tab: false
  - text: Tweet your support
    target: https://ctt.ac/3tf7e
    image: ''
    new_tab: false
  - text: Facebook share
    target: https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdefundclimatechaos.uk%2Fnhs
    image: ''
    new_tab: false
  decoration: |-
    {% assign tweets = site.data.tweets | where: "category", "NHS Strike" | map: "text"  %}
    {% include tweetslight.html tweets=tweets %}
  background_image: ''
- map: false
  text: |-
    # Watch our workshop

    ### Click here: [Picket line conversations on health and climate justice](https://youtu.be/LRnXpkpLlKU)

    How do you start conversations to connect health workers concerns with climate justice on the picket line? How do you link the climate crisis with cost of living crisis & the workers' demands? What are the pitfalls to avoid?

    Join this training to gain tips and confidence in having those conversations. This session will pay particular attention to the connections between health and climate justice to support your conversations and show solidarity on the picket lines.
  id: ''
  buttons: []
  decoration: ''
  background_image: ''
- map: false
  text: |-
    # Donate

    Could you contribute to the nurses strike fund? Donate and find out other ways your can support on the Royal College of Nurses Strike Hub
  id: ''
  buttons:
  - text: Donate
    target: https://www.rcn.org.uk/Get-Involved/Campaign-with-us/Fair-Pay-for-Nursing/Strike-hub
    image: ''
    new_tab: false
  decoration: ''
  background_image: ''
- map: false
  id: register-action
  buttons: []
  decoration: ''
  background_image: ''
  text: |-
    # Register a solidarity action

    Let's show striking NHS workers that millions of us around the country stand with them.   Register today and you'll receive resources and support to organise an NHS solidarity action where you live.

    {% include an-form/base.html endpoint="https://actionnetwork.org/api/v2/forms/d917ffed-2525-455e-94e5-afc7cd1be39b/submissions" button="Register" lines="first-name,email.action-title,action-start-date.action-description.map.submit" %}
- map: false
  text: |-
    # Solidarity Actions

    It’s a really hard decision for NHS nurses and ambulance workers to go out on strike. They want to be on the frontline saving lives, not standing out on the cold picket lines. We need to show them we are with them through a massive wave of public support and warm gratitude.

    Don't see anything planned where you live yet? Scroll on to get everything you need to organise some solidarity (and warm solidari-tea & biscuits!) for NHS nurses where you live.

    {% include nhs-actions-map.html data=site.data.nhs_actions %}
  id: actions
  buttons: []
  decoration: ''
  background_image: ''

---

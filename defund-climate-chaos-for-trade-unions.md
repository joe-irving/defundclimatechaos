---
layout: page
tags: []
title: Defund Climate Chaos For Trade Unions
top_image: ''
top_quote: ''
image: ''
credits: ''
permalink: tu
summary: ''
share:
  whatsapp: ''
  text: ''
  tweet: ''
logo: ''
logo_square: ''
invert: even
header:
  text: |-
    # Defund Climate Chaos for Trade Unions

    The UK is in crisis. Right now, people nationwide are struggling to get by on stagnant wages, which haven’t risen to meet inflation rates nor handle a cost of living crisis. Fair pay, affordable bills, enough to eat and a decent place to live - these aren’t luxuries - they are our rights.

    Alongside this, our climate is breaking down as the world faces extreme heatwaves, droughts, fires, and floods. At the heart of these crises is a rigged finance system. We can’t rely on the establishment to solve our problems. It’s up to us in every workplace and every community.

    It is time for Trade Unions, Climate Justice campaigners and communities to work closer together. With the growing discontent across society about the Cost of Living Crisis and the wave of strikes happening across the UK, we must seize the opportunity to build alliances and a mass movement working for better lives for all and protect our natural resources and planet.

    {% include an-email-only-form.html endpoint="https://actionnetwork.org/api/v2/petitions/e0c7e2f4-925f-448c-9558-57c1997b5408/signatures" jump="actions" %}
  buttons: []
  border_bottom:
    image: ''
    reflect: false
blocks:
- map: false
  text: "# Sign our open Letter: \n\n# Support workers & Defund Climate Chaos to end
    the Cost of Living Crisis"
  id: ''
  buttons:
  - text: Sign now
    target: "/cost-of-living"
    image: ''
    new_tab: false
  decoration: "![](/assets/images/stopeacop.jpg)"
  background_image: ''
- map: false
  text: |-
    # Join a picket line

    Our current economic system functions to ensure that corporations, banks, and economic institutions profit from crises - the Cost of Living Crisis and climate crisis, are the same crisis. Our economic system is designed by and for the wealthy elite at the expense of working people. Profits at the top are made at the expense of the rest of us, and depend upon the exploitation of people and planet by banks, investors, insurers and fossil fuel corporations.

    Today’s economic system is pushing millions of people in the UK into poverty as costs spiral, tomorrow it will crash our climate and starve billions. Support workers’ strikes and show solidarity on their picket lines.

    Powered by [Strike Map UK](https://strikemap.co.uk/)

    {% include strikes.html id="strike-map" %}
  id: strikes
  buttons:
  - text: View map
    target: "#strike-map"
    image: ''
    new_tab: false
  decoration: "[![](/assets/images/strike_map.png)](#strike-map)"
  background_image: ''
- map: false
  text: |-
    # Join our Trade Union briefings

    {% assign posts = site.actions | where: "type", "Trade Union Briefing" | where: "future", 1 %}
    {% include blog-list.html limit=4 date_field="start_date" %}
  id: ''
  buttons:
  - text: Watch Fossil Finances TU briefing
    target: https://youtu.be/H53vjdPbkgM
    image: ''
    new_tab: false
  decoration: "# Image?"
  background_image: ''
- map: false
  text: |-
    # Pass a motion

    We must put an end to the expansion of fossil fuels and tackle the UK finance sector that is funding it across the world. Trade Unionists can use this model motion to progress those demands in their Branches, Trades Councils and their national trade unions.
  id: ''
  buttons:
  - text: Download the motion
    target: https://docs.google.com/document/d/1sdOMdCni24zmyyCjnLLJwXN5Vfd2xQy5/preview
    image: ''
    new_tab: false
  - text: How to pass a motion
    target: https://docs.google.com/document/d/1O1spBc6rS2wDreCZyAI2cECS-iJD85hB6tljyM4df70/preview
    image: ''
    new_tab: false
  decoration: ''
  background_image: ''
- map: false
  text: |-
    # Other Trade Union briefings

    We have ran other briefings in collaboration with Tipping Point UK and different groups & coalitions. Access recordings and model motions here:

    {% assign posts = site.briefings %}
    {% include blog-list.html date=false %}
  id: briefings
  buttons: []
  decoration: ''
  background_image: ''

---

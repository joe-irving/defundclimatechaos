---
layout: home
image: /assets/images/og-image.png
credits:
  - name: Why? Image
    link: https://climatevisuals.org/groupitem/20/
    info: G.M.B. Akash / Panos Pictures
  - name: What? Image
    link: https://flic.kr/p/p3LM3R
    info: |-
      Taken by Shadia Fayne Wood at the Peoples Climate March NYC. Source: [survivalmediaagency.com](https://survivalmediaagency.com)
blocks:
- type: header
  text: |-
    # TURN OFF THE MONEY PIPELINE TO FOSSIL FUELS. **NOW.**

    UK banks, asset managers and insurers are pumping billions of pounds into fossil fuels that worsen the climate crisis. Ahead of the UN climate talks, on October 29<sup>th</sup> groups around the world and UK are rising up to demand that that the UK government and corporations **#DefundClimateChaos**.
  buttons:
    - text: Act now
      target: "#how"
  full: true
  border_bottom:
    image: /assets/images/money-border.gif
    reflect: true
- type: image
  image: https://live.staticflickr.com/3854/15127575129_096a839142_c.jpg
  text: |-
    # What's happening?

    On the eve of UN climate talks in Glasgow, people-powered actions and
    climate justice memorials will make it clear - in location and message
    alike - at whose doorstep the blame for the loss and damage of climate
    injustice lies.

    On October 29, people around the world are joining together to demand that
    bankers, insurers and fund managers **Defund Climate Chaos**.  

    It’s past time to turn off the money pipeline to oil, coal and gas companies
    and start investing in climate justice and a safer future for us all.
  buttons:
    - text: Join an action
      target: "#map"
    - text: Register an action
      target: https://actionnetwork.org/events/new?event_campaign_id=13583
- type: image
  image: /assets/images/05_DarrenCullen_HSBC_Norwich2021-1200.jpg
  text: |-
    # Why?

    ## With enough people power, we can force financiers to defund climate chaos. Join us.

    We all know that the climate crisis means code red for humanity.  We see its raging fires, floods and storms around us every day now.

    Yet whilst the planet literally burns, the world’s biggest financiers keep pouring billions of pounds each year into fuelling the fire.  They are failing us all.

    Climate justice demands that we shut off the money pipeline to oil, coal and gas immediately.
  buttons:
    - target: "#faqs"
      text: "Read more"
- type: text
  text: |-
    # How

    ## Get trained

    {% assign posts = site.trainings %}
    {% include blog-list.html limit=3  %}

    [See all upcoming trainings...](/trainings)

    ## Resources

    Here are all the resources you’ll need to join or organise an action of your own to #DefundClimateChaos on October 29 (and beyond!):

    {% assign posts = site.data.resources %}
    {% include blog-list.html date=false %}
- type: text
  text: |-
    # Updates

    ## News

    {% assign posts = site.posts %}
    {% include blog-list.html limit=3  %}

    [See all news...](/news)

    ## Email Updates

    {% include signup-form.html %}
- type: image
  heading: FAQs
  image: /assets/images/03_BusStop_StandardChartered_Liverpool_2021-1024x768.jpeg
  text: |-
    {% assign posts = site.data.faqs %}
    {% include blog-list.html date=false accordian=true %}
- type: text
  wide: true
  text: |-

    {% include partner-list.html %}
---

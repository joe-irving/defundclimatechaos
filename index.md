---
layout: page
image: "/assets/images/og-image.png"
blocks:
- buttons:
  - text: Register an action
    target: https://actionnetwork.org/events/new?event_campaign_id=13806
  - text: Join an action
    target: "#map"
  decoration: "![](/assets/images/red_lines_cop21_paris_2015.jpeg)"
  text: |-
    # What’s happening?

    Today, the youth climate movement around the world want you to join them and demand that bankers, insurers and fund managers **Defund Climate Chaos**.

    On the eve of UN climate talks, led by communities on the frontline of climate impacts, people will lay climate justice memorials outside the UK’s biggest fossil financiers to make it clear at whose doorstep the blame for the climate crisis lies.

    It’s past time to turn off the money pipeline to oil, coal and gas companies and start investing in climate justice and a safer future for us all.
  map: false
  background_image: ''
  id: what
- buttons: []
  text: |-
    # Add your tribute

    {% include signup-form.html %}
  decoration: "![](/assets/images/climate-justice-now-sign-yacap-climate-strike-2020.png)"
  map: false
  background_image: ''
  id: join
- map: true
  text: ''
  buttons: []
  decoration: ''
  background_image: ''
  id: ''
- buttons:
  - target: "#what-s-happening-on-october-29th"
    text: Read more
  text: |-
    # Why?

    ## **With enough people power, we can force financiers to defund climate chaos. Join us.**

    The climate crisis means “**code red for humanity**”. We see the reality raging around us with floods, wildfires and storms every day.

    Yet whilst the planet literally burns, the UK’s biggest financiers keep pouring billions of pounds each year into fuelling the fire. **Barclays, HSBC, Lloyds of London** to name just a few - they still fund fossil fuels.

    Climate justice demands that we harness our people power to shut off the money pipeline to oil, coal and gas immediately.
  decoration: "![](/assets/images/alarm.png)"
  map: false
  background_image: ''
  id: why
- buttons:
  - text: All trainings
    target: "/trainings"
  text: |-
    # Training and Action Planning Sessions

    {% assign events = site.trainings | sort: "start_date" %}
    {% include events-gallery.html date_field='start_date' %}
  decoration: ''
  background_image: "/assets/images/xr-shrewsbury-hsbc-brandalism.jpeg"
  map: false
  id: trainings
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
- text: |-
    # Partners

    This day of action is supported by a number of UK groups.  We are working closely with allied networks all around the world as part of the [Defund Climate Chaos global day of action](http://defundclimatechaos.org).
  buttons:
  - text: Add your group
    target: "/partners/#register-group"
  - target: "/partners"
    text: See all partners
  decoration: "![](/assets/images/gb84256-web-res.jpg)"
  map: false
  background_image: ''
  id: partners
credits: ''
header:
  full: true
  image:
    link: "/assets/images/money-faucet.png"
    location: left
  text: |-
    # Turn off the money pipeline to fossil fuels. Now.

    UK banks, investors and insurers are fuelling climate chaos by pumping billions of pounds into fossil fuels each year.

    Today, ahead of UN climate talks, groups around the world are rising up to demand that governments and corporations **#DefundClimateChaos**.
  buttons:
  - text: Add to the memorial
    target: "#tribute"
  border_bottom:
    image: "/assets/images/money-border.gif"
    reflect: true
invert: odd

---

---
layout: page
image: "/assets/images/og-image.png"
blocks:
- buttons:
  - text: Register an action
    target: https://actionnetwork.org/events/new?event_campaign_id=13583
  - text: Join an action
    target: "https://actionnetwork.org/event_campaigns/defundclimatechaos-global-day-of-action"
  decoration: "![](/assets/images/03_BusStop_StandardChartered_Liverpool_2021-1024x768.jpeg)"
  text: |-
    # What’s happening?

    On the eve of UN climate talks in Glasgow, people-powered actions and climate justice memorials will make it clear - in location and message alike - at whose doorstep the blame for the loss and damage of climate injustice lies.

    On October 29, people around the world are joining together to demand that bankers, insurers and fund managers **Defund Climate Chaos**.

    It’s past time to turn off the money pipeline to oil, coal and gas companies and start investing in climate justice and a safer future for us all.
- buttons:
  - target: "#faqs"
    text: Read more
  text: |-
    # Why?

    ## With enough people power, we can force financiers to defund climate chaos. Join us.

    We all know that the climate crisis means code red for humanity. We see its raging fires, floods and storms around us every day now.

    Yet whilst the planet literally burns, the world’s biggest financiers keep pouring billions of pounds each year into fuelling the fire. They are failing us all.

    Climate justice demands that we shut off the money pipeline to oil, coal and gas immediately.
  decoration: "![](/assets/images/alarm.png)"
- buttons: []
  text: |-
    # Training and Action Planning Sessions

    {% comment %}

    ## This week

    {% assign posts_dates = site.trainings | sort: "date" | map: "date" %}
    {% assign no_posts = 0 %}
    {% assign now_week = 'now | date: "%W" %}
    {% for date in posts_dates %}
      {% assign post_week = date | date: "%W" %}
      {% if post_week == now_week %}
        {% assign no_posts = no_posts | plus: 1 %}
      {% endif  %}
    {% endfor %}
    {% assign posts = site.trainings | sort: "date" %}
    {% include blog-list.html summary=false limit=no_posts %}

    {% endcomment %}

    {% assign events = site.trainings | sort: "date" %}
    {% include events-gallery.html %}

    [See all upcoming trainings...](/trainings)
  decoration: ''
  background_image: "/assets/images/street-mural.png"
- buttons: []
  text: "## Resources\n\nHere are all the resources you’ll need to join or organise
    an action of your own to #DefundClimateChaos on October 29 (and beyond!):\n\n{% include resources.html %}"
  decoration: ''
- buttons: []
  text: "# Stories\n\n{% assign posts = site.posts %}  \n{% include blog-list.html
    limit=4 thumbnail=true date=false alternate_direction=true %}\n\n[See all stories...](/news)"
  decoration: ''
- buttons: []
  text: |-
    # Act

    Sign up to join the global mobilisation.

    {% include signup-form.html %}
  decoration: "![](/assets/images/nurses_positive_money.jpg)"
- buttons: []
  text: |-
    # FAQs

    {% include accordion.html data=site.data.faqs %}
  decoration: ''
- text: |-
    # Partners

    This day of action is made of an ecosystem of groups from all around the UK.
  buttons:
  - text: Register
    target: "/partners/#register-group"
  - target: "/partners"
    text: See all
  decoration: "![](/assets/images/positive_money.jpg)"
credits: ''
header:
  full: true
  image:
    link: "/assets/images/money-faucet.png"
    location: left
  text: |-
    {% include counter.html %} until 29th October

    # Turn off the money pipeline to fossil fuels. Now.

    UK banks, asset managers and insurers are pumping billions of pounds into fossil fuels that worsen the climate crisis. Ahead of the UN climate talks, on October 29th groups around the world and UK are rising up to demand that that the UK government and corporations **#DefundClimateChaos**.
  buttons:
  - text: Act Now
    target: "#act"
  border_bottom:
    image: "/assets/images/money-border.gif"
    reflect: true
invert: even

---

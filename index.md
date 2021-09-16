---
layout: page
image: "/assets/images/og-image.png"
blocks:
- buttons:
  - text: Register an action
    target: https://actionnetwork.org/events/new?event_campaign_id=13583
  - text: Join an action
    target: "#map"
  decoration: "![](/assets/images/03_BusStop_StandardChartered_Liverpool_2021-1024x768.jpeg)"
  text: |-
    # What’s happening?

    On October 29, people around the world are joining together to demand that bankers, insurers and fund managers **Defund Climate Chaos**.

    On the eve of UN climate talks in Glasgow, people will take action and lay climate justice memorials to make it clear - in location and message alike - at whose doorstep the blame for climate injustice lies.

    It’s past time to turn off the money pipeline to oil, coal and gas companies and start investing in climate justice and a safer future for us all.
  map: false
  background_image: ''
- map: true
  text: ''
  buttons: []
  decoration: ''
  background_image: ''
- buttons:
  - target: "#faqs"
    text: Read more
  text: |-
    # Why?

    ## With enough people power, we can force financiers to defund climate chaos. Join us.

    We all know that the climate crisis means code red for humanity. We see its raging fires, floods and storms around us every day now.

    Yet whilst the planet literally burns, the world’s biggest financiers keep pouring billions of pounds each year into fuelling the fire. Barclays, HSBC, Lloyds to name just a few - they are failing us.

    Climate justice demands that we harness our people power to shut off the money pipeline to oil, coal and gas immediately.
  decoration: "![](/assets/images/alarm.png)"
  map: false
  background_image: ''
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
  background_image: "/assets/images/180809-sfe-climatemarchpreview_4-1024x768.jpeg"
  map: false
- buttons: []
  text: |-
    ## Resources

    Here are all the resources you’ll need to join or organise an action of your own to #DefundClimateChaos on October 29 (and beyond!):

    {% include resources.html %}
  decoration: ''
  map: false
  background_image: ''
- buttons: []
  text: "# Stories\n\n{% assign posts = site.posts %}  \n{% include blog-list.html
    limit=4 thumbnail=true date=false alternate_direction=true %}\n\n[See all stories...](/news)"
  decoration: ''
  map: false
  background_image: ''
- buttons: []
  text: |-
    # Act

    Sign up to join the global mobilisation.

    {% include signup-form.html %}
  decoration: "![](/assets/images/nurses_positive_money.jpg)"
  map: false
  background_image: ''
- buttons: []
  text: |-
    # FAQs

    {% include accordion.html data=site.data.faqs %}
  decoration: ''
  map: false
  background_image: ''
- text: |-
    # Partners

    This day of action is made of an ecosystem of groups from all around the UK.
  buttons:
  - text: Register
    target: "/partners/#register-group"
  - target: "/partners"
    text: See all
  decoration: "![](/assets/images/positive_money.jpg)"
  map: false
  background_image: ''
credits: ''
header:
  full: true
  image:
    link: "/assets/images/money-faucet.png"
    location: left
  text: "{% include counter.html %} until 29th October\n\n# Turn off the money pipeline
    to fossil fuels. Now.\n\nUK banks, asset managers and insurers are pumping billions
    of pounds into fossil fuels that worsen the climate crisis. \n\nAhead of the UN
    climate talks, on October 29th groups around the world and UK are rising up to
    demand that that the UK government and corporations **#DefundClimateChaos**."
  buttons:
  - text: Act Now
    target: "#act"
  border_bottom:
    image: "/assets/images/money-border.gif"
    reflect: true
invert: even

---

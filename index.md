---
layout: page
image: "/assets/images/og-image.png"
blocks:
- buttons:
  - text: Register an action
    target: https://actionnetwork.org/events/new?event_campaign_id=13583
  - text: Join an action
    target: "#map"
  decoration: "![](/assets/images/red_lines_cop21_paris_2015.jpeg)"
  text: |-
    # What’s happening?

    On October 29, people around the world are joining together to demand that bankers, insurers and fund managers **Defund Climate Chaos**.

    On the eve of UN climate talks in Glasgow, people will lay climate justice memorials outside the UK's biggest fossil financiers to make it clear at whose doorstep the blame for the climate crisis lies.

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
  text: "# Why?\n\n## With enough people power, we can force financiers to defund
    climate chaos. Join us.\n\nWe've all heard that the climate crisis means \"**code
    red for humanity**\". We see the reality raging around us with wildfires, fires,
    floods and storms every day.  \n\nYet whilst the planet literally burns, the UK’s
    biggest financiers keep pouring billions of pounds each year into fuelling the
    fire. **Barclays, HSBC, Lloyds** to name just a few - they are failing us.\n\nClimate
    justice demands that we harness our people power to shut off the money pipeline
    to oil, coal and gas immediately."
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
  background_image: "/assets/images/41363513_1776146282501405_6945596299618025472_o-600x600.jpeg"
  map: false
- buttons: []
  text: |-
    # Resources

    Here are all the resources you’ll need to join or organise an action of your own to #DefundClimateChaos on October 29 (and beyond!):

    {% include resources.html %}
  decoration: ''
  map: false
  background_image: ''
- buttons:
  - text: Share a story
    target: mailto:chris@defundclimatechaos.uk
  text: "# Stories\n\n{% assign posts = site.posts %}  \n{% include blog-list.html
    limit=4 thumbnail=true date=false alternate_direction=true %}\n\n[See all stories...](/news)"
  decoration: "![](/assets/images/23-04-21-lloyds-london-coal-protest-gareth-morris-19.jpg)"
  map: false
  background_image: ''
- buttons: []
  text: |-
    # Stay updated

    Sign up to get all the latest news, updates and materials you'll need as we get closer to October 29

    {% include signup-form.html %}
  decoration: "![](/assets/images/climate-justice-now-sign-yacap-climate-strike-2020.png)"
  map: false
  background_image: ''
- buttons: []
  text: |-
    # Find out more

    Some frequently asked questions and answers

    {% include accordion.html data=site.data.faqs %}
  decoration: ''
  map: false
  background_image: ''
- text: |-
    # Partners

    This day of action is between a number of UK groups working closely with allied networks [all around the world](http://defundclimatechaos.org).
  buttons:
  - text: Register
    target: "/partners/#register-group"
  - target: "/partners"
    text: See all
  decoration: "![](/assets/images/barclays-greenpeace-j-rizak.jpeg)"
  map: false
  background_image: ''
credits: ''
header:
  full: true
  image:
    link: "/assets/images/money-faucet.png"
    location: left
  text: |-
    #### Countdown to 29 October:   {% include counter.html %}

    # Turn off the money pipeline to fossil fuels. Now.

    UK banks, investors and insurers are pumping billions of pounds into fossil fuels that worsen the climate crisis.

    On **October 29th**, ahead of UN climate talks, groups around the world and UK are rising up to demand that the UK government and corporations **#DefundClimateChaos**.
  buttons:
  - text: Act Now
    target: "#act"
  border_bottom:
    image: "/assets/images/money-border.gif"
    reflect: true
invert: odd

---

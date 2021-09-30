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

    On October 29, the youth climate movement around the world want you to join them and demand that bankers, insurers and fund managers **Defund Climate Chaos**.

    On the eve of UN climate talks, led by communities on the frontline of climate impacts, people will lay climate justice memorials outside the UK’s biggest fossil financiers to make it clear at whose doorstep the blame for the climate crisis lies.

    It’s past time to turn off the money pipeline to oil, coal and gas companies and start investing in climate justice and a safer future for us all.
  map: false
  background_image: ''
  id: what
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

    We’ve all heard that the climate crisis means “**code red for humanity**”. We see the reality raging around us with floods, wildfires and storms every day.

    Yet whilst the planet literally burns, the UK’s biggest financiers keep pouring billions of pounds each year into fuelling the fire. **Barclays, HSBC, Lloyds of London** to name just a few - they are failing us.

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
  background_image: "/assets/images/41363513_1776146282501405_6945596299618025472_o-600x600.jpeg"
  map: false
  id: trainings
- buttons: []
  text: |-
    # Resources

    Here are all the resources you’ll need to join or organise an action of your own to #DefundClimateChaos on October 29 (and beyond!):

    {% include resources.html %}
  decoration: ''
  map: false
  background_image: ''
  id: ''
- buttons: []
  text: |-
    # Get updates

    Sign up to get all the latest news and materials you'll need to take action on October 29.

    [Find an event on the map](https://defundclimatechaos.uk/#map) to attend near you or [sign up to host your own event](https://actionnetwork.org/events/04aef390f9ed2e182154029889a339e3e6b27d36/edit).

    {% include signup-form.html %}
  decoration: "![](/assets/images/climate-justice-now-sign-yacap-climate-strike-2020.png)"
  map: false
  background_image: ''
  id: join
- buttons:
  - text: See all
    target: "/stories"
  - text: Share a story
    target: mailto:stories@defundclimatechaos.uk
  text: "# Stories\n\n{% assign posts = site.posts %}  \n{% include blog-list.html
    limit=4 thumbnail=true date=false alternate_direction=true %}"
  decoration: "![](/assets/images/23-04-21-lloyds-london-coal-protest-gareth-morris-19.jpg)"
  map: false
  background_image: ''
  id: stories
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
  decoration: "![](/assets/images/barclays-greenpeace-j-rizak.jpeg)"
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
    #### Countdown to 29 October: {% include counter.html %}

    # Turn off the money pipeline to fossil fuels. Now.

    UK banks, investors and insurers are fuelling climate chaos by pumping billions of pounds into fossil fuels each year.

    On **October 29th**, ahead of UN climate talks, groups around the world are rising up to demand that governments and corporations **#DefundClimateChaos**.
  buttons:
  - text: Act Now
    target: "#map"
  border_bottom:
    image: "/assets/images/money-border.gif"
    reflect: true
invert: odd

---

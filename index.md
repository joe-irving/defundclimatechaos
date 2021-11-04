---
layout: page
image: "/assets/images/dcc-og-image.jpeg"
blocks:
- map: false
  text: |-
    #### October 29th was historic - and it was only the beginning of a movement rising around the world to Defund Climate Chaos together.

    #### Watch this powerful climate memorial outside the Bank of England when Pacific islanders called out the banks, insurers and fund managers and demanded climate justice for their frontline communities.
  id: ''
  buttons:
  - text: YouTube
    target: https://youtu.be/0_Oj6v5Wb80
  - text: Instagram
    target: 'https://www.instagram.com/p/CVqhynShUZ0/ '
  - text: Twitter
    target: 'https://twitter.com/TippingPointorg/status/1454538402485972999 '
  - text: Facebook
    target: 'https://www.facebook.com/watch/?v=2178596408947820 '
  decoration: ''
  background_image: ''
  embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/0_Oj6v5Wb80"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
- map: false
  text: "# Latest highlights"
  id: highlights
  buttons:
  - text: Press Release
    target: "/media"
  decoration: ''
  background_image: ''
  embed: ''
- embed: "{% include curator.html %}"
  map: false
  text: ''
  id: ''
  buttons: []
  decoration: ''
  background_image: ''
- map: false
  text: |-
    # What's next? 6 November

    COP26 opens on Sunday in Glasgow and on 6th November the COP26 coalition have called a [Global Day for Climate Justice](https://cop26coalition.org/gda/) with mass marches, rallies and actions around the world.

    ### In London?

    Join us back at the Bank of England at 12pm on 6th November for the [Climate Reparations Block](https://climatereparations.uk/#join).

    <link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css' /><script src='https://actionnetwork.org/widgets/v4/event/climate-reparations-bloc?format=js&source=widget'></script><div id='can-event-area-climate-reparations-bloc' style='width: 100%'><!-- this div is the target for our HTML insertion --></div>


    ### In Glasgow?

    Join the Global Day of Action for Climate Justice in Glasgow from 11.30am:

    <link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css'/>
    <script src='https://actionnetwork.org/widgets/v4/event/glasgow-global-day-of-action-for-climate-justice-6th-nov?format=js&source=widget'></script>
    <div id='can-event-area-glasgow-global-day-of-action-for-climate-justice-6th-nov' style='width: 100%'><!-- this div is the target for our HTML insertion --></div>

    ### Other cities?

    [Join Global Day for Climate Justice where you are](https://cop26coalition.org/gda/) - 100s of marches and rallies around the world.
  id: next
  buttons:
  - target: https://cop26coalition.org/gda/
    text: Find an action near you on 6 November
  decoration: "![](/assets/images/main-logo-gda.jpeg)"
  background_image: ''
  embed: ''
- buttons:
  - text: Act today
    target: "#map"
  - text: What next?
    target: "#next"
  decoration: "![](/assets/images/climate-justice-now-sign-yacap-climate-strike-2020.png)"
  text: |-
    # Join the movement

    On 29th October, the youth climate movement around the world rose in their thousands at over 100 actions demanding that bankers, insurers and fund managers **Defund Climate Chaos**.

    {% include signup-form.html %}

    On the eve of UN climate talks, communities on the frontline of climate impacts laid climate justice memorials outside the UK’s biggest fossil financiers to make it clear at whose doorstep the blame for the climate crisis lies.
  map: false
  background_image: ''
  id: join
  embed: ''
- buttons: []
  text: |-
    # Add your tribute

    Add your tribute to the National Climate Memorial today, and and see it appear below on the map!

    <link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css' /><script src='https://actionnetwork.org/widgets/v4/form/your-message-for-the-national-climate-justice-memorial?format=js&source=widget'></script><div id='can-form-area-your-message-for-the-national-climate-justice-memorial' style='width: 100%'><!-- this div is the target for our HTML insertion --></div>
  decoration: "![](/assets/images/alarm.png)"
  map: false
  background_image: ''
  id: tribute
  embed: ''
- embed: '<iframe src="/boe-memorial" id="tribute-map" class="Chaos-Map" style="height:
    80vh;width: 100%;border: none;padding: 0;margin: 0;"  height=100% width=100% frameborder="0"></iframe>'
  map: false
  text: ''
  id: ''
  buttons: []
  decoration: ''
  background_image: ''
- buttons:
  - target: "#what-s-happening-on-october-29th"
    text: Read more
  text: |-
    # Why?

    ## **With enough people power, we can force financiers to defund climate chaos. Join us.**

    The climate crisis means “**code red for humanity**”. We see the reality raging around us with floods, wildfires and storms every day.

    Yet whilst the planet literally burns, the UK’s biggest financiers keep pouring billions of pounds each year into fuelling the fire. **Barclays, HSBC, Lloyds of London** to name just a few - they still fund fossil fuels.

    Climate justice demands that we harness our people power to shut off the money pipeline to oil, coal and gas immediately.
  decoration: ''
  map: false
  background_image: ''
  id: why
  embed: ''
- buttons: []
  text: |-
    # Resources

    Want to keep organising to #DefundClimateChaos beyond today.   Here's all the resources you’ll need to keep taking action throughout COP26 and beyond

    {% include resources.html %}
  decoration: ''
  map: false
  background_image: ''
  id: ''
  embed: ''
- buttons: []
  text: |-
    # Find out more

    Some frequently asked questions and answers

    {% include accordion.html data=site.data.faqs %}
  decoration: ''
  map: false
  background_image: ''
  id: faqs
  embed: ''
- text: |-
    # Partners

    This day of action is supported by a number of UK groups.  We are working closely with allied networks all around the world as part of the [Defund Climate Chaos global day of action](http://defundclimatechaos.org).

    {% include partner-list.html background='light' %}
  buttons:
  - text: Add your group
    target: "/partners/#register-group"
  - target: "/partners"
    text: See all partners
  decoration: "![](/assets/images/gb84256-web-res.jpg)"
  map: false
  background_image: ''
  id: partners
  embed: ''
credits: ''
header:
  full: true
  image:
    link: "/assets/images/money-faucet.png"
    location: left
  text: |-
    # What a whirlwind!

    ##### October 29th was the largest day of action against fossil finance in history.  Throughout the day, people rose up in their thousands around the world outside major banks, investors and insurers fuelling climate chaos.

    ##### Here in the UK, we remember, we resist and we rise with all those on the frontlines of the climate crisis who seek justice. Join us.
  buttons:
  - text: What's next?
    target: https://cop26coalition.org/gda/
  - text: Share highlights
    target: "#feed"
  - text: Join Us
    target: "/#join"
  border_bottom:
    image: "/assets/images/money-border.gif"
    reflect: true
invert: odd

---

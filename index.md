---
layout: page
image: "/assets/images/og-image.png"
blocks:
- map: false
  text: |-
    # Latest highlights

    <!-- Place <div> tag where you want the feed to appear -->
    <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div>
    <!-- The Javascript can be moved to the end of the html page before the </body> tag -->
    <script type="text/javascript">
    /* curator-feed-default-feed-layout */
    (function(){
    var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
    i.src = "https://cdn.curator.io/published/6c7a9bd6-3d0a-407a-964c-3357a547bf40.js";
    e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
    })();
    </script>
  id: ''
  buttons: []
  decoration: ''
  background_image: ''
- buttons:
  - text: Register an action
    target: https://actionnetwork.org/events/new?event_campaign_id=13806
  - text: Join an action
    target: "#map"
  decoration: "![](/assets/images/climate-justice-now-sign-yacap-climate-strike-2020.png)"
  text: |-
    # Join the movement

    Today, the youth climate movement around the world are rising in their thousands with over 100 actions demanding that bankers, insurers and fund managers **Defund Climate Chaos**.

    On the eve of UN climate talks, communities on the frontline of climate impacts are laying climate justice memorials outside the UK’s biggest fossil financiers to make it clear at whose doorstep the blame for the climate crisis lies.

    {%  assign an_event_slug = "https://actionnetwork.org/events/london-global-day-of-action-for-climate-justice-6th-nov" | split: "://" | last | split: "/" | last %}
    <link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css'/>
    <script src='https://actionnetwork.org/widgets/v4/event/{{ an_event_slug }}?format=js&source=widget'></script>
    <div id='can-event-area-{{ an_event_slug }}' style='width: 100%'><!-- this div is the target for our HTML insertion --></div>
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
- map: false
  text: |-
    # What's next? 6 November

    COP26 opens on Sunday in Glasgow and on 6th November the COP26 coalition have called a [Global Day for Climate Justice](https://cop26coalition.org/gda/) with mass marches, rallies and actions around the world.

    ### In Glasgow?

    [Join the Global Day of Action for Climate Justice in Glasgow]() from 11.30am

    ### In London?

    Join us back at the Bank of England at 12pm on 6th November for the [Climate Reparations Block](https://climatereparations.uk/#join).

    ### Other cities?

    [Join Global Day for Climate Justice where you are](https://cop26coalition.org/gda/) - 100s of marches and rallies around the world.
  id: ''
  buttons:
  - target: https://cop26coalition.org/gda/
    text: Find an action near you on 6 November
  decoration: "![](/assets/images/main-logo-gda.jpeg)"
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
  decoration: "![](/assets/images/alarm.png)"
  map: false
  background_image: ''
  id: why
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
    # It's happening now

    Throughout the day, as thousands of people rise up around the world, we'll bring you all the latest from actions outside the UK banks, investors and insurers  fuelling climate chaos.

    Join us in person if you can, light a lantern for climate justice at 6pm and help spread the word online using **#DefundClimateChaos**.
  buttons:
  - text: Add to the memorial
    target: "#tribute"
  border_bottom:
    image: "/assets/images/money-border.gif"
    reflect: true
invert: odd

---

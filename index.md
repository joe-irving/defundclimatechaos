---
layout: page
image: "/assets/images/og-image.png"
blocks:
- embed: |-
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
- buttons: []
  text: |-
    # Join the movement

    As the COP26 discussions begin in Glasgow, we start our

    On 6th November, we come back together to at the National Climate Justice memorial
    as part of the [global day for climate justice](https://cop26coalition.org/gda/). Sign
    up below to be part of the London action, and see the [map](https://cop26coalition.org/map/)
    for all the other actions.

    {%  assign an_event_slug = "https://actionnetwork.org/events/london-global-day-of-action-for-climate-justice-6th-nov" | split: "://" | last | split: "/" | last %}
    <link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css'/>
    <script src='https://actionnetwork.org/widgets/v4/event/{{ an_event_slug }}?format=js&source=widget'></script>
    <div id='can-event-area-{{ an_event_slug }}' style='width: 100%'><!-- this div is the target for our HTML insertion --></div>
  decoration: "![](/assets/images/climate-justice-now-sign-yacap-climate-strike-2020.png)"
  map: false
  background_image: ''
  id: join
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

    Here are all the resources you’ll need to join or organise an action of your own to #DefundClimateChaos on October 29 (and beyond!):

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
  - text: Join us
    target: "#join"
  border_bottom:
    image: "/assets/images/money-border.gif"
    reflect: true
invert: odd

---

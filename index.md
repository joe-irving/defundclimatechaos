---
layout: page
image: "/assets/images/og-image.png"
blocks:
- buttons: []
  decoration: "{% assign campaigns = site.data.campaigns | where: 'status', 'Published'
    %} {% include campaign-list.html data=campaigns %}"
  text: |-
    {% assign campaign = site.data.campaigns | find: 'status', 'Pinned' %}

    [![]({{ campaign.image }})]({{ campaign.link }})

    ## [{{ campaign.title }}]({{ campaign.link }})

    {{ campaign.description }}
  map: false
  background_image: ''
  id: campaigns
- buttons:
  - text: Join us
    target: "#join"
    image: ''
    new_tab: false
  - text: Take Action
    target: "#actions"
    image: ''
    new_tab: false
  decoration: "![](/assets/images/20211029_lloyds_of_london_uk_london_ad_8.jpg)"
  text: |-
    # What’s Defund Climate Chaos?

    People across the UK are rising up to demand that bankers, insurers and fund managers **Defund Climate Chaos**, pay [**Climate Reparations**](https://climatereparations.uk/ "Climate Reparations Coalition") and fund a **Global Just Transition**.

    This year we disrupted business as usual at the AGMs of funders and insurers of climate chaos. A whole choir sang through HSBC's AGM, we shouted directly confronted the Barclays chairman stopping him speaking, Standard Chartered were met with devil-horned hecklers and Shell had to stop business as usual as 70 people stormed their AGM. **We halted business as usual.**

    > "We will target you, we will regulate you, we will prosecute you, we will dismantle the economic systems and systems of power that you maintain, we will force you to make reparations for the climate crisis and extractivism that you continue to enable around the world."

    It’s past time to turn off the money pipeline to oil, coal and gas companies and for UK finance to start investing in climate justice and a safer future for us all.

    Back in October 29th, we rose up in the biggest mobilisation against financing of fossil fuels, with thousands taking to the streets across the UK. Join us for the next mass action.
  map: false
  background_image: ''
  id: what
- buttons:
  - target: "#what-s-happening-this-agm-season"
    text: Read more
    image: ''
    new_tab: false
  text: |-
    # Why?

    ## **With enough people power, we can force financiers to defund climate chaos. Join us.**

    The climate crisis means “**code red for humanity**”. We see the reality raging around us with floods, wildfires and storms every day.

    Yet whilst the planet literally burns, the UK’s biggest financiers keep pouring billions of pounds each year into fuelling the fire. **Barclays, HSBC, Lloyds of London** to name just a few - they still fund fossil fuels.

    Climate justice demands that we harness our people power to shut off the money pipeline to oil, coal and gas immediately.
  decoration: |-
    <iframe width="560" height="315" style="max-width: 90vw;" src="https://www.youtube.com/embed/0_Oj6v5Wb80"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  map: false
  background_image: ''
  id: why
- buttons:
  - text: Individual
    target: "/join-us"
    image: "/assets/images/person-clipart-transparent-background-9.png"
    new_tab: false
  - text: Group
    target: "/partners"
    image: "/assets/images/group-clipart-clip-art-group-768x768.png"
    new_tab: false
  text: |-
    # Join Us

    Youth from communities on the frontlines of wildfires and floods, Land Defenders, trade unions, and local campaign groups, we are all joining together to transform the finance system.

    Sign up below to join the Defund Climate Chaos coalition, either as a group (Grassroots, NGO, Union) or individual.
  decoration: ''
  map: false
  background_image: ''
  id: join
- buttons: []
  text: |-
    # Find out more

    Some frequently asked questions and answers

    {% include accordion.html data=site.data.faqs %}
  decoration: ''
  map: false
  background_image: ''
  id: faqs
credits: ''
header:
  full: true
  image:
    link: "/assets/images/money-faucet.png"
    location: left
  text: |-
    ## Turn off the money pipeline to fossil fuels. Now.

    **Money is fuelling climate chaos**. Climate justice means keeping fossil fuels in the ground. We need to stop new coal, oil, gas and fracking project

    **UK banks, investors and insurers are fuelling climate chaos** by pumping billions of pounds into climate wrecking projects. Without that support, companies like Shell and BP, can't fuel climate breakdown.

    People around the world are rising up to demand that governments and corporations **#DefundClimateChaos**, pay **Climate Reparations** and fund a **Global** **Just Transition**.

    {% include an-email-only-form.html endpoint="https://actionnetwork.org/api/v2/petitions/e0c7e2f4-925f-448c-9558-57c1997b5408/signatures" jump="actions" %}
  buttons: []
  border_bottom:
    image: "/assets/images/money-border.gif"
    reflect: true
invert: odd
share:
  whatsapp: 'People around the world are rising up to demand that governments and
    corporations #DefundClimateChaos, pay #ClimateReparations and fund a #GlobalJustTransition
    Take Action www.defundclimatechaos.uk'
  text: 'People around the world are rising up to demand that governments and corporations
    #DefundClimateChaos, pay #ClimateReparations and fund a #GlobalJustTransition
    Take Action www.defundclimatechaos.uk'
  tweet: 'People around the world are rising up to demand that governments and corporations
    #DefundClimateChaos, pay #ClimateReparations and fund a #GlobalJustTransition
    Take Action www.defundclimatechaos.uk'

---

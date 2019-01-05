---
layout: post
bg: "tools.jpg"
title:  "Updating Scrumbot"
crawlertitle: "Scrumbot: Part 2 - Angelo Lu"
summary: "Scrumbot - Part 2: Rebuilding Scrumbot to be more informative and visually interesting"
excerpt: "Rebuilding Scrumbot to be more usable, informative and visually interesting. Now with 100% more 3D printing!"
date:   2018-11-23 10:00:00 +0500
categories: posts
tags: 'blog'
author: angelo lu
---

> This is post 2/2 on the [Scrumbot project](/projects/scrumbot/), read part 1 [here](/posts/scrumbot-tracking-my-cats-feeding/)

A while ago I built a device, nicknamed Scrumbot, that tracks our cat's feeding schedule using an internet connected button that we press when we feed the cat. The button illuminates a LED for 5 hours, indicating that he had already been fed and should not be fed again, no matter how much he meows (he's a gluttonous a**hole). The button also sends a group message to our house chat and updates the [companion web app](https://scrumbot.angelolu.tech/).

While I'm happy to report that Scrumgod (the cat) has maintained a healthy weight for the past bit, I've also noticed a couple issues with the current design:

### Issues with previous iteration

* **Lacks time information**
  * Outside of fading or blinking the single LED, there is no way of knowing if the cat was fed 20 minutes ago or 2 hours ago
* **Lacks visual appeal**
  * Made primarily of cardboard and tape, the design is bulky and not something I would want to prominently display in a room
* **Overall janky electronics**
  * All of the connections are either made by twisting wires together (without soldering) or connected via breadboard. In fact, if you shake this prototype enough, it will register as a button press :(

### A new prototype

These factors led me to work on new iterations of Scrumbot, settling on two design candidates.
1. **Swinging arm**
   * A small servo actuates an arm, swinging one way when the cat is fed and slowly moving the other way as time passes (much like as gas gauge but with time instead of volume).
2. **LED bar**
   * A row of LEDs would light up when the cat is fed and extinguish one by one as time passes

A big part of this iteration is to improve the device's visual appeal. As previously mentioned, this isn't the most practical solution to the feed-tracking problem. Since this is something that's not uber practical, it should at least derive value from looking interesting/appealing (like a piece of art?). I believe that these two designs look the most interesting, while also presenting temporal information in a intuitive way that can be checked with a glance.

In the end, I chose to implement option 2, due to it's solid state design. While I believe option 1 would be more interesting as it incorporates motion, the moving part may be more prone to failure than simple LEDs.

<img src="/assets/images/scrumbotupdatecad.jpg" alt="Scrumbot CAD mock" style="width:80%;max-width:150px;"/>

With a shiny new 3D printer at my disposal, I modeled a case for the new iteration on Fusion 360. The LEDs fit within a protruding bar that also acts as a slight diffuser. All of the parts were made of transparent/white ABS and attached using CA glue. For much improved electronic connections and a dramatic reduction in size, I soldered everything to a protoboard. Soldering the LEDs in the half-assembled case turned out to be the most difficult part of this process as I had to be careful not to touch the case while attaching the wires. Clearly improvements to the design are needed for easier case assembly if I do further iterating. Apart from the new lights, wiring and case, I also swapped out the Adafruit Feather HUZZAH for a cheaper generic nodeMCU clone as I wanted the HUZZAH for other projects.

After slapping on a new label, the newest Scrumbot device was completed!

### Result
Here's an animation of the new device mounted to the cabinet above his bowl.
<img src="/assets/images/scrumbot.gif" alt="New Scrumbot animation" style="width:90%;max-width:700px;"/>

In my opinion this design is much more polished than the previous prototype, an opinion that is shared by my housemates.

For me, this was a lesson in the importance of designing for ease of manufacturing/assembly. Everything fit together quickly and easily in the CAD software but that could not have been further from reality. A moderate amount of sanding was required due to margins for glue and general machine tolerances that were not accounted for. 

As always, let me know if you have questions or would like more detailed explanations/diagrams. :)
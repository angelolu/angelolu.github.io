---
layout: project
bg: "departure_board_cad1.png"
cardbg: "departureboard.gif"
title:  "Departure Board"
crawlertitle: "Departure Board - Angelo Lu"
summary: "Display for visualizing occupancy"
excerpt: "Flipboard-style house occupancy tracker. Let's call it art?"
date:   2020-09-02 10:00:00 +0500
categories: projects
tags: 'projects'
author: angelo lu
tech: ['REST API', 'ESP8266', 'CAD']
---
##### A project by Angelo Lu

<img src="/assets/images/departureboard.gif" alt="departure board on wall" style="width:90%;max-width:650px;"/>

To be totally honest, this was an idea I had in the shower and I thought it would be a fun weekend project.

I used to live in a house with 5 other people. We would yell at each other, only to realize that the individual wasn't home. What if there was a visual board showing who was around?

Now this information could have been presented in many many formats: scrolling ticker, lights, a Weasley family clock, etc. I chose to make a faux-flipboard style departure board that can be found at train stations and airports because I like the retro, analog look. 

### Mechanicals
Since this was meant to be a quick project, I started by digging through my parts bin but could only find one working servo. I now only live with one other person so I thought there might be a way to use this one servo to represent the 4 different states the house could be in:
1. Roommate away, I'm away
2. Roommate home, I'm away
2. Roommate away, I'm home
2. Roommate home, I'm away

I still wanted the flipping motion, however. So, I tried to design a gear set that would selectively engage one of the pinions so that it doesn't move for each state change. I think the system below *could* work:
<img src="/assets/images/departure_board_first.jpg" alt="cad model of selective gear motion" style="width:90%;max-width:400px;"/>

I noticed, however that these teeth are *tiny* and it's unlikely that my 3D printer would have the precision and accuracy to pull this off. At this point I was ready to give up on the flipping motion and started digging through the parts bin again for some lights to use instead. 

It was here in my disappointment that I stumbled upon a pack of microservos that I had previously missed! A little bit of redesign later and here is the final mechanical design for the flipping mechanism:
<img src="/assets/images/departure_board_cad3.jpg" alt="3d printed microservo mount" style="width:90%;max-width:400px;"/>
I designed the mounts for the two independently controlled microservos by measuring the servos and creating the complimentary form, leaving room for clearance. I planned to screw the servos in place, then glue the axles for the rotating labels onto the moving part of the servo. 

The sign was mostly cut from foam board I had lying around.

### Software

To control the servos, I used an [Adafruit Feather HUZZAH](https://www.adafruit.com/product/2821) powered over USB. The HUZZAH has an ESP8266 on board for WiFi.

To determine if either of us are at home, the device will make calls to the [Meraki API](https://developer.cisco.com/meraki/) for devices currently connected to our network. I have hardcoded my phone's MAC, as well as my roommates phone's MAC into the code so it can act appropriately.

Since I am only using two microservos and don't anticipate any stalling, I can get away with using power from the board to drive the servos. Anything more and you would definitely need a regulator.

### Improvements
* Use a more aesthetically pleasing material, such as wood or metal for an industrial look
* Decrease how far the flipping labels are recessed, allowing the entire device to be slimmer
* 3D print the labels and use straighter dowels for higher precision, leading to a better presentation overall
* Make calls to my own serverless API instead of the Meraki API directly for better maintenance and updating
* Since this relies on MAC address tracking, this is likely to break once OSes use randomized MAC upon each connection to a known SSID

ps. If you make something similar to this, please put it away from any windows so burglars can't tell if the house is empty.
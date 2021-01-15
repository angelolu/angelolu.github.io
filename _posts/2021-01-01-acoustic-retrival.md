---
layout: project
bg: "460iso.png"
cardbg: "mech460acoustic.gif"
title:  "Acoustic Retrieval Device"
crawlertitle: "Acoustic Retrieval Device - Angelo Lu"
summary: "Sensor resurfacing device with surface locating capabilities"
excerpt: "'Ropeless' acoustic-activated retrieval of submerged Arctic sensors"
date:   2021-01-01 10:00:00 +0500
categories: projects
tags: 'projects'
author: angelo lu
tech: ['Coursework', 'MECH 460', 'CAD']
---
##### Coursework (MECH 460 - Capstone 1)


### Background
The design of this device occurred over one semester (four months) and was undertaken with four other individuals in the course.

<img src="/assets/images/460iso.png" alt="isometric view of acoustic retrieval device" style="width:90%;max-width:650px;"/>

This device aims to be a cost-effective solution for researchers performing longer-term (<= 12 mo.) Arctic lake monitoring. Traditional sensor systems are prone to sensor movement and loss in winter months due to ice floes forming around recovery buoys. This design only surfaces a buoy at the researchers request (or for one of the failsafe criteria), limiting movement and maximizing data integrity throughout deployment.

<img src="/assets/images/460top.png" alt="top view of acoustic retrieval device" style="width:90%;max-width:600px;"/>

For underwater communication, the system uses a modified [ahoi acoustic modem](http://bcrenner.de/?ahoi-modem) ([DOI](https://dl.acm.org/doi/10.1145/3376921)). At the surface, the system uses LoRa and a GPS module for communication and localization, respectively. 

<img src="/assets/images/460elec.png" alt="three PCBs, including custom designed PCB" style="width:90%;max-width:600px;"/>
*(Centre, in purple) custom designed PCB, in the form factor of other [ahoi PCBs](https://collaborating.tuhh.de/smartport/public/ahoi/hardware), containing the LoRa and GPS modules and antenna plugs.*

[//]: <> ### Reflection
[//]: <> Throughout this project I

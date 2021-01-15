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

### Personal Reflection

While working developing this design with the team was a largely technical process, I learned and practiced many non-technical skills as well:

* **Determining client priorities** - After being given all of the background information and motivation for the project, we had many ideas. The QFD process helped guide our thinking, but it was challenging to distill our client conversations into concrete client requirements and to assign numerical values to rank their importance. Working through this showed the importance and nuance of creating unbiased questionnaires and questions to limit the effect of confirmation bias as designers.

* **Vendor sourcing/communication** - One of our priorities was to control cost such that a researcher could build the end device through 'typical' funding. To achieve this, we contacted many suppliers and vendors for datasheets, quotes, test results and advice in order to find parts that met our engineering requirements and were cost-effective. This ended up being a major challenge but we were successful in the end.

* **Team motivation** - As everyone had many commitments outside of the course, it was easy to neglect subjects with less deliverables such as this one. Throughout the semester, I (and I think the rest of the team) eventually learned how to pace ourselves and and the unique way in which the team preferred to collaborate to be most effective.

* **General technical communication** - As engineering folk, I find that we are proud of the systems we design and want to share it with everyone. However, not everyone is as excited by technical presentations as we may think. Communicating the right amount of information to the right audience is a skill that I'm constantly working on and practiced in this project.

### Credits

Thanks to the instruction team of MECH 460; our faculty advisor, Prof Gene Zak; our acting client, Prof. Matthew Robertson; and Prof. Christopher Omelon.
Thanks to the rest of the team: Artiom Lisin, Andy Le, Ozzie Kirkby and Jessie Preteroti.
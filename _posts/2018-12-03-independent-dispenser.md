---
layout: project
bg: "dispenser.jpg"
cardbg: "dispenser.jpg"
title:  "Independent Dispenser"
crawlertitle: "Independent Dispenser - Angelo Lu"
summary: "Whiteboard Marker Vending Machine"
excerpt: "Whiteboard marker dispenser prototype built during a 12-hour hackathon"
date:   2018-12-03 10:00:00 +0500
categories: projects
tags: 'projects'
author: angelo lu
tech: ['Android', 'Arduino', 'Payments']
---
##### A project by Angelo Lu and Jae Makitalo
## Problem

Our campus has many study rooms with whiteboards designed for collaborative group work. Due to people removing/stealing markers and erasers, these supplies are not kept in the rooms. In certain buildings there are places to borrow markers during building hours. Outside of that, however, students must provide their own markers. This is inconvenient, as students may forget their own markers but want to use the whiteboards.

We propose that whiteboard marker dispensers are installed throughout building. For this 12-hour hackathon, hope to build a prototype of a device that dispenses a whiteboard marker upon receipt of payment.

## Design

<video width="100%" autoplay loop controls muted><source src="/assets/videos/vending.mp4" type="video/mp4">Your browser does not support the video tag.</video>

Our design includes an **Android phone**, a **Square magstripe reader**, an **Arduino**, a **servo** and the **cardboard** enclosure. These components were chosen as they were readily accessible during the 12-hour period and easy to use for prototyping. They do not represent actual hardware choices for an end product (more on this in the *Evaluation* section)

The custom Android app integrates the [Square Point of Sale API](https://docs.connect.squareup.com/payments/pos/overview) and the [usb-serial-for-android library](https://github.com/mik3y/usb-serial-for-android) by mik3y. 

When the user taps the *BUY* button, the app prepares a charge for $1.50 CAD through the Square API, which launches the Square app. The user then slides their card through the device to process the transaction. Upon payment approval, the Square app returns to the custom Android app, which then uses the serial library to send a signal to the Arduino over USB OTG. The Arduino then moves the servo briefly to let a marker drop.

Additionally, [TextToSpeech](https://developer.android.com/reference/android/speech/tts/TextToSpeech) from the Android platform is used for voice prompts throughout the process.

## Evaluation

Overall, this project was a success as we demoed a device that met our initial goals and requirements at the end of the day. We learned more about interfacing Androids and Arduinos and about collecting payments and PCI compliance throughout this basic project.

### Project Reflection

We experienced several pitfalls throughout the build process, many stemming from the time restriction and parts availability issues. All of the electronics used were scraps from my other projects or items we found around campus during the 12-hours allotted. The non-electronics were made primarily out of cardboard and duct tape, with the main frame being a mandarin orange tray. The limited material selection and the lack of planning made it challenging to build components that fit together snugly and work reliably.

For some reason, we were unable to communicate with an Arduino Mega over OTG as it wasn't detected by the Android device. This may be due to our janky OTG adapter or just a problem with the Mega itself. Regardless, we ended up using a Adafruit Feather HUZZAH, powering the servo over the USB VIN pin. This is probably not recommended as the current draw of the servo may fry the HUZZAH. If we had more time, we would have worked out using an external power supply.

It's worth also noting that Square devices and the API aren't currently meant for unattended terminals (kiosks/vending machines) so a different payment processor would be needed for a viable end product. That being said, if you are making something where there is always staff line of sight to the device (such as a promotional device for a fair/expo), Square could be a fast way to integrate payments. Remember to turn off receipts in the Square app to remove the requirement for user interaction before returning to the custom app. This makes the payment process much smoother. Or even better, use the Square Reader API to develop your own payment flow (not used here as it is only available with USD). 

As for our concept of whiteboard marker vending machines: a dedicated device may be viable but the cost of the device itself is unlikely to be recouped throughout its lifespan. Further research needs to be done to research demand and what consumers would be willing to pay, as well as payment processor costs. For an end product, we would recommend that tap-to-pay (NFC payments) be supported instead of swipe/chip-and-pin due to its convenience. We further recommend that the unused device area be sold as advertisement space. More obviously, the device should be reinforced against damage/tampering and use production-grade tech (not Arduinos). A more viable option may be to sell whiteboard markers in existing snack vending machines.

### Personal Reflection

For this project, I focused more on the technical aspect including wiring the electronics and writing the code for the Arduino and Android devices. This Local Hack Day was my partner's first foray into hackathons and we wanted to have a relatively calm, enjoyable day while learning lots. Based on my previous experience, this project wasn't meant to be an overly difficult to implement, but one that I hoped would show my partner how they could tie technologies together to build something functional and cool in a short amount of time. 

While we did discuss microcontrollers and the Arduino IDE, I don't think I properly conveyed the basics of Android development throughout the day. This project, with its external libraries/linked projects wasn't the easiest to explain to a relative novice at the time. From this experience I have learned more about explaining coding concepts at an appropriate level and my own shortcomings as a communicator, which I hope to work on and improve in future projects! @Jae (+ everyone else), I'm always down to discuss the code in further detail so let me know!

Overall, I found this project fun to execute and I'm proud of what we built together! This experience allowed me to brush up on developing for Android/Java, which I have not done in a bit as I've been focusing more on JS/Web. If given the opportunity I'd love to further explore promotional displays with credit card processing as I find the idea novel and amusing.

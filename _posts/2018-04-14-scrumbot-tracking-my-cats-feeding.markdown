---
layout: post
bg: "tools.jpg"
title:  "Tracking my Cat's Feeding Schedule with IoT and Cloud Functions"
crawlertitle: "Scrumbot: Part 1 - Angelo Lu"
summary: "Scrumbot - Part 1: A story of unnecessary tech"
excerpt: "Last summer my housemate brought home a kitten, named Scrum God, who has been looking a bit pudgy lately. My five housemates and I have very different routines so we attributed the weight gain to accidental overfeeding due to lack of communication. For example, I might feed the cat at 8 AM and a couple hours later another housemate might get up and, noticing that his bowl is empty, feed the cat again."
date:   2018-04-14 10:00:00 +0500
categories: posts
tags: 'blog'
author: angelo lu
---
> This is post 1/2 on the [Scrumbot project](/projects/scrumbot/), read part 2 [here](/posts/updating-scrumbot/)

Last summer my housemate brought home a kitten, named Scrum God, who has been looking a bit pudgy lately. My five housemates and I have very different routines so we attributed the weight gain to accidental overfeeding due to lack of communication. For example, I might feed the cat at 8 AM and a couple hours later another housemate might get up and, noticing that his bowl is empty, feed the cat again.

The easy solution would be to put a sheet of paper and a pen near the bowl and keep a tally of the scoops we feed the cat each day. However, I thought this would be a good opportunity to learn more about IoT and I set out to build a button that would track Scrum’s feeding schedule and communicate it both physically (lights) and virtually (Twitter and website).

*Unnecessary and overengineered? Totally. Waste of time? Maybe.*

Being the cheap student that I am, I did not want to buy new materials or set up a dedicated server. On the hardware side used an Adafruit Feather HUZZAH ESP8266, an LED, a button and some other bits and pieces I had. The ESP8266 is a cheap Arduino compatible WiFi module which makes it an excellent choice for simple internet-connected projects.

Getting everything wired together, I wrote code for the ESP8266 to light up the LED when the button was pressed, turn off after 4 hours and then begin blinking after 8 hours. The 4-hour period that the LED is on coincides with the 7 AM – 11 AM wakeup time for the house so we know not to feed him again if he had already been fed. After 8 hours the device blinks to remind us to feed the cat (not that it’s really needed, Scrum is a VERY vocal cat).

On the online side, I decided to use AWS Lambda with Amazon API Gateway to handle requests from the ESP8266. AWS Lambda allows functions to be hosted in “the cloud”, removing the need to host a web server, especially for simple applications like these. Initially, I had planned to use the Lambda function to record each feed event to DynamoDB, a NoSQL database by Amazon, creating a feeding history. From there I planned to use the Facebook Messenger Platform to make a bot that would message everyone in the house.
However, as I was writing the Lambda function (in Python using Serverless), Facebook was in the middle of its data scandal and had suspended part of it’s platform for developers. I decided instead to post feed updates to a Twitter account instead using Twython. The first tweet the button sent out occurred at 3 AM and I was ecstatic (I woke one of my housemates because I was excited). You can follow the bot at https://twitter.com/ScrumFeedBot! 

I’m not a very experienced web developer so I also wanted to build a website around the button with realtime updates as a challenge. Initially I had planned to use DynamoDB to trigger another Lambda function to update the webpage somehow. After doing some research, it appeared that it was possible to use websockets on AWS IoT to allow for realtime website updates. Although a functional solution, it involved dynamically provisioning IAM keys and appeared more complex than it was worth. Instead I decided to use Google Cloud Firestore, another database system, because it has easy-to-implement libraries supporting realtime updates for JavaScript. Hey, why reinvent the wheel right? Another benefit to this solution was that I could use Firebase Hosting for the website, reducing the amount of work I had to do to publish the site. The website is available at https://scrumbot.angelolu.tech/.

The main problems I encountered during this project involved my inexperience working with cloud functions, meaning I spent hours troubleshooting issue such as why my dependencies were not deploying properly or why my POST request was not being interpreted properly. Additionally, being inexperienced with JavaScript made calculating time differences, especially across different time zones, more time consuming than it should have been. If I were to redo this project, I would probably use Google Cloud functions rather than AWS Lambda just to keep everything under one roof.

Currently, the button posts to Twitter, the website and to the house Discord server. In the future I would like to build a Google Assistant action (“Hey Google, ask Scrum Bot when I last fed the cat“) and further develop the website (feed history browsing, additional statistics, full PWA support) and maybe make a fully automated cat feeder. Again, I realize that this project is totally unnecessary and definitely does not solve the problem in the easiest way possible however I think it’s pretty cool and I’ve learned a lot in the process. Thanks for reading my post and let me know if you have any questions or suggestions, I would love to hear them! :)


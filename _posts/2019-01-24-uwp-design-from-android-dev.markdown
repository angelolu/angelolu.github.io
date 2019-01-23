---
layout: post
bg: "tools.jpg"
title:  "Building a UWP app as an Android developer"
crawlertitle: "Building a UWP app as an Android developer - Angelo Lu"
summary: "Ongoing observations from learning to develop a UWP app"
excerpt: ""
date:   2019-01-20 10:00:00 +0500
categories: posts
tags: 'blog'
author: angelo lu
---

This semester at QMAST we're building a Universal Windows app (C#, XAML) to replace the previous [prototype I built](/projects/boat-control-desktop/). Having never developed a UWP app before, I thought I would document my experience and resources I find along the way here, updating it as time goes on.

As a quick recap, this app will be used to remotely monitor QMAST autonomous sailboats, control on board motors and plan and deploy sail plans/routes (using XBees). The decision was made to completely rebuild the prototype due to team interest in UWP and the lack of polish/features in the prototype. The old app was cobbled together using WPF in C# and was in early development stages, lacking advanced logging, visualizations and route planning capability. While WPFs have their merits, the new UWP APIs and visual elements are attractive (in more ways than one) and hopefully more future-proof.

This post will be **updated over time** as I get further into this platform.

### Resources for first-time UWP devs

[Windows apps concept mapping for Android and iOS developers](https://docs.microsoft.com/en-us/windows/uwp/porting/android-ios-uwp-map)
- Being familiar with Android development, this page was indispensable for me understanding the jargon, packages and overall power of the Universal Windows Platform for Windows 10 development

[XAML Controls Gallery](https://www.microsoft.com/en-us/p/xaml-controls-gallery/9msvh128x2zt)
- Contains many, many samples of the stock controls available for UWP apps, with code samples (!!!)
- Great for locating the UWP control that is analogous to one on another platform that you don't quite remember the name of

[Windows Community Toolkit Sample App](https://www.microsoft.com/en-us/p/windows-community-toolkit-sample-app/9nblggh4tlcq?activetab=pivot:overviewtab)
- Properly implemented examples of modern Windows developer patterns
- I found this helpful to learn more about layouts, controls and expected app behavior for the Fluent design system (Windows 10 equivalent to Material Design with a surprising number of similarities)

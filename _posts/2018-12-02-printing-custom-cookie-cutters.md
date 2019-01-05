---
layout: post
bg: "3dprintedhugo.jpg"
title:  "3D Printing Custom Cookie Cutters"
crawlertitle: "3D Printing Cookie Cutters - Angelo Lu"
summary: "An adventure in 3D printing customized cookie cutters"
excerpt: "An adventure in making customized cat- and dog-shaped cookie cutters for my friends using a 3D printer. Modeling techniques and material considerations are discussed in case you want to make your own!"
date:   2018-12-28 10:00:00 +0500
categories: posts
tags: 'blog'
author: angelo lu
---

<img src="/assets/images/3dprintedcat.jpg" alt="Cat cookies" style="width:90%;max-width:650px;"/>
The other day I stumbled across an image of some math symbol-shaped cookies, along with the corresponding math symbol shaped cookie cutters. I thought they looked pretty cool and wanted to make my own. A little bit of research revealed that many people have 3D printed custom cookie cutters and that several people even sell these custom cutters online!

After experimenting with different sizes and shapes, printing on my Monoprice Maker Select Plus in Seacans PLA, I created, at the request of my housemates, a cat shaped cookie cutter designed so it would deboss the cookie with our cat's name. After baking a batch of cookies and jokingly posting a picture of the cookies and the cutter to Snapchat, I was surprised when several friends reached out and asked me if I'd make them ones with their own pet's names. Some even mentioned they would pay me!

Amusing the possibility, I weighed the different cutters and determined that each cookie cutter cost ~$0.40 CAD in materials to make. To be honest, I was quite surprised at how relatively inexpensive they were! With help from my more artistic friend (follow him on ig [@quichi_art](https://www.instagram.com/quichi_art/)), he drew a new set of cat and dog outlines and I made models with the names of our friend's pets. 

These are relatively easy and cheap to make and make great stocking stuffers! Before printing your own, please read the considerations at the end of this post, however, considering usability and material safety.

<img src="/assets/images/3dprintedcutters.jpg" alt="Cat and dog cutters" style="width:90%;max-width:650px;"/>

### Modeling process using Fusion 360
1. Draw/scan the design that you want or download a picture online. If drawing, using a thicker marker (such as a Sharpie) can make lines easier to trace later.
2. Start a sketch in Fusion 360
3. Import the picture and position/scale the design to the size of the desired cutter
   * To better estimate the size, I drew a 10 cm x 10 cm square and positioned the design within these bounds.
4. Trace/draw the design
   * The spline tool can be used to draw/adjust curves. To quickly toggle it, I bound the tool to shift + s
5. Use the offset tool to create cutting/imprinting edges from your design
   * Set the diameter of the tool to at least twice your nozzle diameter. For me, this was 0.4 mm x 2 = 0.8 mm.
6. Use the offset tool from the original drawing again to create the outer lip of the cookie cutter
   * This helps keep the cutter rigid. The size is more up to personal preference; for mine, I created a lip extending 0.8 mm past either side of the cutting edge.
7. If your cutter is large or has disconnected elements, draw bars across empty space to connect the pieces and make the cutter more rigid and durable.
    * I made my connecting bars 4 mm in width
8. Extrude the sketch. I've included a diagram below for my extrusion depths. (All dimensions in mm)
   <img src="/assets/images/3dprintedtemplate.jpg" alt="Extrusion depths diagram" style="width:90%;max-width:500px;"/>
9.  Export to your 3D printer software, slice and print!

### Tips
* Avoid tight corners that will be hard to clean or where cut dough will be hard to release
* If your design includes text, make sure that you are using a font that is thick enough to be printed
* Flour the cutter generously and remember that cold dough is easier to cut

### Considerations

The most significant downside is that these are harder to clean with dough appearing to get caught more easily around corners and in text, possibly due to the grooves between layers. These required a toothpick or small brush to clean. As well, since it is made from PLA, it is not dishwasher safe and cannot be exposed to higher temperatures. That being said, I haven't heard complaints about the cutters warping under hot tap water.

There is the concern about the food safety of 3D printed items, which appears to still be debated and an area of active research. I chose to print in PLA as it seemed to be the most readily available plastic that was also assumed by the community to be safe to touch food. I cleaned my printer the best I could to minimize surface contamination from ABS or other plastics and replaced the PFTE tube. As well, I made sure that my nozzle/extruder did not contain lead, with the concern being that it may leach into printed items. I also made sure to thoroughly wash all prints before using. 

These precautions may be a bit over the top, considering that the cutters do not hold hot food and the interaction time between the object and the food is relatively short, however I exercised an abundance of caution as to not accidentally poison my friends or anyone who eats cookies made using these cutters. I urge you to look into current research before choosing a material/printing.

Finally, as with all 3D printing, please be conscious of the environment and try to minimize material usage. Try to always print pieces that will be used and enjoyed repeatedly and verify dimensions before printing. Choose materials like PLA that are specifically compostable if you live somewhere where commercial composting facilities are used.


<br>
As for the cutters we made, they were given to our friends for Christmas and were quite well received! Happy holidays everyone.

<img src="/assets/images/3dprintedcrop.jpg" alt="dogcookies" style="width:90%;max-width:450px;"/>
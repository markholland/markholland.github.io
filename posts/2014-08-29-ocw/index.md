---
path: "/ocw-2014.html"
date: "2014-08-29T12:00:00+00:00"
title: "Android revisited"
tags: ["tag"]
image: "balloons.jpg"
---

During the summer of 2014 I have been making the most of not working by trying out lots of different technologies, Node.js, Verilog, Apple's new hotness Swift and improving on my still novice status as an Android developer.

This post is regarding my recent efforts with Android. After finally grasping most of the Android staples that had always baffled me before, Content Providers, Cursor Loaders, Custom Adapaters, I quickly realised that I could now build the app I had worked on previously in Google Summer of Code 2013, ocw-android but with all these great tools provided by Android.

So in the space of a little under 3 weeks I completely re wrote the app from scratch and have ended up with something that runs really well and is also fun to use.

On first opening the app, all data is downloaded as json, parsed and then stored in an sqlite database, any subsequent openings of the app will not require internet and will just load the local data until the user chooses to "Pull To Refresh".

![pull to refresh screenshot](ocw-release-refresh.png)

All the views are bound to cursors pulled from the content provider so that should the data in the database change while the service that downloads the json data is running, the views will update automatically.

On the usability side there are some cool features like a two pane tablet interface.

![two pane screenshot](ocw-2-pane.png)

And a navigation drawer for filtering the event list by date.

![Navigation drawer](ocw-nav-drawer.png)

Seeing as my Summer is now rapidly drawing to a close I have decided to wrap up my work on the app for now but you can download the current snapshot of ocw-android-2014 from the Play Store right now!

<center><a href="https://play.google.com/store/apps/details?id=com.partiallogic.ocw_android_2014">
  <img alt="Get it on Google Play"
       src="en-play-badge.png" />
</a></center>

You can also find all the source code on Github as an Android Studio project.

<center><a href="https://github.com/markholland/ocw-android">
  <img alt="View on Github"
       src="GitHub_Logo.png" />
</a></center>
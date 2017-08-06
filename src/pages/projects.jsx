import React from "react";
import Hero from "../components/Hero";

import macbook from "../images/macbook.jpg";

import "../styles/content-container.css.scss";

export default () =>
  <div>
    <Hero image={macbook} title={"Mark Holland"} subTitle={"Projects"} />
    <div className="content-container">
      <div className="content">
        <div id="title">
          <p>Here you can find some of my recent projects.</p>
        </div>
        <div id="sub-count">
          <h2>sub count</h2>
          <a href="https://itunes.apple.com/us/app/sub-count/id977966794">
            sub count
          </a>{" "}
          is an <b>iOS</b> app for viewing your <b>YouTube</b> subscriber count.
          You can view the count in the app, with the optional widget in
          Notification Center or even on your wrist with the Watch app. Read
          more about my first <b>iOS</b> publishing experience{" "}
          <a href="https://www.partiallogic.com/2015/04/13/sub-count.html">
            here
          </a>.
          <center>
            <p>
              <img
                src="https://www.partiallogic.com/images/projects/subcount.png"
                alt="subcount screen capture"
              />
            </p>
            <a
              href="https://itunes.apple.com/us/app/sub-count/id977966794?mt=8&uo=6&at=&ct="
              target="itunes_store"
            >
              <img
                src="https://www.partiallogic.com/images/badge_appstore-lrg.png"
                alt="Download on the App Store"
              />
            </a>
          </center>
        </div>

        <div id="ocw-android-2014">
          <h2>OCW-Android-2014</h2>
          <a href="https://play.google.com/store/apps/details?id=com.partiallogic.ocw_android_2014">
            OCW-Android-2014
          </a>{" "}
          is a complete rewrite from scratch of the <b>Android</b> App I worked
          on for <b>Google Summer of Code 2013</b>. the goal was to provide a
          stable base that follows the most recent <b>Android guidelines</b> in
          order to provide a project on which to build upon as requests come
          from the <b>OpenConferenceWare</b> community.
          <center>
            <p>
              <img
                src="https://www.partiallogic.com/images/projects/ocw-android-2014.png"
                alt="ocw-android screen capture"
              />
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.partiallogic.ocw_android_2014">
              <img
                src="https://www.partiallogic.com/images/en-play-badge.png"
                alt="Get it on Google Play"
              />
            </a>
            <a href="https://github.com/markholland/ocw-android-2014">
              <img
                src="https://www.partiallogic.com/images/GitHub_Logo.png"
                alt="View on Github"
              />
            </a>
          </center>
        </div>

        <div id="wise-monkey">
          <h2>Wise Monkey</h2>
          <a href="https://play.google.com/store/apps/details?id=com.fourmaw.wisemonkey.app&hl=en">
            Wise Monkey
          </a>{" "}
          is a fun <b>Android</b> app I worked on with a group of friends in
          order to gain experience in rapidly implementing an idea and
          publishing it.
          <center>
            <p>
              <img
                src="https://www.partiallogic.com/images/projects/wisemonkey.png"
                alt="wisemonkey app screen capture"
              />
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.fourmaw.wisemonkey.app">
              <img
                src="https://www.partiallogic.com/images/en-play-badge.png"
                alt="Get it on Google Play"
              />
            </a>
          </center>
        </div>

        <div id="ocw-android">
          <h2>OCW-Android</h2>
          <b>OCW-Android</b> is an open source app to allow administrators of
          conferences to provide attendees with a way to view on their mobile
          devices the schedule, information on speakers and to also receive
          notifications of changes in location and times of talks. I worked on
          this is as part of{" "}
          <a href="http://www.google-melange.com/gsoc/homepage/google/gsoc2013">
            Google Summer of Code 2013
          </a>{" "}
          with the{" "}
          <a href="http://osuosl.org">
            Oregon State University Open Source Lab.
          </a>
          <center>
            <p>
              <img
                src="https://www.partiallogic.com/images/projects/ocw-android.png"
                alt="ocw-android screen capture"
              />
            </p>
            <a href="https://github.com/markholland/ocw-android">
              <img
                src="https://www.partiallogic.com/images/GitHub_Logo.png"
                alt="View on Github"
              />
            </a>
          </center>
        </div>

        <div id="pandroid">
          <h2>Pandroid</h2>
          Pandroid is a <b>Android</b> agent for{" "}
          <a href="www.pandorafms.com">PandoraFMS</a> that allows monitoring
          many aspects of a <b>Android</b> device. I worked on it for{" "}
          <a href="http://www.google-melange.com/gsoc/homepage/google/gsoc2012">
            Google Summer of Code 2012
          </a>.
          <center>
            <p>
              <img
                src="https://www.partiallogic.com/images/projects/pandroid-icon.png"
                alt="panroid app icon"
              />
            </p>
            <a href="https://play.google.com/store/apps/details?id=pandroid.agent">
              <img
                src="https://www.partiallogic.com/images/en-play-badge.png"
                alt="Get it on Google Play"
              />
            </a>
            <a href="https://github.com/pandorafms/pandorafms/tree/develop/pandora_agents/android/mobile">
              <img
                src="https://www.partiallogic.com/images/GitHub_Logo.png"
                alt="View on Github"
              />
            </a>
          </center>
        </div>
      </div>
    </div>
  </div>;

import React from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';

import '../styles/content-container.css.scss';

import lumiere from "../images/lumiere.png";

export default () =>
  <div>
    <Hero image={lumiere} title={"Mark Holland"} subTitle={"About Me"} ></Hero>
    <div className="content-container">
      <div className="content">
        <p>
            I recently entered the Software Engineering field but use this site for anything I feel like writing about.
        </p>
        <p>
            I'm an avid collector of vinyl records and you can check out my collection on <a href="https://www.discogs.com/user/_Mark">Discogs</a>.
        </p>
        <p>
            Look out for me if you attend any developer meetups in London such as <a href="http://www.meetup.com/HNLondon/">HNLondon</a>, <a href="http://www.meetup.com/android/">Londroid</a> & <a href="http://www.meetup.com/swiftlondon/">Swift London</a>.
        </p>
        <center>
            <p>If you wish to contact me just drop a line at <a href="mailto:mark@partiallogic.com">mark@partiallogic.com</a>.
            </p>
            <a href="http://www.eff.org" target="_blank">
              <img style={{border: 0}} src="https://www.partiallogic.com/images/EffBadge2017.png" alt="EFF Members badge"/>
            </a>
        </center>
      </div>
    </div>
  </div>;

import React from 'react'
import Hero from '../components/Hero'

import '../scss/content-container.scss'

import lumiere from '../../static/lumiere.jpg'
import eff from '../../static/2014-members-circle.png'

export default () => (
  <div>
    <Hero image={lumiere} title="Mark Holland" subTitle="About Me" />
    <div className="content-container">
      <div className="content">
        <p>
          I work as a Software Engineer but use this site for anything I feel
          like writing about.
        </p>
        <p>
          I&apos;m an avid collector of vinyl records and you can check out my
          collection on{' '}
          <a href="https://www.discogs.com/user/_Mark"> Discogs </a>.
        </p>
        <center>
          <p>
            If you wish to contact me just drop a line at{' '}
            <a href="mailto:mark@partiallogic.com">mark@partiallogic.com</a>.
          </p>
          <a
            href="http://www.eff.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={{ border: 0 }} src={eff} alt="EFF Members badge" />
          </a>
        </center>
      </div>
    </div>
  </div>
)

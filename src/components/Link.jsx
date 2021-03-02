import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import '../scss/Link.scss'

export default function Link({ children, className, to }) {
  return (
    <GatsbyLink className={[`link`].concat(className || []).join(' ')} to={to}>
      {children}
    </GatsbyLink>
  )
}

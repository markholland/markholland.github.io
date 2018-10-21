import React from 'react'
import styled from 'styled-components'

import '../scss/icons.css.scss'

const SocialLink = styled.a`
  color: ${props => props.color || '#fff'};
  width: 36px;
  height: 36px;
  border: 2px solid ${props => props.color || '#fff'};
  display: inline-block;
  margin: 0 10px;
  border-radius: 42px;
  line-height: 0;
  text-align: center;
  text-decoration: none;
  transition: color 175ms ease-in-out, transform 175ms ease-in-out;
  &:hover {
    transform: scale(1.2);
    color: ${props => (props.hoverColor ? props.hoverColor : '#fff')};
  }
`

export default function Social(props) {
  return (
    <div>
      <SocialLink
        href="https://twitter.com/partialmark"
        title="Follow on Twitter"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        <i className="icon icon-twitter" />
      </SocialLink>
      <SocialLink
        href="https://github.com/markholland"
        title="Watch on Github"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        <i className="icon icon-github" />
      </SocialLink>
      <SocialLink
        href="https://partiallogic.com/rss"
        title="RSS Feed"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        <i className="icon icon-rss" />
      </SocialLink>
    </div>
  )
}

import React, { Component } from 'react';
import styled from 'styled-components';

import HeroOverlay from './HeroOverlay';

const HeroImage = styled.div`
  width: 100%;
  height: 320px;
  margin-top: 0;
  position: relative;
  overflow: hidden;
  background-color: #111;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.image});
  @media only screen and (max-width: 720px) {
    height: 200px;
  }
`;

class BlogHero extends Component {
  render() {
    return (
      <HeroImage {...this.props}>
        <HeroOverlay {...this.props} />
      </HeroImage>
    );
  }
}

export default BlogHero;

import React, { Component } from 'react';
import styled from 'styled-components';

import Social from './Social';

const Container = styled.div`
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${props =>
    props.title || props.subTitle ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)'};
  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.34em; // remove space taken up and prevent word-wrapping
  }
`;

const Content = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 0 1em;
  font-weight: 600;
`;

const OverlayTitle = styled.h1`
  font-size: 45px;
  line-height: 1.4em;
  margin: 0;
  color: white;
  @media only screen and (max-width: 720px) {
    font-size: 25px;
  }
`;

const OverlaySubTitle = styled.h3`
  font-size: 22px;
  margin: 0;
  color: white;
  @media only screen and (max-width: 720px) {
    font-size: 17px;
  }
`;

class BlogHeroOverlay extends Component {
  render() {
    const { title, subTitle } = this.props;
    const SocialIcons = title || subTitle ? <Social /> : null;
    return (
      <Container id="hero-overlay" {...this.props}>
        <Content id="content">
          <OverlayTitle id="overlay-title">{title}</OverlayTitle>
          <OverlaySubTitle>{subTitle}</OverlaySubTitle>
          {SocialIcons}
        </Content>
      </Container>
    );
  }
}

export default BlogHeroOverlay;

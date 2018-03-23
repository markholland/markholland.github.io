import React, { Component } from 'react';
import styled from 'styled-components';
import Link from './Link';

const Header = styled.header`
  margin: 0;
`;

const HeaderContent = styled.div`
  padding: 1.45rem 1.0875rem;
`;

const Logo = styled.span`
  border: 3px solid;
  font-weight: 500;
  font-size: 1.5em;
  @media only screen and (min-width: 720px) {
    margin-left: 15px;
  }
`;

const FirstLetter = styled.span`
  margin-left: 10px;
`;

const SecondLetter = styled.span`
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  font-size: 1em;
  margin-right: 1.5em;
  vertical-align: middle;
  @media only screen and (max-width: 720px) {
    font-size: 0.8em;
  }
`;

class BlogHeader extends Component {
  render() {
    return (
      <Header id="blog-header">
        <HeaderContent>
          <StyledLink id="blog-logo-link" to="/">
            <Logo id="blog-logo">
              <FirstLetter>M</FirstLetter>
              <SecondLetter>H</SecondLetter>
            </Logo>
          </StyledLink>
          <StyledLink id="blog-link" to="/">
            Blog
          </StyledLink>
          <StyledLink id="projects-link" to="/projects">
            Projects
          </StyledLink>
          <StyledLink id="about-link" to="/about">
            About
          </StyledLink>
        </HeaderContent>
      </Header>
    );
  }
}

export default BlogHeader;

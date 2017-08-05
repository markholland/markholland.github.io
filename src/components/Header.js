import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import '../css/typography.css';

const Header = styled.header`
  margin: 0;
  font-size: ${props => props.isRoot ? `2.5rem` : `2rem`};
`;

class BlogHeader extends Component {
  render() {
    return (
      <Header id="blog-header" {...this.props}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Partiallogic
        </Link>
      </Header>
    );
  }
}

export default BlogHeader;
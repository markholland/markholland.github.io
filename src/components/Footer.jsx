import React from 'react';
import styled from 'styled-components';

import Social from './Social';

const Container = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  background: #f5f5f5;
  font-size: 0.8em;
  margin-top: 20px;
`;

export default function Footer() {
  // const colors = {
  //   color: `rgba(33, 39, 45, 0.6)`,
  //   hoverColor: `rgba(255, 255, 255, 1)`
  // };
  return (
    <Container id="footer-container">
      © 2017 Mark Holland
      {/* <Social {...colors} /> */}
    </Container>
  );
}

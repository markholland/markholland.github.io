import React from "react";
import styled from "styled-components";

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
  //   color: `rgba(255, 255, 255, 0.6)`,
  //   hoverColor: `rgba(255, 255, 255, 1)`
  // };
  return (
    <Container id="footer-container">
      © 2017 Mark Holland
      {/* <SocialIcons flexDirection="row" width="240px" {...colors} /> */}
    </Container>
  );
}

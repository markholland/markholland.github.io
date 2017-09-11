import React from "react";
import styled from 'styled-components';

import Hero from '../components/Hero';

const Container = styled.div`
  margin: 30px;
`;

export default () =>
  ( 
    <div>
      <Hero></Hero>
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a page that doesn&apos;t exist...</p>
      </Container>
    </div>
  );

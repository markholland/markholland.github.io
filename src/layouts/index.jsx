import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import styled from 'styled-components';

import '../scss/base.scss';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import balloons from '../../static/balloons.jpg';

const SiteWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const SiteContent = styled.div`
  flex: 1;
`;

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  static defaultProps = {
    children: () => {},
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';

    let hero = null;
    if (isRoot) {
      hero = (
        <Hero
          image={balloons}
          title="Mark Holland"
          subTitle="Software Engineer living in London, UK"
        />
      );
    }

    return (
      <SiteWrapper>
        <Helmet
          title="Partiallogic"
          meta={[
            {
              name: 'description',
              content: 'A Software Engineer living in London, UK',
            },
            { name: 'keywords', content: 'software engineer' },
          ]}
        />
        <Header />
        {hero}
        <SiteContent>{this.props.children()}</SiteContent>
        <Footer />
      </SiteWrapper>
    );
  }
}

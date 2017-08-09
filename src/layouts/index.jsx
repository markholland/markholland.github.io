import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "../styles/base.css.scss";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import balloons from "../../static/balloons.jpg";

export default class Template extends React.Component {
  static PropTypes = {
    children: PropTypes.func
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === "/";

    let hero = null;
    if (isRoot) {
      hero = (
        <Hero
          image={balloons}
          title={"Mark Holland"}
          subTitle={"Software Engineer living in London, UK"}
        />
      );
    }

    return (
      <div>
        <Helmet
          title="Partiallogic"
          meta={[
            {
              name: "description",
              content: "A Software Engineer living in London, UK"
            },
            { name: "keywords", content: "software engineer" }
          ]}
        />
        <Header />
        {hero}
        <div>
          {this.props.children()}
        </div>
        <Footer />
      </div>
    );
  }
}

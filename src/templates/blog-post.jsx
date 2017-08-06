import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import BackIcon from "react-icons/lib/fa/chevron-left";
import ForwardIcon from "react-icons/lib/fa/chevron-right";

import Link from "../components/Link";
import Hero from "../components/Hero";

import "../styles/blog-post.css.scss";
import "../styles/content-container.css.scss";

const PostTitle = styled.div`
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  margin: 0 0 10px;
  padding: 0;
`;

const PostContent = styled.div`
  font-size: 1.0em;
  line-height: 1.5;
  color: #21272d;
  font-weight: 400;
  margin: 0 0 1.5em;
`;

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;
  const image = post.frontmatter.image.childImageSharp.resize.src;
  return (
    <div id="blog-post-container">
      <Helmet title={`Partiallogic - ${post.frontmatter.title}`} />
      <Hero image={image} />
      <div className="content-container">
        <div className="blog-post content">
          <PostTitle id="title">
            {post.frontmatter.title}
          </PostTitle>
          <h2 className="date">
            {post.frontmatter.date}
          </h2>
          <PostContent
            id="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="navigation">
            {prev &&
              <Link className="link prev" to={prev.frontmatter.path}>
                <BackIcon /> {prev.frontmatter.title}
              </Link>}
            {next &&
              <Link className="link next" to={next.frontmatter.path}>
                {next.frontmatter.title} <ForwardIcon />
              </Link>}
          </div>
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
          }
        }
      }
    }
  }
`;

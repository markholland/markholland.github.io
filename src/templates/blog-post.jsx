import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import BackIcon from "react-icons/lib/fa/chevron-left";
import ForwardIcon from "react-icons/lib/fa/chevron-right";

import Link from "../components/Link";
import Hero from "../components/Hero";

import "../scss/blog-post.scss";
import "../scss/content-container.scss";

const PostTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin: 0 0 10px;
  @media only screen and (min-width: 720px) {
    font-size: 1.8em;
  }
`;

const PostDate = styled.h2`
  font-size: 1em;
  @media only screen and (min-width: 720px) {
    font-size: 1.2em;
  }
`;

const PostContent = styled.div`
  font-size: 0.8em;
  line-height: 1.5;
  color: #21272d;
  font-weight: 400;
  margin: 0 0 1.5em;
  @media only screen and (min-width: 720px) {
    font-size: 1em;
  }
`;

const LinkPrev = styled(Link)`
  float: left;
  padding: 20px 30px;
`;

const LinkNext = styled(Link)`
  float: right;
  padding: 20px 30px;
`;

const NavLinkText = styled.div`
  display: none;
  @media only screen and (min-width: 720px) {
    display: inline-block;
    padding: 0 5px;
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    line-height: 20px;
  }
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
          <PostTitle id="title">{post.frontmatter.title}</PostTitle>
          <PostDate className="date">{post.frontmatter.date}</PostDate>
          <PostContent
            id="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          {/* <Tags list={post.frontmatter.tags || []} /> */}
          <div className="navigation">
            {prev && (
              <LinkPrev to={prev.frontmatter.path}>
                <BackIcon />
                <NavLinkText>{prev.frontmatter.title}</NavLinkText>
              </LinkPrev>
            )}
            {next && (
              <LinkNext to={next.frontmatter.path}>
                <NavLinkText>{next.frontmatter.title}</NavLinkText>
                <ForwardIcon />
              </LinkNext>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const pageQuery = ({ graphql }) =>
  graphql`
    query BlogPostByPath($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          tags
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

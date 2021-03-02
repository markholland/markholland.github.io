import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {FaHome as HomeIcon} from 'react-icons/fa'
import {FaTags as TagsIcon} from 'react-icons/fa'

import Link from '../components/Link'

export default function Tags({ pageContext }) {
  const { posts, post, tag } = pageContext
  if (tag) {
    return (
      <div>
        <h1>
          {post.length} post
          {post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <ul>
          {post.map(({ id, frontmatter, excerpt }) => (
            <li key={id}>
              <h1>
                <GatsbyLink to={frontmatter.path}>
                  {frontmatter.title}
                </GatsbyLink>
              </h1>
              <p>{excerpt}</p>
            </li>
          ))}
        </ul>
        <Link to="/tags">
          <TagsIcon /> All tags
        </Link>
      </div>
    )
  }
  return (
    <div>
      <h1>Tags</h1>
      <ul className="tags">
        {Object.keys(posts).map((tagName) => (
          <li key={tagName}>
            <GatsbyLink to={`/tags/${tagName}`}>{tagName}</GatsbyLink>
          </li>
        ))}
      </ul>
      <Link to="/">
        <HomeIcon /> All posts
      </Link>
    </div>
  )
}

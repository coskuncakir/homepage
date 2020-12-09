import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Card from "../card"

export default function Posts() {
  return (
    <StaticQuery
      query={query}
      render={data =>
        data.allMdx.posts.map(({ post }) => (
          <Card
            key={post.id}
            title={post.frontmatter.title}
            link={post.frontmatter.slug}
          >
            {post.excerpt}
          </Card>
        ))
      }
    />
  )
}

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { glob: "**/src/data/blog/**/*.md" } }) {
      posts: edges {
        post: node {
          frontmatter {
            slug
            title
            date(formatString: "DD.MM.YY")
          }
          excerpt
          id
        }
      }
    }
  }
`

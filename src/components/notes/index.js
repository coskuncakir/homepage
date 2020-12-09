import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Card from "../card"

export default function Notes() {
  return (
    <StaticQuery
      query={query}
      render={data =>
        data.allMdx.notes.map(({ note }) => (
          <Card
            key={note.id}
            title={note.frontmatter.title}
            link={note.frontmatter.slug}
          >
            {note.excerpt}
          </Card>
        ))
      }
    />
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { glob: "**/src/data/notes/**/*.md" } }
    ) {
      notes: edges {
        note: node {
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

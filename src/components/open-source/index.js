import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Card from "../card"

export default function OpenSource() {
  return (
    <StaticQuery
      query={query}
      render={data =>
        data.allMdx.projects.map(({ project }) => (
          <Card
            key={project.id}
            title={project.frontmatter.title}
            link={project.frontmatter.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.excerpt}
          </Card>
        ))
      }
    />
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { glob: "**/src/data/open-source/**/*.md" } }
    ) {
      projects: edges {
        project: node {
          frontmatter {
            title
            repository
            preview
            date(formatString: "DD.MM.YY")
          }
          excerpt
          id
        }
      }
    }
  }
`

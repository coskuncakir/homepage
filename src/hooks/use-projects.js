import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/src/data/projects/**/*.md" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
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
  `)

  return data.allMdx.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    repository: node.frontmatter.repository,
    preview: node.frontmatter.preview,
    date: node.frontmatter.date,
    excerpt: node.excerpt,
    id: node.id,
  }))
}

export default useProjects

import { graphql, useStaticQuery } from "gatsby"

const useNotes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/src/data/notes/**/*.md" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              date(formatString: "DD.MM.YY")
            }
            id
            excerpt
          }
        }
      }
    }
  `)

  return data.allMdx.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    slug: node.frontmatter.slug,
    date: node.frontmatter.date,
    excerpt: node.excerpt,
    id: node.id,
  }))
}

export default useNotes

import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/src/data/blog/**/*.md" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
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
  `)

  return data.allMdx.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    slug: node.frontmatter.slug,
    date: node.frontmatter.date,
    excerpt: node.excerpt,
    id: node.id,
  }))
}

export default usePosts

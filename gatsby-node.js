exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // create pages
  const pageTemplate = require.resolve(`./src/templates/page.js`)

  const pagesQuery = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/src/data/pages/**/*.md" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // handle errors
  if (pagesQuery.errors) {
    reporter.panicOnBuild("Error while running pages GraphQL query.")
    return
  }

  pagesQuery.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: pageTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}

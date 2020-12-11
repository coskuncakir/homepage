exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // create pages
  const pageTemplate = require.resolve(`./src/templates/page/index.js`)

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

  // create posts
  const postTemplate = require.resolve(`./src/templates/post/index.js`)

  const postsQuery = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/src/data/blog/**/*.md" } }
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
  if (postsQuery.errors) {
    reporter.panicOnBuild("Error while running posts GraphQL query.")
    return
  }

  postsQuery.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: postTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  // create notes
  const noteTemplate = require.resolve(`./src/templates/post/index.js`)

  const notesQuery = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/src/data/notes/**/*.md" } }
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
  if (notesQuery.errors) {
    reporter.panicOnBuild("Error while running notes GraphQL query.")
    return
  }

  notesQuery.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/notes/${node.frontmatter.slug}`,
      component: noteTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}

import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../../components/layout"
import Container from "../../components/container"
import SEO from "../../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Title from "../../components/title"
import styles from "./post.module.scss"

export default function PostTemplate() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <>
          <SEO title={data.mdx.frontmatter.title} />
          <Layout>
            <Container className={styles.container}>
              <Title headingLevel="h1">{data.mdx.frontmatter.title}</Title>
              <div>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </div>
            </Container>
          </Layout>
        </>
      )}
    />
  )
}
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

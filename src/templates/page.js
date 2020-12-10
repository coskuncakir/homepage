import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Title from "../components/title"
import styles from "./page.module.scss"

export default function PageTemplate({ data }) {
  const {
    mdx: { frontmatter, body },
  } = data

  return (
    <>
      <SEO title={frontmatter.title} />
      <Layout>
        <Container className={styles.container}>
          <Title headingLevel="h1">{frontmatter.title}</Title>
          <div>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </Container>
      </Layout>
    </>
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

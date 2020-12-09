import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Title from "../components/title"
import { graphql } from "gatsby"
import styles from "./Index.module.scss"
import Link from "../components/link"

export default function Home({ data }) {
  return (
    <>
      <SEO />
      <Layout>
        <Container className={styles.container}>
          <section className={styles.hero}>
            <Title headingLevel="h4">
              HI{" "}
              <span role="img" aria-labelledby="wawe emoji">
                👋
              </span>{" "}
              NICE TO MEET YOU!
            </Title>
            <Title headingLevel="h1">
              I'm Coskun and I am a Front-End Developer
            </Title>
            <Title headingLevel="p">
              I develop web applications with the latest and innovative
              technologies to make people’s life simple. <br />I have a passion
              for Design Systems, Web Accessibility and JAMstack applications
              with a desire to constantly develop new skills.
            </Title>
          </section>

          <section className={styles.section}>
            <Title headingLevel="h3">Recent Blog Posts</Title>
            {data.blog.posts.length > 0 ? (
              data.blog.posts.map(({ post }) => (
                <ul className={styles.list} key={post.id}>
                  <li className={styles.date}>{post.frontmatter.date}</li>
                  <li className={styles.title}>
                    <Link
                      to={`/blog/${post.frontmatter.slug}`}
                      aria-label={post.frontmatter.title}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </li>
                </ul>
              ))
            ) : (
              <p className={styles.emptyState}>
                No notes scheduled for takeoff
              </p>
            )}

            {data.blog.posts.length >= 5 && (
              <Link to="/blog">View all posts</Link>
            )}
          </section>

          <section className={styles.section}>
            <Title headingLevel="h3">Recent Notes</Title>
            {data.note.notes.length > 0 ? (
              data.note.notes.map(({ note }) => (
                <ul className={styles.list} key={note.id}>
                  <li className={styles.date}>{note.frontmatter.date}</li>
                  <li className={styles.title}>
                    <Link
                      to={`/notes/${note.frontmatter.slug}`}
                      aria-label={note.frontmatter.title}
                    >
                      {note.frontmatter.title}
                    </Link>
                  </li>
                </ul>
              ))
            ) : (
              <p className={styles.emptyState}>Add a note and being loved!</p>
            )}

            {data.note.notes.length >= 5 && (
              <Link to="/notes">View all notes</Link>
            )}
          </section>

          <section className={styles.section}>
            <Title headingLevel="h3">Recent Open Source Projects</Title>
            {data.openSource.projects.length > 0 ? (
              data.openSource.projects.map(({ project }) => (
                <ul className={styles.list} key={project.id}>
                  <li className={styles.date}>{project.frontmatter.date}</li>
                  <li className={styles.title}>
                    <Link
                      href={project.frontmatter.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.frontmatter.title}
                    >
                      {project.frontmatter.title}
                    </Link>
                  </li>
                </ul>
              ))
            ) : (
              <p className={styles.emptyState}>Wow, such empty</p>
            )}

            {data.note.notes.length >= 5 && (
              <Link to="/notes">View all notes</Link>
            )}
          </section>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    blog: allMdx(
      filter: { fileAbsolutePath: { glob: "**/src/data/blog/**/*.md" } }
      limit: 5
    ) {
      posts: edges {
        post: node {
          frontmatter {
            slug
            title
            date(formatString: "DD.MM.YY")
          }
          id
        }
      }
    }

    note: allMdx(
      filter: { fileAbsolutePath: { glob: "**/src/data/notes/**/*.md" } }
      limit: 5
    ) {
      notes: edges {
        note: node {
          frontmatter {
            slug
            title
            date(formatString: "DD.MM.YY")
          }
          id
        }
      }
    }

    openSource: allMdx(
      filter: { fileAbsolutePath: { glob: "**/src/data/open-source/**/*.md" } }
      limit: 5
    ) {
      projects: edges {
        project: node {
          frontmatter {
            title
            repository
            preview
            date(formatString: "DD.MM.YY")
          }
          id
        }
      }
    }
  }
`

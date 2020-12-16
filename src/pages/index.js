import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Title from "../components/title"
import Link from "../components/link"
import usePosts from "../hooks/use-posts"
import useNotes from "../hooks/use-notes"
import useProjects from "../hooks/use-projects"
import styles from "./Index.module.scss"

export default function Home() {
  const posts = usePosts()
  const notes = useNotes()
  const projects = useProjects()

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
            <Title headingLevel="h1" className={styles.title}>
              I'm Coskun,
              <br />I am a <mark>Front-End Developer</mark>
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
            {posts.length > 0 ? (
              posts.slice(0, 5).map(post => (
                <ul className={styles.list} key={post.id}>
                  <li className={styles.date}>{post.date}</li>
                  <li className={styles.title}>
                    <Link to={`/blog/${post.slug}`} aria-label={post.title}>
                      {post.title}
                    </Link>
                  </li>
                </ul>
              ))
            ) : (
              <p className={styles.emptyState}>
                No posts scheduled for takeoff
              </p>
            )}

            {posts.length >= 5 && <Link to="/blog">View all posts</Link>}
          </section>

          <section className={styles.section}>
            <Title headingLevel="h3">Recent Notes</Title>
            {notes.length > 0 ? (
              notes.slice(0, 5).map(note => (
                <ul className={styles.list} key={note.id}>
                  <li className={styles.date}>{note.date}</li>
                  <li className={styles.title}>
                    <Link to={`/notes/${note.slug}`} aria-label={note.title}>
                      {note.title}
                    </Link>
                  </li>
                </ul>
              ))
            ) : (
              <p className={styles.emptyState}>Add a note and being loved!</p>
            )}

            {notes.length >= 5 && <Link to="/notes">View all notes</Link>}
          </section>

          <section className={styles.section}>
            <Title headingLevel="h3">Recent Open Source Projects</Title>
            {projects.length > 0 ? (
              projects.slice(0, 5).map(project => (
                <ul className={styles.list} key={project.id}>
                  <li className={styles.date}>{project.date}</li>
                  <li className={styles.title}>
                    <Link
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.title}
                    >
                      {project.title}
                    </Link>
                  </li>
                </ul>
              ))
            ) : (
              <p className={styles.emptyState}>Wow, such empty</p>
            )}

            {projects.length >= 5 && (
              <Link to="/projects">View all projects</Link>
            )}
          </section>
        </Container>
      </Layout>
    </>
  )
}

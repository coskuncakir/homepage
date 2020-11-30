import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Title from "../components/title"
import Button from "../components/button"
import styles from "./Index.module.scss"

export default function Home() {
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
              I'm Coskun and I am a Front-End Engineer
            </Title>
            <Title headingLevel="p">
              I develop web applications with the latest and innovative
              technologies to make people’s life simple.
            </Title>
            <Button>Hello</Button>
          </section>
        </Container>
      </Layout>
    </>
  )
}

import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Title from "../components/title"
import Button from "../components/button"

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <Container>
          <Title headingLevel="h1">Hello world!</Title>
          <Button>Hello</Button>
        </Container>
      </Layout>
    </>
  )
}

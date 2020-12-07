import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Title from "../components/title"
import { graphql } from "gatsby"
import Link from "../components/link"
import Card from "../components/card"

export default function IndexPage({ data }) {
  return (
    <>
      <SEO title="Reading" />
      <Layout>
        <Container>
          <Title headingLevel="h1">Reading</Title>
          <Title headingLevel="p">
            Last 10 reading activities from my{" "}
            <Link
              href="https://www.goodreads.com/user/show/61767082-coskun-cakir"
              target="_blank"
              rel="noopener noreferrer"
            >
              Goodreads
            </Link>{" "}
            profile.
          </Title>
          {data.goodreads.shelves.map(shelf =>
            shelf.reviews.slice(0, 10).map(review => (
              <Card
                key={review.book.id}
                title={review.book.title}
                subTitle={`by ${review.book.authors[0].name} [${shelf.name}]`}
                link={review.book.link}
                target="_blank"
                image={review.book.image_url}
              >
                {review.book.description}
              </Card>
            ))
          )}
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    goodreads: allGoodreadsShelf(
      filter: { name: { in: ["currently-reading", "read"] } }
      sort: { order: ASC, fields: reviews___date_added }
      limit: 5
    ) {
      shelves: nodes {
        reviews {
          book {
            id
            title
            authors {
              name
            }
            image_url
            link
            description
          }
          date_added
          read_at
        }
        name
      }
    }
  }
`

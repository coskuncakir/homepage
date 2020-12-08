import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Card from "../card"

export default function Reading() {
  return (
    <StaticQuery
      query={query}
      render={data =>
        data.goodreads.shelves.map(shelf =>
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
        )
      }
    />
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

import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Avatar() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Img
          style={{ width: "inherit", height: "inherit" }}
          fluid={data.avatar.sharp.fluid}
          alt="Coskun Cakir"
        />
      )}
    />
  )
}

export const query = graphql`
  query {
    avatar: file(relativePath: { eq: "avatar.jpg" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

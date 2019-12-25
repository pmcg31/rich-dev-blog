import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import BlogHeadline from "../components/blog-headline"

const StyledContent = styled.div`
  max-width: 36em;
`

export default ({ data }) => {
  return (
    <Layout
      title="Home"
      content={
        <StyledContent>
          {data.allMdx.edges.map(({ node }, index) => (
            <BlogHeadline node={node} key={node.id} />
          ))}
        </StyledContent>
      }
    />
  )
}
export const query = graphql`
  query MyQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          parent {
            ... on File {
              relativePath
              prettySize
            }
          }
          id
          fields {
            slug
            readingTime {
              minutes
              words
            }
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            category
          }
        }
      }
    }
  }
`

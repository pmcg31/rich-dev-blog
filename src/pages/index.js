import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogHeadline from "../components/blog-headline"
import IconElectronics from "../components/icon-electronics"

export default ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <BlogHeadline node={node} key={node.id} />
      ))}
    </Layout>
  )
}
export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

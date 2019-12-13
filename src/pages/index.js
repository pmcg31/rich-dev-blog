import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogHeadline from "../components/blog-headline"

export default ({ data }) => {
  // Get plain markdown pages
  const mdPosts = data.allMarkdownRemark.edges

  // Get mdx pages
  const mdxPosts = data.allMdx.edges

  // Merge data into one array called posts
  var md_idx = 0,
    mdx_idx = 0,
    posts = []
  while (mdx_idx < mdxPosts.length || md_idx < mdPosts.length) {
    const mdxDate =
      mdx_idx < mdxPosts.length
        ? new Date(mdxPosts[mdx_idx].node.frontmatter.date)
        : new Date("1970-01-01")
    const mdDate =
      md_idx < mdPosts.length
        ? new Date(mdPosts[md_idx].node.frontmatter.date)
        : new Date("1970-01-01")

    console.log("md date: " + mdDate + " mdxDate: " + mdxDate)

    if (mdxDate > mdDate) {
      // Process mdx node
      if (mdx_idx < mdxPosts.length) {
        posts.push(mdxPosts[mdx_idx])
        mdx_idx++
      }
    } else {
      // Process md node
      if (md_idx < mdPosts.length) {
        posts.push(mdPosts[md_idx])
        md_idx++
      }
    }
  }

  return (
    <Layout title="Home">
      {posts.map(({ node }, index) => (
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
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            category
          }
          wordCount {
            words
          }
        }
      }
    }
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
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            category
          }
          wordCount {
            words
          }
        }
      }
    }
  }
`

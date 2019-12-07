import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const PostContent = styled.section`
  color: rgb(160, 160, 160);
  font-size: 16px;
  h3 {
    color: coral;
    font-size: 20px;
    font-family: "Dosis", sans-serif;
  }
  p {
    font-family: "Solway", serif;
  }
  img {
    width: 100%;
  }
  pre {
    code {
      padding: 0;
      line-height: 14px;
    }
    margin: 10px;
    background-color: rgb(64, 64, 64);
    border-radius: 3px;
    padding: 3px;
    font-size: 14px;
    overflow: scroll;
    max-height: 500px;
  }
  code {
    background-color: rgb(64, 64, 64);
    border-radius: 3px;
    padding: 3px;
    font-size: 14px;
    line-height: 30px;
  }
`

const PostHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
`

const PostDate = styled.div`
  font-size: 16px;
`

const PostTitle = styled.div`
  align: center;
  color: coral;
  font-family: "Dosis", sans-serif;
  font-size: 36px;
  font-weight: 500;
`

const PostDescription = styled.div`
  color: coral;
  font-family: "Titillium Web", sans-serif;
  font-size: 20px;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <article>
          <PostHeader>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <PostDate>{post.frontmatter.date}</PostDate>
          </PostHeader>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

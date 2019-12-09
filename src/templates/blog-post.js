import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import IconElectronics from "../components/icon-electronics"
import IconAstronomy from "../components/icon-astronomy"
import IconPhotography from "../components/icon-photography"

const PostContent = styled.section`
  color: rgb(160, 160, 160);
  font-size: 16px;
  display: inline-block;
  width: 100%;
  .language-text {
    background-color: #98562d;
    border-radius: 3px;
    padding: 3px;
    font-size: 13px;
    line-height: 26px;
  }
  span.line-numbers-rows {
    padding-top: 6px;
    padding-left: 10px;
  }
  a {
    color: #00abff;
  }
  h3 {
    color: coral;
    font-size: 20px;
    font-family: "Dosis", sans-serif;
  }
  h4 {
    color: rgb(192, 192, 192);
  }
  p {
    font-family: "Solway", serif;
    line-height: 24px;
  }
  img {
    width: 100%;
  }
  pre {
    code {
      padding: 0;
      line-height: 13px;
    }
    margin: 10px;
    background-color: rgb(64, 64, 64);
    border-radius: 10px;
    padding: 5px;
    padding-left: 10px;
    font-size: 14px;
    overflow: scroll;
    max-height: 500px;
  }
  code {
    background-color: rgb(64, 64, 64);
    border-radius: 3px;
    padding: 3px;
    font-size: 13px;
    line-height: 26px;
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

const IconFloat = styled.div`
  padding-right: 10px;
  float: left;
`

const Headline = styled.div`
  display: table;
`

function Icon(props) {
  let square = 100
  if ("electronics" === props.category) {
    return (
      <IconElectronics
        width={square}
        height={square}
        borderColor="coral"
        labelColor="coral"
      />
    )
  } else if ("astronomy" === props.category) {
    return (
      <IconAstronomy
        width={square}
        height={square}
        borderColor="coral"
        labelColor="coral"
      />
    )
  } else if ("photography" === props.category) {
    return (
      <IconPhotography
        width={square}
        height={square}
        borderColor="coral"
        labelColor="coral"
      />
    )
  }
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout title={post.frontmatter.title}>
        <article>
          <PostHeader>
            <IconFloat>
              <Icon category={post.frontmatter.category} />
            </IconFloat>
            <Headline>
              <PostTitle>{post.frontmatter.title}</PostTitle>
              <PostDate>{post.frontmatter.date}</PostDate>
            </Headline>
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
        category
      }
    }
  }
`

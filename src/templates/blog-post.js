import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import IconElectronics from "../components/icon-electronics"
import IconAstronomy from "../components/icon-astronomy"
import IconPhotography from "../components/icon-photography"

const PostContent = styled.section`
  order: 2;
  color: rgb(160, 160, 160);
  font-size: 16px;
  code.language-text {
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
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }
  blockquote {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }
  img {
    max-width: 100%;
    border-radius: 10px;
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
    white-space: pre-wrap;
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
  order: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`

const PostDate = styled.div`
  order: 2;
  font-size: 16px;
`

const PostTitle = styled.div`
  order: 1;
  color: coral;
  font-family: "Dosis", sans-serif;
  font-size: 36px;
  font-weight: 500;
`

const IconWrapper = styled.div`
  order: 1;
  padding-top: 8px;
  padding-right: 15px;
`

const Headline = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
`

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
`

const NavContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const NavPrevious = styled.li`
  order: 1;
`

const NavNext = styled.li`
  order: 2;
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
    const { previous, next } = this.props.pageContext

    return (
      <Layout title={post.frontmatter.title} showStyle="compact">
        <StyledArticle>
          <PostHeader>
            <IconWrapper>
              <Icon category={post.frontmatter.category} />
            </IconWrapper>
            <Headline>
              <PostTitle>{post.frontmatter.title}</PostTitle>
              <PostDate>{post.frontmatter.date}</PostDate>
            </Headline>
          </PostHeader>
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </StyledArticle>
        <hr />

        <nav>
          <NavContainer>
            <NavPrevious>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </NavPrevious>
            <NavNext>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </NavNext>
          </NavContainer>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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

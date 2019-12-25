import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import IdeaUpElectronicsIcon from "../components/icons/idea-up-electronics-icon"
import IdeaUpAstronomyIcon from "../components/icons/idea-up-astronomy-icon"
import IdeaUpPhotographyIcon from "../components/icons/idea-up-photography-icon"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PageTOC from "../components/page-toc"
import SmartQuote from "../components/smart-quote"

const StyledElectronicsIcon = styled(IdeaUpElectronicsIcon)`
  width: 100px;
  height: 100px;
  .icon-label {
    stroke: coral;
  }
  .icon-border {
    stroke: coral;
  }
`

const StyledAstronomyIcon = styled(IdeaUpAstronomyIcon)`
  width: 100px;
  height: 100px;
  .icon-label {
    stroke: coral;
  }
  .icon-border {
    stroke: coral;
  }
`

const StyledPhotographyIcon = styled(IdeaUpPhotographyIcon)`
  width: 100px;
  height: 100px;
  .icon-label {
    stroke: coral;
  }
  .icon-border {
    stroke: coral;
  }
`

const PostContent = styled.section`
  order: 2;
  color: rgb(160, 160, 160);
  font-size: 16px;
  max-width: 700px;
  display: grid;
  grid-template-columns: minmax(20vw, min-content) minmax(0, 1fr);
  align-items: flex-start;
  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    #nav-wrapper {
      display: none;
    }
  }
`

const NavWrapper = styled.div`
  order: 1;
  position: -webkit-sticky;
  position: sticky;
  top: 1.5em;
  padding-top: 3px;
  padding-right: 40px;
  margin-block-start: 10px;
  margin-block-end: 10px;
  font-family: "Solway", serif;
  color: rgb(160, 160, 160);
  display: flex;
  flex-direction: column;
`

const StyledTOC = styled(PageTOC)`
  ul {
    font-family: "Dosis", san-serif;
    font-size: 16px;
    padding-inline-start: 25px;
  }
  .toc-H4 {
    font-size: 14px;
  }
`

const MDXWrapper = styled.div`
  order: 2;
  max-width: 500px;
  flex: 1;
  min-width: 0;
  margin: 0 0;
  .gatsby-highlight-code-line::after {
    content: " ";
  }
  .gatsby-highlight-code-line {
    display: block;
    margin-right: -1em;
    margin-left: -4em;
    padding-right: 1em;
    padding-left: 3.75em;
    border-left: 0.25em solid coral;
    line-height: 21px;
  }
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
  .anchor {
    stroke: rgb(80, 80, 80);
  }
  .embedVideo-container {
    width: 90vw;
  }
  a {
    color: #00abff;
  }
  h3 {
    color: coral;
    font-size: 20px;
    font-family: "Dosis", sans-serif;
    font-weight: 400;
  }
  h4 {
    color: rgb(192, 192, 192);
  }
  p {
    font-family: "Solway", serif;
    line-height: 24px;
    margin-block-start: 10px;
    margin-block-end: 10px;
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
    overflow: auto;
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
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
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
  line-height: 1.1;
  padding-top: 10px;
`

const IconWrapper = styled.div`
  order: 1;
  padding-right: 15px;
`

const Headline = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
  if ("electronics" === props.category) {
    return <StyledElectronicsIcon />
  } else if ("astronomy" === props.category) {
    return <StyledAstronomyIcon />
  } else if ("photography" === props.category) {
    return <StyledPhotographyIcon />
  }
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    return (
      <Layout
        title={post.frontmatter.title}
        showStyle="compact"
        content={
          <div>
            <StyledArticle>
              <PostHeader id="post-header">
                <IconWrapper>
                  <Icon category={post.frontmatter.category} />
                </IconWrapper>
                <Headline>
                  <PostTitle>
                    <SmartQuote>{post.frontmatter.title}</SmartQuote>
                  </PostTitle>
                  <PostDate>{post.frontmatter.date}</PostDate>
                </Headline>
              </PostHeader>
              <PostContent>
                <NavWrapper id="nav-wrapper">
                  <StyledTOC />
                </NavWrapper>
                <MDXWrapper id="post-content">
                  <MDXRenderer>{post.body}</MDXRenderer>
                </MDXWrapper>
              </PostContent>
            </StyledArticle>
            <hr />

            <nav>
              <NavContainer>
                <NavPrevious>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← <SmartQuote>{previous.frontmatter.title}</SmartQuote>
                    </Link>
                  )}
                </NavPrevious>
                <NavNext>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      <SmartQuote>{next.frontmatter.title}</SmartQuote> →
                    </Link>
                  )}
                </NavNext>
              </NavContainer>
            </nav>
          </div>
        }
      />
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
      }
    }
  }
`

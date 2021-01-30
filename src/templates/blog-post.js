import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import IdeaUpElectronicsIcon from "../components/icons/idea-up-electronics-icon"
import IdeaUpAstronomyIcon from "../components/icons/idea-up-astronomy-icon"
import IdeaUpPhotographyIcon from "../components/icons/idea-up-photography-icon"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import PageTOC from "../components/page-toc"
import SmartQuote from "../components/smart-quote"

const StyledElectronicsIcon = styled(IdeaUpElectronicsIcon)`
  width: 5em;
  height: 5em;
  .icon-label {
    stroke: coral;
  }
  .icon-border {
    stroke: coral;
  }
`

const StyledAstronomyIcon = styled(IdeaUpAstronomyIcon)`
  width: 5em;
  height: 5em;
  .icon-label {
    stroke: coral;
  }
  .icon-border {
    stroke: coral;
  }
`

const StyledPhotographyIcon = styled(IdeaUpPhotographyIcon)`
  width: 5em;
  height: 5em;
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
  max-width: 40em;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 3fr;
  grid-column-gap: 1em;
  align-items: start;
  @media (max-width: 40em), (max-height: 50em) {
    grid-template-columns: minmax(0, 1fr);
    #nav-wrapper {
      display: none;
    }
  }
`

const NavWrapper = styled.div`
  grid-column: 1 / span 1;
  position: -webkit-sticky;
  position: sticky;
  top: 1.5em;
  padding-top: 1em;
  margin-block-start: 0.4em;
  margin-block-end: 0.4em;
  font-family: "Solway", serif;
  color: rgb(160, 160, 160);
  display: flex;
  flex-direction: column;
`

const MDXWrapper = styled.div`
  grid-column: 2 / span 1;
  min-width: 0;
  margin: 0 0;
  .gatsby-highlight-code-line::after {
    content: " ";
  }
  .gatsby-highlight-code-line {
    display: block;
    margin-right: -1em;
    margin-left: -3.75em;
    padding-right: 1em;
    padding-left: 3.5em;
    border-left: 0.25em solid coral;
  }
  code {
    background-color: rgb(64, 64, 64);
  }
  code.language-text {
    background-color: #98562d;
    font-size: 0.75em;
  }
  pre {
    code {
      padding: 0;
    }
    margin: 0.5em;
    background-color: rgb(64, 64, 64);
    border-radius: 0.5em;
    padding: 0.3em;
    font-size: 0.65em;
    overflow: auto;
    max-height: 50vh;
  }
  span.line-numbers-rows {
    padding-top: 0.35em;
    padding-left: 0.8em;
  }
  .anchor {
    stroke: rgb(80, 80, 80);
  }
  .embedVideo-container {
    width: 90vw;
  }
  iframe {
    border-radius: 0.5em;
    max-height: 100vh;
  }
  a {
    color: #00abff;
  }
  h3 {
    color: coral;
    font-size: 1.25em;
    font-family: "Dosis", sans-serif;
    font-weight: 400;
  }
  h4 {
    color: rgb(192, 192, 192);
  }
  p {
    font-family: "Solway", serif;
    line-height: 1.4;
  }
  blockquote {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }
  img,
  svg {
    max-width: 100%;
    max-height: 100vh;
    border-radius: 0.5em;
    height: initial;
  }
  .modal-image-wrapper {
    cursor: pointer;
  }
  .anchor svg {
    fill: rgb(160, 160, 160);
    width: 25;
  }
  .anchor {
    margin-left: -16px;
  }
`

const PostHeader = styled.header`
  order: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1em;
  padding-bottom: 1em;
`

const PostDate = styled.div`
  order: 2;
  font-size: 0.9em;
`

const PostTitle = styled.div`
  order: 1;
  color: coral;
  font-family: "Dosis", sans-serif;
  font-size: 1.9em;
  font-weight: 500;
  line-height: 1.1;
`

const IconWrapper = styled.div`
  order: 1;
  padding-right: 1em;
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
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  border-top: solid;
  border-width: 1px;
  padding-top: 0.75em;
  display: none;
  @media (max-width: 40em), (max-height: 50em) {
    display: flex;
  }
`

const NavPrevious = styled.li`
  order: 1;
`

const NavNext = styled.li`
  order: 2;
`

const Modal = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */

  .modal-content {
    margin: auto;
    display: block;
    border-radius: 0.5em;
    max-width: 70%;
    max-height: 80%;
    width: auto;
    height: auto;
    object-fit: scale-down;
    background: #222;
  }
  #modal-caption {
    margin: auto;
    display: block;
    width: 80%;
    text-align: center;
    color: coral;
    padding: 10px 0;
    height: 150px;
  }
  .modal-close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: rgb(160, 160, 160);
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }
  .modal-close:hover,
  .modal-close:focus {
    color: coral;
    text-decoration: none;
    cursor: pointer;
  }
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

function modalClose() {
  var modal = document.getElementById("image-modal")

  modal.style.display = "none"
}

function modalClick(e) {
  var modalImg = document.getElementById("image-modal-content")

  if (e.target !== modalImg) {
    modalClose()
  }
}

function showModalImage(e) {
  var modal = document.getElementById("image-modal")
  var modalImg = document.getElementById("image-modal-content")
  var caption = document.getElementById("modal-caption")
  modal.style.display = "block"
  modalImg.loading = e.target.loading;
  modalImg.srcset = e.target.srcset;
  modalImg.src = e.target.src;
  modalImg.alt = e.target.alt;
  caption.innerText = e.target.alt;
}

const components = {
  a: props => {
    if (props.className === "gatsby-resp-image-link") {
      return (<span className="modal-image-wrapper" title={props.href}>{props.children}</span>)
    } else {
      return (<a {...props} />)
    }
  }
}
class BlogPostTemplate extends React.Component {
  componentDidMount() {
    var modal = document.getElementById("image-modal")
    modal.onclick = modalClick

    var closeSpan = document.getElementById("modal-close")
    closeSpan.onclick = function () {
      modalClose()
    }

    var elems = document.getElementsByClassName("modal-image-wrapper")
    for (var i = 0; i < elems.length; i++) {
      elems[i].onclick = showModalImage
    }
  }

  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    return (
      <Layout
        title={post.frontmatter.title}
        showStyle="compact"
        content={
          <div>
            <Modal id="image-modal">
              <span className="modal-close" id="modal-close">&times;</span>
              <img className="modal-content" id="image-modal-content" alt="" />
              <div id="modal-caption"></div>
            </Modal>
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
                  <PageTOC
                    up={{ target: "/", text: "Back to List" }}
                    previous={
                      previous && {
                        target: previous.fields.slug,
                        text: previous.frontmatter.title,
                      }
                    }
                    next={
                      next && {
                        target: next.fields.slug,
                        text: next.frontmatter.title,
                      }
                    }
                  />
                </NavWrapper>
                <MDXWrapper id="post-content">
                  <MDXProvider components={components}>
                    <MDXRenderer>{post.body}</MDXRenderer>
                  </MDXProvider>
                </MDXWrapper>
              </PostContent>
            </StyledArticle>
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

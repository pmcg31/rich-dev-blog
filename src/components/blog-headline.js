import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import IdeaUpElectronicsIcon from "../components/icons/idea-up-electronics-icon"
import IdeaUpAstronomyIcon from "../components/icons/idea-up-astronomy-icon"
import IdeaUpPhotographyIcon from "../components/icons/idea-up-photography-icon"
import SmartQuote from "../components/smart-quote"

const StyledElectronicsIcon = styled(IdeaUpElectronicsIcon)`
  width: 2.5em;
  height: 2.5em;
  .icon-label {
    stroke: coral;
  }
  .icon-border {
    stroke: coral;
  }
`

const StyledAstronomyIcon = styled(IdeaUpAstronomyIcon)`
  width: 2.5em;
  height: 2.5em;
  .icon-label {
    stroke: coral;
  }
  .icon-border {
    stroke: coral;
  }
`

const StyledPhotographyIcon = styled(IdeaUpPhotographyIcon)`
  width: 2.5em;
  height: 2.5em;
  .icon-label {
    stroke: coral;
  }
  .icon-border {
    stroke: coral;
  }
`

const PostDetails = styled.div`
  grid-area: details;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  font-family: "Dosis", sans-serif;
`

const PostDateTTRWrapper = styled.div`
  order: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  padding-top: 0.2em;
`

const PostDate = styled.div`
  order: 1;
  font-size: 0.9em;
  padding-right: 0.2em;
  span {
    color: rgb(160, 160, 160);
  }
`

const PostTTR = styled.div`
  order: 2;
  text-align: right;
  font-size: 0.9em;
  span {
    color: rgb(160, 160, 160);
  }
`

const PostTitle = styled.div`
  grid-area: title;
  color: coral;
  font-family: "Dosis", sans-serif;
  font-size: 1.6em;
  font-weight: 500;
  line-height: 1.1;
`

const PostDescription = styled.div`
  order: 1;
  color: rgb(176, 176, 176);
  font-family: "Solway", sans-serif;
  font-weight: 300;
  padding-top: 0.2em;
`

const PostWrapper = styled.div`
  display: grid;
  justify-content: stretch;
  align-content: stretch;
  justify-items: stretch;
  align-items: center;
  grid-template-columns: min-content auto;
  grid-template-rows: min-content auto;
  grid-template-areas:
    "icon title"
    ". details";
  padding-top: 0.6em;
  padding-bottom: 0.6em;
`

const PostIcon = styled.div`
  grid-area: icon;
  padding-right: 0.5em;
  padding-top: 0.2em;
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

const BlogHeadline = ({ node, className }) => (
  <PostWrapper className={className}>
    <PostIcon>
      <Icon category={node.frontmatter.category} />
    </PostIcon>
    <PostTitle>
      <Link to={node.fields.slug}>
        <SmartQuote>{node.frontmatter.title}</SmartQuote>
      </Link>
    </PostTitle>
    <PostDetails>
      <PostDescription>
        <SmartQuote>{node.frontmatter.description}</SmartQuote>
      </PostDescription>
      <PostDateTTRWrapper>
        <PostDate>
          <span role="img" aria-label="posted">
            📆
          </span>{" "}
          <span>{node.frontmatter.date}</span> in{" "}
          <span>{node.frontmatter.category}</span>
        </PostDate>
        <PostTTR>
          <span role="img" aria-label="time to read">
            ⏱
          </span>{" "}
          <span>{Math.ceil(node.fields.readingTime.minutes)}</span> min ≈&nbsp;
          <span>{node.fields.readingTime.words}</span> words
        </PostTTR>
      </PostDateTTRWrapper>
    </PostDetails>
  </PostWrapper>
)

export default BlogHeadline

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import IdeaUpElectronicsIcon from "../components/icons/idea-up-electronics-icon"
import IdeaUpAstronomyIcon from "../components/icons/idea-up-astronomy-icon"
import IdeaUpPhotographyIcon from "../components/icons/idea-up-photography-icon"

const StyledElectronicsIcon = styled(IdeaUpElectronicsIcon)`
  width: 50px;
  height: 50px;
  .icon-label {
    stroke: coral;
  }
  .icon-border {
    stroke: coral;
  }
`

const StyledAstronomyIcon = styled(IdeaUpAstronomyIcon)`
  width: 50px;
  height: 50px;
  .icon-label {
    stroke: coral;
  }
  .icon-border {
    stroke: coral;
  }
`

const StyledPhotographyIcon = styled(IdeaUpPhotographyIcon)`
  width: 50px;
  height: 50px;
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
  padding-right: 10px;
  font-family: "Dosis", sans-serif;
`

const PostDateTTRWrapper = styled.div`
  order: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  padding-top: 4px;
`

const PostDate = styled.div`
  order: 1;
  font-size: 16px;
  padding-right: 5px;
  span {
    color: rgb(160, 160, 160);
  }
`

const PostTTR = styled.div`
  order: 2;
  text-align: right;
  font-size: 16px;
  span {
    color: rgb(160, 160, 160);
  }
`

const PostTitle = styled.div`
  grid-area: title;
  color: coral;
  font-family: "Dosis", sans-serif;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.1;
`

const PostDescription = styled.div`
  order: 1;
  color: rgb(176, 176, 176);
  font-family: "Solway", sans-serif;
  font-weight: 300;
  font-size: 18px;
  padding-top: 3px;
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
  padding-top: 10px;
  padding-bottom: 10px;
`

const PostIcon = styled.div`
  grid-area: icon;
  padding-right: 10px;
  padding-top: 5px;
`

const PostHeadline = styled.section`
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
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
      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
    </PostTitle>
    <PostDetails>
      <PostDescription>{node.frontmatter.description}</PostDescription>
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

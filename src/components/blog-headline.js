import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import IconElectronics from "../components/icon-electronics"
import IconAstronomy from "../components/icon-astronomy"
import IconPhotography from "../components/icon-photography"

const PostDetails = styled.div`
  vertical-align: middle;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Dosis", sans-serif;
`

const PostDate = styled.div`
  padding-top: 4px;
  font-size: 16px;
  span {
    color: rgb(160, 160, 160);
  }
  float: left;
`

const PostTTR = styled.div`
  text-align: right;
  padding-top: 4px;
  font-size: 16px;
  span {
    color: rgb(160, 160, 160);
  }
`

const PostTitle = styled.div`
  padding-top: 40px;
  color: coral;
  font-family: "Dosis", sans-serif;
  font-size: 30px;
  font-weight: 500;
`

const PostDescription = styled.div`
  color: rgb(176, 176, 176);
  font-family: "Solway", sans-serif;
  font-weight: 300;
  font-size: 18px;
  padding-top: 3px;
`

const PostIcon = styled.div`
  padding-top: 50px;
  padding-right: 15px;
  float: left;
  display: table;
`

const PostHeadline = styled.section`
  display: table;
`

function Icon(props) {
  let square = 70
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

const BlogHeadline = ({ node, className }) => (
  <div className={className}>
    <PostIcon>
      <Icon category={node.frontmatter.category} />
    </PostIcon>
    <PostHeadline>
      <PostTitle>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
      </PostTitle>
      <PostDetails>
        <PostDescription>{node.frontmatter.description}</PostDescription>
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
          <span>{node.timeToRead}</span> min (
          <span>{node.wordCount.words}</span> words)
        </PostTTR>
      </PostDetails>
    </PostHeadline>
  </div>
)

export default BlogHeadline

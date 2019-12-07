import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PostDetails = styled.div`
  vertical-align: middle;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Dosis", sans-serif;
`

const PostDate = styled.div`
  padding-top: 5px;
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
`

const BlogHeadline = ({ node, className }) => (
  <div className={className}>
    <PostTitle>
      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
    </PostTitle>
    <PostDetails>
      <PostDescription>{node.frontmatter.description}</PostDescription>
      <PostDate>
        Posted <span>{node.frontmatter.date}</span> in{" "}
        <span>{node.frontmatter.category}</span>
      </PostDate>
    </PostDetails>
  </div>
)

export default BlogHeadline

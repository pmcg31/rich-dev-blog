import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import IconIdeaUp from "../components/icon-idea-up"

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: rgb(160, 160, 160);
  padding-bottom: 5px;
`

const SiteIcon = styled(IconIdeaUp)`
  order: 1;
  width: 40px;
  height: 40px;
`

const BigText = styled.div`
  order: 2;
  color: coral;
  font-size: 30px;
  padding-left: 8px;
`

const LayoutBannerCompact = () => {
  return (
    <Banner>
      <Link to="/">
        <SiteIcon id="site-icon" />
      </Link>
      <BigText>
        <Link to="/">IdeaUP</Link>
      </BigText>
    </Banner>
  )
}

export default LayoutBannerCompact

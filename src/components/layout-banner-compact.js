import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import IdeaUpSiteIcon from "../components/icons/idea-up-site-icon"

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

const SiteIcon = styled(IdeaUpSiteIcon)`
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

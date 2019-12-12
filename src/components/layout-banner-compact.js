import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import IdeaUpSiteIcon from "../components/icons/idea-up-site-icon"
import IdeaUpTextLogo from "../components/idea-up-text-logo"

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
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

const SiteLogo = styled(IdeaUpTextLogo)`
  order: 2;
  height: 35px;
  padding-left: 8px;
`

// const BigText = styled.div`
//   order: 2;
//   color: coral;
//   font-size: 30px;
//   padding-left: 8px;
// `

const LayoutBannerCompact = () => {
  return (
    <Banner>
      <Link to="/">
        <SiteIcon id="site-icon" />
      </Link>
      <Link to="/">
        <SiteLogo id="site-logo" />
      </Link>
    </Banner>
  )
}

export default LayoutBannerCompact

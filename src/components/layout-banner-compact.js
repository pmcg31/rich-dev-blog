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
  padding-bottom: 0.2em;
`

const SiteIcon = styled(IdeaUpSiteIcon)`
  order: 1;
  width: 3em;
  height: 3em;
`

const SiteLogo = styled(IdeaUpTextLogo)`
  order: 2;
  height: 2em;
  padding-left: 0.5em;
`

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

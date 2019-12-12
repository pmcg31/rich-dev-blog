import React, { useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import IdeaUpSiteIcon from "../components/icons/idea-up-site-icon"
import IdeaUpTextLogo from "../components/idea-up-text-logo"

// This file creates a full size banner for the header

const Banner = styled.div`
  display: grid;
  justify-content: stretch;
  align-content: stretch;
  justify-items: stretch;
  align-items: center;
  grid-template-columns: min-content auto;
  grid-template-rows: auto;
  grid-template-areas: "icon hulk";
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: rgb(160, 160, 160);
  padding-bottom: 10px;
  padding-top: 5px;
`

const SiteIcon = styled(IdeaUpSiteIcon)`
  grid-area: icon;
  width: 120px;
  height: 120px;
  .idea-up-site-icon-rays {
    stroke: rgba(255, 127, 80, 0);
    transition: stroke 0.75s ease-in-out;
  }
`

const SiteLogo = styled(IdeaUpTextLogo)`
  order: 1;
  height: 70px;
`

const Hulk = styled.div`
  grid-area: hulk;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
`

const SmallText = styled.div`
  order: 2;
  color: rgb(176, 176, 176);
  font-family: Solway, sans-serif;
  font-size: 22px;
`

const LayoutBannerFull = () => {
  useEffect(() => {
    var rays = document
      .getElementById("site-icon")
      .getElementsByClassName("idea-up-site-icon-rays")
    var raysLen = rays.length

    for (var i = 0; i < raysLen; i++) {
      rays[i].style.stroke = "coral"
    }
  })
  return (
    <Banner>
      <Link to="/">
        <SiteIcon id="site-icon" />
      </Link>
      <Hulk>
        <Link to="/">
          <SiteLogo />
        </Link>
        <SmallText>
          <Link to="/">Rich’s Design &amp; Creativity Sandbox</Link>
        </SmallText>
      </Hulk>
    </Banner>
  )
}

export default LayoutBannerFull

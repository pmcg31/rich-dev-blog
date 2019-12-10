import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import IconIdeaUp from "../components/icon-idea-up"

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
`

const SiteIcon = styled.div`
  grid-area: icon;
`

const Hulk = styled.div`
  grid-area: hulk;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
`

const BigText = styled.div`
  order: 1;
  color: coral;
  font-size: 70px;
`

const SmallText = styled.div`
  order: 2;
  color: rgb(176, 176, 176);
  font-family: Solway, sans-serif;
  font-size: 22px;
`

const LayoutBannerFull = () => {
  let siteIconSize = 200
  return (
    <Banner>
      <SiteIcon>
        <Link to="/">
          <IconIdeaUp
            width={siteIconSize}
            height={siteIconSize}
            labelColor="coral"
            borderColor="coral"
          />
        </Link>
      </SiteIcon>
      <Hulk>
        <BigText>
          <Link to="/">IdeaUp</Link>
        </BigText>
        <SmallText>
          <Link to="/">Rich’s Design &amp; Creativity Blog</Link>
        </SmallText>
      </Hulk>
    </Banner>
  )
}

export default LayoutBannerFull

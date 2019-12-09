import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import IconIdeaUp from "../components/icon-idea-up"

const Banner = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: rgb(160, 160, 160);
  padding-bottom: 10px;
`

const SiteIcon = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  padding: 5px;
`

const Hulk = styled.div`
  display: table-cell;
  width: 100%;
  padding-left: 20px;
`

const BigText = styled.div`
  color: coral;
  font-size: 70px;
`

const SmallText = styled.div`
  color: rgb(176, 176, 176);
  font-family: Solway, sans-serif;
  font-size: 22px;
`

const LayoutBannerFull = () => {
  let siteIconSize = 120
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

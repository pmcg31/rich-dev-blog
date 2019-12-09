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
`

const SiteIcon = styled.div`
  display: table-cell;
  padding: 5px;
`

const Hulk = styled.div`
  display: grid;
  grid-template-columns: auto;
  width: 100%;
`

const BigText = styled.div`
  color: coral;
  font-size: 30px;
  padding-left: 5px;
  padding-right: 20px;
  align-self: center;
  padding-bottom: 8px;
`

const SmallText = styled.div`
  color: rgb(176, 176, 176);
  font-family: Solway, sans-serif;
  font-size: 22px;
  align-self: center;
  padding-bottom: 2px;
`

const LayoutBannerCompact = ({ siteTitle }) => {
  let siteIconSize = 40
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
      </Hulk>
    </Banner>
  )
}

export default LayoutBannerCompact

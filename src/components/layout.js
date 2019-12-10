import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import LayoutBannerFull from "../components/layout-banner-full"
import LayoutBannerCompact from "../components/layout-banner-compact"
import LayoutFooter from "../components/layout-footer"

// This file sets up the main layout areas of the site
// in a grid as shown below. Each area is delegated to
// a component that manages it. The grid will stretch
// vertically (align) to fill the browser window if it
// is not tall enough. The grid will center in the
// browser window horizontally (justify) if it is not
// wide enough.
//
//  |          |                           |           |
//  ====================================================
//  |                 H E A D E R  (1000px max)        |
//  ====================================================
//  |          |                           |           |
//  |    SB    |                           |    SB     |
//  |   LEFT   |     C O N T E N T         |   RIGHT   |
//  |          |      (600px max)          |           |
//  |          |                           |           |
//  ====================================================
//  |                 F O O T E R                      |
//  ====================================================
//  |          |                           |           |
//
// Delegates for direct children of Layout's grid
// will be prefixed with "Layout"

const Grid = styled.div`
  display: grid;
  justify-content: stretch;
  align-content: stretch;
  justify-items: stretch;
  align-items: stretch;
  grid-template-columns: min-content auto min-content;
  grid-template-rows: auto auto 45px;
  grid-template-areas:
    "header header header"
    "sb_left content sb_right"
    "footer footer footer";
`
// Creates space for the header. But,
// put a max-width here and it will just
// justify left and not center like I want
const HeaderArea = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: stretch;

  @media only screen and (min-width: 1000px) {
    justify-items: center;
  }
`

// Wrapper to center the header in the stretched
// area the grid provides. max-width kills the
// center. Sigh.
const HeaderFlexCenterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

// Seems max-width doesn't mix with grid or flex,
// so, YAAAD (yet another div). All this
// nonsense seems necessary if I want to enforce
// the max-width at this level. It belongs here
// because it is a layout thing to me
const HeaderMaxWidthWrapper = styled.div`
  width: initial;

  @media only screen and (min-width: 1000px) {
    width: 1000px;
  }
`

// Creates space for the left side bar. Someday...
const SBLeftArea = styled.div`
  grid-area: sb_left;
`
// Same sad story as the Header for these three,
// see above
const ContentArea = styled.div`
  grid-area: content;
`

// Yep
const ContentFlexCenterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

// I know...
const ContentMaxWidthWrapper = styled.div`
  max-width: 600px;
`

// Creates space for the right side bar. Someday...
const SBRightArea = styled.div`
  grid-area: sb_right;
`

// Creates space for the footer
const FooterArea = styled.div`
  grid-area: footer;
`

// The Main Event..er..Function
const Layout = ({ title, showStyle, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  let pageTitle = title || data.site.siteMetadata.title

  // Set the header height and select the proper banner
  // layout based on the showStyle prop
  let headerHeight
  let Banner
  if ("full" === showStyle) {
    headerHeight = "144px"
    Banner = LayoutBannerFull
  } else if ("compact" === showStyle) {
    headerHeight = "54px"
    Banner = LayoutBannerCompact
  } else {
    console.log("Unknown showStyle: " + showStyle)
  }

  return (
    <Grid headerHeight={headerHeight}>
      <Helmet>
        <title>{pageTitle}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600|Solway:300,400,500|Titillium+Web:200i,200&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <HeaderArea>
        {/* <HeaderFlexCenterWrapper> */}
        <HeaderMaxWidthWrapper>
          <Banner />
        </HeaderMaxWidthWrapper>
        {/* </HeaderFlexCenterWrapper> */}
      </HeaderArea>

      <SBLeftArea />

      <ContentArea>
        <ContentFlexCenterWrapper>
          <ContentMaxWidthWrapper>{children}</ContentMaxWidthWrapper>
        </ContentFlexCenterWrapper>
      </ContentArea>

      <SBRightArea />

      <FooterArea>
        <LayoutFooter />
      </FooterArea>
    </Grid>
  )
}

Layout.defaultProps = {
  showStyle: "full",
}

export default Layout

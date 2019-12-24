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
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header header header"
    "sb_left content sb_right"
    "footer footer footer";
`
// Creates space for the header.
// The justify-items style will switch from
// stretch to center when the width
// exceeds 1000 px (event handler in render)
const HeaderArea = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: stretch;
`

// Creates space for the left side bar. Someday...
const SBLeftArea = styled.div`
  grid-area: sb_left;
`
// Creates space for the content
// The justify-items style will switch from
// stretch to center when the width
// exceeds 600 px (event handler in render)
const ContentArea = styled.div`
  grid-area: content;
  justify-self: center;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: stretch;
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
const Layout = ({ title, showStyle, sbLeft, content, sbRight }) => {
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

  let pageTitle = data.site.siteMetadata.title
  if (title) {
    pageTitle = pageTitle + " | " + title
  }

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
    <Grid id="top" headerHeight={headerHeight}>
      <Helmet>
        <title>{pageTitle}</title>
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css?family=Dosis:300,500,700|Solway:300,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Dosis:300,500,700|Solway:300,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <HeaderArea id="header-area">
        <Banner />
      </HeaderArea>

      <SBLeftArea>{sbLeft}</SBLeftArea>

      <ContentArea id="content-area">{content}</ContentArea>

      <SBRightArea>{sbRight}</SBRightArea>

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

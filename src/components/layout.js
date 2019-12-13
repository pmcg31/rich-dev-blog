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

// This component will have its width switched to
// 1000 px when its HeaderArea exceeds 1000 px wide
// (event handler in render)
const HeaderMaxWidthWrapper = styled.div`
  width: initial;
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
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: stretch;
`

// This component will have its width switched to
// 600 px when ContentArea exceeds 600 px wide
// (event handler in render)
const ContentMaxWidthWrapper = styled.div`
  width: initial;
`

// Creates space for the right side bar. Someday...
const SBRightArea = styled.div`
  grid-area: sb_right;
`

// Creates space for the footer
const FooterArea = styled.div`
  grid-area: footer;
`

const Curtain = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ;
`

const headerAreaMaxWidth = 800
const contentAreaMaxWidth = 500

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

  // Hook the window resize event
  React.useEffect(() => {
    let previousHeaderAreaWidth = 0
    let previousContentAreaWidth = 0

    function handleResize() {
      let headerArea = document.getElementById("header-area")
      if (
        headerArea.clientWidth > headerAreaMaxWidth &&
        previousHeaderAreaWidth <= headerAreaMaxWidth
      ) {
        headerArea.style.justifyItems = "center"
        document.getElementById("header-max-width-wrapper").style.width =
          headerAreaMaxWidth + "px"
      }

      if (
        headerArea.clientWidth <= headerAreaMaxWidth &&
        previousHeaderAreaWidth > headerAreaMaxWidth
      ) {
        headerArea.style.justifyItems = "stretch"
        document.getElementById("header-max-width-wrapper").style.width =
          "initial"
      }

      previousHeaderAreaWidth = headerArea.clientWidth

      let contentArea = document.getElementById("content-area")
      if (
        contentArea.clientWidth > contentAreaMaxWidth &&
        previousContentAreaWidth <= contentAreaMaxWidth
      ) {
        contentArea.style.justifyItems = "center"
        document.getElementById("content-max-width-wrapper").style.width =
          contentAreaMaxWidth + "px"
      }

      if (
        contentArea.clientWidth <= contentAreaMaxWidth &&
        previousContentAreaWidth > contentAreaMaxWidth
      ) {
        contentArea.style.justifyItems = "stretch"
        document.getElementById("content-max-width-wrapper").style.width =
          "initial"
      }

      previousContentAreaWidth = contentArea.clientWidth
    }

    // Set up a window resize handler
    window.addEventListener("resize", handleResize)

    // Call it once now to fix the layout
    handleResize()

    // Raise the curtains now that layout is settled
    var curtains = document.getElementsByClassName("curtain")
    Array.prototype.filter.call(curtains, function(curtain) {
      curtain.style.display = "none"
    })
  })

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
    <Grid headerHeight={headerHeight}>
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
      <Curtain className="curtain" />
      <HeaderArea id="header-area">
        <HeaderMaxWidthWrapper id="header-max-width-wrapper">
          <Banner />
        </HeaderMaxWidthWrapper>
      </HeaderArea>

      <SBLeftArea />

      <ContentArea id="content-area">
        <ContentMaxWidthWrapper id="content-max-width-wrapper">
          {children}
        </ContentMaxWidthWrapper>
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

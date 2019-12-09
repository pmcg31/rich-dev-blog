import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import LayoutBannerFull from "../components/layout-banner-full"
import LayoutBannerCompact from "../components/layout-banner-compact"

const Content = styled.div`
  margin: auto;
  max-width: 600px;
  padding: 0px 1rem;
`

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

  let Banner
  if ("full" === showStyle) {
    Banner = LayoutBannerFull
  } else if ("compact" === showStyle) {
    Banner = LayoutBannerCompact
  } else {
    console.log("Unknown showStyle: " + showStyle)
  }

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600|Solway:300,400,500|Titillium+Web:200i,200&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Banner siteTitle={data.site.siteMetadata.title} />
      <Content>{children}</Content>
    </div>
  )
}

Layout.defaultProps = {
  showStyle: "full",
}

export default Layout

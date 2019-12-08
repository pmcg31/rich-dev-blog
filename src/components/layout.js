import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ title, children }) => {
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
  console.log(title)
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600, padding: `0 1rem` }}>
      <Helmet>
        <title>{pageTitle}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600|Solway:300,400,500|Titillium+Web:200i,200&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Link to="/">
        <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
      </Link>
      {children}
    </div>
  )
}

export default Layout

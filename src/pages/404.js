import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const StyledContent = styled.div`
  max-width: 36em;

  h1 {
    color: coral;
    font-family: "Dosis", sans-serif;
    font-size: 1.9em;
    font-weight: 500;
    line-height: 1.1;
    text-align: center;
  }
  p {
    font-family: "Solway", serif;
    line-height: 1.4;
    text-align: center;
  }
`

const GotNuthinForYaPage = ({ data }) => {
  return (
    <Layout
      title="Not Found"
      content={
        <StyledContent>
          <h1>This is not the page you're looking for</h1>
          <p>Move along...</p>
        </StyledContent>
      }
    />
  )
}

export default GotNuthinForYaPage

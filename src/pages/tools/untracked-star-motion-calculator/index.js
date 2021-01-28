import React from "react"
import styled from "styled-components"
import Layout from "../../../components/layout"
import NoTrailCalculator from "../../../components/no-trail-calculator"
import TestPhotoFlipper from "../../../components/blog/trouble-with-500-rule/test-photo-flipper"

const Container = styled.div`
  padding: 1em;
`

const StyledCalc = styled(NoTrailCalculator)``

const StarCalculator = () => {
  return (
    <Layout
      title="No Star Trail Calculator"
      showStyle="full"
      content={
        <Container>
          <StyledCalc />
          <p></p>
          <TestPhotoFlipper />
        </Container>
      }
    />
  )
}
export default StarCalculator
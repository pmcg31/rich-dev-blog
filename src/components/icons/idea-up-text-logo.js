import React from "react"
import styled from "styled-components"
import svgBase64 from "../../../content/assets/icons/text-logo.svg"
import SvgInline from "../../components/svg-inline"

const StyledSvg = styled(SvgInline)`
  .idea-up-text-logo-lettering {
    fill: coral;
  }
  .idea-up-text-logo-bar {
    fill: #787878;
  }
`

const IdeaUpTextLogo = props => {
  return (
    <StyledSvg
      id={props.id}
      className={props.className}
      svgBase64={svgBase64}
    />
  )
}

export default IdeaUpTextLogo

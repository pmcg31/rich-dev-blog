import React from "react"
import styled from "styled-components"
import toReactComponent from "svgr.macro"
import SvgInline from "../../components/svg-inline"

const StyledSvg = styled(SvgInline)`
  .idea-up-site-icon-arrow {
    fill: none;
    stroke: coral;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 24px;
  }
  .idea-up-site-icon-threads {
    fill: none;
    stroke: coral;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 24px;
  }
  .idea-up-site-icon-shine {
    fill: none;
    stroke: coral;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 12px;
  }
  .idea-up-site-icon-rays {
    fill: none;
    stroke: coral;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 20px;
  }
  .idea-up-site-icon-border-circle {
    fill: none;
    stroke: coral;
    stroke-miterlimit: 10;
    stroke-width: 54px;
  }
`

class IdeaUpSiteLogo extends React.Component {
  render() {
    return (
      <StyledSvg
        className={this.props.className}
        id={this.props.id}
        component={toReactComponent(
          "../../../content/assets/icons/site-logo.svg"
        )}
      />
    )
  }
}

export default IdeaUpSiteLogo

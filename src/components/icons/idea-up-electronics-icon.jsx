import React from "react"
import styled from "styled-components"

const StyledSvg = styled.svg`
  .idea-up-electronics-icon-battery {
    fill: none;
    stroke: coral;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 24px;
  }
  .idea-up-electronics-icon-charge {
    fill: none;
    stroke: coral;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 20px;
  }
  .idea-up-electronics-icon-shine {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 12px;
  }
  .idea-up-electronics-icon-border-circle {
    fill: none;
    stroke: coral;
    stroke-miterlimit: 10;
    stroke-width: 54px;
  }
`

function ElectronicsIcon(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 876.22 876.22"
      className="{this_props_class}"
      data-name="IdeaUP Electronics Icon"
      {...props}
    >
      <title>{"Electronics Category"}</title>
      <g
        className="idea-up-electronics-icon-label"
        data-name="IdeaUP Electronics Icon Label"
      >
        <path
          className="idea-up-electronics-icon-battery icon-label"
          d="M388.56 722.76h185.47c17.93 0 34.58-11.29 34.58-36V228.2c0-24.71-16.65-36-34.58-36h-78.14c0-31.71-16.94-46.53-36.85-46.53h-37.86c-19.9 0-36.85 14.82-36.85 46.53h-78.14c-17.93 0-34.58 11.3-34.58 36v458.56c0 24.71 16.65 36 34.58 36h185.47"
        />
        <path
          className="idea-up-electronics-icon-charge icon-label"
          d="M325.44 602.92h229.35v64.97H325.44zM325.44 497.02h229.35v64.97H325.44z"
        />
        <path
          className="idea-up-electronics-icon-shine icon-label icon-shine"
          d="M325.44 254.53v99.01M325.44 372.29v6.88"
        />
      </g>
      <g
        className="idea-up-electronics-icon-border"
        data-name="IdeaUP Electronics Icon Border"
      >
        <circle
          className="idea-up-electronics-icon-border-circle icon-border"
          cx={438.11}
          cy={438.11}
          r={411.11}
        />
      </g>
    </StyledSvg>
  )
}

export default ElectronicsIcon

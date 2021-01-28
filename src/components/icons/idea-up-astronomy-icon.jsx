import React from "react"
import styled from "styled-components"

const StyledSvg = styled.svg`
  .idea-up-astronomy-icon-tripod {
    fill: none;
    stroke: coral;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 24px;
  }
  .idea-up-astronomy-icon-telescope {
    fill: none;
    stroke: coral;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 18px;
  }
  .idea-up-astronomy-icon-shine {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 12px;
  }
  .idea-up-astronomy-border-circle {
    fill: none;
    stroke: coral;
    stroke-miterlimit: 10;
    stroke-width: 54px;
  }
`

function AstronomyIcon(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 876.22 876.22"
      data-name="IdeaUP Astronomy Icon"
      {...props}
    >
      <title>{"Astronomy Category"}</title>
      <g
        className="idea-up-astronomy-icon-label"
        data-name="IdeaUP Astronomy Icon Label"
      >
        <path
          className="idea-up-astronomy-icon-tripod icon-label"
          d="M313.91 754.67l127.25-268.22M440.66 785.49l.5-299.04M567.41 754.67L441.16 486.45"
        />
        <path
          className="idea-up-astronomy-icon-telescope icon-label"
          d="M603.27 146.92l93.12 118.84-145.97 114.37-14.37-18.34L224.24 606.1l-15.57-19.87-47.38 37.12-19.16-24.46 5.09 6.5-19.16-24.46 47.38-37.12-15.57-19.87 311.81-244.31-14.37-18.34 145.96-114.37 93.12 118.84"
        />
        <path
          className="idea-up-astronomy-icon-shine icon-label icon-shine"
          d="M603.17 187.34l-58.26 45.67M530.61 244.04l-4.53 3.61"
        />
      </g>
      <g
        className="idea-up-astronomy-icon-border"
        data-name="IdeaUP Astronomy Icon Border"
      >
        <circle
          className="idea-up-astronomy-border-circle icon-border"
          cx={438.11}
          cy={438.11}
          r={411.11}
        />
      </g>
    </StyledSvg>
  )
}

export default AstronomyIcon
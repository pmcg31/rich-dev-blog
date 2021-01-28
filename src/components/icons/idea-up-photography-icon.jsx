import React from "react"
import styled from "styled-components"

const StyledSvg = styled.svg`
  .idea-up-photography-icon-camera-body {
    fill: none;
    stroke: coral;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 24px;
  }
  .idea-up-photography-icon-lens {
    fill: none;
    stroke: coral;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 20px;
  }
  .idea-up-photography-icon-shine {
    fill: none;
    stroke: coral;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 12px;
  }
  .idea-up-photography-border-circle {
    fill: none;
    stroke: coral;
    stroke-miterlimit: 10;
    stroke-width: 54px;
  }
`

function PhotographyIcon(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 876.22 876.22"
      className="{this_props_class}"
      data-name="IdeaUP Photography Icon"
      {...props}
    >
      <title>{"Photography Category"}</title>
      <g
        className="idea-up-photography-icon-label"
        data-name="IdeaUP Photography Icon Label"
      >
        <path
          className="idea-up-photography-icon-camera-body icon-label"
          d="M441.94 609.25h223.17c18.53 0 33-12.1 33-30.45V314.94c0-18.36-14.44-30.46-33-30.46h-106c0-58.75-13.15-79.51-52-79.51H371.66c-38.88 0-52 20.76-52 79.51h-106c-18.54 0-33 12.1-33 30.46V578.8c0 18.35 14.44 30.45 33 30.45h239.8"
        />
        <circle
          className="idea-up-photography-icon-lens icon-label"
          cx={437.12}
          cy={425.39}
          r={140.72}
        />
        <path
          className="idea-up-photography-icon-shine icon-label icon-shine"
          d="M349.77 379.67a112.17 112.17 0 0150.43-46.62M338.81 407.16c.76-3 1.65-6 2.65-9"
        />
      </g>
      <g
        className="idea-up-photography-icon-border"
        data-name="IdeaUP Photography Icon Border"
      >
        <circle
          className="idea-up-photography-border-circle icon-border"
          cx={438.11}
          cy={438.11}
          r={411.11}
        />
      </g>
    </StyledSvg>
  )
}

export default PhotographyIcon

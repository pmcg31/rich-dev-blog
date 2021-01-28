import React from "react"
import styled from "styled-components"

const StyledSvg = styled.svg`
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
function SiteLogo(props) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 876.22 876.22"
      data-name="IdeaUP Site Icon"
      {...props}
    >
      <title>{"Idea Up!"}</title>
      <g
        className="idea-up-site-icon-label"
        data-name="IdeaUP Site Icon Label"
      >
        <path
          className="idea-up-site-icon-arrow icon-label"
          d="M438.38 221.11c11.44 0 19.5 7 26.81 15.56s180.29 200.6 186.51 207.24c21.21 22.59 2.18 43-10.26 43h-75.13c-11.72 0-19.36 3.13-19.36 20.61s-.12 29.69-.12 46.83-13.9 22.81-21.42 22.81H350.86c-7.52 0-21.41-5.67-21.41-22.81s.13-29.34.13-46.83-7.64-20.61-19.36-20.61h-75.11c-12.44 0-31.47-20.43-10.26-43 6.22-6.64 179.19-198.69 186.51-207.26s15.35-15.54 26.75-15.54"
        />
        <path
          className="idea-up-site-icon-threads icon-label"
          d="M531.48 698.56c0 17.14-12 22.81-18.42 22.81H362.87c-6.47 0-18.42-5.67-18.42-22.81M531.54 627.83c0 17.14-12 22.81-18.43 22.81H362.93c-6.47 0-18.43-5.67-18.43-22.81"
        />
        <path
          className="idea-up-site-icon-shine icon-label icon-shine"
          d="M418.87 290.32l-79.5 88.01M327.2 390.97l-3.83 4.35"
        />
        <path
          className="idea-up-site-icon-rays icon-label"
          d="M438.27 170.53V123M593.33 239.27l30.55-36.4M685.6 386.16l46.81-8.26M667.43 554.15l41.15 23.76M283.34 239.27l-30.55-36.4M191.07 386.16l-46.8-8.26M209.25 554.15l-41.16 23.76"
        />
      </g>
      <g
        className="idea-up-site-icon-border"
        data-name="IdeaUP Site Icon Border"
      >
        <circle
          className="idea-up-site-icon-border-circle icon-border"
          cx={438.11}
          cy={438.11}
          r={411.11}
        />
      </g>
    </StyledSvg>
  )
}

export default SiteLogo

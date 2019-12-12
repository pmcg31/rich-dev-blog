import React from "react"
import styled from "styled-components"

const Arrow = styled.path`
  fill: none;
  stroke: coral;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 24px;
`

const Threads = styled.path`
  fill: none;
  stroke: coral;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 24px;
`

const Shine = styled.line`
  fill: none;
  stroke: coral;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 12px;
`

const Rays = styled.line`
  fill: none;
  stroke: coral;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 20px;
`

const BorderCircle = styled.circle`
  fill: none;
  stroke: coral;
  stroke-miterlimit: 10;
  stroke-width: 54px;
`

class IdeaUpSiteIcon extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 876.22 876.22"
        className={this.props.className}
        id={this.props.id}
        data-name="IdeaUP Site Icon"
      >
        <title>"Idea Up!"</title>
        <g
          className="idea-up-site-icon-label"
          data-name="IdeaUP Site Icon Label"
        >
          <Arrow
            className="idea-up-site-icon-arrow icon-label"
            d="M500.27,283c11.44,0,19.5,7,26.81,15.56S707.37,499.16,713.59,505.8c21.21,22.59,2.18,43-10.26,43H628.2c-11.72,0-19.36,3.13-19.36,20.61s-.12,29.69-.12,46.83-13.9,22.81-21.42,22.81H412.75c-7.52,0-21.41-5.67-21.41-22.81s.13-29.34.13-46.83-7.64-20.61-19.36-20.61H297c-12.44,0-31.47-20.43-10.26-43,6.22-6.64,179.19-198.69,186.51-207.26S488.6,283,500,283"
            transform="translate(-61.89 -61.89)"
          />
          <Threads
            className="idea-up-site-icon-threads icon-label"
            d="M593.37,760.45c0,17.14-12,22.81-18.42,22.81H424.76c-6.47,0-18.42-5.67-18.42-22.81"
            transform="translate(-61.89 -61.89)"
          />
          <Threads
            className="idea-up-site-icon-threads icon-label"
            d="M593.43,689.72c0,17.14-12,22.81-18.43,22.81H424.82c-6.47,0-18.43-5.67-18.43-22.81"
            transform="translate(-61.89 -61.89)"
          />
          <Shine
            className="idea-up-site-icon-shine icon-label icon-shine"
            x1="418.87"
            y1="290.32"
            x2="339.37"
            y2="378.33"
          />
          <Shine
            className="idea-up-site-icon-shine icon-label icon-shine"
            x1="327.2"
            y1="390.97"
            x2="323.37"
            y2="395.32"
          />
          <Rays
            className="idea-up-site-icon-rays icon-label"
            x1="438.27"
            y1="170.53"
            x2="438.27"
            y2="123"
          />
          <Rays
            className="idea-up-site-icon-rays icon-label"
            x1="593.33"
            y1="239.27"
            x2="623.88"
            y2="202.87"
          />
          <Rays
            className="idea-up-site-icon-rays icon-label"
            x1="685.6"
            y1="386.16"
            x2="732.41"
            y2="377.9"
          />
          <Rays
            className="idea-up-site-icon-rays icon-label"
            x1="667.43"
            y1="554.15"
            x2="708.58"
            y2="577.91"
          />
          <Rays
            className="idea-up-site-icon-rays icon-label"
            x1="283.34"
            y1="239.27"
            x2="252.79"
            y2="202.87"
          />
          <Rays
            className="idea-up-site-icon-rays icon-label"
            x1="191.07"
            y1="386.16"
            x2="144.27"
            y2="377.9"
          />
          <Rays
            className="idea-up-site-icon-rays icon-label"
            x1="209.25"
            y1="554.15"
            x2="168.09"
            y2="577.91"
          />
        </g>
        <g
          className="idea-up-site-icon-border"
          data-name="IdeaUP Site Icon Border"
        >
          <BorderCircle
            className="idea-up-site-icon-border-circle icon-border"
            cx="438.11"
            cy="438.11"
            r="411.11"
          />
        </g>
      </svg>
    )
  }
}

export default IdeaUpSiteIcon

import React from "react"
import styled from "styled-components"

const Battery = styled.path`
  fill: none;
  stroke: coral;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 24px;
`

const Charge = styled.rect`
  fill: none;
  stroke: coral;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 20px;
`

const Shine = styled.line`
  fill: none;
  stroke: #000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 12px;
`

const BorderCircle = styled.circle`
  fill: none;
  stroke: coral;
  stroke-miterlimit: 10;
  stroke-width: 54px;
`

class IdeaUpElectronicsIcon extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 876.22 876.22"
        className={this.props.className}
        id={this.props.id}
        data-name="IdeaUP Electronics Icon"
      >
        <title>Electronics Category</title>
        <g
          id="idea-up-electronics-icon-label"
          data-name="IdeaUP Electronics Icon Label"
        >
          <Battery
            className="idea-up-electronics-icon-battery icon-label"
            d="M450.45,784.65H635.92c17.93,0,34.58-11.29,34.58-36V290.09c0-24.71-16.65-36-34.58-36H557.78c0-31.71-16.94-46.53-36.85-46.53H483.07c-19.9,0-36.85,14.82-36.85,46.53H368.08c-17.93,0-34.58,11.3-34.58,36V748.65c0,24.71,16.65,36,34.58,36H553.55"
            transform="translate(-61.89 -61.89)"
          />
          <Charge
            className="idea-up-electronics-icon-charge icon-label"
            x="325.44"
            y="602.92"
            width="229.35"
            height="64.97"
          />
          <Charge
            className="idea-up-electronics-icon-charge icon-label"
            x="325.44"
            y="497.02"
            width="229.35"
            height="64.97"
          />
          <Shine
            className="idea-up-electronics-icon-shine icon-label icon-shine"
            x1="325.44"
            y1="254.53"
            x2="325.44"
            y2="353.54"
          />
          <Shine
            className="idea-up-electronics-icon-shine icon-label icon-shine"
            x1="325.44"
            y1="372.29"
            x2="325.44"
            y2="379.17"
          />
        </g>
        <g
          id="idea-up-electronics-icon-border"
          data-name="IdeaUP Electronics Icon Border"
        >
          <BorderCircle
            className="idea-up-electronics-icon-border-circle icon-border"
            cx="438.11"
            cy="438.11"
            r="411.11"
          />
        </g>
      </svg>
    )
  }
}

export default IdeaUpElectronicsIcon

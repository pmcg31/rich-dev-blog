import React from "react"
import styled from "styled-components"

const CameraBody = styled.path`
  fill: none;
  stroke: coral;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 24px;
`

const Lens = styled.circle`
  fill: none;
  stroke: coral;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 20px;
`

const Shine = styled.path`
  fill: none;
  stroke: coral;
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

class IdeaUpPhotographyIcon extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 876.22 876.22"
        className={this.props.className}
        id={this.props.id}
        data-name="IdeaUP Photography Icon"
      >
        <title>Photography Category</title>
        <g
          className="idea-up-photography-icon-label"
          data-name="IdeaUP Photography Icon Label"
        >
          <CameraBody
            className="idea-up-photography-icon-camera-body icon-label"
            d="M503.83,671.14H727c18.53,0,33-12.1,33-30.45V376.83c0-18.36-14.44-30.46-33-30.46H621c0-58.75-13.15-79.51-52-79.51H433.55c-38.88,0-52,20.76-52,79.51h-106c-18.54,0-33,12.1-33,30.46V505.29h0v135.4c0,18.35,14.44,30.45,33,30.45H515.35"
            transform="translate(-61.89 -61.89)"
          />
          <Lens
            className="idea-up-photography-icon-lens icon-label"
            cx="437.12"
            cy="425.39"
            r="140.72"
          />
          <Shine
            className="idea-up-photography-icon-shine icon-label icon-shine"
            d="M411.66,441.56a112.17,112.17,0,0,1,50.43-46.62"
            transform="translate(-61.89 -61.89)"
          />
          <Shine
            className="idea-up-photography-icon-shine icon-label icon-shine"
            d="M400.7,469.05c.76-3,1.65-6,2.65-9"
            transform="translate(-61.89 -61.89)"
          />
        </g>
        <g
          className="idea-up-photography-icon-border"
          data-name="IdeaUP Photography Icon Border"
        >
          <BorderCircle
            className="idea-up-photography-border-circle icon-border"
            cx="438.11"
            cy="438.11"
            r="411.11"
          />
        </g>
      </svg>
    )
  }
}

export default IdeaUpPhotographyIcon

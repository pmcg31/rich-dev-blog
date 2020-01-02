import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  padding: 2em;
  background: #505050;
  border-radius: 0.5em;
`

const Field = props => {
  if (props.decorator) {
    return (
      <div className={props.className}>
        <FieldRightDecoratedControl
          id={props.inputProps.id}
          type={props.inputProps.type}
          defaultValue={props.inputProps.defaultValue}
          onFocus={props.inputProps.onFocus}
          onBlur={props.inputProps.onBlur}
          onChange={props.inputProps.onChange}
          readOnly={
            props.inputProps.readOnly !== null
              ? props.inputProps.readOnly
              : false
          }
        />
        <FieldRightDecorator>{props.decorator}</FieldRightDecorator>
      </div>
    )
  } else {
    return (
      <div className={props.className}>
        <FieldControl
          id={props.inputProps.id}
          type={props.inputProps.type}
          defaultValue={props.inputProps.defaultValue}
          onFocus={props.inputProps.onFocus}
          onBlur={props.inputProps.onBlur}
          onChange={props.inputProps.onChange}
          readOnly={
            props.inputProps.readOnly !== null
              ? props.inputProps.readOnly
              : false
          }
        />
      </div>
    )
  }
}

const StyledField = styled(Field)`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column: 2 / auto;
  height: 2.5em;
  padding: 0.5em;
`

const DoubleField = props => {
  if (props.decorator) {
    return (
      <div className={props.className}>
        <FieldRightDecoratedControl
          id={props.inputPropsLeft.id}
          type={props.inputPropsLeft.type}
          defaultValue={props.inputPropsLeft.defaultValue}
          onFocus={props.inputPropsLeft.onFocus}
          onBlur={props.inputPropsLeft.onBlur}
          onChange={props.inputPropsLeft.onChange}
          readOnly={
            props.inputPropsLeft.readOnly !== null
              ? props.inputPropsLeft.readOnly
              : false
          }
        />
        <FieldMiddleDecorator>{props.middleDecorator}</FieldMiddleDecorator>
        <FieldDoubleDecoratedControl
          id={props.inputPropsRight.id}
          type={props.inputPropsRight.type}
          defaultValue={props.inputPropsRight.defaultValue}
          onFocus={props.inputPropsRight.onFocus}
          onBlur={props.inputPropsRight.onBlur}
          onChange={props.inputPropsRight.onChange}
          readOnly={
            props.inputPropsRight.readOnly !== null
              ? props.inputPropsRight.readOnly
              : false
          }
        />
        <FieldRightDecorator>{props.decorator}</FieldRightDecorator>
      </div>
    )
  } else {
    return (
      <div className={props.className}>
        <FieldRightDecoratedControl
          id={props.inputPropsLeft.id}
          type={props.inputPropsLeft.type}
          defaultValue={props.inputPropsLeft.defaultValue}
          onFocus={props.inputPropsLeft.onFocus}
          onBlur={props.inputPropsLeft.onBlur}
          onChange={props.inputPropsLeft.onChange}
          readOnly={
            props.inputPropsLeft.readOnly !== null
              ? props.inputPropsLeft.readOnly
              : false
          }
        />
        <FieldMiddleDecorator>{props.middleDecorator}</FieldMiddleDecorator>
        <FieldLeftDecoratedControl
          id={props.inputPropsRight.id}
          type={props.inputPropsRight.type}
          defaultValue={props.inputPropsRight.defaultValue}
          onFocus={props.inputPropsRight.onFocus}
          onBlur={props.inputPropsRight.onBlur}
          onChange={props.inputPropsRight.onChange}
          readOnly={
            props.inputPropsRight.readOnly !== null
              ? props.inputPropsRight.readOnly
              : false
          }
        />
      </div>
    )
  }
}

const StyledDoubleField = styled(DoubleField)`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto;
  grid-column: 2 / auto;
  height: 2.5em;
  padding: 0.5em;
`

const FieldControl = styled.input`
  border: none;
  border-radius: 0.4em;
  height: inherit;
  outline: none;
  padding-left: 1em;
  padding-right: 0.25em;
  font-size: 0.9em;
  background: #a0a0a0;
  color: #404040;
  font-family: Solway, san-serif;
  width: 100%;
  box-sizing: border-box;
`

const FieldRightDecoratedControl = styled(FieldControl)`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`

const FieldLeftDecoratedControl = styled(FieldControl)`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`

const FieldDoubleDecoratedControl = styled(FieldControl)`
  border-radius: 0;
`

const FieldMiddleDecorator = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  white-space: nowrap;
  vertical-align: middle;
  color: coral;
  background: #303030;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-family: Solway, san-serif;
  border-radius: 0;
`

const FieldRightDecorator = styled(FieldMiddleDecorator)`
  border-bottom-right-radius: 0.4em;
  border-top-right-radius: 0.4em;
`

const FieldLeftDecorator = styled(FieldMiddleDecorator)`
  border-bottom-left-radius: 0.4em;
  border-top-left-radius: 0.4em;
`

const FieldLabel = styled.span`
  display: grid;
  align-items: center;
  justify-self: stretch;
  grid-column: 1 / auto;
  vertical-align: middle;
  padding-right: 0.5em;
  color: coral;
`

class NoTrailCalculator extends React.Component {
  constructor(props) {
    super(props)

    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.calculateAndUpdate = this.calculateAndUpdate.bind(this)
  }

  handleFocus(e) {
    console.log("focus gained: " + e.nativeEvent.target.id)
  }

  handleBlur(e) {
    console.log("focus lost: " + e.nativeEvent.target.id)
  }

  handleChange(e) {
    console.log("changed: " + e.nativeEvent.target.id)

    this.calculateAndUpdate()
  }

  calculateAndUpdate() {
    // Get the current values
    const focalLen = document.getElementById("focal-length-mm").value
    const sensorWidth_mm = document.getElementById("sensor-width-mm").value
    const sensorHeight_mm = document.getElementById("sensor-height-mm").value
    const resolution_mp = document.getElementById("pixel-density-megapix").value

    // Do the math with the current values
    if (
      focalLen !== "" &&
      sensorWidth_mm !== "" &&
      sensorHeight_mm !== "" &&
      resolution_mp !== ""
    ) {
      // Convert resolution to pixels
      const resolution = resolution_mp * 1000000

      // Determine sensor width in pixels
      // (sqrt(resolution * aspect_ratio))
      const sensorWidth_px = Math.sqrt(
        resolution * (sensorWidth_mm / sensorHeight_mm)
      )

      // Sensor height is simpler now that the
      // width is known (w x h = resolution)
      const sensorHeight_px = resolution / sensorWidth_px

      // Calculate pixel size in microns
      // (sensor_width_microns / sensor_width_pixels)
      const sensorPixelSizeMicrons = (sensorWidth_mm * 1000) / sensorWidth_px

      // Calculate FOV for a single pixel in radians
      const sensorAngularResolutionRadians =
        2 * Math.atan(sensorPixelSizeMicrons / (2 * (focalLen * 1000)))

      // In degrees
      const sensorAngularResolutionDegrees =
        sensorAngularResolutionRadians * (180 / Math.PI)

      // And finally in arcseconds
      const sensorAngularResolutionArcsecs =
        sensorAngularResolutionDegrees * 3600

      // Update fields
      document.getElementById(
        "sensor-angular-resolution"
      ).value = sensorAngularResolutionArcsecs.toFixed(2)
      document.getElementById(
        "sensor-pixel-size-microns"
      ).value = sensorPixelSizeMicrons.toFixed(2)
    } else {
      // Clear fields
      document.getElementById("sensor-angular-resolution").value = ""
      document.getElementById("sensor-pixel-size-microns").value = ""
    }
  }

  componentDidMount() {
    this.calculateAndUpdate()
  }

  render() {
    return (
      <Container
        className={this.props.className || ""}
        id={this.props.id || ""}
      >
        <FieldLabel>Focal Length:</FieldLabel>
        <StyledField
          decorator="mm"
          inputProps={{
            id: "focal-length-mm",
            type: "number",
            defaultValue: 28,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
          }}
        />
        <FieldLabel>Sensor Size:</FieldLabel>
        <StyledDoubleField
          decorator="mm"
          middleDecorator="x"
          inputPropsLeft={{
            id: "sensor-width-mm",
            type: "number",
            defaultValue: 36,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
          }}
          inputPropsRight={{
            id: "sensor-height-mm",
            type: "number",
            defaultValue: 24,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
          }}
        />
        <FieldLabel>Resolution:</FieldLabel>
        <StyledField
          decorator="mp"
          inputProps={{
            id: "pixel-density-megapix",
            type: "number",
            defaultValue: 24.3,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
          }}
        />
        <FieldLabel>Sensor Pixel Size:</FieldLabel>
        <StyledField
          decorator="μm"
          inputProps={{
            id: "sensor-pixel-size-microns",
            type: "number",
            readOnly: true,
          }}
        />
        <FieldLabel>Sensor Angular Resolution:</FieldLabel>
        <StyledField
          decorator="arcsec/px"
          inputProps={{
            id: "sensor-angular-resolution",
            type: "number",
            readOnly: true,
          }}
        />
      </Container>
    )
  }
}

export default NoTrailCalculator

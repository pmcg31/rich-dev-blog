import React from "react"
import atob from "atob"

const SvgInline = props => {
  var svgContent = "<div></div>"
  if (props.svgBase64) {
    // Strip the header
    const payload = props.svgBase64.substring(props.svgBase64.indexOf(",") + 1)

    // Convert from base64
    svgContent = atob(payload)
  }

  return (
    <div
      id={props.id}
      className={props.className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}

export default SvgInline

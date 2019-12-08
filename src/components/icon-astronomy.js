import React from "react"

class IconAstronomy extends React.Component {
  static defaultProps = {
    width: "50",
    height: "50",
    borderColor: "#000000",
    labelColor: "#000000",
  }

  render() {
    let image = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 876.22 876.22" width="'.concat(
      this.props.width,
      '" height="',
      this.props.height,
      '"><title>telescope_category_icon</title><g id="Telescope"><polyline points="567.41 754.67 441.16 486.45 313.91 754.67" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:24px"/><line x1="440.66" y1="785.49" x2="441.16" y2="486.45" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:24px"/><polyline points="603.27 146.92 696.39 265.76 550.42 380.13 536.05 361.79 224.24 606.1 208.67 586.23 161.29 623.35 142.13 598.89 147.22 605.39 128.06 580.93 175.44 543.81 159.87 523.94 471.68 279.63 457.31 261.29 603.27 146.92 696.39 265.76" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:18px"/><line x1="603.17" y1="187.34" x2="544.91" y2="233.01" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:12px"/><line x1="530.61" y1="244.04" x2="526.08" y2="247.65" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:12px"/></g><g id="Border_Circle" data-name="Border Circle"><circle cx="438.11" cy="438.11" r="411.11" style="fill:none;stroke:',
      this.props.borderColor,
      ';stroke-miterlimit:10;stroke-width:54px"/></g></svg>'
    )
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: image,
        }}
      />
    )
  }
}

export default IconAstronomy

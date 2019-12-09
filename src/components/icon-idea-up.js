import React from "react"

class IconIdeaUp extends React.Component {
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
      '"><title>idea_up_icon</title><g id="Idea_Up" data-name="Idea Up"><path d="M500.27,283c11.44,0,19.5,7,26.81,15.56S707.37,499.16,713.59,505.8c21.21,22.59,2.18,43-10.26,43H628.2c-11.72,0-19.36,3.13-19.36,20.61s-.12,10.69-.12,27.83-13.9,22.81-21.42,22.81H412.75c-7.52,0-21.41-5.67-21.41-22.81s.13-10.34.13-27.83-7.64-20.61-19.36-20.61H297c-12.44,0-31.47-20.43-10.26-43,6.22-6.64,179.19-198.69,186.51-207.26S488.6,283,500,283" transform="translate(-61.89 -61.89)" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:24px"/><path d="M608.54,760.45c0,17.14-13.9,22.81-21.42,22.81H412.57c-7.51,0-21.41-5.67-21.41-22.81" transform="translate(-61.89 -61.89)" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:24px"/><path d="M608.6,679.72c0,17.14-13.89,22.81-21.41,22.81H412.64c-7.52,0-21.42-5.67-21.42-22.81" transform="translate(-61.89 -61.89)" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:24px"/><line x1="413.87" y1="287.32" x2="334.37" y2="375.33" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:12px"/><line x1="322.2" y1="387.97" x2="318.37" y2="392.32" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:12px"/><line x1="438.27" y1="170.53" x2="438.27" y2="123" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="593.33" y1="239.27" x2="623.88" y2="202.87" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="685.6" y1="386.16" x2="732.41" y2="377.9" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="667.43" y1="554.15" x2="708.58" y2="577.91" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="283.34" y1="239.27" x2="252.79" y2="202.87" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="191.07" y1="386.16" x2="144.27" y2="377.9" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/><line x1="209.25" y1="554.15" x2="168.09" y2="577.91" style="fill:none;stroke:',
      this.props.labelColor,
      ';stroke-linecap:round;stroke-linejoin:round;stroke-width:20px"/></g><g id="Border_Circle" data-name="Border Circle"><circle cx="438.11" cy="438.11" r="411.11" style="fill:none;stroke:',
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

export default IconIdeaUp

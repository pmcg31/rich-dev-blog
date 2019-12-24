import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  color: rgb(160, 160, 160);
  display: flex;
  flex-direction: column;
  ul {
    padding-inline-start: 25px;
  }
`

class PageTOC extends React.Component {
  constructor(props) {
    super(props)
    this.state = { html: "" }
  }

  componentDidMount() {
    var anchors = document.getElementsByClassName("anchor")
    var i,
      currentLevel = 0,
      listsOpen = 1,
      html =
        '<div class="toc-jump-to"><a href="#top">Top</a></div><ul class="toc-list">'

    for (i = 0; i < anchors.length; i++) {
      if (anchors[i].parentElement.tagName.startsWith("H")) {
        var level = anchors[i].parentElement.tagName.substring(1)
        if (level > currentLevel) {
          if (currentLevel != 0) {
            html += "<ul>"
            listsOpen++
          }
          currentLevel = level
        }
        if (level < currentLevel) {
          currentLevel = level
          html += "</ul>"
          listsOpen--
        }
        html +=
          '<li class="toc-' +
          anchors[i].parentElement.tagName +
          '"><a href="' +
          anchors[i].hash +
          '">' +
          anchors[i].parentElement.innerText +
          "</a></li>"
      }
    }

    for (i = 0; i < listsOpen; i++) {
      html += "</ul>"
    }

    this.setState({ html })
  }

  render() {
    return (
      <StyledDiv
        className={this.props.className}
        dangerouslySetInnerHTML={{ __html: this.state.html }}
      />
    )
  }
}

export default PageTOC

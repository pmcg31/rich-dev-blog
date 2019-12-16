import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  font-family: "Dosis", san-serif;
  font-size: 16px;
  color: rgb(160, 160, 160);
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  ul {
    padding-inline-start: 25px;
  }
  .toc-H3 {
    color: coral;
  }
  .toc-H4 {
    font-size: 14px;
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
      html = '<div class="toc-jump-to">Jump To...</div><ul class="toc-list">'

    for (i = 0; i < anchors.length; i++) {
      console.log("anchors[" + i + "]: ")
      console.log("    hash: " + anchors[i].hash)
      console.log("    parent: " + anchors[i].parentElement.tagName)
      console.log("    text: " + anchors[i].parentElement.innerText)

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
    console.log("render: " + this.state.html)
    return <StyledDiv dangerouslySetInnerHTML={{ __html: this.state.html }} />
  }
}

export default PageTOC

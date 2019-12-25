import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  color: rgb(160, 160, 160);
  display: flex;
  flex-direction: column;
  ul {
    padding-inline-start: 25px;
  }
  li {
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    font-weight: 300;
  }
  .toc-highlight {
    color: coral;
    font-weight: 400;
  }
`

var items = []
var currentItemIdx = -1

function removeHighlight(element) {
  if (element) {
    element.classList.remove("toc-highlight")
  }
}

function addHighlight(element) {
  if (element) {
    element.classList.add("toc-highlight")
  }
}

function dumpItems() {
  console.log("start items")
  items.forEach(function(item, idx) {
    console.log(idx + ": " + (item.isAbove ? " above" : " noabove"))
  })
  console.log("end items")
}

function getViewport() {
  var viewPortWidth
  var viewPortHeight

  // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
  if (typeof window.innerWidth != "undefined") {
    viewPortWidth = window.innerWidth
    viewPortHeight = window.innerHeight
  }

  // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
  else if (
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.clientWidth != "undefined" &&
    document.documentElement.clientWidth !== 0
  ) {
    viewPortWidth = document.documentElement.clientWidth
    viewPortHeight = document.documentElement.clientHeight
  }

  // older versions of IE
  else {
    viewPortWidth = document.getElementsByTagName("body")[0].clientWidth
    viewPortHeight = document.getElementsByTagName("body")[0].clientHeight
  }
  return { width: viewPortWidth, height: viewPortHeight }
}

function onBodyScroll() {
  // Called when scrolled
  const vwDim = getViewport()
  const magicLine = vwDim.height * 0.2
  var changed = false
  var lastAboveIdx = -1
  items.forEach(function(item, idx) {
    var letsGetRect = item.target.getBoundingClientRect()

    // Is an part of the item above the magic line?
    const isAbove = letsGetRect.top < magicLine
    if (isAbove) {
      lastAboveIdx = idx
    }

    if (isAbove !== item.isAbove) {
      changed = true
      item.isAbove = isAbove
    }
  })

  if (changed || lastAboveIdx !== currentItemIdx) {
    if (currentItemIdx !== lastAboveIdx) {
      if (currentItemIdx !== -1) {
        removeHighlight(document.querySelector(items[currentItemIdx].selector))
      }
      addHighlight(document.querySelector(items[lastAboveIdx].selector))
      currentItemIdx = lastAboveIdx
    }
  }
}

class PageTOC extends React.Component {
  constructor(props) {
    super(props)
    this.state = { html: "" }
  }

  componentDidMount() {
    var target = document.querySelector("#post-header")
    if (target) {
      items.push({
        target: target,
        isAbove: false,
        selector: "#toc-" + target.id,
      })
    }

    var anchors = document.getElementsByClassName("anchor")
    var i,
      currentLevel = 0,
      listsOpen = 1,
      html =
        '<div class="toc-jump-to"><a href="#post-header" id="toc-post-header">Top</a></div><ul class="toc-list">'

    for (i = 0; i < anchors.length; i++) {
      if (anchors[i].parentElement.tagName.startsWith("H")) {
        items.push({
          target: anchors[i].parentElement,
          isAbove: false,
          selector: "#toc-" + anchors[i].parentElement.id,
        })
        var level = anchors[i].parentElement.tagName.substring(1)
        if (level > currentLevel) {
          if (currentLevel !== 0) {
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
          '" id="toc-' +
          anchors[i].parentElement.id +
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

    document.body.onscroll = onBodyScroll
    window.onresize = onBodyScroll

    this.setState({ html })
  }

  componentDidUpdate() {
    onBodyScroll()
  }

  componentWillUnmount() {
    document.body.onscroll = null
    window.onresize = null
    currentItemIdx = -1
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

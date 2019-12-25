import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  color: rgb(160, 160, 160);
  display: grid;
  grid-template-columns: auto 1em auto;
  align-items: center;
  font-family: "Dosis", sans-serif;
  font-weight: 300;
  .toc-bullet {
    display: none;
    grid-column: 1 / 1;
    padding-right: 0.3em;
    justify-self: center;
    transform: scale(1.5);
  }
  .toc-row-l1 {
  }
  .toc-text-l1 {
    grid-column: 2 / span 2;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
  }
  .toc-row-l2 {
    font-size: 14px;
  }
  .toc-text-l2 {
    grid-column: 3 / 3;
  }
  .toc-bullet-highlight {
    display: initial;
  }
  .toc-text-highlight {
    color: coral;
    font-weight: 400;
  }
`

var items = []
var currentItemIdx = -1

function removeTextHighlight(element) {
  if (element) {
    element.classList.remove("toc-text-highlight")
  }
}

function addTextHighlight(element) {
  if (element) {
    element.classList.add("toc-text-highlight")
  }
}

function removeBulletHighlight(element) {
  if (element) {
    element.classList.remove("toc-bullet-highlight")
  }
}

function addBulletHighlight(element) {
  if (element) {
    element.classList.add("toc-bullet-highlight")
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
        removeBulletHighlight(
          document.querySelector(
            "#toc-bullet-" + items[currentItemIdx].selector
          )
        )
        removeTextHighlight(
          document.querySelector("#toc-text-" + items[currentItemIdx].selector)
        )
      }
      addBulletHighlight(
        document.querySelector("#toc-bullet-" + items[lastAboveIdx].selector)
      )
      addTextHighlight(
        document.querySelector("#toc-text-" + items[lastAboveIdx].selector)
      )
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
    var anchors = document.getElementsByClassName("anchor")
    var i,
      levelInd = "l1",
      html = ""

    var target = document.querySelector("#post-header")
    if (target) {
      items.push({
        target: target,
        isAbove: false,
        selector: target.id,
        levelInd: "l1",
      })
      html +=
        '<div class="toc-bullet toc-row-l1" id="toc-bullet-post-header" style="grid-row: 1;">💩</div><div class="toc-text-l1 toc-row-l1" id="toc-text-post-header" style="grid-row: 1;"><a href="#post-header">Top</a></div>'
    }

    for (i = 0; i < anchors.length; i++) {
      const row = i + 2
      if (anchors[i].parentElement.tagName.startsWith("H")) {
        const level = anchors[i].parentElement.tagName.substring(1)
        if (level === "3") {
          levelInd = "l1"
        } else if (level === "4") {
          levelInd = "l2"
        }

        items.push({
          target: anchors[i].parentElement,
          isAbove: false,
          selector: anchors[i].parentElement.id,
          levelInd: levelInd,
        })

        html +=
          '<div class="toc-bullet toc-row-' +
          levelInd +
          '" id="toc-bullet-' +
          anchors[i].parentElement.id +
          '" style="grid-row: ' +
          row +
          ';">💩</div><div class="toc-text-' +
          levelInd +
          " toc-row-" +
          levelInd +
          '" id="toc-text-' +
          anchors[i].parentElement.id +
          '" style="grid-row: ' +
          row +
          ';"><a href="' +
          anchors[i].hash +
          '">' +
          anchors[i].parentElement.innerText +
          "</a></div>"
      }
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

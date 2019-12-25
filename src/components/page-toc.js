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

//
// Convenience functions for adding/removing
// highlight classes on elements of the toc
//

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

//
// For debugging, when necessary
//

function dumpItems() {
  console.log("start items")
  items.forEach(function(item, idx) {
    console.log(idx + ": " + (item.isAbove ? " above" : " noabove"))
  })
  console.log("end items")
}

//
// Called when scrolled
//

function onBodyScroll() {
  // Make the magic line (the horizontal point where
  // the target element needs to pass for the
  // highlight to change) to the width of our main
  // element. In other words, if you made a square at
  // the top of the main toc element, the magic line
  // will be at the bottom of that square
  const magicLine = document.querySelector("#page-toc").getBoundingClientRect()
    .width

  // Iterate all the elements we're tracking and see
  // where they stand relative to the magic line. At
  // the end of the iteration, changed will be true
  // if any elements changed position (above/below)
  // relative to the magic line and lastAboveIdx
  // will have the index of the last element above
  // the magic line (the one to be highlighted)
  var changed = false,
    lastAboveIdx = -1
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

  // Update the UI if anything has changed
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
    // Finds all heading elements spit out by the MDX
    // parser
    var anchors = document.getElementsByClassName("anchor")

    // Some vars
    var i,
      levelInd = "l1",
      html = ""

    // Add the first element to the TOC, the top!
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

    // Iterate the headings from MDX and create
    // the remaining elements of the TOC by
    // scraping their contents
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

    // Hook up our event handler to onscroll
    // and window resize. Only when one
    // of these events fires can the
    // highlighted TOC item be changed
    document.body.onscroll = onBodyScroll
    window.onresize = onBodyScroll

    // Change our state so we get redrawn
    this.setState({ html })
  }

  componentDidUpdate() {
    // Kick things once the page renders to
    // set the initial highlight
    onBodyScroll()
  }

  componentWillUnmount() {
    // Be a good citizen and clean up
    document.body.onscroll = null
    window.onresize = null
    currentItemIdx = -1
  }

  render() {
    // Your TOC, sir...
    return (
      <StyledDiv
        id="page-toc"
        className={this.props.className}
        dangerouslySetInnerHTML={{ __html: this.state.html }}
      />
    )
  }
}

export default PageTOC

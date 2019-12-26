import React from "react"
import styled from "styled-components"

const TOCWrapper = styled.div`
  color: rgb(160, 160, 160);
  display: grid;
  grid-template-columns: auto 0.2em auto;
  grid-column-gap: 0.5em;
  align-items: center;
  font-family: "Dosis", sans-serif;
  font-weight: 300;
  .toc-bullet-highlight {
    display: initial;
  }
  .toc-text-highlight {
    color: coral;
    font-weight: 400;
  }
`

const TOCTextL1 = styled.div`
  grid-column: 2 / span 2;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
`

const TOCTextL2 = styled.div`
  grid-column: 3 / span 1;
  padding-top: 0.125em;
  padding-bottom: 0.125em;
  font-size: 0.8em;
`

const TOCBullet = styled.canvas`
  grid-column: 1 / span 1;
  justify-self: center;
  align-self: stretch;
  width: 1.6em;
`

class PageTOC extends React.Component {
  constructor(props) {
    super(props)

    this.state = { items: [] }

    this.currentItemIdx = -1

    this.removeTextHighlight = this.removeTextHighlight.bind(this)
    this.addTextHighlight = this.addTextHighlight.bind(this)
    this.dumpItems = this.dumpItems.bind(this)
    this.updateGraphics = this.updateGraphics.bind(this)
    this.onBodyScroll = this.onBodyScroll.bind(this)
  }

  //
  // Convenience functions for adding/removing
  // highlight classes on elements of the toc
  //

  removeTextHighlight(element) {
    if (element) {
      element.classList.remove("toc-text-highlight")
    }
  }

  addTextHighlight(element) {
    if (element) {
      element.classList.add("toc-text-highlight")
    }
  }

  //
  // For debugging, when necessary
  //

  dumpItems() {
    console.log("start items")
    this.state.items.forEach(function(item, idx) {
      console.log(idx + ": " + (item.isAbove ? " above" : " noabove"))
    })
    console.log("end items")
  }

  //
  // Called by onBodyScroll to update graphics
  //

  updateGraphics() {
    this.state.items.forEach((item, idx) => {
      // Determine which lines this link needs
      var hasTopLine = false,
        hasBottomLine = false
      if (idx === 0) {
        // First item
        hasBottomLine = true
      } else if (idx === this.state.items.length - 1) {
        // Last item
        hasTopLine = true
      } else {
        // Middle item
        hasTopLine = true
        hasBottomLine = true
      }

      // Get the canvas
      var canvas = document.querySelector("#toc-bullet-" + item.selector)
      if (canvas) {
        // Set canvas size to match element size
        const bounds = canvas.getBoundingClientRect()
        canvas.width = bounds.width
        canvas.height = bounds.height

        // Calculate some dimensions
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        var radius = centerX * 0.65
        var fillRadius = radius * 0.5

        // Adjust radius for l2
        if (item.levelInd === "l2") {
          radius = radius * 0.8
          fillRadius = fillRadius * 0.8
        }

        // Get a context
        var ctx = canvas.getContext("2d")

        // Draw link
        ctx.strokeStyle = "rgb(64,64,64)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
        if (hasTopLine) {
          ctx.moveTo(centerX, 0)
          ctx.lineTo(centerX, centerY - radius)
        }
        if (hasBottomLine) {
          ctx.moveTo(centerX, centerY + radius)
          ctx.lineTo(centerX, canvas.height)
        }
        ctx.stroke()

        // Fill link in if this is the current item
        if (idx === this.currentItemIdx) {
          ctx.beginPath()
          ctx.fillStyle = "coral"
          ctx.arc(centerX, centerY, fillRadius, 0, 2 * Math.PI)
          ctx.fill()
        }
      }
    })
  }

  //
  // Called when scrolled
  //

  onBodyScroll() {
    // Make the magic line (the horizontal point where
    // the target element needs to pass for the
    // highlight to change) to the width of our main
    // element. In other words, if you made a square at
    // the top of the main toc element, the magic line
    // will be at the bottom of that square
    const magicLine = document
      .querySelector("#page-toc")
      .getBoundingClientRect().width

    // Iterate all the elements we're tracking and see
    // where they stand relative to the magic line. At
    // the end of the iteration, changed will be true
    // if any elements changed position (above/below)
    // relative to the magic line and lastAboveIdx
    // will have the index of the last element above
    // the magic line (the one to be highlighted)
    var changed = false,
      lastAboveIdx = -1
    this.state.items.forEach(function(item, idx) {
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
    if (changed || lastAboveIdx !== this.currentItemIdx) {
      if (this.currentItemIdx !== lastAboveIdx) {
        if (this.currentItemIdx !== -1) {
          this.removeTextHighlight(
            document.querySelector(
              "#toc-text-" + this.state.items[this.currentItemIdx].selector
            )
          )
        }
        if (lastAboveIdx !== -1) {
          this.addTextHighlight(
            document.querySelector(
              "#toc-text-" + this.state.items[lastAboveIdx].selector
            )
          )
        }
        this.currentItemIdx = lastAboveIdx
      }
    }

    // Update graphics (every time)
    this.updateGraphics()
  }

  componentDidMount() {
    // Finds all heading elements spit out by the MDX
    // parser
    var anchors = document.getElementsByClassName("anchor")

    // If no anchors, skip everything and render
    // ourselves invisible
    if (anchors.length === 0) {
      this.setState({ html: null })
      return
    }

    // Some vars
    var i,
      levelInd = "l1",
      items = []

    // Add the first element to the TOC, the top!
    var target = document.querySelector("#post-header")
    if (target) {
      items.push({
        target: target,
        isAbove: false,
        selector: target.id,
        levelInd: "l1",
        hash: "#post-header",
      })
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
          hash: anchors[i].hash,
        })
      }
    }

    // Hook up our event handler to onscroll
    // and window resize. Only when one
    // of these events fires can the
    // highlighted TOC item be changed
    document.body.onscroll = this.onBodyScroll
    window.onresize = this.onBodyScroll

    // Change our state so we get redrawn
    this.setState({ items })
  }

  componentDidUpdate() {
    // Kick things once the page renders to
    // set the initial highlight (if there
    // is html)
    if (this.state.items.length !== 0) {
      this.onBodyScroll()
    }
  }

  componentWillUnmount() {
    // Be a good citizen and clean up
    document.body.onscroll = null
    window.onresize = null
    this.currentItemIdx = -1
  }

  render() {
    // Are there items?
    if (this.state.items.length === 0) {
      // Got nothin' for ya
      return null
    } else {
      //Your TOC, sir...
      return (
        <TOCWrapper id="page-toc" className={this.props.className}>
          {this.state.items.map((item, idx) => (
            <>
              <TOCBullet
                className={"toc-row-" + item.levelInd}
                id={"toc-bullet-" + item.selector}
                style={{ gridRow: idx + 1 }}
              />
              {item.levelInd === "l1" ? (
                <TOCTextL1
                  className={"toc-row-" + item.levelInd}
                  id={"toc-text-" + item.selector}
                  style={{ gridRow: idx + 1 }}
                >
                  <a href={item.hash}>
                    {idx === 0 ? "Top" : item.target.innerText}
                  </a>
                </TOCTextL1>
              ) : (
                <TOCTextL2
                  className={"toc-row-" + item.levelInd}
                  id={"toc-text-" + item.selector}
                  style={{ gridRow: idx + 1 }}
                >
                  <a href={item.hash}>
                    {idx === 0 ? "Top" : item.target.innerText}
                  </a>
                </TOCTextL2>
              )}
            </>
          ))}
        </TOCWrapper>
      )
    }
  }
}

export default PageTOC

import React from "react"
import styled from "styled-components"

const TOCWrapper = styled.div`
  color: rgb(160, 160, 160);
  display: grid;
  grid-template-columns: auto 1em auto;
  align-items: center;
  font-family: "Dosis", sans-serif;
  font-weight: 300;
  .toc-row-l2 {
    font-size: 0.8em;
  }
  .toc-bullet-highlight {
    display: initial;
  }
  .toc-text-highlight {
    color: coral;
    font-weight: 400;
  }
`

const TOCBullet = styled.div`
  display: none;
  grid-column: 1 / span 1;
  padding-right: 0.3em;
  justify-self: center;
  transform: scale(1.5);
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
`

class PageTOC extends React.Component {
  constructor(props) {
    super(props)

    this.state = { items: [] }

    this.currentItemIdx = -1

    this.onBodyScroll = this.onBodyScroll.bind(this)
    this.removeTextHighlight = this.removeTextHighlight.bind(this)
    this.addTextHighlight = this.addTextHighlight.bind(this)
    this.removeBulletHighlight = this.removeBulletHighlight.bind(this)
    this.addBulletHighlight = this.addBulletHighlight.bind(this)
    this.dumpItems = this.dumpItems.bind(this)
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

  removeBulletHighlight(element) {
    if (element) {
      element.classList.remove("toc-bullet-highlight")
    }
  }

  addBulletHighlight(element) {
    if (element) {
      element.classList.add("toc-bullet-highlight")
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
          this.removeBulletHighlight(
            document.querySelector(
              "#toc-bullet-" + this.state.items[this.currentItemIdx].selector
            )
          )
          this.removeTextHighlight(
            document.querySelector(
              "#toc-text-" + this.state.items[this.currentItemIdx].selector
            )
          )
        }
        if (lastAboveIdx !== -1) {
          this.addBulletHighlight(
            document.querySelector(
              "#toc-bullet-" + this.state.items[lastAboveIdx].selector
            )
          )
          this.addTextHighlight(
            document.querySelector(
              "#toc-text-" + this.state.items[lastAboveIdx].selector
            )
          )
        }
        this.currentItemIdx = lastAboveIdx
      }
    }
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
              >
                💩
              </TOCBullet>
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

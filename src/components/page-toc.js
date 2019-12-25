import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  color: rgb(160, 160, 160);
  display: flex;
  flex-direction: column;
  ul {
    padding-inline-start: 25px;
  }
  .toc-highlight {
    color: coral;
  }
`

var observer = null
var items = []
var currentItemIdx = -1

var items2 = []
var currentItemIdx2 = -1

const useIntersectionMethod = false

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
    console.log(
      idx +
        ": " +
        (item.isVisible ? "vis" : "novis") +
        (item.wasAbove ? " above" : " noabove")
    )
  })
  console.log("end items")
}

function dumpItems2() {
  console.log("start items2")
  items2.forEach(function(item, idx) {
    console.log(
      idx +
        ": " +
        (item.isVisible ? "vis" : "novis") +
        (item.isAbove ? " above" : " noabove")
    )
  })
  console.log("end items2")
}

function intersectionCallback(entries, observer) {
  if (useIntersectionMethod) {
    entries.forEach(entry => {
      items.forEach(function(item, index) {
        if (item.target === entry.target) {
          var wasAbove = false
          if (entry.boundingClientRect && entry.rootBounds) {
            wasAbove = entry.boundingClientRect.y < entry.rootBounds.y
          }
          if (entry.isIntersecting) {
            item.isVisible = true
            item.wasAbove = wasAbove

            // If this item is visible, all items
            // before it are above
            var i
            for (i = 0; i < index; i++) {
              items[i].wasAbove = true
            }
          } else {
            item.isVisible = false
            item.wasAbove = wasAbove
          }
        }
      })
    })

    var lastNoVisAboveIdx = -1
    var hadVisible = false
    for (const [idx, item] of items.entries()) {
      if (item.isVisible) {
        hadVisible = true
        if (idx !== currentItemIdx) {
          if (currentItemIdx !== -1) {
            removeHighlight(
              document.querySelector(items[currentItemIdx].selector)
            )
          }
          addHighlight(document.querySelector(item.selector))
          currentItemIdx = idx
        }
        break
      } else {
        if (item.wasAbove) {
          lastNoVisAboveIdx = idx
        }
      }
    }
    if (!hadVisible && lastNoVisAboveIdx !== -1) {
      if (currentItemIdx !== -1) {
        removeHighlight(document.querySelector(items[currentItemIdx].selector))
      }
      addHighlight(document.querySelector(items[lastNoVisAboveIdx].selector))
      currentItemIdx = lastNoVisAboveIdx
    }
  }
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
  items2.forEach(function(item, idx) {
    var letsGetRect = item.target.getBoundingClientRect()

    // Is any part of the item within the viewport?
    const isVisible =
      letsGetRect.top > 0 - letsGetRect.height && letsGetRect.top < vwDim.height

    // Is an part of the item above the magic line?
    const isAbove = letsGetRect.top < magicLine
    if (isAbove) {
      lastAboveIdx = idx
    }

    if (isVisible !== item.isVisible || isAbove !== item.isAbove) {
      changed = true
      item.isVisible = isVisible
      item.isAbove = isAbove
    }
  })

  if (changed || lastAboveIdx !== currentItemIdx2) {
    if (!useIntersectionMethod) {
      if (currentItemIdx2 !== lastAboveIdx) {
        if (currentItemIdx2 !== -1) {
          removeHighlight(
            document.querySelector(items2[currentItemIdx2].selector)
          )
        }
        console.log("Adding highlight to " + lastAboveIdx)
        addHighlight(document.querySelector(items2[lastAboveIdx].selector))
      }
    }
    currentItemIdx2 = lastAboveIdx
    console.log("items2 changed")
    dumpItems()
    dumpItems2()
    console.log("currentItemIdx2: " + currentItemIdx2)
  }
}

class PageTOC extends React.Component {
  constructor(props) {
    super(props)
    this.state = { html: "" }
  }

  componentDidMount() {
    var intersectionOptions = {
      root: null, // use the viewport
      rootMargin: "0px",
      threshold: [0, 0.01, 0.99, 1],
    }

    observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    )

    var target = document.querySelector("#post-header")
    if (target) {
      observer.observe(target)
      items.push({
        target: target,
        isVisible: false,
        wasAbove: false,
        selector: "#toc-" + target.id,
      })
      items2.push({
        target: target,
        isVisible: false,
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
        observer.observe(anchors[i].parentElement)
        items.push({
          target: anchors[i].parentElement,
          isVisible: false,
          wasAbove: false,
          selector: "#toc-" + anchors[i].parentElement.id,
        })
        items2.push({
          target: anchors[i].parentElement,
          isVisible: false,
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
    var item = null
    while ((item = items.pop())) {
      observer.unobserve(item.target)
    }
    observer = null
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

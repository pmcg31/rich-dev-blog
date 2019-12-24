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

var items = []
var currentItemIdx = -1

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

    function intersectionCallback(entries, observer) {
      entries.forEach(entry => {
        items.forEach(function(item, index) {
          if (item.target === entry.target) {
            var wasAbove = false
            if (entry.boundingClientRect && entries.rootBounds) {
              wasAbove = entry.boundingClientRect.y < entry.rootBounds.y
            }
            if (entry.isIntersecting) {
              item.visible = true
              item.wasAbove = wasAbove

              // If this item is visible, all items
              // before it are above
              for (i = 0; i < index; i++) {
                items[i].wasAbove = true
              }
            } else {
              item.visible = false
              item.wasAbove = wasAbove
            }
          }
        })
      })

      var lastNoVisAboveIdx = -1
      var hadVisible = false
      for (const [idx, item] of items.entries()) {
        if (item.visible) {
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
          removeHighlight(
            document.querySelector(items[currentItemIdx].selector)
          )
        }
        addHighlight(document.querySelector(items[lastNoVisAboveIdx].selector))
        currentItemIdx = lastNoVisAboveIdx
      }
    }

    var observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    )

    var target = document.querySelector("#post-header")
    if (target) {
      observer.observe(target)
      items.push({
        target: target,
        visible: false,
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
          highlight: false,
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

const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")
const path = require("path")

module.exports = ({ markdownNode, markdownAST }, pluginOptions = {}) => {
  const { basePath = "../images" } = pluginOptions

  let dir = path.dirname(markdownNode.fileAbsolutePath)
  let parts = dir.split(path.sep)
  let slug = parts[parts.length - 2].concat("/", parts[parts.length - 1])

  visit(markdownAST, "image", (node) => {
    // do something with image
    if (node.url.startsWith("./")) {
      let imgName = node.url.substring(2)
      node.url = basePath.concat("/", slug, "/", imgName)

      console.log("[".concat(node.alt, "] ./", imgName, " => ", node.url))
    }
  })
}

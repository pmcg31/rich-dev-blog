import React from "react"
import retext from "retext"
import smartypants from "retext-smartypants"

const SmartQuote = ({ children }) => {
  console.log("here i am moe")
  const text = retext()
    .use(smartypants)
    .processSync(children)

  console.log("children: " + children)
  console.log("text: " + text)
  return "" + text
}

export default SmartQuote

import "./src/styles/global.css"

// Enables syntax highlighting and line numbers in
// code examples
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

// or:
// require('./src/styles/global.css')

import React from "react"
import { MDXProvider } from "@mdx-js/react"

const components = {
    a: props => {
        if (props.className === "gatsby-resp-image-link") {
            return (<div class="modal-image-wrapper" title={props.href}>{props.children}</div>)
        } else {
            return (<a {...props} />)
        }
    }
}

export const wrapRootElement = ({ element }) => {
    return (
        <MDXProvider components={components}>
            {element}
        </MDXProvider>
    )
}
import React from "react"
import styled from "styled-components"

const Footie = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding-top: 1.5em;
  padding-bottom: 0.4em;
`

const FootieContent = styled.div`
  order: 1;
  color: rgb(120, 120, 120);
  font-size: 0.75em;
  max-width: 33vmin;
  text-align: center;
  padding: 0.25em;
`

const LayoutFooter = () => {
  const year = new Date().getFullYear()

  return (
    <Footie>
      <FootieContent>© 2019-{year} Rich Seiffert</FootieContent>
      <FootieContent>
        All text, awful puns, images, videos and icons on this site are the
        result of my own hard work — they may not be reproduced in any form
        without permission
      </FootieContent>
    </Footie>
  )
}

export default LayoutFooter

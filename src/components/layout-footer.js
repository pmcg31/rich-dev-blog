import React from "react"
import styled from "styled-components"

const Footie = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding-top: 25px;
  padding-bottom: 10px;
`

const FootieContent = styled.div`
  order: 1;
  color: rgb(120, 120, 120);
  font-size: 12px;
`

const LayoutFooter = () => {
  return (
    <Footie>
      <FootieContent>© 2019 Rich Seiffert</FootieContent>
    </Footie>
  )
}

export default LayoutFooter

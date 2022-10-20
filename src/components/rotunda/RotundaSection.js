import React from "react"
import styled from "@emotion/styled"

const RotSection = styled('section')`
display:flex;
flex-direction:column;
place-items:center;`

export default function RotundaSection({children}) { 
 
  return (
    <RotSection >
        {children}
       </RotSection>
     
  )
}
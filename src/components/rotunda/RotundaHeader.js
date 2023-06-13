import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
/* import { graphql, useStaticQuery} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image "*/

const RotNav = styled('nav')` display:flex;
      flex-direction:row;
      gap:2rem;
      margin-top:2rem;
      font-weight:100;
      font-size: var(--fs-100);
      font-family: 'Playfair Display SC', sans-serif;
      letter-spacing:.3em;
      border-top:1px solid #a7a9ac;
      border-bottom:1px solid #a7a9ac;`
const RotNavLink = styled('a')` color:#757575;
text-decoration:none;
padding:.4rem 0;`
export default function RotundaHeader() { 
 
  return (
        <header className=" my-4 py-4 flex flex-col w-full place-items-center gap-4 rotunda">
         <StaticImage
      src="../../images/rotunda_logo.svg"
      alt="Rotunda Home"
      placeholder="blurred"
      width={150}
    />
        <RotNav role="navigation" aria-label="secondary naviation" className='rotunda'>
            <RotNavLink href="https://www.upress.virginia.edu/rotunda" alt="About Rotunda">about</RotNavLink>
            <RotNavLink href="https://www.upress.virginia.edu/rotunda-purchase" alt="Get a license">purchase</RotNavLink>
            <RotNavLink href="https://rotunda.upress.virginia.edu/entrance.xqy" alt="View all publications">entrance</RotNavLink>
            <RotNavLink href="https://www.upress.virginia.edu/rotunda/#contact" alt="Contact">contact</RotNavLink>
        </RotNav></header>
     
  )
}
import React from "react"
import { Link } from "gatsby"

const FooterLink = ({dest, text}) => {
     
        return (
            <Link to={`/${dest}`} className="uppercase text-sm py-2 md:py-1 font-thin tracking-wide hover:text-gray-700" alt={text}>
            {text}
          </Link>
        )}

        export default FooterLink
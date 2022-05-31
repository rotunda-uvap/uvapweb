import React from "react"
import { Link } from "gatsby"

const FooterLink = ({dest, text}) => {
     
        return (
            <Link to={`/${dest}`} className="uppercase block mt-2 hover:text-gray-300">
            {text}
          </Link>
        )}

        export default FooterLink
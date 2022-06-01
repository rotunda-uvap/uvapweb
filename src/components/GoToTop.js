import React from "react";
import {Link} from "gatsby";

const GoToTop = () => {
    return (
        <Link to={`#top`} className="uppercase font-thin text-ceci-gray-mid text-xs py-4 inline-flex "><span className="pl-2">Go to top </span><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 11l7-7 7 7M5 19l7-7 7 7"></path>
      </svg></Link>
    );
}

export default GoToTop
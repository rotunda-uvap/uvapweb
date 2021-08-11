

import React from "react"
import { Link } from "gatsby"

const RotundaUpdateCard = ({ID, Image, Date, Text}) => {
     return (
         <>


        <Link to={'../../title/'+ ID}>
        <div className=" flex items-center  flex-row hover:bg-gray-600 hover:text-white ">
        <div className="">
            <img className="h-10 w-10 rounded-full object-cover " src={'https://www.upress.virginia.edu/sites/default/files/rotunda/' + Image}  alt={Image}/>
        </div>
        <div className="ml-5 flex items-center flex-row justify-center">
            <h6>{Date}: {Text}</h6>
        </div>
        </div>
        </Link>
   </>
       )
   }
   
   export default RotundaUpdateCard

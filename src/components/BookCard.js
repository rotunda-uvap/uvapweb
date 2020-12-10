import React from "react"


const BookCard = ({Title, Subtitle, Author, Thumb, Bookid, pubdate, prizes}) => {
   
    return (
        
        
        <div className="flex flex-col py-5 px-5  hover:bg-black hover:text-blue-200">
           {Thumb ?  <img src={"../" + Thumb} className="w-25 h-auto self-center" alt="cover"/> : <img src={"../noimg.png"} alt="cover placeholder" className="w-25 h-auto self-center"/>}
            <h4 className="text-lg font-black uppercase pt-5">{Title}</h4>
    <h5 className="text-sm py-2">{Subtitle}</h5>
    <h6 className="text-xs uppercase py-2">{Author}</h6>
    <span className="text-sm py-2">{prizes}</span>
    <span className="text-xs uppercase">Publication Date: {pubdate}</span>
    <span className="text-gray-500">Image: {Thumb}</span>

        </div>
      )
  }
  
  export default BookCard
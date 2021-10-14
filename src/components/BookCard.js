import React from "react"
import "./BookCard.css"

const BookCard = ({Title, Subtitle, Author, Thumb, Bookid, prizes}) => {
const booksrc = "https://www.upress.virginia.edu/sites/default/files/covers/"  
    return (
        <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      {Thumb ?  <img src={booksrc + Thumb} className="mx-auto my-auto self-center" alt="cover"/> : <img src={ booksrc + "noimg.png"} alt="cover placeholder" className="mx-auto my-auto self-center"/>}
    </div>
    <div className="flip-card-back px-1 bg-white  ">
    <h6 className="text-base text-gray-700 uppercase pt-3 px-1 underline">{Title}</h6>
    <h5 className="text-sm pt-2 text-gray-500 italic font-serif ">{Subtitle}</h5>
    <h6 className="text-xs font-light font-display text-gray-400  pt-2">{Author}</h6>
    <span className="text-sm py-2">{prizes}</span>
    </div>
  </div>
</div>
        
        
      )
  }
  
  export default BookCard
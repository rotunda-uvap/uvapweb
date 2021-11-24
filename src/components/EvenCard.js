import React from "react"


const EvenCard = ({Title, Subtitle, Author, Thumb, Bookid, prizes}) => {
    const booksrc = "https://ik.imagekit.io/uvapress/mediums/"  
        return (
            <div className="md:grid md:grid-cols-3 py-7 border-b-2 border-gray-100 ">
             <div className="md:grid-span-1">{Thumb ?  <img src={booksrc + Bookid + "_M.jpg"} className="mx-auto my-auto self-center" alt="cover"/> : <img src={"../noimg.png"} alt="cover placeholder" className="mx-auto my-auto self-center"/>}</div>
             <div className="md:grid-span-2 flex flex-col">
             <h3 className="text-base font-black text-xl uppercase pt-3 px-1">{Title}</h3>
    <h5 className="text-lg pt-2 italic ">{Subtitle}</h5>
    <h6 className="text-sm uppercase  pt-2">{Author}</h6>
    <span className="text-sm py-2">{prizes}</span>
             </div>
            </div>
        )}

        export default EvenCard
import React from 'react';
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = ({book_obj_array}) => {

    const imageMap = book_obj_array.map((book, index) => {
      let cover = "https://ik.imagekit.io/uvapress/mediums/" + book.jsonId + "_M.jpg"
      let booklink = "../../title/" + book.jsonId
        return (
            <div className="image-slider-container items-center px-10" key={`book${index}`}>
                <Link to={booklink} ><img src={cover} width={120} height={67} alt={book.Title} /></Link>
            </div>
        )
    })

    const settings = {
        dots: false,
        arrows:true,
        autoplay: false,
        infinite: true,
        lazyLoad:true,
        swipeToSlide: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        className:'slider',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              },
            },
          ],
        
       
      };


    return (
        <Slider {...settings}>
                    {imageMap} 
        </Slider>
    )
}

export default Gallery;
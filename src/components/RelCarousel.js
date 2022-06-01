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
            <Link to={booklink} ><div className="image-slider-container items-center px-10" key={`book${index}`}>
                <img src={cover} width={150} height={224} alt={book.Title} loading="lazy"/>
            </div></Link>
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
        slidesToShow: 5,
        slidesToScroll: 1,
        useTransform: false,
        className:'slider',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 4
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
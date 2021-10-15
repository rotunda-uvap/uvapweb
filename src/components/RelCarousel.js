import React from 'react';
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = ({book_obj_array}) => {

    const imageMap = book_obj_array.map((book) => {
      let cover = "https://covers.upress.virginia.edu/mediums/" + book.id + "_M.jpg"
      let booklink = "../../title/" + book.id
        return (
            <div className="image-slider-container items-center px-10" key={book.Title}>
                <Link to={booklink} ><img src={cover} alt={book.Title} /></Link>
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
        slidesToShow: 5,
        slidesToScroll: 1,
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
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
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
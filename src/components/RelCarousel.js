import React from 'react';
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = ({book_obj_array}) => {

    const imageMap = book_obj_array.map((book) => {
      let cover = "https://www.upress.virginia.edu/sites/default/files/covers/" + book.id + "_M.jpg"
      let booklink = "../../title/" + book.id
        return (
            <div className="image-slider-container" key={book.Title}>
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
        className:'slider'
        
       
      };


    return (
        <Slider {...settings}>
                    {imageMap} 
        </Slider>
    )
}

export default Gallery;
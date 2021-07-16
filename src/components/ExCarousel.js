import React from 'react';
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Gallery = ({book_id_array}) => {

  

    const imageMap = book_id_array.map((image) => {
      let cover = "https://www.upress.virginia.edu/sites/default/files/covers/" + image + "_M.jpg"
      let booklink = "../../title/" + image
        return (
            <div className="image-slider-container" key={image}>
                <Link to={booklink} ><img src={cover} alt={image} /></Link>
            </div>
        )
    })


    const settings = {
        dots: false,
        arrows:true,
        autoplay: false,
        infinite: true,
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
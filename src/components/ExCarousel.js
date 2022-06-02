import React from 'react';
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sanitizeHtml from 'sanitize-html';


const Gallery = ({book_id_array}) => {

  

    const imageMap = book_id_array.map((image, index) => {
      let cover = "https://ik.imagekit.io/uvapress/mediums/" + image + "_M.jpg"
      let cleanCover = sanitizeHtml(cover)
      let booklink = "../../title/" + image
        return (
            <Link to={booklink} ><div className="image-slider-container items-center px-10" key={`img${index}`}>
                <img src={cleanCover} alt={image} width={150} height={224} loading="lazy"/>
            </div></Link>
        )
    })


    const settings = {
        dots: false,
        arrows:true,
        autoplay: false,
        infinite: true,
        swipeToSlide: true,
        speed: 500,
        slidesToShow: 6,
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
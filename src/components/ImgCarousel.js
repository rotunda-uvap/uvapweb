import React from 'react';
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  dots: false,
  arrows:true,
  autoplay: false,
  infinite: true,
  lazyLoad:true,
  swipeToSlide: true,
  speed: 500,
  useTransform:false,
  slidesToShow: 4,
  slidesToScroll: 1,
  className:'slider',
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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

const ImgGallery = ({filename_array}) => {

    const imageMap = filename_array.map((name) => {
      let src = "https://ik.imagekit.io/uvapress/" + name
        return (
          <Link to={src} key={name}>
          <div className="image-slider-container flex justify-center items-center px-4">
            <img
              src={src}
              alt={name}
              loading="lazy"
              className="h-48 w-auto object-contain"
            />
          </div>
        </Link>
        )
    })

    

    return (
        <Slider {...settings}>
                    {imageMap} 
        </Slider>
    )
}

export default ImgGallery;
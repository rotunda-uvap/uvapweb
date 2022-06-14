import React from 'react';
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IKImage, IKContext } from 'imagekitio-react'


const Gallery = ({book_id_array}) => {
    const imageMap = book_id_array.map((image, index) => {
      const imageKitPath = image + ".jpg"
      let booklink = "../../title/" + image
        return (
            <Link to={booklink} key={`book${index}`}><div className="image-slider-container items-center px-10" >
               <IKContext urlEndpoint="https://ik.imagekit.io/uvapress/" >
            <IKImage path={imageKitPath}
            transformation={[{
              "height": "224",
              "width": "150",
              crop: "at_max"
            }]}
            lqip={{ active: true }}/>
          </IKContext>
              
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
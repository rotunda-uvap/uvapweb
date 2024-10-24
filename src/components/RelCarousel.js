import React from 'react';
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IKImage, IKContext } from 'imagekitio-react'


const Gallery = ({book_obj_array}) => {

    const imageMap = book_obj_array.map((book, index) => {
      const imageKitPath = book.BookID + ".jpg"
      const title = book.Title
      let booklink = "../../title/" + book.BookID
        return (
            <Link to={booklink} key={`book${index}`} aria-label={`featured book #${index}`}><div className="image-slider-container items-center px-10 " >
               <IKContext urlEndpoint="https://ik.imagekit.io/uvapress/" >
            <IKImage width="150" height="224" path={imageKitPath}
            transformation={[{
              "height": "224",
              "width": "150",
              crop: "at_max"
            }]}
            lqip={{ active: true }} alt={`cover of ${title}`} />
           
          </IKContext>
              
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
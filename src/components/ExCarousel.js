import React from 'react';
import { Link } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IKImage, IKContext } from 'imagekitio-react'

// Gallery component takes an array of book ids and displays the book covers in a slider
const Gallery = ({book_id_array}) => {
  // Map through book id array and generate an image element for each id
    const imageMap = book_id_array.map((image, index) => {
         // Construct path for image using book id
      const imageKitPath = image + ".jpg"
      let booklink = "../../title/" + image
       // Return an image element wrapped in a Link component
        return (
            <Link to={booklink} key={`book${index}`} aria-label={`featured book #${index}`}><div className="image-slider-container items-center px-10" >
               <IKContext urlEndpoint="https://ik.imagekit.io/uvapress/" >
            <IKImage width="150" height="224" path={imageKitPath}
            transformation={[{
              "height": "224",
              "width": "150",
              crop: "at_max"
            }]}
            lqip={{ active: true }} alt={`cover of ${image}`}/>
          </IKContext>
              
            </div></Link>
        )
    })


   // Settings for the slider component
const settings = {
  dots: false, // Show dot indicators for each slide
  arrows: true, // Show left/right arrow buttons for navigation
  autoplay: false, // Autoplay slides
  infinite: false, // Whether to cycle from the last slide to the first and vice versa
  swipeToSlide: true, // Swipe to navigate between slides
  speed: 500, // Transition speed in milliseconds
  slidesToShow: 5, // Number of slides to show at a time
  slidesToScroll: 1, // Number of slides to scroll when navigating
  className: 'slider', // Custom class name for the slider container
  responsive: [ // Responsive settings for different device screen widths
      {
          breakpoint: 1024, // Screen width breakpoint in pixels
          settings: {
              slidesToShow: 3, // Number of slides to show at this breakpoint
              slidesToScroll: 3, // Number of slides to scroll when navigating at this breakpoint
              infinite: true, // Whether to cycle through slides indefinitely
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

// Return the Slider component with the mapped image elements as children and the settings passed as props
    return (
        <Slider {...settings}>
                    {imageMap} 
        </Slider>
    )
}

export default Gallery;
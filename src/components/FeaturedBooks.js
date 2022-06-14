import React from "react"
import { Link } from "gatsby"
import { IKImage, IKContext } from 'imagekitio-react'

const FeaturedBooks = ({id}) => {

   const imageKitPath = id + ".jpg"
   const booklink = "../../title/" + id

    return (
            <Link to={booklink} className="aspect-[75/112]">
                  <IKContext urlEndpoint="https://ik.imagekit.io/uvapress/">
            <IKImage path={imageKitPath}
             transformation={[{
                height: auto,
                width: 150
                }]}
            lqip={{ active: true }}
            loading="lazy"/>
          </IKContext>
                </Link>
  
      )
  }
  
  export default FeaturedBooks
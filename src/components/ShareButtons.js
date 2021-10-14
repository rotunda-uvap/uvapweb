import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'
 
const ShareButtons = ({title, url, quote, tags}) => {

    return(
        <div>
          <FacebookShareButton url={url} title={title} quote={quote}>
                <FacebookIcon  size={40} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title}>
                <TwitterIcon  size={40} round={true} />
          </TwitterShareButton>

          <RedditShareButton url={url} title={title} >
            <RedditIcon  size={40} round={true} />
          </RedditShareButton>
        </div>
      )

}
export default ShareButtons
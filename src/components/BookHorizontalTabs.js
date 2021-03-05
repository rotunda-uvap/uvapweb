import React from "react"
// @ts-ignore
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import {FaQuoteLeft} from "react-icons/fa";


const BookHorizontalTabs = ({summary, reviews, bio}) => {
   
    return (
    
        <Tabs defaultTab="basic-tab-one" className="flex flex-col justify-center ">
        <TabList className="self-center">
    <Tab className=" uppercase py-3 px-5 border-b-4 border-white hover:border-black" tabFor="basic-tab-one">Summary</Tab>
          <Tab className="uppercase py-3 px-6 border-b-4 border-white hover:border-black" tabFor="basic-tab-two">Reviews</Tab>
          <Tab className="uppercase py-3 px-6 border-b-4 border-white hover:border-black" tabFor="basic-tab-three">Author Bio(s)</Tab>
          <Tab className="uppercase py-3 px-6 border-b-4 border-white hover:border-black" tabFor="basic-tab-four">Table of Contents</Tab>
        </TabList>
        <TabPanel className="py-6 px-20" tabId="basic-tab-one">
        <div dangerouslySetInnerHTML={{ __html: summary }}/>
        </TabPanel>
        <TabPanel className="py-6 px-20" tabId="basic-tab-two">
        {reviews ?
    <div className="py-5">
       {reviews[0] ? reviews.map(review => (
            <>
            <blockquote className="pt-4 body-text" dangerouslySetInnerHTML={{ __html: review.html }}/>
            <h6 className="pl-10 pb-5 text-md italic text-gray-600"> - {review.attribution}</h6>
            <hr/>
            </>
        ))
             : 
        <p>No review available</p>
    }
    </div> : 
    <div className="py-2"><p>No review available</p></div>
    }
        </TabPanel>
        <TabPanel className="py-6 px-20" tabId="basic-tab-three">
        {bio !== "EMPTY: BioNote" ? 
          <div dangerouslySetInnerHTML={{ __html: bio }}>
            </div> 
          :
              <div><p>No biographical information available</p></div>}
        </TabPanel>
        <TabPanel className="py-6 px-20" tabId="basic-tab-four">
        <p>Not yet available</p> 

        </TabPanel>
      </Tabs>
      )
  }
  
  export default BookHorizontalTabs
import React from "react"
// @ts-ignore
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';


const BookHorizontalTabs = ({summary, reviews, bio}) => {
   
    return (
    
        <Tabs defaultTab="basic-tab-one" className="flex flex-col justify-center ">
        <TabList className="self-center text-gray-700">
    <Tab className=" uppercase py-2 font-thin tracking-widest  px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" tabFor="basic-tab-one">Summary</Tab>
          <Tab className="uppercase font-thin racking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" tabFor="basic-tab-two">Reviews</Tab>
          <Tab className="uppercase font-thin tracking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" tabFor="basic-tab-three">Author Bio(s)</Tab>
          <Tab className="uppercase font-thin tracking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" tabFor="basic-tab-four">Table of Contents</Tab>

          <Tab className="uppercase font-thin tracking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" tabFor="basic-tab-five">Additional Resources</Tab>
        </TabList>
        <TabPanel className="py-3" tabId="basic-tab-one">
        <div dangerouslySetInnerHTML={{ __html: summary }} className="dropCap cms"/>
        </TabPanel>
        <TabPanel className="py-3 " tabId="basic-tab-two">
        {reviews ?
    <div className="py-3">
       {reviews[0] ? reviews.map(review => (
            <>
            <blockquote className="pt-3 cms" dangerouslySetInnerHTML={{ __html: review.html }}/>
            <h6 className="pl-10 pb-5  font-display text-md italic text-gray-600"> - {review.attribution}</h6>
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
        <TabPanel className="py-3" tabId="basic-tab-three">
        {bio !== "EMPTY: BioNote" ? 
          <div dangerouslySetInnerHTML={{ __html: bio }} className="cms dropCap">
            </div> 
          :
              <div><p>No biographical information available</p></div>}
        </TabPanel>
        <TabPanel className="py-3" tabId="basic-tab-four">
        <p>Not yet available</p> 

        </TabPanel>
        <TabPanel className="py-3" tabId="basic-tab-five">
        <p>Not yet available</p> 

        </TabPanel>
      </Tabs>
      )
  }
  
  export default BookHorizontalTabs
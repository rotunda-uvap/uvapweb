import React from "react"
// @ts-ignore
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';


const BookHorizontalTabs = ({summary, reviews, bio}) => {
   
    return (
    
        <Tabs defaultTab="basic-tab-one" className="flex flex-col justify-center ">
        <TabList className="self-center">
    <Tab className="font-black uppercase py-3 px-6 border-b-4 border-white hover:border-black" tabFor="basic-tab-one">Summary</Tab>
          <Tab className="font-black uppercase py-3 px-6 border-b-4 border-white hover:border-black" tabFor="basic-tab-two">Reviews</Tab>
          <Tab className="font-black uppercase py-3 px-6 border-b-4 border-white hover:border-black" tabFor="basic-tab-three">About the Author(s)</Tab>
        </TabList>
        <TabPanel className="p-6" tabId="basic-tab-one">
        <div dangerouslySetInnerHTML={{ __html: summary }}/>
        </TabPanel>
        <TabPanel className="p-6" tabId="basic-tab-two">
        {reviews ?
    <div className="py-2">
       {reviews[0] ? reviews.map(review => (
            <>
            <blockquote className="pt-2" dangerouslySetInnerHTML={{ __html: review.html }}/>
            <h6 className="pl-8 italic text-gray-500">-{review.attribution}</h6>
            </>
        ))
             : 
        <p>No review available</p>
    }
    </div> : 
    <div className="py-2"><p>No review available</p></div>
    }
        </TabPanel>
        <TabPanel className="p-6" tabId="basic-tab-three">
        {bio !== "EMPTY: BioNote" ? 
          <div>
            <p dangerouslySetInnerHTML={{ __html: bio }}/>
            </div> 
          :
              <div><p>No biographical information available</p></div>}
        </TabPanel>
      </Tabs>
      )
  }
  
  export default BookHorizontalTabs
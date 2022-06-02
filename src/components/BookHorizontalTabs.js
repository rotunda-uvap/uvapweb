import React from "react"
// @ts-ignore
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import sanitizeHtml from 'sanitize-html';


const BookHorizontalTabs = ({summary, reviews, bio, TOC, add}) => {
   
    return (
    
        <Tabs defaultTab="basic-tab-one" className="flex flex-col justify-center ">
        <TabList className="flex flex-col md:flex-row self-center text-ceci-gray-dark">
    <Tab className=" uppercase py-2 font-thin tracking-widest  px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" tabFor="basic-tab-one">Summary</Tab>
          <Tab className="uppercase font-thin tracking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" tabFor="basic-tab-two">Reviews</Tab>
          <Tab className="uppercase font-thin tracking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" tabFor="basic-tab-three">Author Bio(s)</Tab>
          { TOC ? <Tab className="uppercase font-thin tracking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" tabFor="basic-tab-four">Table of Contents</Tab> : ""} 
          { add ? <Tab className="uppercase font-thin tracking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" tabFor="basic-tab-five">Additional Resources</Tab> : ""} 
        </TabList>
        <TabPanel className="py-3" tabId="basic-tab-one">
        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(summary) }} className="text-ceci-gray-dark dropCap cms text-lg"/>
        </TabPanel>
        <TabPanel className="py-3 " tabId="basic-tab-two">
        {reviews ?
    <div className="py-3">
       {reviews[0] ? reviews.map((review, index) => (
            <>
            <blockquote key={`review${index}`} className="pt-3 cms text-lg text-ceci-gray-dark dropCap" dangerouslySetInnerHTML={{ __html: sanitizeHtml(review.html) }}/>
             <h6 className="pl-10 pb-5  font-display text-sm italic text-ceci-gray-mid"> - {review.attribution}</h6>
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
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(bio)  }} className="cms dropCap text-lg text-ceci-gray-dark">
            </div> 
          :
              <div><p>No biographical information available</p></div>}
        </TabPanel>
        <TabPanel className="py-3" tabId="basic-tab-four">
        {TOC ? 
        <ul className="hanging">{TOC.map((i, index) => (
          <li className="cms text-ceci-gray-dark font-serif text-lg pl-5 hanging" key={index}>{i}</li>
        )

        )}</ul>
             : 
        <p>Table of Contents not available</p>
    }

        </TabPanel>
        <TabPanel className="py-3" tabId="basic-tab-five">
        {add ? add.frontmatter.attached_links.map(edge => (
            <>
              <div className="p-2">
                    <a href={edge.link} target="_blank" rel="noreferrer" className="text-ceci-gray-dark tracking-wide font-thin pl-5">
                      {edge.name}
                    </a>
                  </div>
            </>
            ))
              : 
              <p>Not yet available</p>
            }
     <hr/>
        </TabPanel>
      </Tabs>
      )
  }
  
  export default BookHorizontalTabs
import React from "react"
// @ts-ignore
// import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import sanitizeHtml from 'sanitize-html';

const wrapInParagraph = (htmlString) => {
  // Check if the content already contains a <p> tag
  if (/<p[\s>]/.test(htmlString)) {
    return htmlString; // Return as is if <p> is found
  }
  return `<p>${htmlString}</p>`; // Otherwise, wrap in <p>
};


const BookHorizontalTabs = ({summary, reviews, bio, TOC, add}) => {
    return (
    
        <Tabs className="flex flex-col justify-center md:max-w-5xl ">
        <TabList className="flex flex-col md:flex-row self-center text-ceci-gray-dark">
    <Tab className=" uppercase py-2 font-thin tracking-widest  px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" selectedClassName="border-black">Summary</Tab>
          <Tab className="uppercase font-thin tracking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" selectedClassName="border-black">Reviews</Tab>
          <Tab className="uppercase font-thin tracking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" selectedClassName="border-black">Author Bio(s)</Tab>
          { TOC ? <Tab className="uppercase font-thin tracking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" selectedClassName="border-black">Table of Contents</Tab> : ""}
          { add ? <Tab className="uppercase font-thin tracking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white hover:border-black" selectedClassName="border-black">Additional Resources</Tab> : ""}
        </TabList>
        <TabPanel className="py-3">
        <div
  dangerouslySetInnerHTML={{
    __html: sanitizeHtml(wrapInParagraph(summary))
  }}
  className="text-ceci-gray-dark dropCap font-serif cms text-lg"
/>
        </TabPanel>
        <TabPanel className="py-3 ">
        {reviews ?
    <div className="py-3">
    {reviews[0] ? reviews.map((review, index) => (
         <>
         <blockquote key={`review${index}`} className="pt-3 cms text-lg text-ceci-gray-dark dropCap font-serif" dangerouslySetInnerHTML={{ __html: sanitizeHtml(review.html) }}/>
          <cite className="block pl-10 pb-5  font-display text-sm italic text-ceci-gray-mid not-italic"> - {review.attribution}</cite>
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
        <TabPanel className="py-3">
        {bio !== "EMPTY: BioNote" ? 
          <div dangerouslySetInnerHTML={{ __html: bio }} className="cms dropCap font-serif text-lg text-ceci-gray-dark">
            </div> 
          :
              <div><p>No biographical information available</p></div>}
        </TabPanel>

        <TabPanel className="py-3">
        {TOC ? 
        <div dangerouslySetInnerHTML={{__html: TOC}} className="cms text-lg font-serif tracking-wide text-ceci-gray-dark"></div>
             : 
        <div><p>Table of Contents not available</p></div>
    }

        </TabPanel>
        <TabPanel className="py-3">
        {add ? add.frontmatter.attached_links.map((edge, index) => (
            <>
            
              <div className="p-2"  key={`ref${index}`}>
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
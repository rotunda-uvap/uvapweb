import React from "react"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import ShareButtons from "../components/ShareButtons"
import ImgGallery from "../components/ImgCarousel"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
export default function FFPage() {
    const screenshots= ['fandf_cover.png', 'fandf_screen1.png', 'fandf_screen2.png', 'fandf_screen3.png', 'fandf_screen4.png']
 return (
   
        <Layout> 
           <SeO
        title="Furnace and Fugue: A Digital Edition of Michael Maier's Atalanta fugiens (1618) with Scholarly Commentary"
        description="Atalanta fugiens lends itself unusually well to today’s digital tools. Re-rendering Maier’s multimedia alchemical project as an enhanced online publication, Furnace and Fugue allows contemporary readers to hear, see, manipulate, and investigate Atalanta fugiens in ways that Maier perhaps imagined but that were impossible to fully realize before now. An interactive, layered digital edition provides accessibility and flexibility, presenting all the elements of the original book along with significant enhancements that allow for deep engagement by specialists and nonspecialists alike."
        pathname="https://www.upress.virginia.edu/furnace-and-fugue"
        author="Edited by Tara Nummedal and Donna Bilak"
        cover={
          "https://ik.imagekit.io/uvapress/furnace.png"
        }
        article={false}
      />
           <div className="container px-5 py-12 mx-auto">
           <h4 className="hidden md:block pb-3 font-light text-ceci-gray-dark font-sans leading-none ">Furnace and Fugue</h4>
          <h4 className="md:hidden pb-3 font-light text-ceci-gray-dark leading-relaxed font-sans">Furnace and Fugue</h4>
          <h6 className="italic font-thin text-ceci-gray-mid tracking-wide">A Digital Edition of Michael Maier's "Atalanta fugiens" (1618) with Scholarly Commentary</h6>
          <h6 className="py-2 font-display text-ceci-gray-mid">Edited by Tara Nummedal and Donna Bilak</h6>
          <section className="py-4">
              <ImgGallery filename_array={screenshots}/>
          </section>

          <section className="py-4 text-ceci-gray-mid"> <div className="flex flex-row pl-6 inline-flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
</svg> <a href="https://furnaceandfugue.org/" className="py-7 font-thin pl-5 tracking-wide">Go to Publication </a></div></section>

       
       <section className="py-4">
          <Tabs defaultTab="basic-tab-one" className="flex flex-col justify-center ">
        <TabList className="self-center text-ceci-gray-mid">
    <Tab className=" uppercase py-2 font-thin tracking-widest  px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white" tabFor="basic-tab-one">Summary</Tab>
          <Tab className="uppercase font-thin tracking-widest py-2 px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white " tabFor="basic-tab-two">Highlights</Tab>
        </TabList>
        <TabPanel className="py-3" tabId="basic-tab-one">
            <p className="italic font-display text-lg text-ceci-gray-mid">An Innovative New Open-Access Resource</p>
        <p className="text-ceci-gray-dark dropCap cms text-lg">In 1618, on the eve of the Thirty Years’ War, the German alchemist and physician Michael Maier published Atalanta fugiens, an intriguing and complex musical alchemical emblem book designed to engage the ear, eye, and intellect. The book unfolds as a series of fifty emblems, each of which contains an accompanying "fugue" music scored for three voices. Historians of alchemy have long understood this virtuoso work as an ambitious demonstration of the art’s literary potential and of the possibilities of the early modern printed book.</p>

<p className="text-ceci-gray-dark cms text-lg">Atalanta fugiens lends itself unusually well to today’s digital tools. Re-rendering Maier’s multimedia alchemical project as an enhanced online publication, Furnace and Fugue allows contemporary readers to hear, see, manipulate, and investigate Atalanta fugiens in ways that Maier perhaps imagined but that were impossible to fully realize before now. An interactive, layered digital edition provides accessibility and flexibility, presenting all the elements of the original book along with significant enhancements that allow for deep engagement by specialists and nonspecialists alike.</p>

<p className="text-ceci-gray-dark cms text-lg">Three short introductory essays invite readers to get acquainted with early modern alchemy, and Michael Maier. Eight extended interpretive essays explore Atalanta fugiens and its place in the history of music, science, print, and visual culture in early modern Europe. These interdisciplinary essays also include interactive features that clarify and/or advance the authors’ arguments while positioning Furnace and Fugue as an original, uniquely engaging contribution to our understanding of early modern culture.</p>

<p className="text-ceci-gray-dark cms text-lg">Supported by the Andrew W. Mellon Foundation, the Gladys Krieble Delmas Foundation, and the Office of the Vice President for Research and the Social Science Research Institute at Brown University.</p>

        </TabPanel>
        <TabPanel className="py-3 " tabId="basic-tab-two">
        
    <div className="py-3">
      <ul className="list-disc pl-4 space-y-4 text-ceci-gray-dark font-thin tracking-wide font-display">
          <li key="1">An innovative open-source digital archive</li>
          <li key="2">Fully searchable English translation sourced from a seventeenth-century manuscript housed in the Beinecke Rare Book and Manuscript Library at Yale University
</li>
<li key="3">High-resolution, zoomable images
</li>
<li key="4">Newly commissioned, manipulable vocal recordings of Atalanta’s music
</li>
<li key="5">Downloadable performance edition featuring modernized musical notation</li>
      </ul>
    </div> 
        </TabPanel>
       
      </Tabs>
      </section>

          <section className="ml-6">
          <ShareButtons title="Furnace and Fugue:A Digital Edition of Michael Maier's Atalanta fugiens (1618) with Scholarly Commentary" url="https://www.upress.virginia.edu/furnace-and-fugue" />
        </section>
     
           </div>
        </Layout>

 )
}



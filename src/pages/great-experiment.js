import React from "react"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import ShareButtons from "../components/ShareButtons"
import ImgGallery from "../components/ImgCarousel"
export default function FFPage() {
    const screenshots= ['franklin_vr.png','great_experiment_user.jpg', 'ind_hall2.jpg', 'ge_gameplay.jpg', 'eld_gerry.jpg']
 return (
   
        <Layout> 
           <SeO
        title="The Great Experiment: Redebating the Electoral College in Virtual Reality"
        description="A peer-reviewed educational virtual reality experience set at the 1787 Constitutional Convention."
        pathname="https://www.upress.virginia.edu/great-experiment"
        author="Created by Warren R. Hofstra and Mohammad F. Obeid, with Kevin R. Hardwick and J.J. Ruscella"
         cover={
          "https://ik.imagekit.io/uvapress/tge.png"
         }
        article={false}
      />
           <div className="container px-5 py-12 mx-auto">
           <h1 className="pb-3 font-light text-ceci-gray-dark font-sans leading-none text-2xl md:text-3xl">The Great Experiment</h1>
          <p className="italic font-thin font-sans text-ceci-gray-mid tracking-booped">A peer-reviewed educational virtual reality experience set at the 1787 Constitutional Convention.</p>
          <p className="py-2 font-display text-ceci-gray-mid">Created by Warren R. Hofstra and Mohammad F. Obeid, with Kevin R. Hardwick and J.J. Ruscella</p>
          <section className="py-4">
              <ImgGallery filename_array={screenshots}/>
          </section>

          <section id="applink" className="py-2 text-ceci-gray-mid flex flex-col items-start gap-y-0"> 
            <div className="flex items-center"> 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
              </svg> 
              <a href="https://www.su.edu/scil/projects/the-great-experiment/" className="py-4 font-thin pl-5 tracking-wide">Visit the Project Homepage and access app for free here</a>
            </div>
           {/*  <div className="flex items-center"> 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
              </svg> 
              <a href="https://www.meta.com/s/2dKDUp10B" className="py-4 font-thin pl-5 tracking-wide">Access App Demo on Meta Quest Store</a>
            </div> */}
          </section>

          <section className="flex flex-col justify-center md:max-w-5xl">
        <h2 className="text-ceci-gray-mid uppercase py-2 font-thin tracking-widest text-center px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white">HIGHLIGHTS</h2>
      <ul className="list-disc pl-8 space-y-4 p-4 text-ceci-gray-dark font-thin tracking-wide font-display bg-slate-100">
          <li key="1">A five-level interactive and educational experience</li>
          <li key="2">Peer-reviewed on historical and technical merits through UVA Press
</li>
<li key="3">Professional voice acting and motion capture 
</li>
<li key="4">High-fidelity 3D scans of the interior of Independence Hall and statues for the rendering of historical figures 
</li>
<li key="5">Representing years of collaborative work between scholars and students</li>
      </ul> </section>
 
           <section className="flex flex-col justify-center md:max-w-5xl py-4" >
            <h2 className="text-ceci-gray-mid uppercase py-2 font-thin tracking-widest text-center px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white">SUMMARY</h2>
            <p className="italic font-display text-lg text-ceci-gray-mid">An Innovative Approach to Teaching History and the Art of Debate</p>
          
         
        <p className="text-ceci-gray-dark dropCap cms text-lg">Published by UVA Press as peer-reviewed digital scholarship, “The Great Experiment” utilizes spatial computing to transform historical study into an immersive, participatory encounter with the past. By placing participants within a meticulously reconstructed 1787 Constitutional Convention, this VR platform transcends the traditional boundaries of text and film to foster a profound cognitive engagement with eighteenth-century political thought. Through a sophisticated five-stage pedagogical framework, users progress from observing foundational debates on the executive branch to embodying delegates in live, rational deliberation. The project bridges the gap between rigorous academic inquiry and transformative educational technology, offering a powerful platform for both scholarly exploration and modern civic learning.
        </p>

</section>

          <section className="ml-6">
          <ShareButtons title="The Great Experiment: Redebating the Electoral College in Virtual Reality" url="https://www.upress.virginia.edu/great-experiment" />
        </section>
     
           </div>
        </Layout>

 )
}

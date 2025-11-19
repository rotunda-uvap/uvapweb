import React from "react"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import ShareButtons from "../components/ShareButtons"
import ImgGallery from "../components/ImgCarousel"
export default function FFPage() {
    const screenshots= ['great_experiment_user.jpg', 'franklin_vr.png', 'ind_hall2.jpg', 'ge_gameplay.jpg']
 return (
   
        <Layout> 
           <SeO
        title="The Great Experiment: Redebating the Electoral College in Virtual Reality"
        description="A peer-reviewed educational virtual reality experience set at the 1787 Constitutional Convention."
        pathname="https://www.upress.virginia.edu/furnace-and-fugue"
        author="created by Warren Hofstra (Shenandoah University), Mohammad Obeid (Shenandoah Center for Immersive Learning), J.J. Ruscella (AccessVR), and Kevin Hardwick"
        // cover={
        //   "https://ik.imagekit.io/uvapress/furnace.png"
        // }
        article={false}
      />
           <div className="container px-5 py-12 mx-auto">
           <h4 className="hidden md:block pb-3 font-light text-ceci-gray-dark font-sans leading-none ">The Great Experiment</h4>
          <h4 className="md:hidden pb-3 font-light text-ceci-gray-dark leading-relaxed font-sans">The Great Experiment</h4>
          <h6 className="italic font-thin text-ceci-gray-mid tracking-booped">A peer-reviewed educational virtual reality experience set at the 1787 Constitutional Convention.</h6>
          <h6 className="py-2 font-display text-ceci-gray-mid">created by Warren Hofstra (Shenandoah University), Mohammad Obeid (Shenandoah Center for Immersive Learning), J.J. Ruscella (AccessVR), and Kevin Hardwick (James Madison University)</h6>
          <section className="py-4">
              <ImgGallery filename_array={screenshots}/>
          </section>

          <section className="py-4 text-ceci-gray-mid"> <div className="flex flex-row pl-6 inline-flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
</svg> <a href="https://www.su.edu/scil/projects/the-great-experiment/" className="py-7 font-thin pl-5 tracking-wide">Discover App </a></div></section>



<section className="py-3">
        <h2 className="text-ceci-gray-mid uppercase py-2 font-thin tracking-widest  text-center px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white">HIGHLIGHTS</h2>
      <ul className="list-disc pl-8 space-y-4 text-ceci-gray-dark font-thin tracking-wide font-display bg-slate-100">
          <li key="1">A five-level interactive and educational experience</li>
          <li key="2">Peer-reviewed on historical and technical merits through UVA Press
</li>
<li key="3">Professional voice acting and motion capture 
</li>
<li key="4">High-fidelity 3D scans of the interior of Independence Hall and statues for the rendering of historical figures 
</li>
<li key="5">Representing years of collaborative work between scholars and students</li>
      </ul> </section>
 
           <section className="pt-3" >
            <h2 className="text-ceci-gray-mid uppercase py-2 font-thin tracking-widest  text-center px-3 sm:px-6 text-sm md:text-lg border-b-4 border-white">SUMMARY</h2>
            <p className="italic font-display text-lg text-ceci-gray-mid">An Innovative Approach to Teaching History and the Art of Debate</p>
          
         
        <p className="text-ceci-gray-dark dropCap cms text-lg">Shenandoah University is excited to celebrate the launch of “The Great Experiment,” an educational virtual reality experience that immerses participants into a key moment in U.S. history. For over five years, students and faculty collaborated to create this experience, which places users within a virtual Independence Hall in Philadelphia during the Constitutional Convention of 1787. Through a series of progressively immersive and interactive stages, participants join the country’s founders as they discuss and debate how to select the chief executive of a new republic.</p>

</section>

       
      
  
    
 

      

          <section className="ml-6">
          <ShareButtons title="The Great Experiment: Redebating the Electoral College in Virtual Reality" url="https://www.upress.virginia.edu/great-experiment" />
        </section>
     
           </div>
        </Layout>

 )
}



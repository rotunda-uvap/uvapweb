import React from "react"
import {
  FaMagnifyingGlass,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaBluesky,
} from "react-icons/fa6"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./megamenu.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MegaHeader = () => {
  const data = useStaticQuery(graphql`
  query {
    uvaplogo: file(relativePath: { eq: "black.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          quality:100
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    
  }
`)
const uvap = getImage(data.uvaplogo)
  return (
    <>
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className="md:hidden border-b-2 flex flex-row  z-40 tracking-wide"
      >
        <div className="flex flex-row w-screen">
          <div className="flex">
            <div className="block text-ceci-gray-dark w-64 py-3">
              <Link to={`/`}>
                {" "}
                <GatsbyImage image={uvap} alt="University of Virginia Press - Home" />{" "}
              </Link>
            </div>
            <div className="toggleable">
              <input
                type="checkbox"
                value="selected"
                id="toggle-one"
                aria-labelledby="small-menu close-small-menu"
                className="toggle-input"
              />

              <div className="py-6 absolute right-4">
                <label id="small-menu" htmlFor="toggle-one">
                  <span className="text-gray-400">
                    <svg
                      className="fill-current h-6 w-6"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                  </span>
                </label>
              </div>

              <div
                className="p-3 mega-menu mb-16 sm:mb-0 shadow-xl bg-ceci-gray-dark"
              >
                <div className="w-full flex flex-wrap justify-between mx-2 text-gray-400  font-sans font-thin uppercase">
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="text-xl text-white text-bold mb-2">
                      About
                    </h3>
                    <div>
                      <Link
                        to={`/about`}
                        className="uppercase block text-lg  text-gray-400 hover:text-gray-300"
                      >
                        About UVA Press
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/publicity`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Latest News and Events
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/staff-list`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Contact US
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/permissions`}
                        className="uppercase block text-lg   text-gray-400 hover:text-gray-300 mr-4"
                      >
                        Rights and Permissions
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/career`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Career & Internships
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/support`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Support UVa Press
                      </Link>
                    </div>
                  </div>
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className=" text-xl text-white font-sans mb-2">
                      All Products
                    </h3>
                   
                    <div>
                      <Link
                        to={`/book-search`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Search
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#AZ`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Browse A-Z
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/recent-books`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        New Releases
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#series`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Browse by Series
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#subjects`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Browse by Subject
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/catalog`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Seasonal Catalog
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/exhibits`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Conference Exhibits
                      </Link>
                    </div>

                    <div>
                      <Link
                        to={`/publicity#review`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Review Copy Requests
                      </Link>
                    </div>
                    
                    <div>
                      <Link
                        to={`/order`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Order Books
                      </Link>
                    </div>
                    <div>
                      <a
                        href="https://open.upress.virginia.edu/"
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Open Access
                      </a>
                    </div>
                  </div>
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-sans text-xl text-white ">
                      For Authors
                    </h3>
                    <div>
                      <Link
                        to={`/prospective`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300 mr-4"
                      >
                        Prospective Authors
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/authors`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300 mr-4"
                      >
                        Current Authors
                      </Link>
                    </div>
                  </div>
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-sans text-xl text-white ">
                      For Instructors
                    </h3>
                    <div>
                      <Link
                        to={`/instructors`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Instructor Resource Hub
                      </Link>
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdM83xFI63YLUWkuv7zEko9cMBD-9csrbizC_VH7U7Mmmr5sg/viewform"
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Desk/Exam Copy requests
                      </a>
                    </div>
                    <div>
                      <Link
                        to={`/books/#series`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Titles by Series
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#subjects`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Title by Subject
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/rotunda`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Rotunda Digital Collections
                      </Link>
                    </div>
                    <div>
                      <a
                        href="https://open.upress.virginia.edu/"
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Open Access Resources
                      </a>
                    </div>
                  </div>
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <h3 className="text-xl text-white text-bold mb-2">
                      Rotunda Digital
                    </h3>
                    <div>
                      <Link
                        to={`/rotunda`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        About Rotunda
                      </Link>
                    </div>
                    <div>
                      <a
                        href={`https://rotunda.upress.virginia.edu/entrance.xqy`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Customer Entrance
                      </a>
                    </div>
                    <div>
                      <Link
                        to={`/series/ADHC/`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        American Documentary History Collection
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/series/LCC`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Literature & Culture Collection
                      </Link>
                    </div>
                  </div>
                </div>
                <label id="close-small-menu" htmlFor="toggle-one">
                  <span className="uppercase block text-sm text-gray-300 float-right">Close X</span>
                </label>
              </div>
              
            </div>
          </div>
        </div>
      </nav>

      <nav
        aria-label="Main navigation"
        className="hidden md:block font-sans text-ceci-gray-mid font-thin uppercase border-b-2 flex flex-row justify-center place-content-center z-40 tracking-wide"
      >
        <div className="flex flex-row justify-center place-content-center lg:text-lg">
          <div className="flex">
            <div className="flex items-center  mb-4 md:mb-0">
              <div className="block">
                <Link to={`/`}>
                  {" "}
                  <GatsbyImage image={uvap} alt="University of Virginia Press - Home" />{" "}
                </Link>
              </div>
            </div>
            <div className="toggleable">
              <input
                type="checkbox"
                value="selected"
                id="toggle-big"
                aria-labelledby="bigmenu close-menu"
                className="toggle-input"
              />

              <div className="space-x-7 flex text-ceci-gray-mid font-thin tracking-wide items-center justify-center place-content-center py-3">
                {/* <a className="hover:text-ceci-gray-dark md:ml-5" href="/">Home</a> */}
                <label id="bigmenu" htmlFor="toggle-big" className="flex flex-row gap-4">
                  <span className="hover:text-ceci-gray-dark md:ml-5">About</span>
                
        
                  <span className="hover:text-ceci-gray-dark">Titles</span>
               
               
                  <span className="hover:text-ceci-gray-dark">For Authors</span>
             
                  <span className="hover:text-ceci-gray-dark">For Instructors</span>
              
               
                  <span className="hover:text-ceci-gray-dark">Rotunda Digital</span>
                </label>
                <a className="font-semibold text-orange-500 hover:text-orange-600 md:ml-5" href="/support">
                  Give
                </a>

                <a href="https://www.facebook.com/uvapress" aria-label="Facebook">
                  <FaFacebook
                    aria-hidden="true"
                    className="hover:text-ceci-gray-dark text-ceci-gray-mid"
                  />
                </a>
                <a
              href="https://bsky.app/profile/uvapress.bsky.social"
              aria-label="Bluesky"
              className="pr-2"
            >
              <FaBluesky aria-hidden="true"
                    className="hover:text-ceci-gray-dark text-ceci-gray-mid" />
            </a>
                <a href="https://twitter.com/uvapress" aria-label="X (formerly Twitter)">
                  <FaXTwitter
                    aria-hidden="true"
                    className="hover:text-ceci-gray-dark text-ceci-gray-mid"
                  />
                </a>
                <a href="https://www.instagram.com/uvapress" aria-label="Instagram">
                  <FaInstagram
                    aria-hidden="true"
                    className="hover:text-ceci-gray-dark text-ceci-gray-mid"
                  />
                </a>
                <Link to={`/book-search`} aria-label="Search">
                  {" "}
                  <FaMagnifyingGlass
                    aria-hidden="true"
                    className="hover:text-ceci-gray-dark text-ceci-gray-mid"
                  />
                </Link>
              </div>

              <div
                className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-ceci-gray-dark"
              >
                <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="text-xl text-white text-bold mb-2">
                      About
                    </h3>
                    <div>
                      <Link
                        to={`/about`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        About UVa Press
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/publicity`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Latest News and Events
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/staff-list`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Contact US
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/permissions`}
                        className="uppercase block text-lg   text-gray-400 hover:text-gray-300 mr-4"
                      >
                        Rights and Permissions
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/career`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Career & Internships
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/support`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Support UVa Press
                      </Link>
                    </div>
                  </div>
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className=" text-xl text-white font-sans mb-2">
                      All Products
                    </h3>
                  
                    <div>
                      <Link
                        to={`/book-search`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Search
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#AZ`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Browse A-Z
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/recent-books`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        New Releases
                      </Link>
                    </div>
                    
                    <div>
                      <Link
                        to={`/books/#series`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Browse by Series
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#subjects`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Browse by Subject
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#awardwinners`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Award Winners
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/catalog`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Seasonal Catalog
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/exhibits`}
                        className="uppercase block text-lg  text-gray-400 hover:text-gray-300"
                      >
                        Conference Exhibits
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/publicity#review`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Review Copy Requests
                      </Link>
                    </div>
                    
                    <div>
                      <Link
                        to={`/order`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Order Books
                      </Link>
                    </div>
                    <div>
                      <a
                        href="https://open.upress.virginia.edu/"
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Open Access
                      </a>
                    </div>
                  </div>
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-sans text-xl text-white ">
                      For Authors
                    </h3>
                    <div>
                      <Link
                        to={`/prospective`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300 mr-4"
                      >
                        Prospective Authors
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/authors`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300 mr-4"
                      >
                        Current Authors
                      </Link>
                    </div>
                  </div>
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-sans text-xl text-white ">
                      For Instructors
                    </h3>
                    <div>
                      <Link
                        to={`/instructors`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Instructor Resource Hub
                      </Link>
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdM83xFI63YLUWkuv7zEko9cMBD-9csrbizC_VH7U7Mmmr5sg/viewform"

                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Desk/Exam Copy requests
                      </a>
                    </div>
                    <div>
                      <Link
                        to={`/books/#series`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Browse by Series
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#subjects`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Browse by Subject
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/rotunda`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Rotunda Digital Collections
                      </Link>
                    </div>
                    <div>
                      <a
                        href="https://open.upress.virginia.edu/"
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Open Access Resources
                      </a>
                    </div>
                  </div>
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <h3 className="text-xl text-white text-bold mb-2">
                      Rotunda Digital
                    </h3>
                    <div>
                      <Link
                        to={`/rotunda`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        About Rotunda
                      </Link>
                    </div>
                    <div>
                      <a
                        href={`https://rotunda.upress.virginia.edu/entrance.xqy`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Customer Entrance
                      </a>
                    </div>
                    <div>
                      <Link
                        to={`/series/ADHC`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        American Documentary History Collection
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/series/LCC/`}
                        className="uppercase block text-lg text-gray-400 hover:text-gray-300"
                      >
                        Literature & Culture Collection
                      </Link>
                    </div>
                  
                  </div>
                </div>
                <label id="close-menu" htmlFor="toggle-big">
                  <span className="uppercase block text-sm text-gray-400 hover:text-gray-300 float-right">Close X</span>
               </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default MegaHeader
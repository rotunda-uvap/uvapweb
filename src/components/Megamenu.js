import React from "react"
import {
  FaSearch,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"
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
        id="mobile menu"
        className="md:hidden border-b-2 flex flex-row  z-40 tracking-wide"
      >
        <div className="flex flex-row w-screen">
          <nav className="flex">
            <div className="block text-ceci-gray-dark w-64 py-3">
              <Link to={`/`}>
                {" "}
                <GatsbyImage image={uvap} alt="uva press logo" />{" "}
              </Link>
            </div>
            <div className="toggleable">
              <input
                type="checkbox"
                value="selected"
                id="toggle-one"
                className="toggle-input"
              />

              <div className="py-6 absolute right-4">
                <label htmlFor="toggle-one">
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
                role="button"
                className="p-3 mega-menu mb-16 sm:mb-0 shadow-xl bg-ceci-gray-dark"
              >
                <div className="w-full flex flex-wrap justify-between mx-2 text-gray-400  font-sans font-thin uppercase">
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-bold text-xl text-white text-bold mb-2">
                      About
                    </h3>
                    <div>
                      <Link
                        to={`/about`}
                        className="uppercase block text-lg  hover:text-gray-300"
                      >
                        About UVA Press
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/publicity`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Latest News and Events
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/staff-list`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Contact US
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/permissions`}
                        className="uppercase block text-lg   hover:text-gray-300 mr-4"
                      >
                        Rights and Permissions
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/career`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Career & Internships
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/support`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Support UVa Press
                      </Link>
                    </div>
                  </div>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className=" text-xl text-white font-sans mb-2">
                      Books
                    </h3>
                   
                    <div>
                      <Link
                        to={`/book-search`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Search Books
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Browse All
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/recent-books`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        New Releases
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/catalog`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Seasonal Catalog
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/exhibits`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Conference Exhibits
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#series`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Our Book Series
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#subjects`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Our Book Subjects
                      </Link>
                    </div>

                    <div>
                      <Link
                        to={`/publicity#review`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Review Copy Requests
                      </Link>
                    </div>
                    
                    <div>
                      <Link
                        to={`/order`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Vendor Ordering
                      </Link>
                    </div>
                    <div>
                      <a
                        href="https://open.upress.virginia.edu/"
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Open Access
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-sans text-xl text-white ">
                      For Authors
                    </h3>
                    <div>
                      <Link
                        to={`/prospective`}
                        className="uppercase block text-lg hover:text-gray-300 mr-4"
                      >
                        Prospective Authors
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/authors`}
                        className="uppercase block text-lg hover:text-gray-300 mr-4"
                      >
                        Current Authors
                      </Link>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-sans text-xl text-white ">
                      For Instructors
                    </h3>
                    <div>
                      <Link
                        to={`/instructors`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Instructor Resource Hub
                      </Link>
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdM83xFI63YLUWkuv7zEko9cMBD-9csrbizC_VH7U7Mmmr5sg/viewform"
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Desk/Exam Copy requests
                      </a>
                    </div>
                    <div>
                      <Link
                        to={`/books/#series`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Our Book Series
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#subjects`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Our Book Subjects
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/rotunda`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Rotunda Digital Collections
                      </Link>
                    </div>
                    <div>
                      <a
                        href="https://open.upress.virginia.edu/"
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Open Access Resources
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-bold text-xl text-white text-bold mb-2">
                      Rotunda Digital
                    </h3>
                    <div>
                      <Link
                        to={`/rotunda`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        About Rotunda
                      </Link>
                    </div>
                    <div>
                      <a
                        href={`https://rotunda.upress.virginia.edu/entrance.xqy`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Collection Entrance
                      </a>
                    </div>
                    <div>
                      <Link
                        to={`/collection/American%20History%20Collection`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        American History Collection
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/collection/Literature%20and%20Culture%20Collection`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Literature & Culture Collection
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/collection/Architecture`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Architecture
                      </Link>
                    </div>
                  </ul>
                </div>
                <label htmlFor="toggle-one">
                  <span className="uppercase block text-xs text-gray-300 float-right">Close X</span>
                </label>
              </div>
              
            </div>
          </nav>
        </div>
      </nav>

      <nav
        className="hidden md:block font-sans text-ceci-gray-mid font-thin uppercase border-b-2 flex flex-row justify-center place-content-center z-40 tracking-wide"
      >
        <div className="flex flex-row justify-center place-content-center lg:text-lg">
          <nav className="flex">
            <div className="flex items-center  mb-4 md:mb-0">
              <div className="block">
                <Link to={`/`}>
                  {" "}
                  <GatsbyImage image={uvap} alt="uva press logo" />{" "}
                </Link>
              </div>
            </div>
            <div className="toggleable">
              <input
                type="checkbox"
                value="selected"
                id="toggle-big"
                className="toggle-input"
              />

              <div className="space-x-7 flex text-ceci-gray-mid font-thin tracking-wide items-center justify-center place-content-center py-3">
                {/* <a className="hover:text-ceci-gray-dark md:ml-5" href="/">Home</a> */}
                <label htmlFor="toggle-big">
                  <span className="hover:text-ceci-gray-dark md:ml-5">About</span>
                </label>
                <label htmlFor="toggle-big">
                  <span className="hover:text-ceci-gray-dark">Books</span>
                </label>
                <label htmlFor="toggle-big">
                  <span className="hover:text-ceci-gray-dark">For Authors</span>
                </label>
                <label htmlFor="toggle-big">
                  <span className="hover:text-ceci-gray-dark">For Instructors</span>
                </label>
                <label htmlFor="toggle-big">
                  <span className="hover:text-ceci-gray-dark">Rotunda Digital</span>
                </label>
                <a className="hover:text-ceci-gray-dark md:ml-5" href="/support">
                  Give
                </a>

                <a href="https://www.facebook.com/uvapress">
                  <FaFacebookSquare
                    aria-label="facebook button"
                    className="hover:text-ceci-gray-dark text-ceci-gray-mid"
                  />
                </a>
                <a href="https://twitter.com/uvapress">
                  <FaTwitterSquare
                    aria-label="twitter button"
                    className="hover:text-ceci-gray-dark text-ceci-gray-mid"
                  />
                </a>
                <a href="https://www.instagram.com/uvapress">
                  <FaInstagramSquare
                    aria-label="insta button"
                    className="hover:text-ceci-gray-dark text-ceci-gray-mid"
                  />
                </a>
                <Link to={`/book-search`}>
                  {" "}
                  <FaSearch
                    aria-label="search button"
                    className="hover:text-ceci-gray-dark text-ceci-gray-mid"
                  />
                </Link>
              </div>

              <div
                role="button"
                className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-ceci-gray-dark"
              >
                <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                  <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-bold text-xl text-white text-bold mb-2">
                      About
                    </h3>
                    <div>
                      <Link
                        to={`/about`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        About UVa Press
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/publicity`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Latest News and Events
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/staff-list`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Contact US
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/permissions`}
                        className="uppercase block text-lg   hover:text-gray-300 mr-4"
                      >
                        Rights and Permissions
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/career`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Career & Internships
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/support`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Support UVa Press
                      </Link>
                    </div>
                  </div>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className=" text-xl text-white font-sans mb-2">
                      Books
                    </h3>
                  
                    <div>
                      <Link
                        to={`/book-search`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Search Books
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Browse All
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/recent-books`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        New Releases
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/catalog`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Seasonal Catalog
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/exhibits`}
                        className="uppercase block text-lg  hover:text-gray-300"
                      >
                        Conference Exhibits
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#series`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Our Book Series
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#subjects`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Our Book Subjects
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/publicity#review`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Review Copy Requests
                      </Link>
                    </div>
                    
                    <div>
                      <Link
                        to={`/order`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Vendor Ordering
                      </Link>
                    </div>
                    <div>
                      <a
                        href="https://open.upress.virginia.edu/"
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Open Access
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-sans text-xl text-white ">
                      For Authors
                    </h3>
                    <div>
                      <Link
                        to={`/prospective`}
                        className="uppercase block text-lg hover:text-gray-300 mr-4"
                      >
                        Prospective Authors
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/authors`}
                        className="uppercase block text-lg hover:text-gray-300 mr-4"
                      >
                        Current Authors
                      </Link>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-sans text-xl text-white ">
                      For Instructors
                    </h3>
                    <div>
                      <Link
                        to={`/instructors`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Instructor Resource Hub
                      </Link>
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdM83xFI63YLUWkuv7zEko9cMBD-9csrbizC_VH7U7Mmmr5sg/viewform"

                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Desk/Exam Copy requests
                      </a>
                    </div>
                    <div>
                      <Link
                        to={`/books/#series`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Our Book Series
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/books/#subjects`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Our Book Subjects
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/rotunda`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Rotunda Digital Collections
                      </Link>
                    </div>
                    <div>
                      <a
                        href="https://open.upress.virginia.edu/"
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Open Access Resources
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <h3 className="font-bold text-xl text-white text-bold mb-2">
                      Rotunda Digital
                    </h3>
                    <div>
                      <Link
                        to={`/rotunda`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        About Rotunda
                      </Link>
                    </div>
                    <div>
                      <a
                        href={`https://rotunda.upress.virginia.edu/entrance.xqy`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Collection Entrance
                      </a>
                    </div>
                    <div>
                      <Link
                        to={`/collection/American%20History%20Collection`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        American History Collection
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/collection/Literature%20and%20Culture%20Collection`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Literature & Culture Collection
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={`/collection/Architecture`}
                        className="uppercase block text-lg hover:text-gray-300"
                      >
                        Architecture
                      </Link>
                    </div>
                  </ul>
                </div>
                <label htmlFor="toggle-big">
                  <span className="uppercase block text-xs hover:text-gray-300 float-right">Close X</span>
                </label>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  )
}

export default MegaHeader
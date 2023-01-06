import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  FaPhone,
  FaMapMarkedAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import FooterLink from "./FooterLink"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      uvalogo: file(relativePath: { eq: "rev_uva_logo_color.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      auplogo: file(relativePath: { eq: "aup_member.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      bstack: file(relativePath: { eq: "book-stack.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 75
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)
  const uvaimage = getImage(data.uvalogo)
  const aupimage = getImage(data.auplogo)
  const bookstack = getImage(data.bstack)
  return (
  <>
      <div className="flex flex-col md:flex-row border-t-2 border-b-2 text-ceci-gray-mid p-4 gap-2">
        <section className="text-sm flex flex-col gap-2 md:gap-0 basis-1/4 border-b-2 md:border-b-0">
          <h6 className="hidden">QuickLinks</h6>
          <FooterLink dest={"book-search"} text="Find a Book" />
          <FooterLink dest={"authors"} text={"For Our Authors"} />
          <FooterLink dest={"permissions"} text={"Rights and Permissions"} />
          <FooterLink dest={"rotunda"} text={"Rotunda Digital Imprint"} />
          <FooterLink dest={"support"} text={"Support UVA Press"} />
          <FooterLink dest={"career"} text={"Career Opportunities"} />
          <FooterLink
            dest={"walker-cowen-award"}
            text={"Walker Cowen Memorial Prize"}
          />
          <FooterLink dest={"privacy"} text={"Privacy Policy"} />
          <div className="flex flex-row py-2">
            <a
              href="https://www.facebook.com/uvapress"
              aria-label="facebook"
              className="pr-2"
            >
              <FaFacebookSquare className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/uvapress"
              aria-label="twitter"
              className="pr-2"
            >
              <FaTwitterSquare className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/uvapress"
              aria-label="instagram"
              className="pr-2"
            >
              <FaInstagramSquare className="text-3xl" />
            </a>
          </div>
        </section>
        <section className="flex flex-col basis-1/4 border-b-2 md:border-b-0">
          <h6 className="hidden">Contact Us</h6>
          <div id="address" className="flex flex-row py-2">
            <FaMapMarkedAlt
              className="hidden md:block self-center justify-self-center text-2xl"
              aria-label="physical address"
            />
            <ul className="text-sm font-thin tracking-wide flex flex-col md:pl-3">
              <li>P.O. Box 400318 (Postal)</li>
              <li>Charlottesville, VA 22904-4318</li>
              <li>210 Sprigg Lane (Courier)</li>
              <li>Charlottesville, VA 22903-2417</li>
            </ul>
          </div>
          <div id="phone" className="flex flex-row py-2">
            <FaPhone
              className="hidden md:block self-center justify-self-center text-2xl"
              aria-label="phone and fax numbers"
            />
            <ul className="text-sm md:pl-3 flex flex-col font-thin tracking-wide">
              <li>434 924-3468 (main)</li>
              <li>1-800-831-3406 (toll-free)</li>
              <li>434 982-2655 (fax)</li>
            </ul>
          </div>
          <div id="email" className="flex flex-row py-2 font-thin">
            <FaEnvelope
              className="hidden md:block self-center justify-self-center text-2xl"
              aria-label="email"
            />
            <ul className="text-sm flex flex-col font-thin tracking-wide md:pl-3 gap-2 md:gap-0">
                <li><a href="mailto:vapress@virginia.edu" className="py-4 md:py-1">General Inquiries</a></li>
                <li><Link to={"/staff-list"} className="py-4 md:py-3">Staff Directory</Link></li>
            </ul>
          </div>
        </section>
        <section className="basis-1/4 border-b-2 md:border-b-0">
          <Link to={`/support`} className="hover:text-gray-300">
            <div className="flex flex-col md:place-items-center">
              <div><GatsbyImage image={bookstack} alt="support uva press" width={50} /></div>
              <div className="uppercase font-thin py-2 tracking-wide text-xl">
                Be a part of
                <br /> the future
                <br /> of publishing
              </div>
              <div className="uppercase text-xl tracking-wide font-bold py-4">
                {" "}
                Support UVA Press
              </div>
            </div>
          </Link>
        </section>
        <section className="flex flex-col basis-1/4 gap-4 grow-0">
          <h6 className="hidden">Affiliates</h6>
          <a href="http://www.virginia.edu/" >
            {" "}
            <GatsbyImage image={uvaimage} alt="uva logo" />{" "}
          </a>
          <a href="http://www.aupresses.org">
            {" "}
            <GatsbyImage image={aupimage} alt="aup member"/>{" "}
          </a>
        </section>
      </div>

      <div className="text-center w-full uppercase text-ceci-gray-mid text-md font-thin tracking-wider py-2">
        © {new Date().getFullYear()} UNIVERSITY OF VIRGINIA PRESS
      </div>
  </>
  )
}

export default Footer

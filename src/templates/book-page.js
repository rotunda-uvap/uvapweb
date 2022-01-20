import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BookHorizontalTabs from "../components/BookHorizontalTabs"
import SeO from "../components/SeoComponent"
import ShareButtons from "../components/ShareButtons"

const bookPage = ({ data }) => {
  const book = data.booksJson
  // const imageData = getImage(data.file)
  const isbn = book.Bindings[0].ISBN
  const GoogleB = "https://books.google.com/books?vid=" + isbn
  const resources = data.markdownRemark
  const title = book.Title
  const url = "https://www.upress.virginia.edu/title/" + book.BookID
  const news = data.newsMD
  const noimg_big = "https://ik.imagekit.io/uvapress/noimg_lg.png"
  const noimg_sm = "https://ik.imagekit.io/uvapress/noimg.png"
  const imglink =
    "https://ik.imagekit.io/uvapress/" +
    book.BookID +
    ".jpg"
  const imglink_sm =
    "https://ik.imagekit.io/uvapress/mediums/" +
    book.BookID +
    "_M.jpg"
  const defaultImage = "/static/uvap_sm.png"
  return (
    <Layout>
      <SeO
        title={book.Title}
        description={book.MainDescription.html.substring(0, 150)}
        pathname={url}
        author={book.AuthorCredit}
        isbn={isbn}
        cover={
          "https://ik.imagekit.io/uvapress/" +
            book.CoverImageFull || defaultImage
        }
        article={false}
        book={true}
      />

      <div className="grid md:grid-cols-3 md:gap-10 py-3 ml-6 text-ceci-gray-dark ">
        <div className="col-span-1">
          {/* <GatsbyImage image={imageData} alt="book cover" /> */}
          { book.CoverImageFull ? <img className="hidden md:block" src={imglink} alt="cover" /> : <img className="hidden md:block" src={noimg_big} alt="cover" />}
           { book.CoverImageFull ? <img
            className="md:hidden text-center w-1/2 mx-auto"
            src={imglink_sm}
            alt="mobile cover"
          /> : 
          <img
            className="md:hidden text-center w-1/2 mx-auto"
            src={noimg_sm}
            alt="mobile cover"
          />  }

        </div>
        <div className="md:col-span-2 pr-5 md:px-10 text-ceci-gray-dark">
          <h4 className="hidden md:block pb-3 font-thin font-sans uppercase tracking-booped leading-none ">{book.Title}</h4>
          <h4 className="md:hidden pb-3 font-thin leading-relaxed uppercase tracking-booped font-sans">{book.Title}</h4>

          {book.InternalSeriesVolume && (
            <h6 className="py-3">{book.InternalSeriesVolume}</h6>
          )}

          {book.Subtitle && (
            <h6 className="italic font-thin text-ceci-gray-mid tracking-booped">{book.Subtitle}</h6>
          )}

          <h6 className="py-2 font-display">
            {book.AuthorCredit}
          </h6>

          {book.Bindings.map(binding => (
            <>
              <div className=" flex flex-row inline-flex items-center w-full leading-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-ceci-gray-mid"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <a
                  href={binding.buylink}
                  className="block group p-2 ml-4 border-b"
                >
                  <div className="font-thin uppercase text-ceci-gray-dark buyme ">
                    <span className="tracking-wide ">{binding.type}{" "}</span>
                    <span className="pl-2 font-thin">${binding.price}</span>{" "}
                  </div>
                  <div className="font-display text-sm">
                    {binding.date && binding.date} {binding.pages && <span>{binding.pages} pages</span> } {binding.ISBN && <span>ISBN: {binding.ISBN} </span>}
                  </div>
                </a>
              </div>
            </>
          ))}

          <div className="flex flex-row inline-flex items-center w-full leading-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-ceci-gray-mid"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <a
              href={`../../examination_Copy_Form_2021.pdf`}
              className="block group  p-2 ml-4 border-b"
            >
              <div className="font-thin uppercase text-ceci-gray-dark tracking-wide">Exam Copy </div>
              <div className="text-sm font-display ">
                For Instructors or Reviewers
              </div>
            </a>
          </div>
        

          <div className="flex flex-row inline-flex items-center w-full leading-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-ceci-gray-mid"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <a
                href="https://forms.gle/H8J1NbtN4BBZZwgy7"
                className="block group  p-2 mb-4 ml-4 border-b"
              >
                <div className="font-thin tracking-wide text-ceci-gray-dark uppercase ">
                  Desk Copy{" "}
                </div>
                <div className="text-sm font-display ">For Instructors</div>
              </a>
            </div>
            
                  {book.Series && (
                    <div className="py-2">
                      <span className="text-sm text-ceci-gray-mid uppercase pr-5 font-thin tracking-wide">
                        Series:
                      </span>
                      <button className="text-ceci-gray-mid font-thin text-sm hover:bg-white bg-greige rounded-md p-2 tracking-wide">
                        <Link to={`../../series/${book.Series.seriesID}`} className="tracking-wide uppercase">
                          {book.Series.name}
                        </Link>
                      </button>
                    </div>
                  )}
          
                  {book.Subject && (
                    <div>
                      <span className="text-sm font-thin uppercase pr-5 text-ceci-gray-mid tracking-wide">
                        subject:
                      </span>
                      <button className="bg-greige hover:bg-white font-thin text-sm rounded-md text-ceci-gray-mid p-2 tracking-wide">
                        <Link to={`../../subject/${book.Subject.subjectID}`} className="tracking-wide uppercase">
                          {book.Subject.name}
                        </Link>
                      </button>
                    </div>
                  )}
                 <section>
          {book.Prizes && (
            <div className="py-2 flex flex-row inline-flex items-center w-full leading-normal text-gray-700">
              <span className="text-sm uppercase pr-5 tracking-wider font-thin text-ceci-gray-mid">
                awards:
              </span>
              <p className="text-ceci-gray-mid tracking-wide font-thin text-sm p-2">{book.Prizes}</p>
            </div>
          )}
        </section>
        <section className="py-4 flex flex-row inline-flex space-x-6 items-center ">
          <div><a href={GoogleB}>
            <img src="/gbs_preview_sticker1.png" alt="view on google books" />
          </a></div>
          {/* <div className="pl-6">
          <ShareButtons title={title} url={url} /></div> */}
        </section>
      </div></div>
       <div className="container py-4">
       

        <section id="lg_horiz_tabs" className="hidden md:block">
          <BookHorizontalTabs
            summary={book.MainDescription.html}
            reviews={book.Reviews}
            bio={book.BioNote.html}
            add={resources}
            TOC={book.TableOfContents}
          />
        </section>

        <section id="sm_horiz_tabs" className="md:hidden">
          <BookHorizontalTabs
            summary={book.MainDescription.html}
            reviews={book.Reviews}
            bio={book.BioNote.html}
            add={resources}
            TOC={book.TableOfContents}
          />
        </section>

        {/* {resources && (
          <section className="py-3">
            <p className="font-black uppercase py-3 px-5 border-b-4 border-white hover:border-black">
              Additional Resources
            </p>
            {resources.frontmatter.attached_links && (
              <ul>
                {" "}
                {resources.frontmatter.attached_links.map(edge => (
                  <li className="p-2">
                    <a href={edge.link} target="_blank" rel="noreferrer">
                      {edge.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )} */}

{news && (
        <section className="py-3 ml-6 inline-flex items-center">
          <span className="text-xs uppercase pr-5 text-ceci-gray-dark tracking-wider">
            Related News:
          </span>

          <article className="flex flex-wrap items-center p-5  ">
          

            <div className="w-4/5 ml-5">
              <h3
                className="text-lg font-thin tracking-wide text-ceci-gray-dark text-left"
                key={news.frontmatter.title}
              >
                <Link to={`../../${news.frontmatter.type}${news.fields.slug}`}>
                  {news.frontmatter.title}
                </Link>
              </h3>
            </div>
          
          </article>
        </section>
      )}

        <section className="pt-4 ml-6">
          <ShareButtons title={title} url={url} />
        </section>
     

     

    </div>
   
    </Layout>
  )
}

export default bookPage

export const query = graphql`
  query ($id: String!, $imageid: String, $bid: String) {
    booksJson(id: { eq: $id }) {
      id
      BookID
      Title
      Subtitle
      CoverImageFull
      TableOfContents
      Prizes
      InternalSeriesVolume
      Bindings {
        type
        ISBN
        price
        pages
        date
        buylink
      }
      AuthorCredit
      Reviews {
        attribution
        html
      }
      ISBNs
      MainDescription {
        html
      }
      BioNote {
        html
      }
      Series {
        seriesID
        name
      }
      Subject {
        subjectID
        name
      }
    }
    file(relativePath: { eq: $imageid }) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          layout: CONSTRAINED
          placeholder: TRACED_SVG
        )
      }
    }
    markdownRemark(
      frontmatter: {
        templateKey: { eq: "resource" }
        attached_book: { eq: $bid }
      }
    ) {
      id
      frontmatter {
        attached_links {
          link
          name
        }
        attached_book
      }
    }
    newsMD: markdownRemark(
      frontmatter: {
        templateKey: { eq: "news" }
        related_book: { elemMatch: { jsonId: { eq: $bid } } }
      }
    ) {
      id
      frontmatter {
        title
        related_book {
          jsonId
        }
        type
      }
      fields {
        slug
      }
    }
  }
`

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"

export default function RotundaPurchasePage() {
  return (
    <Layout>
      <SeO title text-ceci-gray-mid tracking-wide font-thin="How to Purchase ROTUNDA Publications" />
      <PageHeader text={"Purchasing Rotunda Publications"} />
      <p className="font-light">
        If you are connecting via a campus Internet connection, you can expect
        to gain access to any Rotunda publication purchased by your institution.
        If your institution has not purchased a particular Rotunda publication,
        contact your institution’s library about ordering. You may also sign up
        for an individual{" "}
        <a href="https://rotunda.upress.virginia.edu/register/default.xqy">
          free trial
        </a>{" "}
        to evaluate Rotunda before making a purchase decision.
      </p>
      <p className="font-light">
        View a{" "}
        <Link to={"../rotunda-customer-list"}>list of Rotunda customers</Link>
      </p>
      <p className="font-light">
        Rotunda publications are available for purchase by libraries, schools,
        and individuals. To order, send the{" "}
        <Link to={"../rotunda_license.pdf"}>
          signed Rotunda license agreement
        </Link>{" "}
        and completed{" "}
        <Link to={"../rotunda_registration.pdf"}>registration form</Link> to
        Jason Coleman, University of Virginia Press, Rotunda, P.O. Box 400318,
        Charlottesville, VA 22904-4318.
      </p>
      <p className="font-light">
        Access will begin upon receipt of payment, in addition to a completed
        license agreement and the specific IP address access information. We
        accept payment by purchase order, check, VISA, or MasterCard.
      </p>
      
      <p className="font-light">
        (Please <a href="mailto:jcoleman@virginia.edu">contact us</a> for
        information on pricing for consortia and public libraries, details on
        annual maintenance fees, or any other questions about purchasing.)
      </p>

      <section>
        <SectionHeader text={"Architecture"}/>
        <table id="ARCH" className="mb-1 w-full">
          
          <tbody>
            <tr>
              <td className="italic text-center">
                <p>Beginning July 2019, <a href="https://sah-archipedia.org">SAH Archipedia</a> is now open access</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          (See <a href="#TIERS">below</a> for explanation of pricing tiers)
        </p>

        <SectionHeader text={"American History Collection"}/>
        <table className="pricing w-full" id="FGEA">
          
          <tbody>
            <tr className="heading">
              <th className="text-ceci-gray-dark font-thin">&nbsp;</th>
              <th className="text-ceci-gray-dark font-thin">TIER 6</th>
              <th className="text-ceci-gray-dark font-thin">TIER 5</th>
              <th className="text-ceci-gray-dark font-thin">TIER 4</th>
              <th className="text-ceci-gray-dark font-thin">TIER 3</th>
              <th className="text-ceci-gray-dark font-thin">TIER 2</th>
              <th className="text-ceci-gray-dark font-thin">TIER 1</th>
            </tr>
            <tr>
              <th colspan="7" className="py-4 font-thin text-ceci-gray-dark tracking-wide">
                American Founding Era
              </th>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/ADMS">
                  Adams Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$3,498</td>
              <td className="money text-ceci-gray-dark font-thin">$2,624</td>
              <td className="money text-ceci-gray-dark font-thin">$1,819</td>
              <td className="money text-ceci-gray-dark font-thin">$1,084</td>
              <td className="money text-ceci-gray-dark font-thin">$700</td>
              <td className="money text-ceci-gray-dark font-thin">$350</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/RNCN">
                  Documentary History of the Ratification of the Constitution
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$3,002</td>
              <td className="money text-ceci-gray-dark font-thin">$2,251</td>
              <td className="money text-ceci-gray-dark font-thin">$1,561</td>
              <td className="money text-ceci-gray-dark font-thin">$931</td>
              <td className="money text-ceci-gray-dark font-thin">$600</td>
              <td className="money text-ceci-gray-dark font-thin">$300</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/FFC">
                  Documentary History of the First Federal Congress
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$4,745</td>
              <td className="money text-ceci-gray-dark font-thin">$3,558</td>
              <td className="money text-ceci-gray-dark font-thin">$2,467</td>
              <td className="money text-ceci-gray-dark font-thin">$1,470</td>
              <td className="money text-ceci-gray-dark font-thin">$940</td>
              <td className="money text-ceci-gray-dark font-thin">$475</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/ARHN">
                  Hamilton Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$4,528</td>
              <td className="money text-ceci-gray-dark font-thin">$3,396</td>
              <td className="money text-ceci-gray-dark font-thin">$2,354</td>
              <td className="money text-ceci-gray-dark font-thin">$1,404</td>
              <td className="money text-ceci-gray-dark font-thin">$906</td>
              <td className="money text-ceci-gray-dark font-thin">$453</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/JNJY">
                  Jay Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$867</td>
              <td className="money text-ceci-gray-dark font-thin">$650</td>
              <td className="money text-ceci-gray-dark font-thin">$450</td>
              <td className="money text-ceci-gray-dark font-thin">$269</td>
              <td className="money text-ceci-gray-dark font-thin">$173</td>
              <td className="money text-ceci-gray-dark font-thin">$87</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/TSJN">
                  Jefferson Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$6,816</td>
              <td className="money text-ceci-gray-dark font-thin">$5,112</td>
              <td className="money text-ceci-gray-dark font-thin">$3,544</td>
              <td className="money text-ceci-gray-dark font-thin">$2,113</td>
              <td className="money text-ceci-gray-dark font-thin">$1,363</td>
              <td className="money text-ceci-gray-dark font-thin">$682</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/DMDE">
                  Dolley Madison Digital Edition
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$895</td>
              <td className="money text-ceci-gray-dark font-thin">$670</td>
              <td className="money text-ceci-gray-dark font-thin">$395</td>
              <td className="money text-ceci-gray-dark font-thin">$345</td>
              <td className="money text-ceci-gray-dark font-thin">$295</td>
              <td className="money text-ceci-gray-dark font-thin">$195</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/JMDE">
                  James Madison Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$4,552</td>
              <td className="money text-ceci-gray-dark font-thin">$3,414</td>
              <td className="money text-ceci-gray-dark font-thin">$2,367</td>
              <td className="money text-ceci-gray-dark font-thin">$1,411</td>
              <td className="money text-ceci-gray-dark font-thin">$910</td>
              <td className="money text-ceci-gray-dark font-thin">$455</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/JNML">
                  John Marshall Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$1,577</td>
              <td className="money text-ceci-gray-dark font-thin">$1,183</td>
              <td className="money text-ceci-gray-dark font-thin">$820</td>
              <td className="money text-ceci-gray-dark font-thin">$489</td>
              <td className="money text-ceci-gray-dark font-thin">$315</td>
              <td className="money text-ceci-gray-dark font-thin">$158</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/GRMS">
                  Gouverneur Morris Diaries
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$679</td>
              <td className="money text-ceci-gray-dark font-thin">$510</td>
              <td className="money text-ceci-gray-dark font-thin">$353</td>
              <td className="money text-ceci-gray-dark font-thin">$210</td>
              <td className="money text-ceci-gray-dark font-thin">$136</td>
              <td className="money text-ceci-gray-dark font-thin">$68</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/PFE">
                  People of the Founding Era
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$3,100</td>
              <td className="money text-ceci-gray-dark font-thin">$2,325</td>
              <td className="money text-ceci-gray-dark font-thin">$1,612</td>
              <td className="money text-ceci-gray-dark font-thin">$961</td>
              <td className="money text-ceci-gray-dark font-thin">$620</td>
              <td className="money text-ceci-gray-dark font-thin">$310</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/PKNYW">
                  Pinckney&ndash;Horry Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin py-2" colspan="6">
                <p><i>
                  Included with purchase of the Pinckney Statesmen Papers
                  (below)
                </i></p>
              </td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/PKNY">
                  Pinckney Statesmen Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$1,300</td>
              <td className="money text-ceci-gray-dark font-thin">$975</td>
              <td className="money text-ceci-gray-dark font-thin">$676</td>
              <td className="money text-ceci-gray-dark font-thin">$403</td>
              <td className="money text-ceci-gray-dark font-thin">$260</td>
              <td className="money text-ceci-gray-dark font-thin">$130</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/GEWN">
                  Washington Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$8,301</td>
              <td className="money text-ceci-gray-dark font-thin">$6,226</td>
              <td className="money text-ceci-gray-dark font-thin">$4,316</td>
              <td className="money text-ceci-gray-dark font-thin">$2,573</td>
              <td className="money text-ceci-gray-dark font-thin">$1,660</td>
              <td className="money text-ceci-gray-dark font-thin">$830</td>
            </tr>
            <tr>
              <th colspan="7" className="border-t-3 border-gray-400 py-4 font-thin text-ceci-gray-dark tracking-wide">
                Antebellum, Civil War, and Reconstruction
              </th>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/GRNT">
                  Grant Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$4,200</td>
              <td className="money text-ceci-gray-dark font-thin">$3,150</td>
              <td className="money text-ceci-gray-dark font-thin">$2,184</td>
              <td className="money text-ceci-gray-dark font-thin">$1,302</td>
              <td className="money text-ceci-gray-dark font-thin">$840</td>
              <td className="money text-ceci-gray-dark font-thin">$420</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/JKSN">
                  Andrew Jackson Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$1,329</td>
              <td className="money text-ceci-gray-dark font-thin">$997</td>
              <td className="money text-ceci-gray-dark font-thin">$691</td>
              <td className="money text-ceci-gray-dark font-thin">$412</td>
              <td className="money text-ceci-gray-dark font-thin">$266</td>
              <td className="money text-ceci-gray-dark font-thin">$133</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/AJHN">
                  Andrew Johnson Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$2,866</td>
              <td className="money text-ceci-gray-dark font-thin">$2,150</td>
              <td className="money text-ceci-gray-dark font-thin">$1,490</td>
              <td className="money text-ceci-gray-dark font-thin">$889</td>
              <td className="money text-ceci-gray-dark font-thin">$573</td>
              <td className="money text-ceci-gray-dark font-thin">$286</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/POLK">
                  Correspondence of James K. Polk
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$2,304</td>
              <td className="money text-ceci-gray-dark font-thin">$1,728</td>
              <td className="money text-ceci-gray-dark font-thin">$1,198</td>
              <td className="money text-ceci-gray-dark font-thin">$715</td>
              <td className="money text-ceci-gray-dark font-thin">$460</td>
              <td className="money text-ceci-gray-dark font-thin">$230</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/DWDE">
                  Webster Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$2,460</td>
              <td className="money text-ceci-gray-dark font-thin">$1,845</td>
              <td className="money text-ceci-gray-dark font-thin">$1,280</td>
              <td className="money text-ceci-gray-dark font-thin">$762</td>
              <td className="money text-ceci-gray-dark font-thin">$492</td>
              <td className="money text-ceci-gray-dark font-thin">$260</td>
            </tr>
            <tr>
              <th colspan="7" className="border-t-3 border-gray-400 py-4 font-thin text-ceci-gray-dark tracking-wide">
                American Century
              </th>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="http://prde.upress.virginia.edu/">
                  Presidential Recordings Digital Edition
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$3,697</td>
              <td className="money text-ceci-gray-dark font-thin">$2,773</td>
              <td className="money text-ceci-gray-dark font-thin">$1,922</td>
              <td className="money text-ceci-gray-dark font-thin">$1,146</td>
              <td className="money text-ceci-gray-dark font-thin">$739</td>
              <td className="money text-ceci-gray-dark font-thin">$370</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/BTWN">
                  Booker T. Washington Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$2,146</td>
              <td className="money text-ceci-gray-dark font-thin">$1,609</td>
              <td className="money text-ceci-gray-dark font-thin">$1,115</td>
              <td className="money text-ceci-gray-dark font-thin">$665</td>
              <td className="money text-ceci-gray-dark font-thin">$429</td>
              <td className="money text-ceci-gray-dark font-thin">$215</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/WILS">
                  Woodrow Wilson Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$10,500</td>
              <td className="money text-ceci-gray-dark font-thin">$7,875</td>
              <td className="money text-ceci-gray-dark font-thin">$5,460</td>
              <td className="money text-ceci-gray-dark font-thin">$3,255</td>
              <td className="money text-ceci-gray-dark font-thin">$2,100</td>
              <td className="money text-ceci-gray-dark font-thin">$1,050</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <p className="py-7 w-full" id="TIERS">
          Pricing tiers for the American History
          Collection are based on Carnegie classifications:
        </p>

        <table className="tiers text-ceci-gray-dark font-serif">
          <tbody>
            <tr>
              <td>
                <strong>Tier&nbsp;6:</strong>
              </td>
              <td>Research Universities (very high research activity)</td>
            </tr>
            <tr>
              <td>
                <strong>Tier&nbsp;5:</strong>
              </td>
              <td>
                Research Universities (high research activity);
                Doctoral/Research Universities; Master&rsquo;s L institutions
                (large programs)
              </td>
            </tr>
            <tr>
              <td>
                <strong>Tier&nbsp;4:</strong>
              </td>
              <td>
                Master&rsquo;s M and Master&rsquo;s S universities and colleges
                (medium and small programs); Special Focus institutions &ndash;
                Schools of Law; Baccalaureate &ndash; Arts &amp; Sciences
                colleges
              </td>
            </tr>
            <tr>
              <td>
                <strong>Tier&nbsp;3:</strong>
              </td>
              <td>
                Baccalaureate General colleges; Baccalaureate/Associates
                institutions; Research institutions with 50 or more FTE
                (full-time employees)
              </td>
            </tr>
            <tr>
              <td>
                <strong>Tier&nbsp;2:</strong>
              </td>
              <td>Associates institutions; Special Focus institutions</td>
            </tr>
            <tr>
              <td>
                <strong>Tier&nbsp;1:</strong>
              </td>
              <td>
                High schools; unaffiliated individuals; Research institutions
                &lt; 50 FTE
              </td>
            </tr>
          </tbody>
        </table>

        <p className="py-5">
          <strong>Discounts:</strong> Customers acquiring two or more titles in
          the American Founding Era collection will receive a discount of 10
          percent on total purchase price. Customers acquiring the{" "}
          <strong>complete collection</strong> will receive a discount of 20
          percent. Additional discounts are available for customers who have
          purchased the print edition corresponding to a title.
        </p>
        </section>
        <section>
          <SectionHeader text={"Literature and Culture Collection"} id="NCE"/>
        <table className="pricing w-full" id="NHCY">
          
          <tbody>
            <tr className="heading">
              <th className="text-ceci-gray-dark font-thin">&nbsp;</th>
              <th className="text-ceci-gray-dark font-thin">TIER 3</th>
              <th className="text-ceci-gray-dark font-thin">TIER 2</th>
              <th className="text-ceci-gray-dark font-thin">TIER 1</th>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
              &emsp;<a href="https://www.upress.virginia.edu/title/LMAD">
                  The Letters of Matthew Arnold
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$840</td>
              <td className="money text-ceci-gray-dark font-thin">$520</td>
              <td className="money text-ceci-gray-dark font-thin">$420</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
              &emsp;<a href="https://www.upress.virginia.edu/title/CLO">
                  <em>Clotel,</em> by William Wells Brown
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$545</td>
              <td className="money text-ceci-gray-dark font-thin">$375</td>
              <td className="money text-ceci-gray-dark font-thin">$275</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
              &emsp;<a href="https://www.upress.virginia.edu/title/EDKC">
                  Emily Dickinson&rsquo;s Correspondences
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$295</td>
              <td className="money text-ceci-gray-dark font-thin">$221</td>
              <td className="money text-ceci-gray-dark font-thin">$148</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
              &emsp;<a href="https://www.upress.virginia.edu/title/TDTM">
                  <em>The Digital Temple:</em> George Herbert&rsquo;s Verse
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$695</td>
              <td className="money text-ceci-gray-dark font-thin">$430</td>
              <td className="money text-ceci-gray-dark font-thin">
                $347&thinsp;/&thinsp;138<span className="fn">*</span>
              </td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
              &emsp;<a href="https://www.upress.virginia.edu/title/HMTY">
                  Herman Melville&rsquo;s <em>Typee</em>
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$545</td>
              <td className="money text-ceci-gray-dark font-thin">$375</td>
              <td className="money text-ceci-gray-dark font-thin">$275</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
              &emsp;<a href="https://www.upress.virginia.edu/title/CROS">
                  The Letters of Christina Rossetti
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$560</td>
              <td className="money text-ceci-gray-dark font-thin">$325</td>
              <td className="money text-ceci-gray-dark font-thin">$270</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-mid tracking-wide font-thin">
              &emsp;<a href="https://www.upress.virginia.edu/title/ESHR">
                  Journal of Emily Shore
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin item-center"><p className="italic">Open Access</p></td>
            </tr>
            <tr>
              <td colspan="4" className="border-t-1 border-black py-2">
                <p className="fn py-2">* $347 for institutions, $138
                for individual (password-access) <em>Digital Temple</em>{" "}
                purchasers</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  )
}

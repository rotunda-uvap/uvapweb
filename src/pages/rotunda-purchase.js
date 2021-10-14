import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"

export default function RotundaPurchasePage() {
  return (
    <Layout>
      <SeO title="How to Purchase ROTUNDA Publications" />
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
      <h6 clasName="py-5">Pricing</h6>
      <p className="font-light">
        (Please <a href="mailto:jcoleman@virginia.edu">contact us</a> for
        information on pricing for consortia and public libraries, details on
        annual maintenance fees, or any other questions about purchasing.)
      </p>

      <section>
        <table id="ARCH" className="mb-1">
          <caption>
            <a href="http://sah-archipedia.org/">SAH Archipedia</a>
          </caption>
          <tbody>
            <tr>
              <td className="italic">
                Beginning July 2019, SAH Archipedia is now open access
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          (See <a href="#TIERS">below</a> for explanation of pricing tiers)
        </p>
        <table className="pricing" id="FGEA">
          <caption id="AFE" className="py-5">
            American History Collection
          </caption>
          <tbody>
            <tr className="heading">
              <th>&nbsp;</th>
              <th>TIER 6</th>
              <th>TIER 5</th>
              <th>TIER 4</th>
              <th>TIER 3</th>
              <th>TIER 2</th>
              <th>TIER 1</th>
            </tr>
            <tr>
              <th colspan="7" className="py-2">
                American Founding Era
              </th>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/ADMS.html">
                  Adams Papers
                </a>
              </th>
              <td className="money">$3,498</td>
              <td className="money">$2,624</td>
              <td className="money">$1,819</td>
              <td className="money">$1,084</td>
              <td className="money">$700</td>
              <td className="money">$350</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/RNCN.html">
                  Documentary History of the Ratification of the Constitution
                </a>
              </th>
              <td className="money">$3,002</td>
              <td className="money">$2,251</td>
              <td className="money">$1,561</td>
              <td className="money">$931</td>
              <td className="money">$600</td>
              <td className="money">$300</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/FFCP.html">
                  Documentary History of the First Federal Congress
                </a>
              </th>
              <td className="money">$4,745</td>
              <td className="money">$3,558</td>
              <td className="money">$2,467</td>
              <td className="money">$1,470</td>
              <td className="money">$940</td>
              <td className="money">$475</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/ARHN.html">
                  Hamilton Papers
                </a>
              </th>
              <td className="money">$4,528</td>
              <td className="money">$3,396</td>
              <td className="money">$2,354</td>
              <td className="money">$1,404</td>
              <td className="money">$906</td>
              <td className="money">$453</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/JNJY.html">
                  Jay Papers
                </a>
              </th>
              <td className="money">$867</td>
              <td className="money">$650</td>
              <td className="money">$450</td>
              <td className="money">$269</td>
              <td className="money">$173</td>
              <td className="money">$87</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/TSJN.html">
                  Jefferson Papers
                </a>
              </th>
              <td className="money">$6,816</td>
              <td className="money">$5,112</td>
              <td className="money">$3,544</td>
              <td className="money">$2,113</td>
              <td className="money">$1,363</td>
              <td className="money">$682</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/dmde">
                  Dolley Madison Digital Edition
                </a>
              </th>
              <td className="money">$895</td>
              <td className="money">$670</td>
              <td className="money">$395</td>
              <td className="money">$345</td>
              <td className="money">$295</td>
              <td className="money">$195</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/JSMN.html">
                  James Madison Papers
                </a>
              </th>
              <td className="money">$4,552</td>
              <td className="money">$3,414</td>
              <td className="money">$2,367</td>
              <td className="money">$1,411</td>
              <td className="money">$910</td>
              <td className="money">$455</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/JNML.html">
                  John Marshall Papers
                </a>
              </th>
              <td className="money">$1,577</td>
              <td className="money">$1,183</td>
              <td className="money">$820</td>
              <td className="money">$489</td>
              <td className="money">$315</td>
              <td className="money">$158</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/GRMS.html">
                  Gouverneur Morris Diaries
                </a>
              </th>
              <td className="money">$679</td>
              <td className="money">$510</td>
              <td className="money">$353</td>
              <td className="money">$210</td>
              <td className="money">$136</td>
              <td className="money">$68</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://pfe.rotunda.upress.virginia.edu/">
                  People of the Founding Era
                </a>
              </th>
              <td className="money">$3,100</td>
              <td className="money">$2,325</td>
              <td className="money">$1,612</td>
              <td className="money">$961</td>
              <td className="money">$620</td>
              <td className="money">$310</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/PinckneyHorry">
                  Pinckney&ndash;Horry Papers
                </a>
              </th>
              <td className="money" colspan="6">
                <i>
                  Included with purchase of the Pinckney Statesmen Papers
                  (below)
                </i>
              </td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/PNKY.html">
                  Pinckney Statesmen Papers
                </a>
              </th>
              <td className="money">$1,300</td>
              <td className="money">$975</td>
              <td className="money">$676</td>
              <td className="money">$403</td>
              <td className="money">$260</td>
              <td className="money">$130</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/GEWN.html">
                  Washington Papers
                </a>
              </th>
              <td className="money">$8,301</td>
              <td className="money">$6,226</td>
              <td className="money">$4,316</td>
              <td className="money">$2,573</td>
              <td className="money">$1,660</td>
              <td className="money">$830</td>
            </tr>
            <tr>
              <th colspan="7" className="border-t-3 border-gray-400 py-2">
                Antebellum, Civil War, and Reconstruction
              </th>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/GRNT.html">
                  Grant Papers
                </a>
              </th>
              <td className="money">$4,200</td>
              <td className="money">$3,150</td>
              <td className="money">$2,184</td>
              <td className="money">$1,302</td>
              <td className="money">$840</td>
              <td className="money">$420</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/JKSN.html">
                  Andrew Jackson Papers
                </a>
              </th>
              <td className="money">$1,329</td>
              <td className="money">$997</td>
              <td className="money">$691</td>
              <td className="money">$412</td>
              <td className="money">$266</td>
              <td className="money">$133</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/AWJN.html">
                  Andrew Johnson Papers
                </a>
              </th>
              <td className="money">$2,866</td>
              <td className="money">$2,150</td>
              <td className="money">$1,490</td>
              <td className="money">$889</td>
              <td className="money">$573</td>
              <td className="money">$286</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="https://rotunda.upress.virginia.edu/founders/POLK.html">
                  Correspondence of James K. Polk
                </a>
              </th>
              <td className="money">$2,304</td>
              <td className="money">$1,728</td>
              <td className="money">$1,198</td>
              <td className="money">$715</td>
              <td className="money">$460</td>
              <td className="money">$230</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/WBST.html">
                  Webster Papers
                </a>
              </th>
              <td className="money">$2,460</td>
              <td className="money">$1,845</td>
              <td className="money">$1,280</td>
              <td className="money">$762</td>
              <td className="money">$492</td>
              <td className="money">$260</td>
            </tr>
            <tr>
              <th colspan="7" className="border-t-3 border-gray-400 py-2">
                American Century
              </th>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://prde.upress.virginia.edu/">
                  Presidential Recordings Digital Edition
                </a>
              </th>
              <td className="money">$3,697</td>
              <td className="money">$2,773</td>
              <td className="money">$1,922</td>
              <td className="money">$1,146</td>
              <td className="money">$739</td>
              <td className="money">$370</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/BTWN.html">
                  Booker T. Washington Papers
                </a>
              </th>
              <td className="money">$2,146</td>
              <td className="money">$1,609</td>
              <td className="money">$1,115</td>
              <td className="money">$665</td>
              <td className="money">$429</td>
              <td className="money">$215</td>
            </tr>
            <tr>
              <th className="title">
                &emsp;
                <a href="http://rotunda.upress.virginia.edu/founders/WILS.html">
                  Woodrow Wilson Papers
                </a>
              </th>
              <td className="money">$10,500</td>
              <td className="money">$7,875</td>
              <td className="money">$5,460</td>
              <td className="money">$3,255</td>
              <td className="money">$2,100</td>
              <td className="money">$1,050</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <p className="py-7" id="TIERS">
          Pricing tiers for <em>SAH Archipedia,</em> and the American History
          Collection are based on Carnegie classifications:
        </p>

        <table className="tiers">
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
        <table className="pricing" id="NHCY">
          <caption id="NCE">Literature and Culture Collection</caption>
          <tbody>
            <tr className="heading">
              <th>&nbsp;</th>
              <th>TIER 3</th>
              <th>TIER 2</th>
              <th>TIER 1</th>
            </tr>
            <tr>
              <th className="title">
                <a href="http://rotunda.upress.virginia.edu/arnold">
                  The Letters of Matthew Arnold
                </a>
              </th>
              <td className="money">$840</td>
              <td className="money">$520</td>
              <td className="money">$420</td>
            </tr>
            <tr>
              <th className="title">
                <a href="http://rotunda.upress.virginia.edu/clotel">
                  <em>Clotel,</em> by William Wells Brown
                </a>
              </th>
              <td className="money">$545</td>
              <td className="money">$375</td>
              <td className="money">$275</td>
            </tr>
            <tr>
              <th className="title">
                <a href="http://rotunda.upress.virginia.edu/edc">
                  Emily Dickinson&rsquo;s Correspondences
                </a>
              </th>
              <td className="money">$295</td>
              <td className="money">$221</td>
              <td className="money">$148</td>
            </tr>
            <tr>
              <th className="title">
                <a href="http://digitaltemple.rotunda.upress.virginia.edu/">
                  <em>The Digital Temple:</em> George Herbert&rsquo;s Verse
                </a>
              </th>
              <td className="money">$695</td>
              <td className="money">$430</td>
              <td className="money">
                $347&thinsp;/&thinsp;138<span className="fn">*</span>
              </td>
            </tr>
            <tr>
              <th className="title">
                <a href="http://rotunda.upress.virginia.edu/melville">
                  Herman Melville&rsquo;s <em>Typee</em>
                </a>
              </th>
              <td className="money">$545</td>
              <td className="money">$375</td>
              <td className="money">$275</td>
            </tr>
            <tr>
              <th className="title">
                <a href="http://rotunda.upress.virginia.edu/crossetti">
                  The Letters of Christina Rossetti
                </a>
              </th>
              <td className="money">$560</td>
              <td className="money">$325</td>
              <td className="money">$270</td>
            </tr>
            <tr>
              <th className="title">
                <a href="http://rotunda.upress.virginia.edu/EmilyShore">
                  Journal of Emily Shore
                </a>
              </th>
              <td className="money">OPEN ACCESS as of April 2021</td>
            </tr>
            <tr>
              <td colspan="4" className="border-t-1 border-black;">
                <span className="fn py-2">*</span>$347 for institutions, $138
                for individual (password-access) <em>Digital Temple</em>{" "}
                purchasers
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  )
}

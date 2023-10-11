import React from "react"

import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import RotundaHeader from "../components/rotunda/RotundaHeader"
import styled from "@emotion/styled"

const Main = styled("main")`
--fs-100: clamp(0.84rem, calc(0.94rem + -0.13vw), 0.91rem);
--fs-200: clamp(1.09rem, calc(1.08rem + 0.06vw), 1.13rem);
--fs-300: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);
--fs-400: clamp(1.58rem, calc(1.41rem + 0.83vw), 2rem);
--fs-500: clamp(1.89rem, calc(1.59rem + 1.51vw), 2.67rem);
--fs-600: clamp(2.27rem, calc(1.77rem + 2.51vw), 3.55rem);
--fs-700: clamp(2.72rem, calc(1.94rem + 3.93vw), 4.74rem);
--fs-800: clamp(3.27rem, calc(2.08rem + 5.95vw), 6.31rem);
width: min(calc(100% - 2rem), 60rem);
margin:0 auto;
color:#414042; 
font-family: 'Assistant', sans;
letter-spacing:.05em;
padding:1em;
font-size: var(--fs-200);
`

const Heading2 = styled("h2")`
font-family: 'Playfair Display SC', serif;
letter-spacing:.3em;
font-weight:200;
color:#757575;
text-transform:uppercase;
text-align:center;
padding:1em 0;
font-size: var(--fs-400);
`


const Heading4 = styled("H4")` 
font-family: 'Playfair Display SC', serif;
letter-spacing:.3em;
font-weight:200;
color:#757575;
text-transform:uppercase;
text-align:center;
padding:.2em 0;
font-size: var(--fs-200);`

const Para = styled("p")`
font-family: 'Assistant', sans;
padding: 1em;
font-size: var(--fs-200);

`

export default function RotundaPurchasePage() {
  return (
    <Layout>
      <SeO title="How to Purchase ROTUNDA Publications" />
      <Main>
        <RotundaHeader/>
         <Heading2>Purchasing Rotunda Publications</Heading2>
      <Para className="font-light">
        If you are connecting via a campus Internet connection, you can expect
        to gain access to any Rotunda publication purchased by your institution.
        If your institution has not purchased a particular Rotunda publication,
        contact your institution’s library about ordering. You may also sign up
        for an individual{" "}
        <a href="https://rotunda.upress.virginia.edu/register/default.xqy">
          free trial
        </a>{" "}
        to evaluate Rotunda before making a purchase decision.
      </Para>
      <Para className="font-light">
        View a{" "}
        <a href={"../rotunda-customer-page/#customas"}>list of Rotunda customers</a>
      </Para>
      <Para className="font-light">
        Rotunda publications are available for purchase by libraries, schools,
        and individuals. To order, send the{" "}
        <a href={"../../rotunda_license.doc"}>
          signed Rotunda license agreement
        </a>{" "}
        and completed{" "}
        <a href={"../../rotunda_registration.doc"}>registration form</a> to
        Jason Coleman, University of Virginia Press, Rotunda, P.O. Box 400318,
        Charlottesville, VA 22904-4318. Pricing  inquiries may be addressed to <a href="mailto:jcoleman@virginia.edu">jcoleman@virginia.edu</a>.
      </Para>
      <Para className="font-light">
        Access will begin upon receipt of payment, in addition to a completed
        license agreement and the specific IP address access information. We
        accept payment by purchase order, check, VISA, or MasterCard.
      </Para>
      
      <Para className="font-light">
        (Please <a href="mailto:jcoleman@virginia.edu">contact us</a> for
        information on pricing for consortia and public libraries, details on
        annual maintenance fees, or any other questions about purchasing.)
      </Para>

      <section>
        <Heading4>Architecture</Heading4>
        <table id="ARCH" className="mb-1 w-full">
          
          <tbody>
            <tr>
              <td className="italic text-center">
                <Para>Beginning July 2019, <a href="https://sah-archipedia.org">SAH Archipedia</a> is now open access</Para>
              </td>
            </tr>
          </tbody>
        </table>
        <Para>
          (See <a href="#TIERS">below</a> for explanation of pricing tiers)
        </Para>
         
         <Heading4>American History Collection</Heading4>
        <table className="pricing w-full" id="FGEA">
          
          <tbody>
            <tr className="heading">
              <th className="text-ceci-gray-dark font-thin">&nbsp;</th>
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
            <tr id="adms">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/ADMS">
                  Adams Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$3,498</td>
              <td className="money text-ceci-gray-dark font-thin">$2,624</td>
              <td className="money text-ceci-gray-dark font-thin">$1,819</td>
              <td className="money text-ceci-gray-dark font-thin">$700</td>
            </tr>
            <tr id="rncn">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/RNCN">
                  Documentary History of the Ratification of the Constitution
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$3,002</td>
              <td className="money text-ceci-gray-dark font-thin">$2,251</td>
              <td className="money text-ceci-gray-dark font-thin">$1,561</td>
              <td className="money text-ceci-gray-dark font-thin">$600</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/FFC">
                  Documentary History of the First Federal Congress
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$4,745</td>
              <td className="money text-ceci-gray-dark font-thin">$3,558</td>
              <td className="money text-ceci-gray-dark font-thin">$2,467</td>
              <td className="money text-ceci-gray-dark font-thin">$940</td>
            </tr>
            <tr id="arhn">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/ARHN">
                  Hamilton Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$4,528</td>
              <td className="money text-ceci-gray-dark font-thin">$3,396</td>
              <td className="money text-ceci-gray-dark font-thin">$2,354</td>
              <td className="money text-ceci-gray-dark font-thin">$906</td>
            </tr>
            <tr id="jnjy">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/JNJY">
                  Jay Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$867</td>
              <td className="money text-ceci-gray-dark font-thin">$650</td>
              <td className="money text-ceci-gray-dark font-thin">$450</td>
              <td className="money text-ceci-gray-dark font-thin">$173</td>
            </tr>
            <tr id="tsjn">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/TSJN">
                  Jefferson Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$6,816</td>
              <td className="money text-ceci-gray-dark font-thin">$5,112</td>
              <td className="money text-ceci-gray-dark font-thin">$3,544</td>
              <td className="money text-ceci-gray-dark font-thin">$1,363</td>
            </tr>
            <tr id="dmde">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/DMDE">
                  Dolley Madison Digital Edition
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$895</td>
              <td className="money text-ceci-gray-dark font-thin">$670</td>
              <td className="money text-ceci-gray-dark font-thin">$395</td>
              <td className="money text-ceci-gray-dark font-thin">$295</td>
            </tr>
            <tr id="jmde">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/JMDE">
                  James Madison Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$4,552</td>
              <td className="money text-ceci-gray-dark font-thin">$3,414</td>
              <td className="money text-ceci-gray-dark font-thin">$2,367</td>
              <td className="money text-ceci-gray-dark font-thin">$910</td>
            </tr>
            <tr id="jnml">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/JNML">
                  John Marshall Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$1,577</td>
              <td className="money text-ceci-gray-dark font-thin">$1,183</td>
              <td className="money text-ceci-gray-dark font-thin">$820</td>
              <td className="money text-ceci-gray-dark font-thin">$315</td>
            </tr>
<tr id="monr">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/MONR">James Monroe Papers</a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$1,812</td>
              <td className="money text-ceci-gray-dark font-thin">$1,359</td>
              <td className="money text-ceci-gray-dark font-thin">$942</td>
              <td className="money text-ceci-gray-dark font-thin">$362</td>
            </tr>
            <tr id="grms">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/GRMS">
                  Gouverneur Morris Diaries
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$679</td>
              <td className="money text-ceci-gray-dark font-thin">$510</td>
              <td className="money text-ceci-gray-dark font-thin">$353</td>
              <td className="money text-ceci-gray-dark font-thin">$136</td>
            </tr>
            <tr id="pfe">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/PFE">
                  People of the Founding Era
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$3,100</td>
              <td className="money text-ceci-gray-dark font-thin">$2,325</td>
              <td className="money text-ceci-gray-dark font-thin">$1,612</td>
              <td className="money text-ceci-gray-dark font-thin">$620</td>
            </tr>
            <tr id="pknyw">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/PKNYW">
                  Pinckney&ndash;Horry Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin py-2" colspan="6">
                <Para><i>
                  Included with purchase of the Pinckney Statesmen Papers
                  (below)
                </i></Para>
              </td>
            </tr>
            <tr id="pkny">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/PKNY">
                  Pinckney Statesmen Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$1,300</td>
              <td className="money text-ceci-gray-dark font-thin">$975</td>
              <td className="money text-ceci-gray-dark font-thin">$676</td>
              <td className="money text-ceci-gray-dark font-thin">$260</td>
            </tr>
            <tr id="rush">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/RUSH">
                  Rush Letters
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$450</td>
              <td className="money text-ceci-gray-dark font-thin">$338</td>
              <td className="money text-ceci-gray-dark font-thin">$235</td>
              <td className="money text-ceci-gray-dark font-thin">$90</td>
            </tr>
            <tr id="gewn">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/GEWN">
                  Washington Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$8,301</td>
              <td className="money text-ceci-gray-dark font-thin">$6,226</td>
              <td className="money text-ceci-gray-dark font-thin">$4,316</td>
              <td className="money text-ceci-gray-dark font-thin">$1,660</td>
            </tr>
            <tr>
              <th colspan="7" className="border-t-3 border-gray-400 py-4 font-thin text-ceci-gray-dark tracking-wide">
                Antebellum, Civil War, and Reconstruction
              </th>
            </tr>
            <tr id="grnt">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/GRNT">
                  Grant Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$4,200</td>
              <td className="money text-ceci-gray-dark font-thin">$3,150</td>
              <td className="money text-ceci-gray-dark font-thin">$2,184</td>
              <td className="money text-ceci-gray-dark font-thin">$840</td>
            </tr>
            <tr id="jksn">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/JKSN">
                  Andrew Jackson Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$1,329</td>
              <td className="money text-ceci-gray-dark font-thin">$997</td>
              <td className="money text-ceci-gray-dark font-thin">$691</td>
              <td className="money text-ceci-gray-dark font-thin">$266</td>
            </tr>
            <tr id="ajhn">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/AJHN">
                  Andrew Johnson Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$2,866</td>
              <td className="money text-ceci-gray-dark font-thin">$2,150</td>
              <td className="money text-ceci-gray-dark font-thin">$1,490</td>
              <td className="money text-ceci-gray-dark font-thin">$573</td>
            </tr>
            <tr id="olms">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/OLMS">
                  Frederick Law Olmsted Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">Open Access</td>
            </tr>
            <tr id="polk">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/POLK">
                  Correspondence of James K. Polk
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$2,304</td>
              <td className="money text-ceci-gray-dark font-thin">$1,728</td>
              <td className="money text-ceci-gray-dark font-thin">$1,198</td>
              <td className="money text-ceci-gray-dark font-thin">$460</td>
            </tr>
            <tr id="webster">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/DWDE">
                 Daniel Webster Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$2,460</td>
              <td className="money text-ceci-gray-dark font-thin">$1,845</td>
              <td className="money text-ceci-gray-dark font-thin">$1,280</td>
              <td className="money text-ceci-gray-dark font-thin">$492</td>
            </tr>
            <tr>
              <th colspan="7" className="border-t-3 border-gray-400 py-4 font-thin text-ceci-gray-dark tracking-wide">
                American Century
              </th>
            </tr>
            <tr id="prde">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="http://prde.upress.virginia.edu/">
                  Presidential Recordings Digital Edition
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$3,697</td>
              <td className="money text-ceci-gray-dark font-thin">$2,773</td>
              <td className="money text-ceci-gray-dark font-thin">$1,922</td>
              <td className="money text-ceci-gray-dark font-thin">$739</td>
            </tr>
            <tr id="btwn">
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/BTWN">
                  Booker T. Washington Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$2,146</td>
              <td className="money text-ceci-gray-dark font-thin">$1,609</td>
              <td className="money text-ceci-gray-dark font-thin">$1,115</td>
              <td className="money text-ceci-gray-dark font-thin">$429</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-dark tracking-wide font-light">
                &emsp;
                <a href="https://www.upress.virginia.edu/title/WILS">
                  Woodrow Wilson Papers
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$10,500</td>
              <td className="money text-ceci-gray-dark font-thin">$7,875</td>
              <td className="money text-ceci-gray-dark font-thin">$5,460</td>
              <td className="money text-ceci-gray-dark font-thin">$2,100</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <Para className="py-7 w-full" id="TIERS">
          Pricing tiers for the American History
          Collection are based on Carnegie classifications:
        </Para>

       
        <table className="font-assistant text-ceci-gray-dark table-auto mx-4">
          <tbody>
            <tr className="bg-zinc-100">
              <td className="pr-4">
                <strong>Tier&nbsp;4:</strong>
              </td>
              <td className="py-4">Research Universities (very high research activity)</td>
            </tr>
            <tr>
              <td>
                <strong>Tier&nbsp;3:</strong>
              </td>
              <td  className="py-2">
                Research Universities (high research activity);
                Doctoral/Research Universities; Master&rsquo;s L institutions
                (large programs)
              </td>
            </tr>
            <tr className="bg-zinc-100">
              <td>
                <strong>Tier&nbsp;2:</strong>
              </td>
              <td  className="py-2">
                Master&rsquo;s M and Master&rsquo;s S universities and colleges
                (medium and small programs); Special Focus institutions &ndash;
                Schools of Law; Baccalaureate &ndash; Arts &amp; Sciences
                colleges
              </td>
            </tr>
            <tr>
              <td>
                <strong>Tier&nbsp;1:</strong>
              </td>
              <td  className="py-1">
                Baccalaureate General colleges; Baccalaureate/Associates
                institutions; Research institutions with 50 or more FTE
                (full-time employees). Also includes individual subscriptions.
              </td>
            </tr>
          </tbody>
        </table>

        <Para className="py-5">
          <strong>Discounts:</strong> Customers acquiring two or more titles in
          the American Founding Era collection will receive a discount of 10
          percent on total purchase price. Customers acquiring the{" "}
          <strong>complete collection</strong> will receive a discount of 20
          percent. Additional discounts are available for customers who have
          purchased the print edition corresponding to a title.
        </Para>
        </section>

        <section>
          <Heading4>Literature and Culture Collection</Heading4>
        <table className="pricing w-full" id="NHCY">
          
          <tbody>
            <tr className="heading">
              <th className="text-ceci-gray-dark font-thin">&nbsp;</th>
              <th className="text-ceci-gray-dark font-thin">TIER 3</th>
              <th className="text-ceci-gray-dark font-thin">TIER 2</th>
              <th className="text-ceci-gray-dark font-thin">TIER 1</th>
            </tr>
            <tr>
              <th className="title text-ceci-gray-dark tracking-wide font-light">
              &emsp;<a href="https://www.upress.virginia.edu/title/LMAD">
                  The Letters of Matthew Arnold
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$840</td>
              <td className="money text-ceci-gray-dark font-thin">$520</td>
              <td className="money text-ceci-gray-dark font-thin">$420</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-dark tracking-wide font-light">
              &emsp;<a href="https://www.upress.virginia.edu/title/CLO">
                  <em>Clotel,</em> by William Wells Brown
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$545</td>
              <td className="money text-ceci-gray-dark font-thin">$375</td>
              <td className="money text-ceci-gray-dark font-thin">$275</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-dark tracking-wide font-light">
              &emsp;<a href="https://www.upress.virginia.edu/title/EDKC">
                  Emily Dickinson&rsquo;s Correspondences
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$295</td>
              <td className="money text-ceci-gray-dark font-thin">$221</td>
              <td className="money text-ceci-gray-dark font-thin">$148</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-dark tracking-wide font-light">
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
              <th className="title text-ceci-gray-dark tracking-wide font-light">
              &emsp;<a href="https://www.upress.virginia.edu/title/HMTY">
                  Herman Melville&rsquo;s <em>Typee</em>
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$545</td>
              <td className="money text-ceci-gray-dark font-thin">$375</td>
              <td className="money text-ceci-gray-dark font-thin">$275</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-dark tracking-wide font-light">
              &emsp;<a href="https://www.upress.virginia.edu/title/CROS">
                  The Letters of Christina Rossetti
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin">$560</td>
              <td className="money text-ceci-gray-dark font-thin">$325</td>
              <td className="money text-ceci-gray-dark font-thin">$270</td>
            </tr>
            <tr>
              <th className="title text-ceci-gray-dark tracking-wide font-light">
              &emsp;<a href="https://www.upress.virginia.edu/title/ESHR">
                  Journal of Emily Shore
                </a>
              </th>
              <td className="money text-ceci-gray-dark font-thin item-center"><Para className="italic">Open Access</Para></td>
            </tr>
            <tr>
              <td colspan="4" className="border-t-1 border-black py-2">
                <Para className="fn py-2">* $347 for institutions, $138
                for individual (password-access) <em>Digital Temple</em>{" "}
                purchasers</Para>
              </td>
            </tr>
          </tbody>
        </table>
        <Para className="py-7 w-full" id="TIERS">
          Pricing tiers:
        </Para>
        <table className="font-assistant text-ceci-gray-dark table-auto mx-4">
          <tbody>
            <tr className="bg-zinc-100">
              <td className="pr-4">
                <strong>Tier&nbsp;3:</strong>
              </td>
              <td className="py-4">Doctoral research institutions, ARL-member public libraries</td>
            </tr>
            <tr>
              <td>
                <strong>Tier&nbsp;2:</strong>
              </td>
              <td  className="py-2">Master’s I and II institutions, Baccalaureate, and Bac/Assoc institutions
              </td>
            </tr>
            <tr className="bg-zinc-100">
              <td>
                <strong>Tier&nbsp;1:</strong>
              </td>
              <td  className="py-2">Associates institutions, high schools, individuals
              </td>
            </tr>
          
           
            
          </tbody>
        </table>
      
      </section></Main>
    </Layout>
  )
}

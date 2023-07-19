//PARTNER/WHITELABEL PAGE

import React from "react";
import vector from "../../Images/Vector.png";
import ellipse from "../../Images/Ellipse 5.png";
import screenshot1 from "../../Images/Screen Shot 2023-05-21 at 10.28 1.png";
import screenshot2 from "../../Images/Screen Shot 2023-05-21 at 10.28 2.png";

function PartnerPage(props) {
  return (
    <>
      <div className="partnerWMMTC">
        <h1 className="whyUseMMTCHeader1">Partner With MakeMyTestCount</h1>
        <p>
          Use this platform for all your at-home OTC test-reporting needs.<br/>
          There's no cost to you, whichever option you choose.
        </p>
      </div>

{/* ------------------------------------------------------------ */}

      <div className="partneringOptions">
        <h2>Partnering Options</h2>
        <p>
          It doesn’t have to be complicated. If your tech is limited, simply add
          a link <br/> 
          to MakeMyTestCount.org on your website. Want more? It's all free.
        </p>
        <table align="center">
          <tbody>
            <tr>
              <td className="partneringTd">
                <h3>Stand-Alone Site</h3>
                <p>
                  Let us create a MakeMyTestCount reporting page with your
                  organizations logo and custom URL.
                </p>
                <p>
                  <img
                    src={screenshot1}
                    alt="Stand-alone site sample screenshot"
                    width="500" height="312"
                  />
                </p>
                <p>We recommend this option if:</p>
                <ul className="partnerUl">
                  <li>
                    <p>
                      You don’t have the technical capability to install the
                      plug-in on your website.
                    </p>
                  </li>
                  <li>
                    <p>
                      You have a configurable website in which you can embed a
                      new link.
                    </p>
                  </li>
                  <li>
                    <p>You have a custom logo that you’d like to use.</p>
                  </li>
                </ul>
              </td>
              <td className="partneringTd">
                <h3>Modal Pop-Up</h3>
                <p>
                  Embed a MakeMyTestCount plug-in on your website with your
                  logo.
                </p>
                <p>
                  <img
                    src={screenshot2}
                    alt="Modal pop-up sample screenshot"
                    width="500" height="312"
                  />
                </p>
                <p>We recommend this option if:</p>
                <ul className="partnerUl">
                  <li>
                    <p>
                      You have the technical resources to install a JavaScript
                      plug-in.
                    </p>
                  </li>
                  <li>
                    <p>
                      You want the tool to be integrated into your existing
                      site.
                    </p>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="blueButton dissolveEffect">Get Started</button>
      </div>

{/* ------------------------------------------------------------ */}

      <div className="exploreTheTool">
        <h2>Explore the Tool</h2>
        <p>
          Want to know more about how reporting works --- and what a stand-alone
          site or modal pop-up looks like? Take a look.
        </p>
        <button className="blueButton dissolveEffect">Explore Site Demo</button>
      </div>

{/* ------------------------------------------------------------ */}

      <div className="whyUseMMTC">
        <h2>Why Use MakeMyTestCount?</h2>
        <p>
          It’s simple, secure, standardized, scalable, and cost- and effort-free
          to you.
        </p>
        <div className="whyUseMMTCList">
          <ul className="whyUseMMTCUl">
            <li>
              <img src={ellipse} alt="Bullet Point" />
              <div className="whyUseMMTCLi">
                <h3 className="whyUseMMTCHeader3">User-Friendly</h3>
                Accessible on any device from anywhere with internet access.
                Provides guidance and additional resources after testing.
              </div>
            </li>
            <li>
              <img src={ellipse} alt="Bullet Point" />
              <div className="whyUseMMTCLi">
              <h3 className="whyUseMMTCHeader3">Secure</h3>
              End-to-end secure collection and transmission of data through
              FISMA-compliant systems.
              </div>
            </li>
            <li>
              <img src={ellipse} alt="Bullet Point" />
              <div className="whyUseMMTCLi">
              <h3 className="whyUseMMTCHeader3">Standardized</h3>
              Data are coded and transmitted in a standard format used
              throughout the health care industry.
              </div>
            </li>
            <li>
              <img src={ellipse} alt="Bullet Point" />
              <div className="whyUseMMTCLi">
              <h3 className="whyUseMMTCHeader3">Seamless Integration</h3>
              Can be a stand-alone site or installed as a pop-up, giving the
              feel that it belongs to your organization.
              </div>
            </li>
            <li>
              <img src={ellipse} alt="Bullet Point" />
              <div className="whyUseMMTCLi">
              <h3 className="whyUseMMTCHeader3">Scalable</h3>
              Supports all over-the-counter COVID tests. Built on a solid IT
              backbone capable of handling a large volume of simultaneous data
              entry.
              </div>
            </li>
            <li>
              <img src={ellipse} alt="Bullet Point" />
              <div className="whyUseMMTCLi">
              <h3 className="whyUseMMTCHeader3">National and local</h3>
              Connects with the national data repository, HHS Protect. States
              and localities may choose to receive data into local systems for
              public health purposes.
              </div>
            </li>
          </ul>
        </div>
      </div>

{/* ------------------------------------------------------------ */}

      <div className="stillHaveQuestions">
        <img
          src="https://i.imgur.com/sUFH1Aq.png"
          alt="Still have questions?"
          width="40"
          height="40"
        />
        <h2>Still Have Questions?</h2>
        <p>
          We're here to help. Find out more about how you can install and use
          this free resource.
        </p>
        <button>Talk with us</button>
      </div>
    </>
  );
}

export default PartnerPage;
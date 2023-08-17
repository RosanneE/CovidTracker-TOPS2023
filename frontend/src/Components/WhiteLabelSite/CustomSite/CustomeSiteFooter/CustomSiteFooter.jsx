import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect, useContext } from 'react';
import whiteLogo from "../../../../Images/mmtc-logo-white.png";
import Nih from "../../../../Images/NIH.png";
import CareEv from "../../../../Images/CareEvolution.png";
import { FormContext } from "../../../../Context/FormContext";


function CustomeSiteFooter({ siteTheme }) {
  const [footerColor, setFooterColor] = useState('#1f304f');
  const [subFooterColor, setSubFooterColor] = useState('#E7F4F8')
  const [subFooterText, setSubFooterText] = useState('#00426B')
  const { newSite } = useContext(FormContext);

  useEffect(() => {
    function footerColorChange(siteTheme) {
      if (siteTheme === 'classic') {
        setFooterColor('#1f304f')
        setSubFooterColor('#E7F4F8')
        setSubFooterText('#00426B');
      }
      if (siteTheme === 'clean') {
        setFooterColor('#828282')
        setSubFooterColor('#F4F4F4')
        setSubFooterText('#32009B');
      }
      if (siteTheme === 'bright') {
        setFooterColor('#51CBFF')
        setSubFooterColor('#013D80')
        setSubFooterText('#FFFFFF');
      }
      if (siteTheme === 'deep') {
        setFooterColor('#9B3F60')
        setSubFooterColor('#E6E6E6')
        setSubFooterText('#333333');
      }
      if (siteTheme === 'natural') {
        setFooterColor('#465F49')
        setSubFooterColor('#ECECEC')
        setSubFooterText('#4C4C4C');
      }
    }
    footerColorChange(newSite.color_theme);
  }, [newSite.color_theme, setFooterColor]);

  return (
    <footer className="footerContainerCustom"
      style={{
        backgroundColor: footerColor,
        height: "auto",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '729px'
      }}

    >
      <div id="sub-footer" style={{ width: '728px', backgroundColor: subFooterColor, color: subFooterText }}>
        <p style={{ color: subFooterText }}>
          This site meets strict US government security standards to keep your
          data secure.
        </p>
      </div>
   
      <img src={whiteLogo} alt="whiteLogo" style={{ height: 22, width: 55, marginTop: "5px" }} />
      <p className='footer-text' style={{ color: 'white', fontSize: 8, fontFamily: 'Noto Sans', marginTop: "5px" }}>A collaboration between:</p>
      <div className='img-div'>
        <img className='img-div' src={Nih} alt="nih-logo" style={{ height: 10, margin: "5px" }} />
        <img className='img-div' src={CareEv} alt="Care-logo" style={{ height: 10 }} />
      </div>
      <div className="footerSocialCustom">
        <a href="mailto:email@example.com">
          <FaEnvelope size={10} style={{ color: 'white' }} />
        </a>
        <a href="https://facebook.com">
          <FaFacebook size={10} style={{ color: 'white' }} />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin size={10} style={{ color: 'white' }} />
        </a>

        <a href="https://instagram.com">
          <FaInstagram size={15} style={{ color: 'white' }} />
        </a>
        <a href="https://twitter.com">
          <FaTwitter size={10} style={{ color: 'white' }} />
        </a>
      </div>
      <div className="footer-copyright" style={{ color: 'white', fontFamily: 'Noto Sans' }}>
        <p style={{ fontSize: 8 }} >&copy; 2023 CareEvolution, LLC. |  Privacy Policy </p>
      </div>
    </footer>
  );
}

export default CustomeSiteFooter;
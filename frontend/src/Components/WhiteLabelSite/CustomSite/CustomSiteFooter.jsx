import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaCopyright } from 'react-icons/fa';
import whiteLogo from "../../../Images/mmtc-logo-white.png";
import footerImg from "../../../Images/footerImg.png";
import Nih from "../../../Images/NIH.png";
import CareEv from "../../../Images/CareEvolution.png";



function CustomeSiteFooter() {
  return (
    <footer className="footerContainerCustom" style={{ backgroundColor: '#1f304f', height: "auto", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '729px' }}>
      <div id="sub-footer" style={{width: '728px'}}>
      <p>
        This site meets strict US government security standards to keep your
        data secure.
      </p>
      </div>
      {/* <img src={footerImg} alt="footerImg" className='image-with-border' /> */}
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
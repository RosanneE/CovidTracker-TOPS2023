import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, } from 'react-icons/fa';
import whiteLogo from "../../Images/mmtc-logo-white.png";
import Nih from "../../Images/NIH.png";
import CareEv from "../../Images/CareEvolution.png";



function Footer() {
  return (
    <footer className="footer-container" style={{ backgroundColor: '#1f304f', height: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* <img src={footerImg} alt="footerImg" className='image-with-border' /> */}
       <img src={whiteLogo} alt="whiteLogo" style={{ height: 44, width: 110, margin: 10 }} /> 
       <p className='footer-text' style={{ color: 'white', fontSize: 16, fontFamily: 'Noto Sans' }}>A collaboration between:</p>
      <div className='img-div'>
        <img className='img-div' src={Nih} alt="nih-logo" style={{ height: 21}}/>
        <img className='img-div' src={CareEv} alt="Care-logo" style={{ height: 21}}/>
      </div>
      <div className="footer-social">
          <a href="mailto:email@example.com">
            <FaEnvelope size={30} style={{ color: 'white' }} />
          </a>
          <a href="https://facebook.com">
            <FaFacebook size={30} style={{ color: 'white' }} />
          </a>
          <a href="https://linkedin.com">
            <FaLinkedin size={30} style={{ color: 'white' }} />
          </a>

          <a href="https://instagram.com">
            <FaInstagram size={30}style={{ color: 'white' }} />
          </a>
          <a href="https://twitter.com">
            <FaTwitter size={30} style={{ color: 'white' }} />
          </a>
      </div>
      <div className="footer-copyright" style={{ color: 'white', fontFamily: 'Noto Sans' }}>
          <p style={{  fontSize: 16 }} >&copy; 2023 CareEvolution, LLC. |  Privacy Policy </p>
      </div> 
    </footer>
  );
}

export default Footer;
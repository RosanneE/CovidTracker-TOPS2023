import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaCopyright } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer-container" style={{ backgroundColor: '#00426B' }}>
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
     <div className="footer-copyright" style={{ color: 'white' }}>
        <p style={{ fontWeight: 'bold' }} >&copy; 2023 CareEvolution, LLC. |  Privacy Policy | Site Map </p>
        {/* <span><FaCopyright /></span> */}
     </div>
    </footer>
  );
}

export default Footer;
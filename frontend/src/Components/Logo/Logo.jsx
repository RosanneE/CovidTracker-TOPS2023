import './Logo.css';
import mmtcLogoImage from '../../Images/mmtcLogoImage.png'

export default function Logo() {
    return (
      <div className="Logo">
        <img className="Logo-img" src={mmtcLogoImage} alt='' />
      </div>
    );
  }
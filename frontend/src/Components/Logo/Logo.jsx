import './Logo.css';
import logoImage from '../../Images/logoImage.png'

export default function Logo() {
    return (
      <div className="Logo">
        <img className="Logo-img" src={logoImage} alt='' />
      </div>
    );
  }
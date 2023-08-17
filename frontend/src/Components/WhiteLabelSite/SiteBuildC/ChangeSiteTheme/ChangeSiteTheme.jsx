import bright from "../../../../Images/customeSiteBriteColor.png";
import deep from "../../../../Images/customSiteDeepColor.png";
import classic from "../../../../Images/customeSiteClassicColor.png";
import clean from "../../../../Images/customeSiteCleanColor.png";
import natural from "../../../../Images/customSiteNaturalColor.png";
import { useContext } from "react";
import { FormContext } from "../../../../Context/FormContext";

export default function ChangeSiteTheme({ handleThemeChange }) {
  const { newSite  } = useContext(FormContext);

  return (
    <div>

      <div className="colorSelection">
        <div className="radioOption">
          <label>
            <img src={classic} alt="Classic" />
            Classic
            <input
              type="radio"
              name="color"
              value="classic"
              checked={newSite.color_theme === 'classic'}
              onChange={handleThemeChange}
            />
          </label>
        </div>

        <div className="radioOption">
          <label>
            <img src={clean} alt="Clean" />
            Clean
            <input
              type="radio"
              name="color"
              value="clean"
              onChange={handleThemeChange}
            />
          </label>
        </div>

        <div className="radioOption">
          <label>
            <img src={bright} alt="Bright" />
            Bright
            <input
              type="radio"
              name="color"
              value="bright"
              onChange={handleThemeChange}
            />
          </label>
        </div>

        <div className="radioOption">
          <label>
            <img src={deep} alt="Deep" />
            Deep
            <input type="radio" name="color" value="deep" onChange={handleThemeChange} />
          </label>
        </div>

        <div className="radioOption">
          <label>
            <img src={natural} alt="Natural" />
            Natural
            <input
              type="radio"
              name="color"
              value="natural"
              onChange={handleThemeChange}
            />
          </label>
        </div>
      </div>
    </div>
  )
}
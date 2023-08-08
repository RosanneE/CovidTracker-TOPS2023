//DESIGN START PAGE
import "../DesignStart/DesignStart.css"

export default function DesignStart({ pageNumber, setPageNumber }) {
  return (
    <div className="designStartBody">
      <div className="backToPartnerPageDesign">
        <p onClick={() => setPageNumber(0)}>{"\u003C"} Back to Partner Page </p>
      </div>

      <div className="designStart">

        <h1>What would you like to build</h1>
        <p className="designStartP">Use this platform for all your at-home OTC test-reporting needs.</p>
        <p className="designStartP">There's no cost to you, whichever option you choose.</p>
        {/* ------------ buttons updated the pageNuber useState --------- */}
        <div className="buttonsDesignDesign">
          <button className="siteBuildBlueButtonDesign" onClick={() => setPageNumber(2)}>Stand Alone Site</button>
          <button className="siteBuildBlueButtonDesign" onClick={() => setPageNumber(2)}>Modul Pop Up</button>
        </div>

        <p className="designStartP">Not sure what works best for you?</p>
        <p className="designStartP">Learn more about Stand-Alone vs Modal Pop-Ups</p>
      </div>
    </div>
  )
};
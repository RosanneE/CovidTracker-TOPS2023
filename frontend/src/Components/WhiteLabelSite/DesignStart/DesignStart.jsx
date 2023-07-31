//DESIGN START PAGE

export default function DesignStart({pageNumber, setPageNumber}) {
  return (
    <>
      <h1>What would you like to build</h1>
        {/* ------------ buttons updated the pageNuber useState --------- */}
        <div className="siteBuildContinueButton">
          <p onClick={() => setPageNumber(pageNumber - 1)}>{"\u003C"} Go back</p>
          <button className="siteBuildBlueButton" onClick={() => setPageNumber(2)}>Continue</button>
      </div>
    </>
  )
};
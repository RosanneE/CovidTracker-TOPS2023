import HomeImg from "../../../Images/HomeImg.png";
import homeSection from "../../../Images/homeSection.png"


function Home({demoPage, setDemoPage}) {
    return(
      <>
    <div className="home-page" style={{ height: '50rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
      <div className="home-text" style={{ flex: 1, padding: '2rem' }}>
        <h1 className="home-h1">Took an at-home <br /> test?</h1>
        <p style={{ color: '#00426b', fontSize: 18, padding: 20 }}>You can help keep your community safe by reporting an over-the-
          <br />counter test result for yourself or any member of your family.</p>
        <button className="blueButton" onClick={()=>setDemoPage(1)}>REPORT YOUR RESULTS</button>
        </div>
      <div className="home-image" style={{ flex: 1, display: 'flex', justifyContent: "space-between", alignItems:'center' }}>
        <img src={HomeImg} alt="HomeImg" style={{ height: '25rem', marginTop: 50 }}/>  
      </div>
    </div>
    <section>
      <div className="home-p">
          <p>
          <em>This site meets strict <em class="underline-text">US Government security standards</em> to keep your test data secure.</em>
          </p>
      </div>
    </section>
    <div className="home-p2">
      <h2 className="h2" style={{ fontSize: 40 }}>Your anonymous test result matters.</h2>
      <p className="p2" style={{ fontSize: 18 }}>At-home tests are the future of diagnosing disease. Reporting your result — whether negative or positive  <br />
      — helps our community learn how to use those test results effectively. 
    effectively.</p>
    </div>
    <div>
      <img src={homeSection} className="homeSection" alt="homeSection" style={{ margin: 50 }} />
    </div>

      </>
)}

export default Home;
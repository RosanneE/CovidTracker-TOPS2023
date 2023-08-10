import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";


const DataChart = () => {
  const [govData, setGovData] = useState({ months: [], cases: [] });
  const [countyFipsCode, setCountyFipsCode] = useState("");

  const fetchData = () => {
    fetch(`https://data.cdc.gov/resource/n8mc-b4w4.json?$limit=100000&county_fips_code=${countyFipsCode}`)
      .then(response => {
        // console.log(response)
        return response.json()
      })
      .then(data => {
        // console.log(data)
        // Process the fetched data and update state
        const months = data.map(entry => entry.case_month);
        const cases = data.length
        console.log(months)
        console.log(cases)
        setGovData({ months: months, cases: cases });
        // console.log(govData)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const renderChart = () => {
    const chartData = {
      labels: govData.months,
      datasets: [
        {
          label: "# of Cases",
          data: govData.cases,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
    return <Line data={chartData} />;
  };

  useEffect(() => {
    renderChart();
  }, [govData]);
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter FIPS Code"
        value={countyFipsCode}
        onChange={(event) => setCountyFipsCode(event.target.value)}
      />
      <button onClick={fetchData}>Get Data</button>
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  );
};

export default DataChart;

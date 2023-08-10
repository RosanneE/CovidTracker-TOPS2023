import { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const DataChart = () => {
  const [govData, setGovData] = useState({ months: [], cases: [] });
  const [countyFipsCode, setCountyFipsCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://data.cdc.gov/resource/n8mc-b4w4.json?$limit=1000000&county_fips_code=${countyFipsCode}`
      );
      const data = await response.json();

      const caseCounts = {};

      data.forEach((entry) => {
        const month = entry.case_month;
        if (caseCounts[month]) {
          caseCounts[month] += 1;
        } else {
          caseCounts[month] = 1;
        }
      });

      setGovData({ months: Object.keys(caseCounts), caseCounts });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching datt:", error);
      setIsLoading(false);
    }
  };

  const sortedMonths = govData.months.sort((a, b) => new Date(a) - new Date(b))

  return (
    <div>
      <input
        type="text"
        placeholder="Enter FIPS Code"
        value={countyFipsCode}
        onChange={(event) => setCountyFipsCode(event.target.value)}
      />
      <button onClick={fetchData}>Get Data</button>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : govData.months.length > 0 ? (
          <Line
            data={{
              labels: sortedMonths,
              datasets: [
                {
                  label: "# of Cases",
                  data: sortedMonths.map(month => govData.caseCounts[month] || 0),
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                },
              ],
            }}
          />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default DataChart;
// 48453 is Travis County FIPS code

// .then((response) => {
//   // console.log(response)
//   return response.json();
// })
// .then((data) => {
//   console.log(data);
//   // Process the fetched data and update  state
//   const months = data.map((entry) => entry.case_month);
//   const cases = data.length;
//   console.log(months);
//   console.log(cases);
//   setGovData({ months: months, cases: cases });
// })
// .catch((error) => {
//   console.error("Error fetching data:", error);
// });

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

  const sortedMonths = govData.months.sort((a, b) => new Date(a) - new Date(b));

  return (
    <div>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : govData.months.length > 0 ? (
          <Line
            data={{
              labels: sortedMonths,
              datasets: [
                {
                  label: "Number of Cases per Month for County:___",
                  data: sortedMonths.map(
                    (month) => govData.caseCounts[month] || 0
                  ),
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Month",
                    font: {
                      // size: 14,
                      weight: "bold",
                    },
                  },
                },
                y: {
                  beginAtZero: true, // Start y-axis from 0
                  title: {
                    display: true,
                    text: "Number of Cases",
                  },
                },
              },
            }}
          />
        ) : (
          <p>No data available.</p>
        )}
      </div>
      <input
        type="text"
        placeholder="Enter FIPS Code"
        value={countyFipsCode}
        onChange={(event) => setCountyFipsCode(event.target.value)}
      />
      <button
        className="blueButton"
        onClick={fetchData}
        style={{ padding: "1rem", lineHeight: "1rem" }}
      >
        Get Data
      </button>
    </div>
  );
};

export default DataChart;
// 48453 is Travis County FIPS code

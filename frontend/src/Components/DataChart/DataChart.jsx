import { useContext, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { FormContext } from "../../Context/FormContext";


const DataChart = () => {
  // Data from cdc for ChartJS
  const [govData, setGovData] = useState({ months: [], cases: [] });
  // data from huds for cdc
  const [countyFipsCode, setCountyFipsCode] = useState("");
  // Loading text
  const [isLoading, setIsLoading] = useState(false);
  // This is getting the data but zipcode is not labeled as expected
  const newUser = useContext(FormContext)
  
  const findFIPS = async (zipCode, type = 2) => {
    const url = `https://www.huduser.gov/hudapi/public/usps?type=${type}&query=${zipCode}`
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ3NTkxODc3ZTAxM2FjZjhhMzUzYTY0YzcxOGY3MGIyYzljMWVhYjBjOTliNWE0NzIzYmE0ZDBiYmZjNDhkOGYxMGZiMDg1NGIyM2Q3ZWU3In0.eyJhdWQiOiI2IiwianRpIjoiNDc1OTE4NzdlMDEzYWNmOGEzNTNhNjRjNzE4ZjcwYjJjOWMxZWFiMGM5OWI1YTQ3MjNiYTRkMGJiZmM0OGQ4ZjEwZmIwODU0YjIzZDdlZTciLCJpYXQiOjE2OTIwMzQ4ODMsIm5iZiI6MTY5MjAzNDg4MywiZXhwIjoyMDA3NjU0MDgzLCJzdWIiOiI1NjAxNSIsInNjb3BlcyI6W119.JacEPIzzNZDQvk_0STKfTT-JuRDsVYW3ERKfR18-EcUpH5H_znFMirmivU4TQ3FKEZhDT0GK9AMS_g6hUGRB0Q"

    const headers = {
      Authorization: `Bearer ${token}`
    }

    try {
      const response = await fetch(url, {
        headers: headers,
      });

      if(!response.ok) {
        throw new Error(`Failed to fetch FIPS code`)
      }

      const responseData = await response.json();
      const results = responseData.data.results;

      const fipsCodes = results.map((result) => result.geoid.substring(0, 5))

      return fipsCodes;
    } catch (error) {
      console.error("Error fetching FIPS code:", error)
      return [];
    }
  }
  


  // Use FIPS to get Chart
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
      console.error("Error fetching data:", error);
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
      {console.log(newUser)}
    </div>
  );
};

export default DataChart;
// 48453 is Travis County FIPS code

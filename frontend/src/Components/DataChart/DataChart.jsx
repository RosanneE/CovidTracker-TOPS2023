import { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { FormContext } from "../../Context/FormContext";

const DataChart = () => {
  // Data from cdc for ChartJS
  const [govData, setGovData] = useState({ months: [], cases: [] });
  // data from huds for cdc
  const [countyFipsCode, setCountyFipsCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { newUser } = useContext(FormContext);
  // initial data is from user input in form from context. Will update with input from dataChart
  const [zipCodeInput, setZipCodeInput] = useState(newUser.zipcode);

  const findFIPS = async (zipCode, type = 2) => {
    const url = `https://www.huduser.gov/hudapi/public/usps?type=${type}&query=${zipCode}`;
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjgwOTRhMjdkZTQ0NGJmNWVhZTZjOTI4Nzk2NjY5ZGMxYjY2MjMwZTI3MmFmMTM1NjViMWMwMWQ0ZDgyNTVkMzhhNzcyYTMyMTIyNjRhODQ0In0.eyJhdWQiOiI2IiwianRpIjoiODA5NGEyN2RlNDQ0YmY1ZWFlNmM5Mjg3OTY2NjlkYzFiNjYyMzBlMjcyYWYxMzU2NWIxYzAxZDRkODI1NWQzOGE3NzJhMzIxMjI2NGE4NDQiLCJpYXQiOjE2OTIxNTAxODcsIm5iZiI6MTY5MjE1MDE4NywiZXhwIjoyMDA3NzY5Mzg3LCJzdWIiOiI1NjUwMyIsInNjb3BlcyI6W119.IOeiCm_hYlXZLgr2QQQo0CsOGbCgLK8zY1fn0xIkPVaubK2s2IiU1hpjiU7eIDmZHCbAz9Co9m3DFdBvey-TVA";

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      setIsLoading(true);
      const response = await fetch(url, {
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch FIPS code`);
      }

      const responseData = await response.json();
      const results = responseData.data.results;

      const fipsCodes = results.map((result) => result.geoid.substring(0, 5));
      console.log(fipsCodes);
      return fipsCodes;
    } catch (error) {
      console.error("Error fetching FIPS code:", error);
      setIsLoading(false);
      return [];
    }
  };

  // Use FIPS to get Chart
  const fetchData = async () => {
    try {
      setIsLoading(true);

      // Fetch FIPS code based on the provided zipcode
      const fipsCodes = await findFIPS(zipCodeInput);

      // Use the first FIPS code if available
      if (fipsCodes.length > 0) {
        setCountyFipsCode(fipsCodes[0]);
      }

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

  useEffect(() => {
    if(countyFipsCode) {
      fetchData();
    }
  }, [countyFipsCode])

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
              plugins: {
                tooltip: {
                  callbacks: {
                    title: () => "CDC COVID-12 Data",
                    afterLabel: () =>
                      "Data Source: CDC COVID-12 Data. Centers for Disease Control and Prevention.",
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
        placeholder="Enter ZIP Code"
        // value={countyFipsCode}
        value={zipCodeInput}
        // onChange={(event) => setCountyFipsCode(event.target.value)}
        onChange={(event) => setZipCodeInput(event.target.value)}
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

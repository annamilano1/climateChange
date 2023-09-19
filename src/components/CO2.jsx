import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
function CO2() {
  const [series, setSeries] = useState();
  const [options, setOptions] = useState();
  useEffect(() => {
    const fetchCO2 = async () => {
      const res = await axios.get("https://global-warming.org/api/co2-api");
      let data = res.data.co2;   
      let time= data.map((x)=>DateTime.fromObject({year:x.year, month:x.month, day:x.day}).toISODate())     
   
     
      let co2 = data.map((x) => parseFloat(x.cycle));
      let trend = data.map((x) => parseFloat(x.trend));

      setOptions({
        chart: {
          id: "basic-bar",
          width: "100%",
        },
        xaxis: {
          categories: time,
        },
      });
      setSeries([
        {
          name: "co2",
          data: co2,
        },
        {
          name: "trend",
          data: trend,
        },
      ]);
    };

    fetchCO2();
  }, []);

  return (
    <>
      {series && options ? (
        <Chart options={options} series={series} type="line" />
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
}

export default CO2;

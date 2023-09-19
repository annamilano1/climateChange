import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import axios from "axios";
function Temperature() {
  const [series, setSeries] = useState();
  const [options, setOptions] = useState();
  useEffect(() => {
    const fetchTemperature = async () => {
      const res = await axios.get(
        "https://global-warming.org/api/temperature-api"
      );
      let data = res.data.result;
      let time = data.map((x) => x.time);
     
      
     
      
      
      let temperature = data.map((x) => parseFloat(x.station));
      let land = data.map((x) => parseFloat(x.land));

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
          name: "temperature",
          data: temperature,
        },
        {
          name: "land",
          data: land,
        },
      ]);
    };

    fetchTemperature();
  }, []);

  return (
    <>
      {series && options ? (
        <Chart options={options} series={series} type="line" />
      ) : (
        <h1>LOADING...</h1>
      )}
    </>
  );
}
export default Temperature;
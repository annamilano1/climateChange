import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

function Methane() {
  const [series, setSeries] = useState();
  const [options, setOptions] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://global-warming.org/api/methane-api");
      let data = res.data.methane;
      let t = data.map((x) => x.date);
      let time = t.slice(1);
      let m = data.map((x) => parseFloat(x.average));
      let methane = m.slice(1);
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
          name: "methane",
          data: methane,
        },
        {
          name: "trend",
          data: trend,
        },

      ]);
    };

    fetchData();
  }, []);

  return (
    <>
      {series && options ? (
        <Chart options={options} series={series} type="line"  />
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
}
export default Methane;
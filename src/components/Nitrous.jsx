import { useEffect, useState } from "react";

import axios from "axios";

import Chart from "react-apexcharts";
function Nitrous() {
  const [series, setSeries] = useState();
  const [options, setOptions] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://global-warming.org/api/nitrous-oxide-api"
      );
      let data = res.data.nitrous;
      let t = data.map((x) => x.date);
      let time = t.slice(1);
      let n = data.map((x) => parseFloat(x.average));
      let nitrous = n.slice(1);
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
          name: "nitrous",
          data: nitrous,
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
        <Chart options={options} series={series} type="line" />
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
}
export default Nitrous;

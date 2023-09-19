import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

function Artic() {
  const [series, setSeries] = useState();
  const [options, setOptions] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://global-warming.org/api/arctic-api");
      let data = res.data.arcticData;
      let time = data.map((x) => x.year);
      let area = data.map((x) => x.area.toFixed(2));
      let extent = data.map((x) => x.extent.toFixed(2));

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
          name: "extend",
          data: extent,
        },
        {
          name: "area",
          data: area,
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
        <h1>loading...</h1>
      )}
    </>
  );
}
export default Artic;
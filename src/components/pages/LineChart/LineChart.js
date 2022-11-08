import ReactApexChart from "react-apexcharts";

const LineChart = ({ account }) => {
  

  let chartDetails = JSON.parse(
    localStorage.getItem(`${account}_chartDetails`)
  );

  const keysItem = Object.keys(chartDetails||{});
  const valuesItem = Object.values(chartDetails||{});

  let series = [
    {
      name: "Quantity",
      data: valuesItem,
    },
  ];

  let options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Trends in tasks by date",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: keysItem,
    },
  };

  return (
    <>
      <div className="diagramContainer">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </>
  );
};
export default LineChart;

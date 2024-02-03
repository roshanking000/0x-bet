import Chart from "react-apexcharts";

export const TokenMetrics = () => {
  const options = {
    labels: ["Organic", "Referral", "Direct", "Social", "Other", "Email"],
    colors: ["#16BDCA", "#FDBA8C", "#1A56DB", "#D61F69", "#9061F9", "#6875F5"],
    chart: {
      fontFamily: "Sora",
      foreColor: '#fff',
      toolbar: {
        show: false,
      },
    },
    stroke: {
      colors: ["#111827"],
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.9,
        },
      },
    },
    tooltip: {
      shared: true,
      followCursor: false,
      fillSeriesColor: false,
      inverseOrder: true,
      style: {
        fontSize: "14px",
        fontFamily: "Sora",
      },
      x: {
        show: true,
        formatter: function (_, { seriesIndex, w }) {
          const label = w.config.labels[seriesIndex];
          return label;
        },
      },
      y: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: true,
      fontSize: '14px',
      fontFamily: "Sora",
      offsetY: 50,
      markers: {
        width: 31,
        height: 14,
        radius: 0,
        offsetX: -15,
        offsetY: 2
      }
    },
  };
  const series = [30, 24, 18, 12, 9, 7];

  return <Chart className="w-3/4" height={305} options={options} series={series} type="donut" />;
}
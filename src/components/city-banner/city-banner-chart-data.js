import moment from "moment";
export default function getChartData(sunrise, sunset, timezone) {
  return [
    {
      name: "",
      uv: 0,
      pv: 1000,
      amt: 1000,
    },
    {
      name: "",
      uv: -1000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: `${moment.utc((sunrise + timezone) * 1000).format("hh:mm A")} SR`,
      uv: 0,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: `${moment.utc((sunset + timezone) * 1000).format("hh:mm A")} SS`,
      uv: 0,
      pv: 9800,
      amt: 2290,
    },
  ];
}
export const areaChartMargin = {
  top: 10,
  right: 30,
  left: 0,
  bottom: 0,
};

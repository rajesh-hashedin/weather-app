import moment from "moment";
export default function getChartData(sunrise, sunset, timezone) {
  return [
    {
      name: "",
      uv: 0,
    },
    {
      name: "",
      uv: -1000,
    },
    {
      name: `${moment.utc((sunrise + timezone) * 1000).format("hh:mm A")} SR`,
      uv: 0,
    },
    {
      name: "",
      uv: 3000,
    },
    {
      name: `${moment.utc((sunset + timezone) * 1000).format("hh:mm A")} SS`,
      uv: 0,
    },
  ];
}
export const areaChartMargin = {
  top: 10,
  right: 30,
  left: 0,
  bottom: 0,
};

import { DateTime } from "luxon";

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
      name: `${DateTime.fromSeconds(sunrise + timezone)
        .toUTC()
        .toFormat("hh:mm a")} SR`,
      uv: 0,
    },
    {
      name: "",
      uv: 3000,
    },
    {
      name: `${DateTime.fromSeconds(sunset + timezone)
        .toUTC()
        .toFormat("hh:mm a")} SS`,
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

export function copyData(data) {
  return JSON.parse(JSON.stringify(data));
}
export function convertToLocalTimeString(unixTime, timezoneOffset) {
  // Convert Unix time to a Date object with the correct local time
  const localTime = new Date((unixTime + timezoneOffset) * 1000);

  // Extract the date components
  const month = localTime.getUTCMonth() + 1; // Months are zero-indexed
  const day = localTime.getUTCDate();
  const year = localTime.getUTCFullYear();

  // Extract the time components
  let hours = localTime.getUTCHours();
  const minutes = localTime.getUTCMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Format the minutes with leading zero if necessary
  const minutesFormatted = minutes < 10 ? "0" + minutes : minutes;

  // Format the date as MM-DD-YYYY
  const dateFormatted = `${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }-${year}`;

  // Format the time as HH:MM AM/PM
  const timeFormatted = `${hours}:${minutesFormatted} ${ampm}`;

  // Combine date and time
  return `${dateFormatted} ${timeFormatted}`;
}

export function getTimeInHM(sunrise, sunset) {
  const time = sunset - sunrise;
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  return `${hours}H ${minutes}M`;
}

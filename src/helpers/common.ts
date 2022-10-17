const month = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ",
];


export const getYear = (date: any) => {
  const newDt = new Date(date);
  return newDt.getFullYear();
};

export const getDayMonth = (date: any) => {
  const newDt = new Date(date);
  let day = newDt.getDate().toString();
  day = day.length === 1 ? "0" + day : day;
  const aux = `${day} ${month[newDt.getMonth()]}`;
  return aux;
};

export const getFullDate = ({ date }: any) => {
  const newDt = new Date(date);
  let day = newDt.getDate().toString();
  day = day.length === 1 ? "0" + day : day;
  const aux = `${day} ${month[newDt.getMonth()]} DE ${newDt.getFullYear()}`;
  return aux;
};

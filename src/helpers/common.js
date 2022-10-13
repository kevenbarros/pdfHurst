import Art from "../svg/Art"
import Biotec from "../svg/Biotec"
import Cripto from "../svg/Cripto"
import Debit from "../svg/Debit"
import Judicial from "../svg/Judicial"
import Music from "../svg/Music"
import RealEstate from "../svg/RealEstate"
import Rescue from "../svg/Rescue"
import Tokens from "../svg/Tokens"

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
  "DEZ"
]

export const typeImg = (type) => {
  if (type === "HCP__ART") return <Art></Art>
  else if (type === "HCP__BIOTEC") return <Biotec></Biotec>
  else if (type === "HCP__MUSIC") return <Music></Music>
  else if (type === "HCP__TOKENS") return <Tokens></Tokens>
  else if (type === "HCP__REALESTATE") return <RealEstate></RealEstate>
  else if (type === "HCP__JUDICIAL") return <Judicial></Judicial>
  else if (type === "HCP__RESCUE") return <Rescue></Rescue>
  else if (type === "HCP__CRIPTO") return <Cripto></Cripto>
  else {
    return <Debit></Debit>
  }
}

export const maskMoney = (value) => {
  return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
}

export const getYear = (date) => {
  const newDt = new Date(date)
  return newDt.getFullYear()
}

export const getDayMonth = (date) => {
  const newDt = new Date(date)
  let day = newDt.getDate().toString()
  day = (day.length === 1) ? '0' + day : day;
  const aux = `${day} ${month[newDt.getMonth()]}`
  return aux
}

export const getFullDate = (date) => {
  const newDt = new Date(date)
  let day = newDt.getDate().toString()
  day = (day.length === 1) ? '0' + day : day;
  const aux = `${day} ${month[newDt.getMonth()]} DE ${newDt.getFullYear()}`
  return aux
}

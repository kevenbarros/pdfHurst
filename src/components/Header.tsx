import { Text, StyleSheet, View, Image } from '@react-pdf/renderer';
import LogoText from '../img/LogoText.png'
import React, { FC } from 'react';
import { PDFProps } from '../types/DataProps';
import Arrow from '../img/Arrow.png';


const month = [
  'JAN',
  'FEV',
  'MAR',
  'ABR',
  'MAI',
  'JUN',
  'JUL',
  'AGO',
  'SET',
  'OUT',
  'NOV',
  'DEZ'
]

const styles = StyleSheet.create({
  arrow: {
    maxWidth: 6,
    marginRight: 4,
  },
  header: {
    backgroundColor: '#1C2025',
    paddingHorizontal: 124,
    paddingVertical: 32,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    width: 60,
    height: 24,
  },
  titleWithe: {
    marginTop: 10,
    fontSize: 22,
    color: '#EEF1F2',
    letterSpacing: 0.64,
    fontFamily: 'Nunito',
    fontWeight: 600,
  },
  titleGold: {
    marginTop: 8,
    fontWeight: 400,
    fontSize: 24,
    color: '#FACA50',
    letterSpacing: 0.64,
    fontFamily: 'Nunito',
  },
  extractMovimentsBox: {
    marginTop: 32,
    display: 'flex',
    flexDirection: 'column',
    width: 150,
  },
  extractMoviments: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  movimentsContainerTitles: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  movimentsTitles: {
    fontSize: 8,
    color: '#7F8C9A',
    fontWeight: 400,
    fontFamily: 'Open Sans'
  },
  movimentsValue: {
    fontSize: 8,
    color: '#B5BFC9',
    fontWeight: 400,
    fontFamily: 'Open Sans'
  },
  titleDate: {
    color: '#B5BFC9',
    fontSize: 8,
    fontWeight: 400,
    fontFamily: 'Open Sans'
  },
  imageArrow: {
    width: 14,
    height: 14,
  },
})

const getFullDate = (date: any) => {
  const newDt = new Date(date)
  let day = newDt.getDate().toString()
  day = (day.length === 1) ? '0' + day : day;
  const aux = `${day} ${month[newDt.getMonth()]} DE ${newDt.getFullYear()}`
  return aux
}

const getDayMonth = (date: any) => {
  const newDt = new Date(date)
  let day = newDt.getDate().toString()
  day = (day.length === 1) ? '0' + day : day;
  const aux = `${day} ${month[newDt.getMonth()]}`
  return aux
}

const maskMoney = (value: number) => {
  return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
}

const Header: FC<PDFProps> = ({ data }) => {
  return <View style={styles.header}>
    <Image src={LogoText} style={styles.logo}></Image>
    <Text style={styles.titleWithe}>
      Este é o seu balanço geral na Hurst Wallet:
    </Text>
    <View style={styles.extractMovimentsBox}>
      <Text style={styles.titleDate}>{`${getDayMonth(data.initialExtractDate)} A ${getFullDate(data.endExtractDate)}`}</Text>
      <View style={styles.extractMoviments}>
        <View style={styles.movimentsContainerTitles}>
          <Image src={Arrow} style={styles.arrow}></Image>
          <Text style={styles.movimentsTitles}>Entradas</Text>
        </View>
        <Text style={styles.movimentsValue}>+ R${maskMoney(data.walletEntries)}</Text>
      </View>
      <View style={styles.extractMoviments}>
        <View style={styles.movimentsContainerTitles}>
          <Image src={Arrow} style={styles.arrow}></Image>
          <Text style={styles.movimentsTitles}>Saídas</Text>
        </View>
        <Text style={styles.movimentsValue}>- R${maskMoney(data.walletOutputs)}</Text>
      </View>
      <View style={styles.extractMoviments}>
        <View style={styles.movimentsContainerTitles}>
          <Image src={Arrow} style={styles.arrow}></Image>
          <Text style={styles.movimentsTitles}>Balanço</Text>
        </View>
        <Text style={styles.movimentsValue}>+ R${maskMoney(data.walletTotals)}</Text>
      </View>
      <View style={styles.extractMoviments}>
        <View style={styles.movimentsContainerTitles}>
          <Image src={Arrow} style={styles.arrow}></Image>
          <Text style={styles.movimentsTitles}>Movimentações</Text>
        </View>
        <Text style={styles.movimentsValue}>+ R${maskMoney(data.walletMovements)}</Text>
      </View>
    </View>
  </View>
}
export default Header;

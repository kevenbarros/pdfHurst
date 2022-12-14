import { Text, StyleSheet, View, Image } from '@react-pdf/renderer';
import Logo from '../img/Logo.png'
import React, { FC } from 'react';
import { PDFProps } from '../types/DataProps';

import Biotec from '../img/BioTec.png';
import Cripto from '../img/Cript.png';
import Debit from '../img/Debit.png';
import Credit from '../img/Credit.png';
import Judicial from '../img/Legal.png';
import Exchange from '../img/Tokens.png';
import Music from '../img/Music.png';
import RealEstate from '../img/RealEstate.png';
import Rescue from '../img/Rescue.png';

enum IconTypes {
  HCP__BIOTEC = 'HCP__BIOTEC',
  HCP__MUSIC = 'HCP__MUSIC',
  HCP__REALESTATE = 'HCP__REALESTATE',
  HCP__JUDICIAL = 'HCP__JUDICIAL',
  HCP__RESCUE = 'HCP__RESCUE',
  HCP__CRIPTO = 'HCP__CRIPTO',
  HCP__EXCHANGE = 'HCP__EXCHANGE',
}

const typeImg = (item: any) => {
  if (!item.category) {
    if (item.type === 'C') {
      return Credit;
    }

    return Debit;
  }

  switch (item.category) {
    case IconTypes.HCP__BIOTEC:
      return Biotec;
    case IconTypes.HCP__CRIPTO:
      return Music;
    case IconTypes.HCP__JUDICIAL:
      return RealEstate;
    case IconTypes.HCP__MUSIC:
      return Judicial;
    case IconTypes.HCP__REALESTATE:
      return Rescue;
    case IconTypes.HCP__EXCHANGE:
      return Exchange;
    case IconTypes.HCP__RESCUE:
      return Cripto;
    default:
      return Debit;
  }
};

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
  img: {
    maxWidth: 25,
  },
  logo: {
    width: 24,
    height: 24,
  },
  container: {
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 32,
    paddingBottom: 24,
    display: "flex",
    flexDirection: "column",
  },
  bodyHeader: {
    marginTop: 20,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerLogo: {
    width: 21.2,
    height: 24,
  },
  headerInformations: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  headerInformationsName: {
    fontSize: 8,
    color: '#2E343A',
    fontWeight: 700,
    fontFamily: 'Nunito',
  },
  headerInformationsPdf: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
  },
  headerInformationsEmission: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 8,
  },
  headerInformationsEmissionValue: {
    color: '#7F8C9A',
    fontSize: 8,
    marginLeft: 4,
    fontFamily: 'Nunito',
    fontWeight: 400
  },
  table: {
    display: 'flex',
    flexDirection: 'column'
  },
  tableHeader: {
    marginTop: 10,
    paddingVertical: 6,
    display: 'flex',
    flexDirection: 'column',

  },
  titlesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #D3D8DF',
    marginBottom: 16,
    paddingBottom: 8,
  },
  titles: {
    fontSize: 8,
    color: '#667382',
    fontFamily: 'Nunito',
    fontWeight: 400
  },
  titlesImportant: {
    fontSize: 12,
    color: '#232930',
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
    paddingRight: 50,
    fontFamily: 'Nunito',

  },
  balance: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  balanceTitle: {
    fontSize: 8,
    fontWeight: 700,
    color: '#2E343A',
    fontFamily: 'Nunito',
  },
  balanceValue: {
    fontSize: 8,
    fontWeight: 700,
    marginLeft: 4,
    color: '#7F8C9A',
    fontFamily: 'Nunito',
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 11,
    paddingRight: 10,
    paddingLeft: 4,
  },
  itemMovements: {
    fontSize: 10,
    fontWeight: 800,
    color: '#2E343A',
    width: '100%',
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    paddingTop: 2.5,
    fontFamily: 'Nunito',
  },
  itemValue: {
    fontSize: 8,
    fontWeight: 700,
    color: '#2E343A',
    fontFamily: 'Nunito',
  },

  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeLogo: {
    marginLeft: 15
  },
  tableBody: {
    display: 'flex',
    flexDirection: 'column',
  }

})

const getFullDate = (props: any) => {
  const newDt = new Date(props)
  let day = newDt.getDate().toString()
  day = (day.length === 1) ? '0' + day : day;
  const aux = `${day} ${month[newDt.getMonth()]} DE ${newDt.getFullYear()}`
  return aux
}

export const getYear = (date: any) => {
  const newDt = new Date(date)
  return newDt.getFullYear()
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

const Table: FC<PDFProps> = ({ data }) => {
  console.log(data)
  return <View style={styles.container}>
    <View style={styles.bodyHeader} fixed>
      <Image src={Logo} style={styles.logo}></Image>
      <View style={styles.headerInformations}>
        <Text style={styles.headerInformationsName}>{data.userName}</Text>
        <View style={styles.headerInformationsPdf}>
          <View style={styles.headerInformationsEmission}>
            <Text style={styles.headerInformationsName}>EXTRATO WALLET</Text>
            <Text style={styles.headerInformationsEmissionValue}>{`${getDayMonth(data.initialExtractDate)} A ${getFullDate(data.endExtractDate)}`}</Text>
          </View>
          <View style={styles.headerInformationsEmission}>
            <Text style={styles.headerInformationsName}>EMISS??O</Text>
            <Text style={styles.headerInformationsEmissionValue}>{getFullDate(data.issueDate)}</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.table}>
      <View style={styles.tableHeader} fixed>
        <View style={styles.titlesContainer}>
          <Text style={styles.titles}>{`${getDayMonth(data.initialExtractDate)} A ${getFullDate(data.endExtractDate)}`}</Text>
          <Text style={styles.titlesImportant}>Movimenta????es</Text>
          <Text style={styles.titles}>VALOR EM R$</Text>
        </View>
        <View style={styles.balance}>
          <Text style={styles.balanceTitle}>SALDO NESTE PER??ODO:</Text>
          <Text style={styles.balanceValue}>R$ {maskMoney(data.balancePeriodical)}</Text>
        </View>
      </View>
      <View style={styles.tableBody}>
        {data.movements.map((elemento, index) => {
          return <View style={{ ...styles.itemContainer, backgroundColor: index % 2 === 0 ? '#EEF1F2' : "#fff" }} key={index}>
            <View style={styles.dateContainer}>
              <Text style={styles.itemValue}>{getDayMonth(elemento.date)}</Text>
              <View style={styles.typeLogo}>
                <Image src={typeImg(elemento)} style={styles.img}></Image>
              </View>
            </View>
            <Text style={styles.itemMovements}>{elemento.description}</Text>
            <Text style={{ ...styles.itemValue, color: elemento.type === 'C' ? '#00A04A' : '#B24425' }}>R$ {maskMoney(elemento.value)}</Text>
          </View>
        })}
      </View>
    </View>
  </View>
}
export default Table;

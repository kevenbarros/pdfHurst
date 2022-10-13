import { Text, StyleSheet, View } from '@react-pdf/renderer';
import LogoText from "../svg/LogoText"
import Arrow from "../svg/Arrow"
import { maskMoney, getDayMonth, getFullDate } from "../helpers/common"

const styles = StyleSheet.create({
  header: {
    header: {
      backgroundColor: "#1C2025",
      paddingHorizontal: 124,
      paddingVertical: 32,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    logo: {
      width: 60,
      height: 24,
    },
    titleWithe: {
      marginTop: 10,
      fontSize: 22,
      color: "#EEF1F2",
      letterSpacing: 0.64,
      fontFamily: "Nunito",
      fontWeight: 600,
    },
    titleGold: {
      marginTop: 8,
      fontWeight: 400,
      fontSize: 24,
      color: "#FACA50",
      letterSpacing: 0.64,
      fontFamily: "Nunito",
    },
    extractMovimentsBox: {
      marginTop: 32,
      display: "flex",
      flexDirection: "column",
      width: 150,
    },
    extractMoviments: {
      display: "flex",
      flexDirection: "row",
      marginTop: 4,
      alignItems: "center",
      justifyContent: "space-between"
    },
    movimentsContainerTitles: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    movimentsTitles: {
      fontSize: 8,
      color: "#7F8C9A",
      fontWeight: 400,
      fontFamily: "Open Sans"
    },
    movimentsValue: {
      fontSize: 8,
      color: "#B5BFC9",
      fontWeight: 400,
      fontFamily: "Open Sans"
    },
    titleDate: {
      color: "#B5BFC9",
      fontSize: 8,
      fontWeight: 400,
      fontFamily: "Open Sans"
    },
    imageArrow: {
      width: 14,
      height: 14,
    },
  },
})
{/* <Text style={styles.header.titleGold}>
      R$ {maskMoney(data.walletBalance)}
    </Text> */}
const Header = ({ data }) => {
  return <View style={styles.header.header}>
    <LogoText></LogoText>
    <Text style={styles.header.titleWithe}>
      Este é o seu balanço geral na Hurst Wallet:
    </Text>

    <View style={styles.header.extractMovimentsBox}>
      <Text style={styles.header.titleDate}>{`${getDayMonth(data.initialExtractDate)} A ${getFullDate(data.endExtractDate)}`}</Text>
      <View style={styles.header.extractMoviments}>
        <View style={styles.header.movimentsContainerTitles}>
          <Arrow></Arrow>
          <Text style={styles.header.movimentsTitles}>Entradas</Text>
        </View>
        <Text style={styles.header.movimentsValue}>+ R${maskMoney(data.walletEntries)}</Text>
      </View>
      <View style={styles.header.extractMoviments}>
        <View style={styles.header.movimentsContainerTitles}>
          <Arrow></Arrow>
          <Text style={styles.header.movimentsTitles}>Saídas</Text>
        </View>
        <Text style={styles.header.movimentsValue}>- R${maskMoney(data.walletOutputs)}</Text>
      </View>
      <View style={styles.header.extractMoviments}>
        <View style={styles.header.movimentsContainerTitles}>
          <Arrow></Arrow>
          <Text style={styles.header.movimentsTitles}>Totais</Text>
        </View>
        <Text style={styles.header.movimentsValue}>+ R${maskMoney(data.walletTotals)}</Text>
      </View>
      <View style={styles.header.extractMoviments}>
        <View style={styles.header.movimentsContainerTitles}>
          <Arrow></Arrow>
          <Text style={styles.header.movimentsTitles}>Movimentações</Text>
        </View>
        <Text style={styles.header.movimentsValue}>+ R${maskMoney(data.walletMovements)}</Text>
      </View>
    </View>
  </View>
}
export default Header;

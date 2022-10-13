import { Text, StyleSheet, View } from '@react-pdf/renderer';
import Logo from "../svg/Logo"
import { typeImg, maskMoney, getDayMonth, getFullDate } from "../helpers/common"

const styles = StyleSheet.create({
  body: {
    container: {
      backgroundColor: "#F7F7F7",
      paddingHorizontal: 32,
      paddingVertical: 24,
      display: "flex",
      flexDirection: "column",
    },
    bodyHeader: {
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end"
    },
    headerInformationsName: {
      fontSize: 8,
      color: "#2E343A",
      fontWeight: 700,
      fontFamily: "Nunito",
    },
    headerInformationsPdf: {
      display: "flex",
      flexDirection: "row",
      marginTop: 8,
    },
    headerInformationsEmission: {
      display: "flex",
      flexDirection: "row",
      marginLeft: 8,
    },
    headerInformationsEmissionValue: {
      color: "#7F8C9A",
      fontSize: 8,
      marginLeft: 4,
      fontFamily: "Nunito",
      fontWeight: 400
    },
    table: {
      marginTop: 32,
      display: "flex",
      flexDirection: "column"
    },
    tableHeader: {
      paddingVertical: 6,
      display: "flex",
      flexDirection: "column",
      titlesContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #D3D8DF",
        marginBottom: 16,
        paddingBottom: 8,
      },
      titles: {
        fontSize: 8,
        color: "#667382",
        fontFamily: "Nunito",
        fontWeight: 400
      },
      titlesImportant: {
        fontSize: 12,
        color: "#232930",
        fontWeight: 700,
        display: "flex",
        justifyContent: "center",
        paddingRight: 50,
        fontFamily: "Nunito",

      },
      balance: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
      },
      balanceTitle: {
        fontSize: 8,
        fontWeight: 700,
        color: "#2E343A",
        fontFamily: "Nunito",
      },
      balanceValue: {
        fontSize: 8,
        fontWeight: 700,
        marginLeft: 4,
        color: "#7F8C9A",
        fontFamily: "Nunito",
      }
    },
    tableBody: {
      display: "flex",
      flexDirection: "column",
      itemContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 11,
        paddingRight: 6
      },
      itemMovements: {
        fontSize: 10,
        fontWeight: 800,
        color: "#2E343A",
        width: "100%",
        paddingHorizontal: 16,
        alignSelf: "flex-start",
        paddingTop: 2,
        fontFamily: "Nunito",
      },
      itemValue: {
        fontSize: 8,
        fontWeight: 700,
        color: "#2E343A",
        fontFamily: "Nunito",
      },
      dateContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      typeLogo: {
        marginLeft: 15
      }
    }
  }

})

const Table = ({ data }) => {
  return <View style={styles.body.container}>
    <View style={styles.body.bodyHeader}>
      <Logo></Logo>
      <View style={styles.body.headerInformations}>
        <Text style={styles.body.headerInformationsName}>{data.userName}</Text>
        <View style={styles.body.headerInformationsPdf}>
          <View style={styles.body.headerInformationsEmission}>
            <Text style={styles.body.headerInformationsName}>EXTRATO WALLET</Text>
            <Text style={styles.body.headerInformationsEmissionValue}>{`${getDayMonth(data.initialExtractDate)} A ${getFullDate(data.endExtractDate)}`}</Text>
          </View>
          <View style={styles.body.headerInformationsEmission}>
            <Text style={styles.body.headerInformationsName}>EMISSÃO</Text>
            <Text style={styles.body.headerInformationsEmissionValue}>{getFullDate(data.issueDate)}</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.body.table}>
      <View style={styles.body.tableHeader}>
        <View style={styles.body.tableHeader.titlesContainer}>
          <Text style={styles.body.tableHeader.titles}>{`${getDayMonth(data.initialExtractDate)} A ${getFullDate(data.endExtractDate)}`}</Text>
          <Text style={styles.body.tableHeader.titlesImportant}>Movimentações</Text>
          <Text style={styles.body.tableHeader.titles}>VALOR EM R$</Text>
        </View>
        <View style={styles.body.tableHeader.balance}>
          <Text style={styles.body.tableHeader.balanceTitle}>SALDO NESTE PERÍODO:</Text>
          <Text style={styles.body.tableHeader.balanceValue}>R$ {maskMoney(data.balancePeriodical)}</Text>
        </View>
      </View>
      <View style={styles.body.tableBody}>
        {data.movements.map((elemento, index) => {
          return <View style={styles.body.tableBody.itemContainer} key={index}>
            <View style={styles.body.tableBody.dateContainer}>
              <Text style={styles.body.tableBody.itemValue}>{getDayMonth(elemento.date)}</Text>
              <View style={styles.body.tableBody.typeLogo}>
                {typeImg(elemento.type)}
              </View>
            </View>
            <Text style={styles.body.tableBody.itemMovements}>{elemento.name}</Text>
            <Text style={styles.body.tableBody.itemValue}>R$ {maskMoney(elemento.value)}</Text>
          </View>
        })}
      </View>
    </View>
  </View>
}
export default Table;

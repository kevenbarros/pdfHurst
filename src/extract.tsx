import React from 'react';
import { Page, Document, Font, StyleSheet } from '@react-pdf/renderer';
import Header from './components/Header.tsx';
import Table from './components/Table.tsx';

const mock = {
  userName: "KEVEN WILLIAM SILVA BARROS",
  issueDate: "2022-09-29T17:33:07.159Z",
  initialExtractDate: "2022-09-19T17:33:07.159Z",
  endExtractDate: "2022-09-29T17:33:07.159Z",
  walletBalance: 102408.32,
  walletEntries: 10006.66,
  walletOutputs: 7598.34,
  walletTotals: 2408.32,
  walletMovements: 17604.00,
  balancePeriodical: 1354.33,
  movements: [
    {
      date: "2022-09-19T17:33:07.159Z",
      type: "HCP__TOKENS",
      description: "Rendimentos de música: Operação [MUSIA022]",
      value: 589.99
    },
    {
      date: "2022-09-19T17:33:07.159Z",
      type: "HCP__ART",
      description: "Depósito em conta Hurst",
      value: 589.99
    },
    {
      date: "2022-09-19T17:33:07.159Z",
      type: "HCP__MUSIC",
      description: "Rendimentos de música: Operação [MUSIA022]",
      value: 589.99
    },
    {
      date: "2022-09-19T17:33:07.159Z",
      type: "HCP__BIOTEC",
      description: "Rendimentos de música: Operação [MUSIA022]",
      value: 589.99
    }
  ]
}

Font.register({
  family: "Nunito",
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/nunito/v24/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTo3ig.ttf',
    },
    {
      src: 'https://fonts.gstatic.com/s/nunito/v24/XRXI3I6Li01BKofiOc5wtlZ2di8HDGUmdTo3ig.ttf',
      fontWeight: 'semi-bold',
    },
    {
      src: 'https://fonts.gstatic.com/s/nunito/v24/XRXI3I6Li01BKofiOc5wtlZ2di8HDFwmdTo3ig.ttf',
      fontWeight: 'bold',
    },
    {
      src: 'https://fonts.gstatic.com/s/nunito/v24/XRXI3I6Li01BKofiOc5wtlZ2di8HDDsmdTo3ig.ttf',
      fontWeight: 800,
    },
    {
      src: 'https://fonts.gstatic.com/s/nunito/v24/XRXI3I6Li01BKofiOc5wtlZ2di8HDBImdTo3ig.ttf',
      fontWeight: 900,
    },
    {
      src: 'https://fonts.gstatic.com/s/nunito/v24/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshdTo3ig.ttf',
      fontWeight: 'normal',
    },
  ],
})

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3aCWcynf_cDxXwCLxiixG1c.ttf",
      fontWeight: 'normal',
    },
    {
      src: "http://fonts.gstatic.com/s/opensans/v13/k3k702ZOKiLJc3WVjuplzInF5uFdDttMLvmWuJdhhgs.ttf",
      fontWeight: 'bold',
    }
  ],
})

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F7F7F7",
  }
})

const Extract = () => {
  return (
    <Document >
      <Page style={styles.background}>
        <Header data={mock} />
        <Table data={mock} />
      </Page>
    </Document >
  )
}
export default Extract;

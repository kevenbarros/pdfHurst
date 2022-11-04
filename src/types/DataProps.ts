export type TemplateData = {
  userName: string,
  issueDate: string,
  initialExtractDate: string,
  endExtractDate: string,
  walletEntries: number,
  walletOutputs: number,
  walletTotals: number,
  walletMovements: number,
  balancePeriodical: number,
  movements: IMovements[]
}
interface IMovements {

  date: string,

  type: string,

  description: string,

  value: number
  category?: string,
}
export interface PDFProps {

  data: TemplateData;

}

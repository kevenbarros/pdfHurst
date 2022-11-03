export type TemplateData = {
  userName: string,
  issueDate: Date,
  initialExtractDate: Date,
  endExtractDate: Date,
  walletEntries: number,
  walletOutputs: number,
  walletTotals: number,
  walletMovements: number,
  balancePeriodical: number,
  movements: IMovements[]
}
interface IMovements {

  date: Date,

  type: string,

  description: string,

  value: number
  category?: string,
}
export interface PDFProps {

  data: TemplateData;

}

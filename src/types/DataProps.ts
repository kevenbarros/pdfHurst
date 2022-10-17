export type TemplateData = {
  userName: string;
  issueDate: string;
  initialExtractDate: string;
  endExtractDate: string;
  walletEntries: number;
  walletOutputs: number;
  walletTotals: number;
  walletMovements: number;
  balancePeriodical: number;
  movements: IMovements[];
};

type IMovements = {
  date: string | number;
  type: string;
  description: string;
  value: number;
};

export interface PDFProps {
  data: TemplateData;
}

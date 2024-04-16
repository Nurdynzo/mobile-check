export type TotalPaymentDetails = {
  status: 'Issued' | 'Paid';
  fullname: string;
  imageUri?: string;
  date: Date;
};

export type TotalSummaryCardProps = {
  totalDiscount: number;
  total: number;
  currencySymbool: string;
  pamentDetails?: TotalPaymentDetails;
};

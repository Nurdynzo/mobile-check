export interface StatusLabelProps {
  text: string;
  bg: string;
}

export interface PaymentCardProps {
  isSplitPayment?: boolean;
  itemDetail?: string;
  invoiceNo?: string;
  date?: string;
  paymentType?: string;
  paidAmount?: string;
  outstandingAmount?: string;
  paymentStatus?: string;
  otherActions?: string;
}

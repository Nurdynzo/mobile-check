import {ReactNode} from 'react';
import {ItemCardProps} from '../bill-item-card/type';
import {TotalPaymentDetails} from '../total-summary-card/types';

export type MostRecentBillCardProps = {
  items: Omit<ItemCardProps, 'style' | 'removeDeleteBtn' | 'onDelete'>[];
  totalDiscount: number;
  total: number;
  paymentDetails: TotalPaymentDetails;
  paymentStatus: string;
  customContent?: ReactNode;
};

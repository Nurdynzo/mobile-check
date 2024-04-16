import {TabSwitcherType} from '@/components/tabs/tabs-switcher/types';

export const filterOptions = [
  {
    title: 'Payment types',
    value: 'All payment types (selected)',
  },
  {
    title: 'Item categories',
    value: 'All item categories (selected)',
  },
];

export type PaymentConfirmationTabTypes = 'Invoices' | 'Receipts';

export type PaymentConfirmationTabsProps = {
  name: PaymentConfirmationTabTypes;
};

export const paymentConfirmationTabs: TabSwitcherType<PaymentConfirmationTabTypes>[] =
  [
    {name: 'Invoices', data: 'Invoices'},
    {name: 'Receipts', data: 'Receipts'},
  ];

import {SelectItem} from '../../../../../../types/selectItemsheet';

export type PriceQualitySelectInputType = {
  onChange?: (item?: SelectItem<number>) => void;
  value?: string;
  selectTitle?: string;
  price?: string;
};

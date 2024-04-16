import {TypographyKeys} from '@/resources/fonts';

export type AllInputsClosedPanelButtonProps = {
  /** height is scaled by wp() and defaults to 44*/
  height?: number;
  text: string;
  onPress?: () => void;
  marginTop?: number;
  /** textType is body_1_semibold by default */
  textType?: TypographyKeys;
  isPreviewing?: boolean;
};

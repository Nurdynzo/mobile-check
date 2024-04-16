import {StyleSheet, TextStyle} from 'react-native';
import {fs} from './config';

export type FONT_FAMILY_TYPES = 'Gilroy';

export type FONT_WEIGHT =
  | 'Black'
  | 'Bold'
  | 'ExtraBold'
  | 'Heavy'
  | 'Light'
  | 'Medium'
  | 'Regular'
  | 'SemiBold';

export const generateFontFamily = (
  fontFamily: FONT_FAMILY_TYPES,
  weight: FONT_WEIGHT,
) => `${fontFamily}-${weight}`;

type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

type TypographyProps = {
  size: number;
  family: FONT_FAMILY_TYPES;
  weight: FONT_WEIGHT;
  lineHeight?: number;
  letterSpacePercent?: IntRange<0, 101>; // min 0 & max 100
};

export const generateTypography = ({
  size,
  family,
  weight,
  lineHeight,
  letterSpacePercent = 0,
}: TypographyProps) => {
  return {
    fontFamily: generateFontFamily(family, weight),
    fontSize: fs(size),
    lineHeight: lineHeight ? fs(lineHeight) : undefined,
    letterSpacing: fs(size) * (letterSpacePercent / 100),
  };
};

export type TypographyKeys =
  | 'title_medium'
  | 'title_semibold'
  | 'title_bold'
  | 'subtitle_medium'
  | 'subtitle_semibold'
  | 'subtitle_bold'
  | 'body_1_medium'
  | 'body_1_semibold'
  | 'body_1_bold'
  | 'body_2_medium'
  | 'body_2_semibold'
  | 'body_2_bold'
  | 'paragraph_1_medium'
  | 'paragraph_1_semibold'
  | 'paragraph_1_bold'
  | 'paragraph_2_medium'
  | 'paragraph_2_semibold'
  | 'paragraph_2_bold'
  | 'caption_medium'
  | 'caption_semibold'
  | 'caption_bold'
  | 'pills_capsules_medium'
  | 'pills_capsules_semibold'
  | 'pills_capsules_bold'
  | 'button_semibold'
  | 'button_link_semibold'
  | 'status_tag_semibold'
  | 'nav_bar_menu_semibold'
  | 'label_semibold';

export type TypographyDefinitions = {[key in TypographyKeys]: TextStyle};

export const typography: TypographyDefinitions = StyleSheet.create({
  title_medium: generateTypography({
    size: 18,
    lineHeight: 27,
    family: 'Gilroy',
    weight: 'Medium',
  }),
  title_semibold: generateTypography({
    size: 18,
    lineHeight: 27,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),
  title_bold: generateTypography({
    size: 18,
    lineHeight: 27,
    family: 'Gilroy',
    weight: 'Bold',
  }),

  subtitle_medium: generateTypography({
    size: 16,
    lineHeight: 20,
    family: 'Gilroy',
    weight: 'Medium',
  }),
  subtitle_semibold: generateTypography({
    size: 16,
    lineHeight: 20,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),
  subtitle_bold: generateTypography({
    size: 16,
    lineHeight: 20,
    family: 'Gilroy',
    weight: 'Bold',
  }),

  body_1_medium: generateTypography({
    size: 16,
    lineHeight: 20,
    family: 'Gilroy',
    weight: 'Medium',
  }),
  body_1_semibold: generateTypography({
    size: 16,
    lineHeight: 20,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),
  body_1_bold: generateTypography({
    size: 16,
    lineHeight: 20,
    family: 'Gilroy',
    weight: 'Bold',
  }),

  body_2_medium: generateTypography({
    size: 14,
    lineHeight: 20,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'Medium',
  }),
  body_2_semibold: generateTypography({
    size: 14,
    lineHeight: 20,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),
  body_2_bold: generateTypography({
    size: 14,
    lineHeight: 20,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'Bold',
  }),

  paragraph_1_medium: generateTypography({
    size: 16,
    lineHeight: 20,
    family: 'Gilroy',
    weight: 'Medium',
  }),
  paragraph_1_semibold: generateTypography({
    size: 16,
    lineHeight: 20,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),
  paragraph_1_bold: generateTypography({
    size: 16,
    lineHeight: 20,
    family: 'Gilroy',
    weight: 'Bold',
  }),

  paragraph_2_medium: generateTypography({
    size: 14,
    lineHeight: 24,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'Medium',
  }),
  paragraph_2_semibold: generateTypography({
    size: 14,
    lineHeight: 24,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),
  paragraph_2_bold: generateTypography({
    size: 14,
    lineHeight: 24,
    letterSpacePercent: 100,
    family: 'Gilroy',
    weight: 'Bold',
  }),

  caption_medium: generateTypography({
    size: 14,
    lineHeight: 14,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'Medium',
  }),
  caption_semibold: generateTypography({
    size: 14,
    lineHeight: 14,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),
  caption_bold: generateTypography({
    size: 14,
    lineHeight: 14,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'Bold',
  }),

  pills_capsules_medium: generateTypography({
    size: 14,
    lineHeight: 20,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'Medium',
  }),
  pills_capsules_semibold: generateTypography({
    size: 14,
    lineHeight: 20,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),
  pills_capsules_bold: generateTypography({
    size: 14,
    lineHeight: 20,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'Bold',
  }),

  button_semibold: generateTypography({
    size: 14,
    lineHeight: 16,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),
  button_link_semibold: generateTypography({
    size: 14,
    lineHeight: 16,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),

  status_tag_semibold: generateTypography({
    size: 12,
    lineHeight: 16,
    letterSpacePercent: 4,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),
  nav_bar_menu_semibold: generateTypography({
    size: 8,
    lineHeight: 12,
    letterSpacePercent: 4,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),
  label_semibold: generateTypography({
    size: 14,
    lineHeight: 16,
    letterSpacePercent: 2,
    family: 'Gilroy',
    weight: 'SemiBold',
  }),
  // Other typography can be added here
});

import React from 'react';
import {PlatMedIcon} from '@/assets/svg/index';
import {appLogoStyles} from './styles';

const AppLogo = ({marginBottom = 16}: {marginBottom?: number}) => {
  const style = appLogoStyles({marginBottom});
  return <PlatMedIcon style={style.container} />;
};

export default AppLogo;

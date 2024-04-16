import React from 'react';
import {DisplayImage} from '../common';

const UserAvatar = ({size = 24}: {size?: number}) => {
  return (
    <DisplayImage uri={'https://picsum.photos/id/64/4326/2884'} size={size} />
  );
};

export default UserAvatar;

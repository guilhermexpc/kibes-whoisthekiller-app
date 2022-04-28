import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';
import { styles } from '../../theme/globalStyles'

type Props = TextInputProps;

export function Input({...rest} : Props){
  return(
    <Container {...rest} />
  );
}
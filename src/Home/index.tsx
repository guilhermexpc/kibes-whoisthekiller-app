import React from 'react';
import { Text } from 'react-native';

import { logoSixtyFour } from '../assets/icons/cpu64-128.png';


import {
  Container,
  LogoContainer,
  SixtyFourLogo,
  Title,
  SubTitle,
  Description,
  Details,
} from './styles';

export function Home(){
  return (
    <Container>
      <LogoContainer>
        <SixtyFourLogo
          source={require('../assets/icons/cpu64-128b.png')}
          resizeMode='contain'  

        />
      </LogoContainer>
     
      <Title>Titulo</Title>
      <SubTitle>Subtitulo</SubTitle>
      <Description>Descricao</Description>
      <Details>Details</Details>
    </Container>
  );
}
import React from 'react';
import { Text } from 'react-native';
import { Button } from '../../components/Button/';


import { Input } from '../../components/Input';
import { logoSixtyFour } from '../assets/icons/cpu64-128.png';

import {
  Container,
  LogoContainer,
  SixtyFourLogo,
  UserContainer,
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
          source={require('../../assets/icons/cpu64-128b.png')}
          resizeMode='contain'  

        />
      </LogoContainer>
    <UserContainer>
      <Input
        placeholder='Name'
      />

      <Button
        onPress={() => {}}
        title='Start Game'
      />
    </UserContainer>
     
      {/* <Title>Titulo</Title>
      <SubTitle>Subtitulo</SubTitle>
      <Description>Descricao</Description>
      <Details>Details</Details> */}
    </Container>
  );
}
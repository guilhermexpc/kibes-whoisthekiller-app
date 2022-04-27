import React from 'react';
import { Text } from 'react-native'

import {
  Container,
  Title,
  SubTitle,
  Description,
  Details,
} from './styles';

export function Home(){
  return (
    <Container>
      <Title>Titulo</Title>
      <SubTitle>Subtitulo</SubTitle>
      <Description>Descricao</Description>
      <Details>Details</Details>
    </Container>
  );
}
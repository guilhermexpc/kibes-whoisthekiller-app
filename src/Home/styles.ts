import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.TextTitle };
  color: ${({ theme }) => theme.colors.title };
`

export const SubTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.TextSubTitle };
  color: ${({ theme }) => theme.colors.title };
`

export const Description = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.TextDescription };
  color: ${({ theme }) => theme.colors.title };
`

export const Details = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.TextDescriptionDetails };
  color: ${({ theme }) => theme.colors.title };
`
import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primarySoft };
`;

export const LogoContainer = styled.View`
  width: 100%;    
  align-items: center;  
  padding-bottom: ${RFPercentage(10)}px;
`;

export const SixtyFourLogo = styled.Image`
  width: 128px;
  height: 128px;    
`

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.TextTitle };
  color: ${({ theme }) => theme.colors.primaryTint };
`

export const SubTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.TextSubTitle };
  color: ${({ theme }) => theme.colors.primaryTint };
`

export const Description = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.TextDescription };
  color: ${({ theme }) => theme.colors.primaryTint };
`

export const Details = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.TextDescriptionDetails };
  color: ${({ theme }) => theme.colors.primaryTint };
`
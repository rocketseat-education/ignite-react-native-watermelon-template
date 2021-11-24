import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { ConfirmButton } from '../../components/ConfirmButton';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';
import { RootStackParamList } from '../../types/react-navigation/stack.routes';

export interface ConfirmationParams {
  title: string;
  message: string;
  screenToNavigate: 'Splash' | 'SignIn' | 'SignUpFirstStep' | 'SignUpSecondStep' | 'Home' | 'CarDetails' | 'Scheduling' | 'SchedulingDetails' | 'Confirmation' | 'MyCars';
}

type Props = StackScreenProps<RootStackParamList, 'Confirmation'>;

export function Confirmation({ navigation, route }: Props) {
  const { width } = useWindowDimensions();

  const { message, screenToNavigate, title } = route.params;

  function handleGoToScreen() {
    navigation.reset({
      index: 0,
      routes: [
        { name: screenToNavigate }
      ] 
    })
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleGoToScreen} />
      </Footer>
    </Container>
  );
}
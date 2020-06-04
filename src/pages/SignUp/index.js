import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import { Background } from '~/components/Background';
// import Input from '~/components/Input';
// import Button from '~/components/Button';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

const SignUp = ({ navigation }) => {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapite="none"
            placeholder="Nome Completo"
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapite="none"
            placeholder="De seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEnry
            placeholder="De seu e-mail"
          />

          <SubmitButton
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            Acessar
          </SubmitButton>

          <SignLink
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <SignLinkText>Criar Conta Gratuita</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
};

export default SignUp;

import React, { useRef } from 'react';
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

const SignIn = ({ navigation }) => {
  const passwordRef = useRef();

  const handleSubmit = () => {};

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapite="none"
            placeholder="De seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEnry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>

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

export default SignIn;

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

const SignUp = ({ navigation }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {};
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
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
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
              navigation.navigate('SignIn');
            }}
          >
            <SignLinkText>Já tenho conta</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
};

export default SignUp;

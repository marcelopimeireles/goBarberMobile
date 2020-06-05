import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import logo from '~/assets/logo.png';

import { Background } from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';
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
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  function handleSubmit() {
    console.tron.log(email, password);
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCapitalize="none"
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassowrd}
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

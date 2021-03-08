import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo_afill.png';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="aFill Cloud" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>
          <Input
            name="email"
            required
            search
            description="E-mail"
            placeholder="Digite seu e-mail cadastrado"
          />
          <Input
            name="password"
            required={false}
            search={false}
            icon={FiLock}
            type="password"
            description="Senha"
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};
export default SignIn;

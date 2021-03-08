import React from 'react';

import { Form } from '@unform/web';
import { Container } from './styles';

import Input from '../components/Input';
import Button from '../components/Button';

const CustomizedInputs: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input type="text" size={50} />
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
          type="password"
          description="Senha"
        />
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
          type="password"
          description="Senha"
        />
      </Form>
    </Container>
  );
};

export default CustomizedInputs;

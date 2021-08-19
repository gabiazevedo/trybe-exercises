import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verificando se existe o botão Enviar.', () => {
  const { getByTestId } = render(<App />);
  const sendButton = getByTestId('id-send');

  expect(sendButton).toBeInTheDocument();
  expect(sendButton.type).toBe('button');
  expect(sendButton).toHaveValue('Enviar');
});

test('Verificando se existem dois botões.', () => {
  const { getAllByRole } = render(<App />);
  const checkButtons = getAllByRole('button');

  expect(checkButtons.length).toBe(2);
});
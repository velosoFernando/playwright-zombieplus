// @ts-check
import { test, expect } from '@playwright/test';

// cenário 001: processo correto
test('deve cadastrar um lead na fila de espera', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', {name: /Aperte o play/}).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera')

  await page.getByPlaceholder('Informe seu nome').fill('Fernando Veloso de Oliveira')
  await page.getByPlaceholder('Informe seu email').fill('fernandoveloso@gmail.com')

  await page.getByTestId('modal')
    .getByText('Quero entrar na fila!').click()

  const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!'
  await expect(page.locator('.toast')).toHaveText(message)

  await expect(page.locator('.toast')).toBeHidden({timeout: 5000})
});

// cenário 002: alertas 
test('não deve cadastrar com email incorreto', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', {name: /Aperte o play/}).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera')

  await page.getByPlaceholder('Informe seu nome').fill('Fernando Veloso de Oliveira')
  await page.getByPlaceholder('Informe seu email').fill('fernando.com.br')

  await page.getByTestId('modal')
    .getByText('Quero entrar na fila!').click()

  await expect(page.locator('.alert')).toHaveText('Email incorreto')
});

// cenário 003: não cadastrar sem campos preenchidos
test('não deve cadastrar sem nome preenchido', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', {name: /Aperte o play/}).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera')

  await page.getByPlaceholder('Informe seu email').fill('fernandoveloso@gmail.com')

  await page.getByTestId('modal')
    .getByText('Quero entrar na fila!').click()

  await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
});

test('não deve cadastrar sem email preenchido', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', {name: /Aperte o play/}).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera')

  await page.getByPlaceholder('Informe seu nome').fill('Fernando Veloso de Oliveira')

  await page.getByTestId('modal')
    .getByText('Quero entrar na fila!').click()

  await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
});

test('não deve cadastrar sem campos preenchidos', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', {name: /Aperte o play/}).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera')

  await page.getByTestId('modal')
    .getByText('Quero entrar na fila!').click()

  await expect(page.locator('.alert')).toHaveText([
    'Campo obrigatório',
    'Campo obrigatório'
  ])
});
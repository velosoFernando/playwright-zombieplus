// @ts-check
import { test, expect } from "@playwright/test";

const { LandingPage } = require("./pages/LandingPage");

// cenário 001: processo correto
test("deve cadastrar um lead na fila de espera", async ({ page }) => {
  const landingPage = new LandingPage(page);

  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm(
    "Fernando Veloso",
    "fernandoveloso@gmail.com"
  );
  const message =
    "Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!";
  await landingPage.toastHaveText(message);
});

// cenário 002: alertas
test("não deve cadastrar com email incorreto", async ({ page }) => {
  const landingPage = new LandingPage(page);

  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("Fernando Veloso", "fernando.com.br");

  await landingPage.alertHaveText("Email incorreto");
});

// cenário 003: não cadastrar sem campos preenchidos
test("não deve cadastrar sem nome preenchido", async ({ page }) => {
  const landingPage = new LandingPage(page);

  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("", "fernandoveloso@gmail.com");

  await landingPage.alertHaveText("Campo obrigatório");
});

test("não deve cadastrar sem email preenchido", async ({ page }) => {
  const landingPage = new LandingPage(page);

  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("Fernando Veloso", "");

  await landingPage.alertHaveText("Campo obrigatório");
});

test("não deve cadastrar sem campos preenchidos", async ({ page }) => {
  const landingPage = new LandingPage(page);

  await landingPage.visit();
  await landingPage.openLeadModal();
  await landingPage.submitLeadForm("", "");

  await landingPage.alertHaveText(["Campo obrigatório", "Campo obrigatório"]);
});

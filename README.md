# 🧟‍♂️ Zombie+

Mais que um streaming, uma **experiência arrepiante!**  
O **Zombie+** é uma aplicação full stack inspirada em serviços de streaming, desenvolvida com foco em **automação de testes ponta a ponta** utilizando o **Playwright**.  

O projeto foi criado para demonstrar **boas práticas de testes automatizados**, explorando cenários reais de interação com a interface, validação de dados no banco e integração entre frontend e backend.  

A automação cobre fluxos essenciais da plataforma — como cadastro, exibição de conteúdo e respostas do servidor — garantindo **qualidade, estabilidade e confiabilidade contínua** da aplicação.  

Para suportar esse ambiente completo, o **Zombie+** integra tecnologias modernas como **Node.js**, **PostgreSQL**, **PgAdmin** e **Docker**, simulando um ecossistema real de desenvolvimento e QA automatizado.


***


# 🚀 Tecnologias Utilizadas

<div align="center">

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat)
![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=flat)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=flat)
![pgAdmin](https://img.shields.io/badge/-pgAdmin-316192?logo=postgresql&logoColor=white&style=flat)
![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white&style=flat)
![Playwright](https://img.shields.io/badge/-Playwright-2EAD33?logo=playwright&logoColor=white&style=flat)
![SQL](https://img.shields.io/badge/-SQL-CC2927?logo=databricks&logoColor=white&style=flat)
![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&style=flat)
![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=flat)

</div>

***


# 🧩 Estrutura do Projeto

## 🧠 Banco de Dados (PgAdmin)

O banco de dados pode ser acessado localmente através do **PgAdmin**, utilizando o container configurado no Docker.

🔗 **http://localhost:16543**

🧾 **Credenciais de acesso padrão:**
```bash
Email: admin@qax.com
Senha: pwd123
```
O banco de dados foi configurado e gerenciado através do **PgAdmin**, com as tabelas criadas via API e consultas SQL manuais.

<img width="1914" height="947" alt="image" src="https://github.com/user-attachments/assets/0a7173fc-2489-4e22-9b06-b89816c9680f" />

***

## 💻 Aplicação em Execução

A aplicação web pode ser acessada localmente em:  
🔗 **http://localhost:3000**

<img width="1899" height="946" alt="image" src="https://github.com/user-attachments/assets/3216e1dc-4688-479b-811c-8a7b82315f35" />

***

## 🐳 Executando com Docker

O projeto utiliza containers para rodar o banco de dados e o PgAdmin.

### 📦 Instalação do Docker

Baixe o Docker Desktop em:
🔗 https://www.docker.com/products/docker-desktop/

Instale e abra o aplicativo.

🧠 Verifique se o Docker está ativo:
```
docker --version
docker compose version
```

### 💬 2. Linha única de comando
Quando for só **um comando curto**, use uma **única crase**:

```
Execute `docker compose up -d` para iniciar os containers.
```
### ▶️ Subindo os containers

Execute na raiz do projeto:
```
docker compose up -d
```
Isso iniciará os seguintes serviços:

pgdb → Banco de dados PostgreSQL (porta 5432)
pgadmin → Interface gráfica (porta 16543)

Print do Docker em execução:
<img width="1261" height="712" alt="image" src="https://github.com/user-attachments/assets/1c264329-f55c-4e61-943c-10f1099bb3d2" />

Para encerrar:
```
docker compose down
```

### 🧪 Testes de Regressão (Playwright)

Os testes automatizados validam o comportamento da aplicação, simulando ações de usuários reais.
Eles garantem o funcionamento correto de fluxos como cadastro de leads, carregamento de páginas e exibição de elementos.

🔗 Área de Testes de Regressão:
Zombie+ Regression Tests

***

### ⚙️ Instalação do Node.js e Playwright

1. Instalar o Node.js
Baixe e instale o Node.js LTS em:
👉 https://nodejs.org/en/download

Verifique:
```
node -v
npm -v
```

2. Instalar dependências
Na raiz do projeto:
```
npm install
```

3. Instalar o Playwright
```
npm init playwright@latest
```

4. Executar os testes
```
npx playwright test
```

5. Visualizar o relatório
```
npx playwright show-report
```

***

🗺️ Roadmap

🔗 Zombie+ Roadmap

## 👨‍💻 Autor

### Fernando Veloso
#### QA Engineer
💼 Projeto desenvolvido para fins de aprendizado em automação, containers e integração entre frontend, backend e banco de dados.

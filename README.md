# PeopleHub - Sistema de RH - Backend

<div align="center">
    <img src="https://i.imgur.com/icgjsRQ.png" alt="PeopleHub Logo" width="50%"/>
</div>

---

## 1. Descrição

Este projeto é um sistema básico de Recursos Humanos (RH) desenvolvido com NestJS, que implementa um CRUD (Create, Read, Update, Delete) simples para gerenciar colaboradores.

---

## 2. Sobre esta API

Esta API foi projetada para oferecer uma solução simples e escalável para gerenciar informações de colaboradores em um sistema de RH. A API utiliza o TypeORM como ORM (Object-Relational Mapping) para realizar o contato com um banco de dados MySQL, permitindo a persistência e o gerenciamento eficiente dos dados.

### 2.1. Principais Funcionalidades

1. **Cadastro de Colaboradores**: Adicione novos colaboradores ao sistema com informações como nome, cargo, salário e data de admissão.
2. **Consulta de Colaboradores**: Liste todos os colaboradores ou visualize informações detalhadas de um colaborador específico.
3. **Atualização de Dados**: Edite os dados de um colaborador existente.
4. **Remoção de Colaboradores**: Exclua colaboradores do sistema de forma segura.

---

## 3. Diagrama de Classes

```mermaid
title Diagrama de Classes
classDiagram
class Colaborador {
  - id : number
  - salario: number
  - nome : string
  - cpf : string
  - cargo : string
  - email : string
  - foto : string
  - data_nascimento : string
  - data_contratacao : string
  - data : Date
  + create()
  + findAll()
  + findById()
  + findByRole()
  + update()
  + delete()
}
```

---

## 4. Diagrama Entidade-Relacionamento (DER)

Adicione a imagem do Diagrama:

<div align="center">
    <img src="https://media.discordapp.net/attachments/1306319291791970338/1329516609177391197/image.png?ex=678aa054&is=67894ed4&hm=010ab0f82f16894223a9b0fcbd1299272c0383806e78597e2eaf38055186a08b&=&format=webp&quality=lossless" alt="Diagrama Entidade-Relacionamento (DER)" />
</div>

---

## 5. Tecnologias Utilizadas

| Item                          | Descrição  |
| ----------------------------- | ---------- |
| **Servidor**                  | Node.js    |
| **Linguagem de Programação**  | TypeScript |
| **Framework**                 | NestJS     |
| **ORM**                       | TypeORM    |
| **Banco de Dados Relacional** | MySQL      |

---

## 6. Configuração e Execução

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o banco de dados no arquivo `app.module.ts`.
4. Execute a aplicação:
   ```bash
   npm run start:dev

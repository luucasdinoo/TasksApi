# API RESTful de Tarefas

## Descrição do Projeto

Esta é uma API RESTful desenvolvida para uma aplicação de tarefas, onde os usuários podem organizar, monitorar e atualizar suas atividades. A API permite realizar operações de CRUD (Create, Read, Update, Delete) para gerenciar tarefas, e pode ser facilmente integrada com um frontend para oferecer uma interface completa aos usuários.

**Funcionalidades principais:**

- Cadastro de novas tarefas
- Listagem de todas as tarefas
- Atualização do status das tarefas
- Exclusão de tarefas

## Pré-requisitos

Antes de começar, você precisa garantir que o ambiente de desenvolvimento esteja configurado corretamente. Abaixo estão os requisitos necessários para rodar este projeto.

### 1. **Node.js**

A API foi desenvolvida utilizando Node.js. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. A versão recomendada é a mais recente LTS.

**Verifique a versão do Node.js instalada:**
node -v

**Verifique a versão do npm instalada:**
npm -v

### 2. **Banco de dados Postgres**

Você precisa ter um banco de dados postgres configurado em sua máquina, utilizando o docker compose ou se preferir, localmente.

## Deploy

Você também pode testar a aplicação com a url do nosso deploy no render. Utilizamos o neon postgres para subir uma instância de banco de dados postgres e o render para colocar nosso web service online.
[Deploy](https://tasksapi-bcst.onrender.com)

## Como Baixar o Repositório

Para baixar o repositório e rodar a API localmente, siga os passos abaixo:

### 1. Clonar o Repositório

```bash
git clone https://github.com/luucasdinoo/TasksApi.git
```

### 2. Navegar para o diretório do projeto

```bash
cd TasksApi
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Configurar .env local

```bash
PORT=
DATABASE_URL=
ENTITIES_DB='./src/modules/**/typeorm/entities/*.js'
MIGRATIONS_DB='src/shared/typeorm/migrations/*.js'
```

### 5. Rodar migrations

```bash
npm run typeorm migration:run -- -d ./src/shared/typeorm/data-source.ts
```

### 6. Build do projeto

```bash
npm run build
```

### 7. Start do projeto

```bash
npm start
```

## Contribuindo

Nós adoramos contribuições! Se você deseja melhorar este projeto, fique à vontade para contribuir. Aqui estão algumas direções para começar:

### Como contribuir:

1. Faça o **fork** deste repositório.
2. Crie uma **branch** para sua modificação: `git checkout -b minha-modificacao`.
3. Faça suas modificações e **commite** as alterações: `git commit -am 'Adicionando novas funcionalidades'`.
4. Envie suas modificações para o repositório remoto: `git push origin minha-modificacao`.
5. Abra um **pull request** explicando suas alterações.

## Autores

- **Lucas Bernadino** - Desenvolvedor | Gerente de configuração.
- **Lucas Bomfim** - Desenvolvedor.
- **Mateus Guerra** - Scrum Master.
- **Álvaro Amaral** - Documentador.

## Licensa

Creative Commons Zero v1.0 Universal

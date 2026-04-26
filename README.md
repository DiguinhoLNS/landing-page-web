# Landing Page Web

Uma landing page moderna e responsiva construída com [Next.js](https://nextjs.org), [React](https://react.dev) e [Tailwind CSS](https://tailwindcss.com).

## 🚀 Stack

- **Framework**: [Next.js 16.2.4](https://nextjs.org)
- **Linguagem**: [TypeScript 5](https://www.typescriptlang.org)
- **React**: 19.2.4
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animações**: [Framer Motion 12](https://www.framer.com/motion)
- **Gerenciamento de Estado**: [Zustand 5](https://github.com/pmndrs/zustand)
- **Validação de Formulários**: [Formik 2](https://formik.org) + [Yup](https://github.com/jquense/yup)
- **Ícones**: [Material Symbols](https://fonts.google.com/icons)
- **Utilitários**: [clsx](https://github.com/lukeed/clsx), [moment](https://momentjs.com)

## 📋 Pré-requisitos

- Node.js 18+
- Yarn 4.14.1 (gerenciador de pacotes)

## 🏃 Começando

### Instalação

```bash
# Instalar dependências
yarn install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

O site atualiza automaticamente conforme você edita os arquivos.

### Variáveis de Ambiente (Resend)

Para o formulário de contato enviar e-mail via Resend, configure:

```bash
RESEND_API_KEY=...
RESEND_TO_EMAIL=seu-email@dominio.com
# Opcional (se não informar, usa onboarding@resend.dev)
RESEND_FROM_EMAIL=contato@seu-dominio.com
```

### Build e Produção

```bash
# Criar build para produção
yarn build

# Iniciar servidor de produção
yarn start
```

## 📦 Scripts Disponíveis

- `yarn dev` - Inicia servidor de desenvolvimento
- `yarn build` - Compila o projeto para produção
- `yarn start` - Inicia servidor de produção (requer `build` prévio)
- `yarn lint` - Executa verificação de linting com ESLint
- `yarn commitlint` - Valida mensagens de commit (executado automaticamente com Husky)

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   ├── not-found.tsx      # Página 404
│   └── (app)/             # Grupo de rotas
│       ├── layout.tsx     # Layout do grupo
│       └── page.tsx       # Página inicial
├── components/            # Componentes React
│   ├── app/              # Componentes de aplicação
│   ├── base/             # Componentes base reutilizáveis
│   ├── common/           # Componentes comuns (Button, Icon, etc)
│   └── page/             # Componentes específicos de página
├── hooks/                # React Hooks personalizados
│   ├── useAppBreakpoint/
│   └── useOutsideClick/
└── modules/              # Módulos de funcionalidades
    ├── error/            # Módulo de erro
    └── home/             # Módulo home
```

## ⚙️ Configuração

### Commitlint

Mensagens de commit validadas com Commitlint (Conventional Commits). Configuração em `commitlint.config.js`.

Formato esperado:
```
<type>(<scope>): <subject>
```

Exemplos:
- `feat(header): adicionar novo menu`
- `fix(button): corrigir espaçamento`
- `docs(readme): atualizar instruções`

### Husky

Hooks de git automáticos para validar commits. Configurado em `.husky/`.

## 📚 Recursos Úteis

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Zustand](https://github.com/pmndrs/zustand)

## 📝 Licença

Este projeto está sob a licença MIT.

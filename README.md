# rodrigo.dev

Portfólio pessoal construído com [Next.js](https://nextjs.org) (App Router), [React](https://react.dev) e [Tailwind CSS](https://tailwindcss.com). Página única com navegação por seções, tema claro/escuro e formulário de contato com envio de e-mail via [Resend](https://resend.com).

## ✨ Funcionalidades

- **Seções**: Início, Experiência, Contribuições, Produtos, Projetos, Setup e Contato
- **Navegação por seção**: header com scroll spy no desktop e barra de navegação inferior (`BottomNav`) no mobile
- **Tema claro/escuro** com `@wrksz/themes` (padrão: escuro)
- **Animações** com Framer Motion — revelação ao rolar (`Reveal`), molas e física compartilhadas em `src/utils/motion`
- **Carrosséis arrastáveis** (`Pager` + `useDragGesture`)
- **Formulário de contato** validado com Formik + Yup, enviado pela rota `POST /api/contact`
- **Barra de progresso** de navegação com `@bprogress/next`
- **Analytics**: Vercel Analytics, Speed Insights e Microsoft Clarity

## 🚀 Stack

- **Framework**: [Next.js 16.2.4](https://nextjs.org)
- **Linguagem**: [TypeScript 5](https://www.typescriptlang.org)
- **React**: 19.2.4
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com) + `tailwind-scrollbar` + `tailwindcss-animated`
- **Animações**: [Framer Motion 12](https://motion.dev), [typewriter-effect](https://github.com/tameemsafi/typewriterjs)
- **Formulários**: [Formik 2](https://formik.org) + [Yup](https://github.com/jquense/yup)
- **E-mail**: [Resend](https://resend.com)
- **Ícones**: [Material Symbols](https://fonts.google.com/icons)
- **Fontes**: Google Sans e Roboto via `next/font`
- **Utilitários**: [clsx](https://github.com/lukeed/clsx)

## 📋 Pré-requisitos

- Node.js 20+
- Yarn 4.14.1 (via Corepack: `corepack enable`)

## 🏃 Começando

```bash
# Instalar dependências
yarn install

# Iniciar servidor de desenvolvimento
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Variáveis de Ambiente

Crie um `.env.local` na raiz:

```bash
# Resend — envio do formulário de contato
RESEND_API_KEY=...
CONTACT_EMAIL=seu-email@dominio.com   # destinatário das mensagens

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_ID=...
```

> O remetente está fixo em `src/app/api/contact/route.ts` (`contato@rodrigolns.com.br`) e precisa ser um domínio verificado na sua conta Resend.

### Build e Produção

```bash
yarn build
yarn start
```

## 📦 Scripts

| Script | Descrição |
| --- | --- |
| `yarn dev` | Servidor de desenvolvimento |
| `yarn build` | Build de produção |
| `yarn start` | Servidor de produção (requer `build`) |
| `yarn lint` | ESLint |
| `yarn commitlint` | Valida a mensagem de commit (executado pelo Husky) |

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── (app)/                # Layout com Header, Footer e BottomNav + página inicial
│   ├── api/contact/          # Rota POST do formulário de contato (Resend)
│   ├── globals.css           # Tokens de tema e estilos globais
│   ├── layout.tsx            # Layout raiz: fontes, tema, analytics
│   └── not-found.tsx         # Página 404
├── components/
│   ├── app/                  # Providers (ClientProvider, barra de progresso)
│   ├── base/                 # Primitivos (ReactPortal)
│   ├── common/               # Button, Chip, Icon, Pager, Reveal, Tab, TextInput...
│   └── page/                 # Header, Footer, BottomNav, Section, Container
├── hooks/                    # useScrollSpy, useSectionNav, useDragGesture,
│                             # usePressable, useMediaQuery, useAppBreakpoint...
├── modules/
│   ├── error/                # Página de erro / 404
│   └── home/
│       ├── constants/        # Conteúdo: seções, empregos, projetos, contatos, setup
│       ├── controllers/      # Lógica do formulário de contato
│       ├── interfaces/       # Tipos do conteúdo
│       ├── pages/Home/       # Página inicial e suas seções
│       └── services/         # Chamada à API de contato
└── utils/
    ├── motion/               # Springs e física compartilhadas das animações
    └── scrollToView/
```

### Editando o conteúdo

Todo o conteúdo do portfólio fica em `src/modules/home/constants/`:

- `sections.ts` — ordem, rótulos e ícones da navegação
- `jobs.ts` — experiência profissional
- `contributions.ts` — contribuições
- `businessProjects.ts` — produtos
- `personalProjects.ts` / `projectStatus.ts` — projetos pessoais e seus status
- `setup.ts` — setup de trabalho e jogos
- `contacts.ts` — links de contato

## ⚙️ Convenções

### Commits

Mensagens validadas com Commitlint ([Conventional Commits](https://www.conventionalcommits.org)) via hook `commit-msg` do Husky. Configuração em `commitlint.config.js`.

```
<type>(<scope>): <subject>
```

Exemplos:
- `feat(header): adicionar novo menu`
- `fix(button): corrigir espaçamento`
- `docs(readme): atualizar instruções`

## 📝 Licença

Este projeto está sob a licença MIT.

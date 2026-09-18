# Dependency Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Atualizar o toolchain e todas as dependências do portfólio para versões atuais compatíveis, mantendo o projeto instalável, lintável, compilável e executável em produção.

**Architecture:** A atualização será feita no manifesto e lockfile, acompanhada das migrações de configuração exigidas por Next 16, ESLint flat config, Tailwind 4/DaisyUI 5 e tsParticles 4. O código de UI só será alterado onde a API das bibliotecas mudou; a validação usará os gates do projeto e uma execução real das rotas.

**Tech Stack:** Node.js 26.9.0, pnpm 12.4.2, Next.js 16.3.5, React 19.3.0, TypeScript 6.0.2, ESLint 9.39.5, Tailwind CSS 4.3.3, daisyUI 5.7.42, tsParticles 4.4.0 e Prisma 7.10.0 estável.

**Spec:** Solicitação do usuário nesta conversa: atualizar todas as bibliotecas e o toolchain, mantendo o projeto funcionando.

## Global Constraints

- Manter o App Router e as rotas `/`, `/projetos` e `/contato`.
- Usar apenas versões publicadas no registry; evitar RCs quando houver par estável compatível.
- Preservar o comportamento visual existente, incluindo temas light/dark, partículas e scroll suave.
- Validar com `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm build` e execução HTTP local.
- Atualizar a imagem Docker e usar o gerenciador pnpm fixado no manifesto.

---

### Task 1: Atualizar manifesto, toolchain e lockfile

**Files:**
- Modify: `.node-version`
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Create: `pnpm-workspace.yaml`
- Modify: `Dockerfile`
- Create: `.dockerignore`

**Interfaces:**
- Produces: instalação reproduzível com Node 26.9.0 e pnpm 12.4.2.

- [x] Atualizar versões diretas para os releases atuais compatíveis: Next/eslint-config-next 16.3.5, React/React DOM/tipos 19.3.0, TypeScript 6.0.2, ESLint 9.39.5, Tailwind 4.3.3, daisyUI 5.7.42, Prisma/client 7.10.0, Redux Toolkit 2.12.0, React Redux 9.3.0, OpenTelemetry atual, bcryptjs 3.0.3 e tipos Node 26.6.1.
- [x] Substituir os pacotes legados de partículas por `@tsparticles/react`, `@tsparticles/engine` e `@tsparticles/slim`, todos em 4.4.0.
- [x] Adicionar `@tailwindcss/postcss` 4.3.3 e remover `autoprefixer`, que deixou de ser necessário no pipeline Tailwind 4.
- [x] Fixar `packageManager` em `pnpm@12.4.2` e atualizar a base Docker para Node 26.9.0 Alpine usando o pnpm fixado.
- [x] Instalar o pnpm fixado diretamente na imagem, pois Node 26 não inclui mais Corepack, e excluir artefatos locais do contexto Docker.
- [x] Regenerar o lockfile e confirmar que a instalação congelada não precisa modificar arquivos.

### Task 2: Migrar configurações para as APIs atuais

**Files:**
- Create: `eslint.config.mjs`
- Delete: `.eslintrc.json`
- Create: `postcss.config.mjs`
- Delete: `postcss.config.js`
- Modify: `src/app/globals.css`
- Delete: `tailwind.config.ts`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: versões instaladas na Task 1.
- Produces: lint flat-config e pipeline CSS Tailwind 4/DaisyUI 5.

- [x] Compor `eslint-config-next/core-web-vitals`, `eslint-config-next/typescript` e o preset base flat da configuração Rocketseat 3.
- [x] Trocar `next lint` pelo CLI direto do ESLint.
- [x] Configurar PostCSS exclusivamente com `@tailwindcss/postcss`.
- [x] Trocar diretivas `@tailwind` pelo import Tailwind 4 e declarar DaisyUI/themes no CSS.
- [x] Preservar explicitamente o scroll suave com `data-scroll-behavior="smooth"` no `<html>`.

### Task 3: Migrar o efeito de partículas

**Files:**
- Modify: `src/components/effects/lines.tsx`

**Interfaces:**
- Consumes: `@tsparticles/react`, `@tsparticles/engine` e `@tsparticles/slim` 4.4.0.
- Produces: o mesmo efeito visual com inicialização compatível com `ParticlesProvider`.

- [x] Atualizar imports e o tipo `Engine` para o namespace `@tsparticles`.
- [x] Envolver o componente com `ParticlesProvider` e fornecer callback estável que chama `loadSlim`.
- [x] Manter id, opções de interação, cor Redux, links e comportamento de retina existentes.

### Task 4: Verificar instalação, qualidade, build e runtime

**Files:**
- No additional source files expected.

**Interfaces:**
- Consumes: resultado das Tasks 1–3.
- Produces: evidência de instalação, lint, build, container e rotas principais.

- [x] Rodar `pnpm install --frozen-lockfile`.
- [x] Rodar `pnpm lint` e corrigir erros introduzidos pela migração.
- [x] Rodar `pnpm build` e corrigir erros de tipos ou bundling.
- [x] Iniciar o servidor de produção e verificar HTTP 200 para `/`, `/projetos` e `/contato`.
- [x] Construir a imagem Docker para confirmar que o fluxo de produção usa a mesma instalação.
- [x] Conferir `git diff --check`, estado do Git e lista final de versões.

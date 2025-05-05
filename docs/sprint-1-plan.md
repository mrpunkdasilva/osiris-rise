# 🚀 Osiris Rise - Planejamento da Sprint 1

## 📅 Período: 01/07/2023 - 07/07/2023

## 🎯 Meta da Sprint
Estabelecer a estrutura básica do projeto e implementar o sistema de autenticação como fundação para as demais funcionalidades.

## 🔍 Foco
Como desenvolvedor solo, o foco será estabelecer a arquitetura base e implementar funcionalidades essenciais que permitam construir incrementalmente sobre elas nas próximas sprints.

## 📋 Histórias de Usuário Selecionadas

### US-001: Registro de Usuário (8 pontos)
**Como** um novo usuário,  
**Eu quero** me registrar no aplicativo  
**Para que** eu possa acessar as funcionalidades do sistema.

### US-002: Login de Usuário (5 pontos)
**Como** um usuário registrado,  
**Eu quero** fazer login no aplicativo  
**Para que** eu possa acessar minha conta e dados.

## 📝 Tarefas Técnicas

### Configuração do Projeto (3 pontos)
- [x] Inicializar repositório Git
- [ ] Configurar estrutura de pastas do projeto Angular
- [ ] Configurar módulos Core, Shared e Features
- [ ] Configurar roteamento básico
- [ ] Configurar linting e formatação de código

### Autenticação - Backend (5 pontos)
- [ ] Configurar projeto Spring Boot
- [ ] Implementar modelo de usuário
- [ ] Configurar Spring Security
- [ ] Implementar endpoint de registro
- [ ] Implementar endpoint de login com JWT
- [ ] Escrever testes unitários

### Autenticação - Frontend (5 pontos)
- [ ] Criar componente de registro
- [ ] Criar componente de login
- [ ] Implementar serviço de autenticação
- [ ] Configurar interceptor HTTP para tokens
- [ ] Implementar guards de rota
- [ ] Criar layout básico com header e navegação

## 📊 Estimativa Total: 26 pontos

## 🛣️ Plano Diário

### Segunda-feira
- Configuração do projeto Angular
- Configuração do projeto Spring Boot
- Implementar modelo de usuário

### Terça-feira
- Configurar Spring Security
- Implementar endpoint de registro
- Implementar endpoint de login

### Quarta-feira
- Criar componente de registro
- Criar componente de login
- Implementar serviço de autenticação

### Quinta-feira
- Configurar interceptor HTTP
- Implementar guards de rota
- Criar layout básico

### Sexta-feira
- Escrever testes unitários
- Integrar frontend e backend
- Resolver bugs e ajustes finais

### Sábado/Domingo
- Buffer para tarefas pendentes
- Documentação
- Planejamento da próxima sprint

## 🧪 Critérios de Aceitação

### Registro de Usuário
- Formulário com validação de campos
- Feedback visual de erros
- Redirecionamento após registro bem-sucedido
- Armazenamento seguro de senha (hash)

### Login de Usuário
- Formulário com validação
- Autenticação via JWT
- Armazenamento seguro do token
- Redirecionamento para dashboard após login

## 📈 Métricas de Acompanhamento
- Tarefas concluídas vs. planejadas
- Pontos entregues vs. estimados
- Bugs encontrados durante a sprint

## 🔄 Daily Standup (Auto-reflexão)
Reservar 10 minutos no início de cada dia para:
1. O que foi concluído ontem?
2. O que será feito hoje?
3. Há impedimentos?

## 📝 Notas
- Como desenvolvedor solo, manter escopo reduzido e realista
- Priorizar qualidade sobre quantidade
- Documentar decisões arquiteturais importantes
- Fazer commits frequentes com mensagens claras
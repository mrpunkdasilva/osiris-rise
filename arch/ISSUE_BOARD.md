# 📋 Osiris Rise - Issue Board (Scrum)

## 🏆 Product Vision
Criar um aplicativo de transformação pessoal gamificado que ajude usuários a superar vícios, estabelecer hábitos saudáveis e acompanhar seu progresso físico e mental através de uma jornada inspirada na mitologia egípcia.

## 🎯 Sprint Atual: Sprint 1 - Fundação (2 semanas)
**Meta da Sprint:** Estabelecer a arquitetura base e implementar o sistema de autenticação e o contador de recaídas.

### 📥 Backlog da Sprint

#### 🔄 Em Progresso
- [ ] **OS-001:** Configurar projeto Angular com estrutura de módulos e roteamento
  - Prioridade: Alta
  - Pontos: 5
  - Responsável: [Frontend Dev]
  - Descrição: Inicializar projeto Angular com a estrutura de pastas definida na arquitetura, configurar módulos core, shared e feature, implementar roteamento básico.

- [ ] **OS-002:** Configurar projeto Spring Boot com estrutura de pacotes e dependências
  - Prioridade: Alta
  - Pontos: 5
  - Responsável: [Backend Dev]
  - Descrição: Inicializar projeto Spring Boot com a estrutura de pacotes definida na arquitetura, configurar dependências (Spring Data JPA, Spring Security, etc.), configurar conexão com banco de dados.

#### 📋 A Fazer
- [ ] **OS-003:** Implementar sistema de autenticação (Backend)
  - Prioridade: Alta
  - Pontos: 8
  - Responsável: [Backend Dev]
  - Descrição: Implementar autenticação JWT, criar endpoints para registro e login, configurar Spring Security.

- [ ] **OS-004:** Implementar sistema de autenticação (Frontend)
  - Prioridade: Alta
  - Pontos: 8
  - Responsável: [Frontend Dev]
  - Descrição: Criar componentes de login e registro, implementar serviço de autenticação, configurar interceptors HTTP para tokens JWT.

- [ ] **OS-005:** Criar modelo de dados para usuários e recaídas
  - Prioridade: Alta
  - Pontos: 5
  - Responsável: [Backend Dev]
  - Descrição: Definir entidades JPA para usuários e registros de recaídas, implementar repositórios e serviços básicos.

- [ ] **OS-006:** Implementar contador de recaídas (Backend)
  - Prioridade: Média
  - Pontos: 5
  - Responsável: [Backend Dev]
  - Descrição: Criar endpoints para registrar e consultar recaídas, implementar lógica para calcular dias consecutivos sem recaídas.

- [ ] **OS-007:** Implementar contador de recaídas (Frontend)
  - Prioridade: Média
  - Pontos: 5
  - Responsável: [Frontend Dev]
  - Descrição: Criar componente de contador de dias, implementar serviço para comunicação com API, criar interface para registrar recaídas.

- [ ] **OS-008:** Configurar CI/CD básico
  - Prioridade: Baixa
  - Pontos: 3
  - Responsável: [DevOps]
  - Descrição: Configurar pipeline básico de CI/CD para build e testes automatizados.

#### ✅ Concluído
- [x] **OS-000:** Criar documento de arquitetura
  - Prioridade: Alta
  - Pontos: 3
  - Responsável: [Tech Lead]
  - Descrição: Definir arquitetura do projeto, estrutura de pastas e padrões de desenvolvimento.

## 📚 Product Backlog

### 🚀 Épico: Sistema de Autenticação e Perfil
- [ ] **OS-010:** Implementar perfil de usuário (Backend)
  - Prioridade: Alta
  - Pontos: 5
  - Descrição: Criar endpoints para gerenciar perfil de usuário, incluindo atualização de dados e upload de foto.

- [ ] **OS-011:** Implementar perfil de usuário (Frontend)
  - Prioridade: Alta
  - Pontos: 5
  - Descrição: Criar componentes para visualização e edição de perfil de usuário.

- [ ] **OS-012:** Implementar recuperação de senha
  - Prioridade: Média
  - Pontos: 5
  - Descrição: Criar fluxo de recuperação de senha com envio de email.

### 🚀 Épico: Sistema de Controle de Recaídas
- [ ] **OS-020:** Implementar sistema de pontos para abstinência
  - Prioridade: Alta
  - Pontos: 5
  - Descrição: Criar lógica para atribuir pontos baseados em períodos de abstinência.

- [ ] **OS-021:** Implementar marcos de progresso
  - Prioridade: Média
  - Pontos: 3
  - Descrição: Criar sistema para celebrar marcos importantes (7, 30, 90, 180, 365 dias).

- [ ] **OS-022:** Implementar histórico de recaídas
  - Prioridade: Média
  - Pontos: 5
  - Descrição: Criar visualização de histórico de recaídas com gráficos e estatísticas.

### 🚀 Épico: Sistema de Gerenciamento de Treinos
- [ ] **OS-030:** Implementar cadastro de exercícios (Backend)
  - Prioridade: Alta
  - Pontos: 5
  - Descrição: Criar endpoints para gerenciar exercícios, incluindo nome, descrição, grupos musculares.

- [ ] **OS-031:** Implementar cadastro de exercícios (Frontend)
  - Prioridade: Alta
  - Pontos: 5
  - Descrição: Criar interface para gerenciar exercícios.

- [ ] **OS-032:** Implementar registro de treinos (Backend)
  - Prioridade: Alta
  - Pontos: 8
  - Descrição: Criar endpoints para registrar treinos com exercícios, séries e repetições.

- [ ] **OS-033:** Implementar registro de treinos (Frontend)
  - Prioridade: Alta
  - Pontos: 8
  - Descrição: Criar interface para registrar treinos.

- [ ] **OS-034:** Implementar histórico de treinos
  - Prioridade: Média
  - Pontos: 5
  - Descrição: Criar visualização de histórico de treinos com estatísticas.

### 🚀 Épico: Sistema de Hábitos
- [ ] **OS-040:** Implementar cadastro de hábitos (Backend)
  - Prioridade: Alta
  - Pontos: 5
  - Descrição: Criar endpoints para gerenciar hábitos, incluindo nome, descrição, pontuação.

- [ ] **OS-041:** Implementar cadastro de hábitos (Frontend)
  - Prioridade: Alta
  - Pontos: 5
  - Descrição: Criar interface para gerenciar hábitos.

- [ ] **OS-042:** Implementar checklist diário (Backend)
  - Prioridade: Alta
  - Pontos: 5
  - Descrição: Criar endpoints para gerenciar checklist diário de hábitos.

- [ ] **OS-043:** Implementar checklist diário (Frontend)
  - Prioridade: Alta
  - Pontos: 5
  - Descrição: Criar interface para checklist diário de hábitos.

### 🚀 Épico: Sistema de Metas e Objetivos
- [ ] **OS-050:** Implementar cadastro de metas (Backend)
  - Prioridade: Média
  - Pontos: 5
  - Descrição: Criar endpoints para gerenciar metas, incluindo nome, descrição, prazo, progresso.

- [ ] **OS-051:** Implementar cadastro de metas (Frontend)
  - Prioridade: Média
  - Pontos: 5
  - Descrição: Criar interface para gerenciar metas.

- [ ] **OS-052:** Implementar barras de progresso
  - Prioridade: Baixa
  - Pontos: 3
  - Descrição: Criar componente de barra de progresso para visualizar avanço em direção às metas.

### 🚀 Épico: Avatar Personalizável
- [ ] **OS-060:** Implementar sistema de avatar (Backend)
  - Prioridade: Média
  - Pontos: 8
  - Descrição: Criar endpoints para gerenciar avatar, incluindo características físicas e evolução.

- [ ] **OS-061:** Implementar sistema de avatar (Frontend)
  - Prioridade: Média
  - Pontos: 13
  - Descrição: Criar componente de visualização e personalização de avatar.

### 🚀 Épico: Sistema de Gamificação
- [ ] **OS-070:** Implementar sistema de pontos de experiência (Backend)
  - Prioridade: Alta
  - Pontos: 5
  - Descrição: Criar lógica para atribuir pontos de experiência baseados em atividades.

- [ ] **OS-071:** Implementar sistema de níveis (Backend)
  - Prioridade: Média
  - Pontos: 5
  - Descrição: Criar lógica para progressão de níveis baseada em pontos de experiência.

- [ ] **OS-072:** Implementar sistema de medalhas e conquistas (Backend)
  - Prioridade: Baixa
  - Pontos: 8
  - Descrição: Criar sistema de medalhas e conquistas desbloqueáveis.

- [ ] **OS-073:** Implementar visualização de gamificação (Frontend)
  - Prioridade: Média
  - Pontos: 8
  - Descrição: Criar interfaces para visualizar pontos, níveis, medalhas e conquistas.

### 🚀 Épico: Estatísticas e Análises
- [ ] **OS-080:** Implementar dashboard de estatísticas (Backend)
  - Prioridade: Média
  - Pontos: 8
  - Descrição: Criar endpoints para fornecer estatísticas e métricas de desempenho.

- [ ] **OS-081:** Implementar dashboard de estatísticas (Frontend)
  - Prioridade: Média
  - Pontos: 8
  - Descrição: Criar dashboard com visualizações gráficas de estatísticas e progresso.

## 📊 Métricas da Sprint

### Velocidade da Equipe
- Sprint 0: N/A
- Sprint 1: Planejado - 44 pontos

### Burndown Chart
```
Pontos |
   44 |█
      |  █
      |    █
      |      █
      |        █
      |          █
      |            █
      |              █
      +----------------
         1 2 3 4 5 6 7 8 9 10 (Dias)
```

## 🗓️ Planejamento de Releases

### Release 1.0 - MVP (Sprint 1-3)
- Sistema de autenticação
- Contador de recaídas básico
- Registro de treinos básico
- Sistema de hábitos básico

### Release 2.0 - Gamificação (Sprint 4-6)
- Sistema de pontos e níveis
- Avatar personalizável
- Medalhas e conquistas
- Dashboard de estatísticas

### Release 3.0 - Recursos Avançados (Sprint 7-9)
- Metas e objetivos avançados
- Análises detalhadas
- Integração com dispositivos de fitness
- Recursos sociais e compartilhamento

## 📝 Definição de Pronto
- Código implementado seguindo os padrões de arquitetura
- Testes unitários implementados com cobertura mínima de 80%
- Revisão de código realizada por pelo menos um membro da equipe
- Documentação atualizada
- Todos os critérios de aceitação atendidos
- Build de CI/CD passando sem erros
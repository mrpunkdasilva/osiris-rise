# 📐 Osiris Rise - Architecture Guide

## 🏗️ Overview

Osiris Rise é um aplicativo de transformação pessoal com elementos de gamificação inspirados na mitologia egípcia. O aplicativo segue uma arquitetura cliente-servidor com:

- **Frontend**: Aplicação Angular 17+
- **Backend**: API REST Spring Boot
- **Database**: PostgreSQL

## 🧩 Princípios de Arquitetura

### Clean Architecture
- Separação de responsabilidades
- Independência de frameworks
- Testabilidade
- Inversão de dependência
- Design orientado ao domínio (DDD)

### Design Patterns
- Repository Pattern para acesso a dados
- Factory Pattern para criação de entidades
- Observer Pattern para atualizações em tempo real
- Strategy Pattern para diferentes regras de gamificação
- Command Pattern para ações do usuário

### Princípios SOLID
- Single Responsibility Principle (SRP)
- Open/Closed Principle (OCP)
- Liskov Substitution Principle (LSP)
- Interface Segregation Principle (ISP)
- Dependency Inversion Principle (DIP)

## 📁 Estrutura Frontend (Angular)

```
osiris-rise-frontend/
├── src/
│   ├── app/                      # Código principal da aplicação
│   │   ├── core/                 # Funcionalidades essenciais
│   │   │   ├── auth/             # Serviços de autenticação
│   │   │   ├── http/             # Interceptadores HTTP
│   │   │   ├── guards/           # Guards de rotas
│   │   │   └── models/           # Modelos de dados core
│   │   │
│   │   ├── features/             # Módulos de features
│   │   │   ├── dashboard/        # Dashboard principal
│   │   │   ├── relapse-tracker/  # Feature de rastreamento de recaídas
│   │   │   ├── workout-manager/  # Gerenciamento de treinos
│   │   │   ├── habit-system/     # Rastreamento de hábitos
│   │   │   ├── goals/            # Metas e objetivos
│   │   │   ├── avatar/           # Personalização de avatar
│   │   │   └── statistics/       # Estatísticas e análises
│   │   │
│   │   ├── shared/               # Componentes/serviços compartilhados
│   │   │   ├── components/       # Componentes reutilizáveis
│   │   │   ├── directives/       # Diretivas personalizadas
│   │   │   ├── pipes/            # Pipes personalizados
│   │   │   └── services/         # Serviços compartilhados
│   │   │
│   │   └── shell/                # Shell da aplicação
│   │       ├── header/           # Cabeçalho do app
│   │       ├── footer/           # Rodapé do app
│   │       ├── sidebar/          # Barra lateral de navegação
│   │       └── layout/           # Componentes de layout principal
│   │
│   ├── assets/                   # Ativos estáticos
│   │   ├── images/               # Arquivos de imagem
│   │   ├── icons/                # Arquivos de ícones
│   │   └── animations/           # Animações Lottie
│   │
│   ├── environments/             # Configurações de ambiente
│   └── theme/                    # Temas e estilos
│       ├── variables.scss        # Variáveis SCSS
│       └── mixins.scss           # Mixins SCSS
│
├── angular.json                  # Configuração Angular
├── tsconfig.json                 # Configuração TypeScript
└── package.json                  # Dependências
```

### Padrões de Arquitetura Frontend

#### Arquitetura de Componentes
- Componentes Smart/Container (com lógica)
- Componentes Presentational/Dumb (apenas UI)
- Estratégia de detecção de mudanças OnPush para performance

#### Gerenciamento de Estado
- NgRx para gerenciamento de estado global
- Organização de store baseada em features
- Padrão Entity adapter para coleções
- Effects para efeitos colaterais e chamadas API

#### Lazy Loading
- Módulos de features carregados sob demanda para performance
- Estratégias de pré-carregamento para melhor UX

#### Programação Reativa
- Fluxo de dados baseado em Observables
- Uso de async pipe nos templates
- Operadores RxJS para transformação de dados

## 📁 Estrutura Backend (Spring Boot)

```
osiris-rise-backend/
├── src/
│   ├── main/
│   │   ├── java/com/osirisrise/
│   │   │   ├── config/           # Classes de configuração
│   │   │   ├── controller/       # Controladores REST
│   │   │   ├── dto/              # Data Transfer Objects
│   │   │   │   ├── request/      # DTOs de requisição
│   │   │   │   └── response/     # DTOs de resposta
│   │   │   ├── exception/        # Exceções personalizadas
│   │   │   ├── mapper/           # Mapeadores de objetos
│   │   │   ├── model/            # Modelos de domínio
│   │   │   │   ├── entity/       # Entidades JPA
│   │   │   │   └── enums/        # Tipos de enumeração
│   │   │   ├── repository/       # Repositórios de dados
│   │   │   ├── security/         # Configuração de segurança
│   │   │   ├── service/          # Serviços de negócio
│   │   │   │   ├── impl/         # Implementações de serviços
│   │   │   │   └── interfaces/   # Interfaces de serviços
│   │   │   └── util/             # Classes utilitárias
│   │   │
│   │   └── resources/
│   │       ├── application.yml   # Propriedades da aplicação
│   │       ├── db/migration/     # Migrações Flyway
│   │       └── static/           # Recursos estáticos
│   │
│   └── test/                     # Classes de teste
│
├── pom.xml                       # Configuração Maven
└── README.md                     # Documentação do projeto
```

### Padrões de Arquitetura Backend

#### Arquitetura em Camadas
- Camada de Controller: Manipula requisições/respostas HTTP
- Camada de Service: Contém lógica de negócio
- Camada de Repository: Acesso e persistência de dados
- Camada de Domain: Entidades e regras de negócio

#### Design de API
- Princípios RESTful
- Estrutura de URL baseada em recursos
- Métodos HTTP e códigos de status apropriados
- Endpoints de API versionados

#### Segurança
- Autenticação baseada em JWT
- Autorização baseada em papéis
- Criptografia de senha
- Limitação de taxa de API

#### Acesso a Dados
- Spring Data JPA para implementação de repositórios
- Flyway para migrações de banco de dados
- Gerenciamento de transações
- Bloqueio otimista para concorrência

## 🔄 Fluxo de Dados

1. **Frontend para Backend**:
   - Serviços Angular fazem requisições HTTP para endpoints REST do Spring Boot
   - Token JWT incluído no cabeçalho Authorization
   - DTOs usados para transferência de dados

2. **Processamento Backend**:
   - Controllers validam requisições e encaminham para serviços
   - Services implementam lógica de negócio
   - Repositories lidam com persistência de dados
   - Eventos de domínio para preocupações transversais

3. **Backend para Frontend**:
   - Respostas JSON estruturadas
   - Paginação para grandes conjuntos de dados
   - Tratamento de erros com códigos de status apropriados

## 🔐 Arquitetura de Segurança

### Fluxo de Autenticação
1. Usuário submete credenciais
2. Backend valida e emite JWT
3. Frontend armazena JWT em armazenamento seguro
4. JWT enviado com cada requisição subsequente
5. Backend valida JWT para rotas protegidas

### Autorização
- Controle de acesso baseado em papéis (RBAC)
- Permissões baseadas em features
- Guards de rota no Angular
- Segurança em nível de método no Spring

## 📊 Design de Banco de Dados

### Entidades Principais
- User
- RelapseRecord
- Workout
- Exercise
- Habit
- Goal
- Avatar
- Achievement

### Relacionamentos
- Um-para-muitos: User para RelapseRecords, Workouts, Habits, Goals
- Muitos-para-muitos: Workout para Exercises
- Um-para-um: User para Avatar

## 🧪 Estratégia de Testes

### Testes Frontend
- Testes unitários com Jasmine e Karma
- Testes de componentes com Angular Testing Library
- Testes E2E com Cypress
- Testes de regressão visual

### Testes Backend
- Testes unitários com JUnit 5
- Testes de integração com Spring Test
- Testes de API com RestAssured
- Testes de performance com JMeter

## 🚀 Pipeline CI/CD

1. Commit de código dispara pipeline
2. Análise de código estática (SonarQube)
3. Build e testes unitários
4. Testes de integração
5. Criação de imagem Docker
6. Implantação em staging
7. Testes E2E em staging
8. Aprovação manual para produção
9. Implantação em produção

## 📱 Considerações Mobile

- Design responsivo para todos os tamanhos de tela
- Capacidades de Progressive Web App (PWA)
- Componentes UI amigáveis ao toque
- Funcionalidade offline com IndexedDB

## 🔄 Estratégia de Controle de Versão

- Fluxo de trabalho com branches de feature
- Revisões de pull request
- Versionamento semântico
- Commits convencionais

## 📈 Monitoramento e Observabilidade

- Métricas de aplicação com Micrometer
- Rastreamento distribuído com Spring Cloud Sleuth
- Logging centralizado com stack ELK
- Verificações de saúde e alertas

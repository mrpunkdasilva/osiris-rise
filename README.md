# OsirisRise

OsirisRise é um aplicativo de transformação pessoal gamificado que ajuda usuários a superar vícios, estabelecer hábitos saudáveis e acompanhar seu progresso físico e mental através de uma jornada inspirada na mitologia egípcia.

## Visão Geral

O aplicativo segue uma arquitetura cliente-servidor com:
- **Frontend**: Aplicação Angular 17+
- **Backend**: API REST Spring Boot
- **Database**: PostgreSQL

## Principais Funcionalidades

- **Contador de Recaídas**: Acompanhe seu progresso na superação de vícios
- **Sistema de Hábitos**: Desenvolva rotinas saudáveis
- **Gerenciamento de Treinos**: Crie treinos personalizados
- **Avatar Personalizável**: Visualize sua transformação
- **Gamificação**: Mantenha-se motivado com pontos, níveis e conquistas

## Desenvolvimento

Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 19.2.6.

### Servidor de Desenvolvimento

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Após iniciar o servidor, abra seu navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você modificar qualquer arquivo fonte.

### Scaffolding de Código

Angular CLI inclui ferramentas poderosas de scaffolding. Para gerar um novo componente, execute:

```bash
ng generate component component-name
```

Para uma lista completa de schematics disponíveis (como `components`, `directives`, ou `pipes`), execute:

```bash
ng generate --help
```

### Build

Para compilar o projeto, execute:

```bash
ng build
```

Isso compilará seu projeto e armazenará os artefatos de build no diretório `dist/`. Por padrão, o build de produção otimiza sua aplicação para performance e velocidade.

### Testes Unitários

Para executar testes unitários com o [Karma](https://karma-runner.github.io), use o seguinte comando:

```bash
ng test
```

### Testes End-to-End

Para testes end-to-end (e2e), execute:

```bash
ng e2e
```

O Angular CLI não vem com um framework de testes end-to-end por padrão. Você pode escolher um que atenda às suas necessidades.

## Arquitetura

O projeto segue os princípios da Clean Architecture, garantindo:
- Separação de responsabilidades
- Independência de frameworks
- Testabilidade
- Inversão de dependência
- Design orientado ao domínio (DDD)

## Contribuição

Este é um projeto open source e suas contribuições são bem-vindas!
- Encontrou um erro?
- Tem uma sugestão?
- Quer adicionar conteúdo?

## Recursos Adicionais

Para mais informações sobre o uso do Angular CLI, incluindo referências detalhadas de comandos, visite a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

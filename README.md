<div align="center">
  <img src=".github/osiris-logo.svg" alt="Osiris Rise Logo" width="200" height="200">
  
  # OsirisRise

  OsirisRise é um aplicativo de transformação pessoal gamificado que ajuda usuários a superar vícios, estabelecer hábitos saudáveis e acompanhar seu progresso físico e mental através de uma jornada inspirada na mitologia egípcia.
</div>

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

## Executando com Docker

### Ambiente de Desenvolvimento

Para iniciar o ambiente de desenvolvimento com hot-reload:

```bash
docker-compose -f docker-compose.dev.yml up
```

Acesse a aplicação em `http://localhost:4200`

### Ambiente de Produção

Para construir e iniciar a aplicação em modo de produção:

```bash
docker-compose up --build
```

Acesse a aplicação em `http://localhost:80`

### Comandos Úteis

#### Visualizar logs
```bash
docker-compose logs -f frontend
```

#### Executar comandos no container
```bash
docker-compose exec frontend sh
```

#### Parar todos os containers
```bash
docker-compose down
```

#### Remover volumes (cuidado, isso apagará os dados do banco)
```bash
docker-compose down -v
```

## Fluxo de Trabalho Git

### Branches

- `main`: Branch principal, contém código estável e pronto para produção
- `develop`: Branch de desenvolvimento, integra features concluídas
- `feature/*`: Branches para desenvolvimento de novas funcionalidades
- `bugfix/*`: Branches para correção de bugs
- `release/*`: Branches para preparação de releases

### Commits

Seguimos o padrão de [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

Exemplos:
- `feat(auth): add login with Google`
- `fix(dashboard): correct habit tracking calculation`
- `docs(readme): update installation instructions`

## Contribuição

Este é um projeto open source e suas contribuições são bem-vindas!
- Encontrou um erro?
- Tem uma sugestão?
- Quer adicionar conteúdo?

### Como contribuir

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Faça commit das suas alterações (`git commit -m 'feat: add some amazing feature'`)
4. Faça push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## Recursos Adicionais

Para mais informações sobre o uso do Angular CLI, incluindo referências detalhadas de comandos, visite a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

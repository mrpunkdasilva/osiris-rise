# 📝 Osiris Rise - Histórias de Usuário

## 🧠 Visão Geral

As histórias de usuário descrevem funcionalidades do sistema do ponto de vista do usuário final, focando em suas necessidades e objetivos. Cada história segue o formato:

> Como [tipo de usuário], eu quero [objetivo] para que [benefício/valor].

## 👤 Autenticação e Perfil

### US-001: Registro de Usuário
**Como** um novo usuário,  
**Eu quero** me registrar no aplicativo  
**Para que** eu possa acessar as funcionalidades do sistema.

**Critérios de Aceitação:**
- Permitir registro com e-mail/senha
- Permitir registro com contas Google e Apple
- Validar formato de e-mail e força da senha
- Enviar e-mail de confirmação
- Exibir mensagens de erro claras

### US-002: Login de Usuário
**Como** um usuário registrado,  
**Eu quero** fazer login no aplicativo  
**Para que** eu possa acessar minha conta e dados.

**Critérios de Aceitação:**
- Permitir login com e-mail/senha
- Permitir login com contas Google e Apple
- Oferecer opção "Lembrar-me"
- Exibir mensagens de erro claras
- Implementar bloqueio após múltiplas tentativas falhas

### US-003: Recuperação de Senha
**Como** um usuário que esqueceu sua senha,  
**Eu quero** recuperar o acesso à minha conta  
**Para que** eu possa continuar usando o aplicativo.

**Critérios de Aceitação:**
- Enviar e-mail com link de redefinição
- Expirar link após 24 horas
- Validar força da nova senha
- Notificar usuário após alteração bem-sucedida

### US-004: Edição de Perfil
**Como** um usuário logado,  
**Eu quero** editar minhas informações de perfil  
**Para que** eu possa manter meus dados atualizados.

**Critérios de Aceitação:**
- Permitir edição de nome, foto e informações básicas
- Validar formatos de dados
- Confirmar alterações sensíveis (e-mail)
- Exibir feedback de sucesso após alterações

## 🔄 Contador de Recaídas

### US-005: Criação de Contador
**Como** um usuário em recuperação,  
**Eu quero** criar um contador de dias sem recaídas  
**Para que** eu possa acompanhar meu progresso.

**Critérios de Aceitação:**
- Permitir nomear o contador
- Definir data de início
- Adicionar descrição opcional
- Visualizar contador imediatamente após criação

### US-006: Visualização de Progresso
**Como** um usuário em recuperação,  
**Eu quero** visualizar meu progresso atual  
**Para que** eu possa me manter motivado.

**Critérios de Aceitação:**
- Exibir dias consecutivos sem recaídas
- Mostrar recorde pessoal
- Apresentar visualização gráfica do progresso
- Exibir marcos e conquistas relacionadas

### US-007: Registro de Recaída
**Como** um usuário em recuperação,  
**Eu quero** registrar quando ocorrer uma recaída  
**Para que** eu possa manter um histórico honesto e identificar padrões.

**Critérios de Aceitação:**
- Permitir registro com data e hora
- Incluir campo para gatilhos e contexto
- Oferecer seleção de emoções associadas
- Reiniciar contador automaticamente
- Exibir mensagem de apoio após registro

### US-008: Análise de Padrões
**Como** um usuário em recuperação,  
**Eu quero** analisar padrões de recaídas  
**Para que** eu possa identificar gatilhos e situações de risco.

**Critérios de Aceitação:**
- Visualizar calendário de recaídas
- Exibir estatísticas de gatilhos comuns
- Mostrar padrões temporais (dias/horários)
- Permitir exportação de dados para análise externa

## 🏋️ Sistema de Treinos

### US-009: Criação de Treino
**Como** um usuário focado em fitness,  
**Eu quero** criar rotinas de treino personalizadas  
**Para que** eu possa seguir um programa estruturado.

**Critérios de Aceitação:**
- Permitir nomear e categorizar treinos
- Adicionar exercícios de uma biblioteca
- Definir séries, repetições e descanso
- Agendar treinos na semana

### US-010: Biblioteca de Exercícios
**Como** um usuário focado em fitness,  
**Eu quero** acessar uma biblioteca de exercícios  
**Para que** eu possa escolher atividades adequadas ao meu nível.

**Critérios de Aceitação:**
- Categorizar por grupo muscular
- Filtrar por equipamento necessário
- Incluir descrições e imagens
- Mostrar nível de dificuldade

### US-011: Registro de Atividade
**Como** um usuário focado em fitness,  
**Eu quero** registrar meus treinos realizados  
**Para que** eu possa acompanhar meu desempenho.

**Critérios de Aceitação:**
- Marcar exercícios como concluídos
- Registrar peso e repetições realizadas
- Cronometrar descanso entre séries
- Adicionar notas e percepções

### US-012: Análise de Progresso
**Como** um usuário focado em fitness,  
**Eu quero** visualizar meu progresso nos treinos  
**Para que** eu possa avaliar minha evolução.

**Critérios de Aceitação:**
- Exibir gráficos de evolução de carga
- Mostrar volume de treino por grupo muscular
- Calcular frequência semanal/mensal
- Comparar com períodos anteriores

## 🌱 Sistema de Hábitos

### US-013: Criação de Hábito
**Como** um usuário buscando consistência,  
**Eu quero** criar hábitos personalizados para acompanhar  
**Para que** eu possa desenvolver rotinas positivas.

**Critérios de Aceitação:**
- Permitir nomear e descrever o hábito
- Definir frequência (diária, dias específicos, etc.)
- Categorizar hábitos (saúde, produtividade, etc.)
- Configurar lembretes

### US-014: Check-in Diário
**Como** um usuário buscando consistência,  
**Eu quero** registrar a conclusão dos meus hábitos diários  
**Para que** eu possa acompanhar minha consistência.

**Critérios de Aceitação:**
- Marcar hábitos como concluídos
- Visualizar status do dia atual
- Adicionar notas opcionais
- Receber feedback visual/gamificado

### US-015: Visualização de Consistência
**Como** um usuário buscando consistência,  
**Eu quero** visualizar minha consistência ao longo do tempo  
**Para que** eu possa identificar padrões e melhorar.

**Critérios de Aceitação:**
- Exibir calendário de hábitos
- Mostrar sequências atuais
- Calcular taxa de conclusão
- Apresentar visualizações por categoria

### US-016: Empilhamento de Hábitos
**Como** um usuário buscando consistência,  
**Eu quero** associar novos hábitos a hábitos existentes  
**Para que** eu possa criar rotinas encadeadas mais facilmente.

**Critérios de Aceitação:**
- Permitir vincular hábitos entre si
- Sugerir sequência lógica
- Notificar hábitos encadeados
- Visualizar conexões entre hábitos

## 🎯 Metas e Objetivos

### US-017: Definição de Metas
**Como** um usuário orientado a objetivos,  
**Eu quero** definir metas mensuráveis  
**Para que** eu possa trabalhar em direção a resultados específicos.

**Critérios de Aceitação:**
- Criar metas com título e descrição
- Definir prazo e critérios de sucesso
- Categorizar por área da vida
- Estabelecer metas SMART (específicas, mensuráveis, atingíveis, relevantes, temporais)

### US-018: Acompanhamento de Progresso
**Como** um usuário orientado a objetivos,  
**Eu quero** acompanhar o progresso das minhas metas  
**Para que** eu possa ajustar esforços conforme necessário.

**Critérios de Aceitação:**
- Atualizar porcentagem de conclusão
- Registrar marcos intermediários
- Visualizar linha do tempo
- Receber lembretes de prazos

### US-019: Decomposição de Metas
**Como** um usuário orientado a objetivos,  
**Eu quero** dividir metas grandes em sub-objetivos  
**Para que** eu possa gerenciar melhor tarefas complexas.

**Critérios de Aceitação:**
- Criar sub-objetivos vinculados à meta principal
- Definir dependências entre sub-objetivos
- Atualizar progresso da meta principal automaticamente
- Visualizar estrutura hierárquica

## 🎮 Gamificação

### US-020: Sistema de Pontos e Níveis
**Como** um usuário buscando motivação,  
**Eu quero** ganhar pontos e subir de nível  
**Para que** eu me sinta recompensado pelo meu progresso.

**Critérios de Aceitação:**
- Ganhar pontos por ações positivas
- Subir de nível ao acumular pontos
- Visualizar progresso para próximo nível
- Receber bonificações por nível

### US-021: Conquistas e Troféus
**Como** um usuário buscando motivação,  
**Eu quero** desbloquear conquistas  
**Para que** eu tenha marcos visíveis do meu progresso.

**Critérios de Aceitação:**
- Desbloquear conquistas por ações específicas
- Exibir galeria de troféus
- Mostrar conquistas bloqueadas e requisitos
- Notificar novas conquistas

### US-022: Avatar Personalizável
**Como** um usuário buscando motivação,  
**Eu quero** personalizar um avatar que evolui com meu progresso  
**Para que** eu tenha uma representação visual da minha jornada.

**Critérios de Aceitação:**
- Personalizar aparência inicial
- Desbloquear itens por conquistas
- Evoluir avatar com progresso
- Compartilhar avatar com outros usuários

### US-023: Desafios Temáticos
**Como** um usuário buscando motivação,  
**Eu quero** participar de desafios temáticos  
**Para que** eu tenha objetivos de curto prazo variados.

**Critérios de Aceitação:**
- Visualizar desafios disponíveis
- Participar de múltiplos desafios
- Acompanhar progresso específico do desafio
- Receber recompensas por conclusão

## 📊 Estatísticas e Análises

### US-024: Dashboard Personalizado
**Como** um usuário analítico,  
**Eu quero** visualizar um dashboard com minhas estatísticas  
**Para que** eu possa ter uma visão geral do meu progresso.

**Critérios de Aceitação:**
- Exibir métricas-chave personalizáveis
- Mostrar gráficos de tendências
- Permitir seleção de período
- Salvar configurações de visualização

### US-025: Relatórios Detalhados
**Como** um usuário analítico,  
**Eu quero** gerar relatórios detalhados  
**Para que** eu possa analisar meu progresso em profundidade.

**Critérios de Aceitação:**
- Filtrar por categoria e período
- Exportar em diferentes formatos
- Incluir visualizações gráficas
- Comparar com médias e períodos anteriores

### US-026: Correlação de Dados
**Como** um usuário analítico,  
**Eu quero** identificar correlações entre diferentes áreas  
**Para que** eu possa entender como meus hábitos se influenciam.

**Critérios de Aceitação:**
- Visualizar matriz de correlação
- Identificar padrões entre hábitos e recaídas
- Sugerir conexões não óbvias
- Permitir exploração interativa de dados
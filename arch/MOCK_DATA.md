# 📊 Osiris Rise - Dados Mockados

Este documento contém exemplos de dados mockados para desenvolvimento inicial do Osiris Rise, permitindo que o frontend seja desenvolvido em paralelo com o backend.

## 👤 Usuários

```typescript
export const mockUsers = [
  {
    id: 1,
    username: 'joao.silva',
    email: 'joao.silva@email.com',
    name: 'João Silva',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    createdAt: '2023-01-15T10:30:00Z',
    level: 3,
    experience: 2750,
    streak: 45, // dias consecutivos sem recaídas
    totalPoints: 8750
  },
  {
    id: 2,
    username: 'maria.santos',
    email: 'maria.santos@email.com',
    name: 'Maria Santos',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    createdAt: '2023-02-20T14:15:00Z',
    level: 2,
    experience: 1500,
    streak: 30,
    totalPoints: 4500
  },
  {
    id: 3,
    username: 'carlos.oliveira',
    email: 'carlos.oliveira@email.com',
    name: 'Carlos Oliveira',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    createdAt: '2023-03-10T09:45:00Z',
    level: 1,
    experience: 750,
    streak: 15,
    totalPoints: 2250
  }
];
```

## 📉 Recaídas

```typescript
export const mockRelapses = [
  {
    id: 1,
    userId: 1,
    date: '2023-06-01T18:30:00Z',
    trigger: 'Estresse no trabalho',
    intensity: 7, // escala 1-10
    notes: 'Tive um dia difícil no trabalho e acabei cedendo ao impulso.',
    mood: 'ansioso',
    location: 'casa'
  },
  {
    id: 2,
    userId: 1,
    date: '2023-07-15T20:15:00Z',
    trigger: 'Conflito familiar',
    intensity: 8,
    notes: 'Discussão com familiar desencadeou forte vontade que não consegui controlar.',
    mood: 'irritado',
    location: 'casa'
  },
  {
    id: 3,
    userId: 2,
    date: '2023-08-05T22:45:00Z',
    trigger: 'Festa com amigos',
    intensity: 6,
    notes: 'Pressão social em festa levou à recaída.',
    mood: 'sociável',
    location: 'festa'
  }
];
```

## 💪 Treinos

```typescript
export const mockWorkouts = [
  {
    id: 1,
    userId: 1,
    date: '2023-09-01T17:00:00Z',
    duration: 60, // minutos
    type: 'musculação',
    caloriesBurned: 350,
    completed: true,
    notes: 'Treino de pernas. Sensação ótima!',
    exercises: [
      {
        id: 101,
        name: 'Agachamento',
        sets: 4,
        reps: 12,
        weight: 80,
        restTime: 90, // segundos
        completed: true
      },
      {
        id: 102,
        name: 'Leg Press',
        sets: 3,
        reps: 15,
        weight: 120,
        restTime: 60,
        completed: true
      },
      {
        id: 103,
        name: 'Extensora',
        sets: 3,
        reps: 12,
        weight: 50,
        restTime: 60,
        completed: true
      }
    ]
  },
  {
    id: 2,
    userId: 1,
    date: '2023-09-03T18:00:00Z',
    duration: 45,
    type: 'musculação',
    caloriesBurned: 300,
    completed: true,
    notes: 'Treino de peito e tríceps.',
    exercises: [
      {
        id: 104,
        name: 'Supino reto',
        sets: 4,
        reps: 10,
        weight: 70,
        restTime: 90,
        completed: true
      },
      {
        id: 105,
        name: 'Crucifixo',
        sets: 3,
        reps: 12,
        weight: 16,
        restTime: 60,
        completed: true
      },
      {
        id: 106,
        name: 'Tríceps corda',
        sets: 3,
        reps: 15,
        weight: 25,
        restTime: 60,
        completed: true
      }
    ]
  },
  {
    id: 3,
    userId: 2,
    date: '2023-09-02T07:30:00Z',
    duration: 30,
    type: 'cardio',
    caloriesBurned: 250,
    completed: true,
    notes: 'Corrida matinal no parque.',
    exercises: [
      {
        id: 107,
        name: 'Corrida',
        distance: 5, // km
        pace: '6:00', // min/km
        completed: true
      }
    ]
  }
];
```

## 📋 Exercícios

```typescript
export const mockExercises = [
  {
    id: 1,
    name: 'Agachamento',
    category: 'pernas',
    muscleGroups: ['quadríceps', 'glúteos', 'posterior de coxa'],
    equipment: 'barra',
    difficulty: 'intermediário',
    description: 'Exercício composto que trabalha principalmente os músculos da parte inferior do corpo.',
    instructions: 'Posicione a barra nos ombros, desça flexionando os joelhos até que as coxas fiquem paralelas ao chão, depois retorne à posição inicial.',
    imageUrl: 'https://example.com/images/squat.jpg',
    videoUrl: 'https://example.com/videos/squat.mp4'
  },
  {
    id: 2,
    name: 'Supino reto',
    category: 'peito',
    muscleGroups: ['peitoral', 'tríceps', 'deltóide anterior'],
    equipment: 'barra',
    difficulty: 'intermediário',
    description: 'Exercício clássico para desenvolvimento do peitoral.',
    instructions: 'Deite-se no banco, segure a barra com as mãos um pouco mais afastadas que a largura dos ombros, desça a barra até tocar levemente o peito, depois empurre de volta para cima.',
    imageUrl: 'https://example.com/images/bench-press.jpg',
    videoUrl: 'https://example.com/videos/bench-press.mp4'
  },
  {
    id: 3,
    name: 'Corrida',
    category: 'cardio',
    muscleGroups: ['quadríceps', 'panturrilha', 'sistema cardiovascular'],
    equipment: 'nenhum',
    difficulty: 'variável',
    description: 'Exercício aeróbico que melhora a resistência cardiovascular.',
    instructions: 'Mantenha uma postura ereta, balance os braços naturalmente, aterrisse no meio do pé e role para a frente.',
    imageUrl: 'https://example.com/images/running.jpg',
    videoUrl: 'https://example.com/videos/running.mp4'
  }
];
```

## 🌟 Hábitos

```typescript
export const mockHabits = [
  {
    id: 1,
    userId: 1,
    name: 'Beber 2L de água',
    description: 'Beber pelo menos 2 litros de água ao longo do dia',
    category: 'saúde',
    points: 10,
    icon: 'water_drop',
    color: '#3498db',
    frequency: 'daily',
    timeOfDay: 'any',
    streak: 15,
    createdAt: '2023-08-01T10:00:00Z'
  },
  {
    id: 2,
    userId: 1,
    name: 'Meditar',
    description: 'Meditar por 10 minutos pela manhã',
    category: 'mental',
    points: 15,
    icon: 'self_improvement',
    color: '#9b59b6',
    frequency: 'daily',
    timeOfDay: 'morning',
    streak: 7,
    createdAt: '2023-08-15T10:00:00Z'
  },
  {
    id: 3,
    userId: 1,
    name: 'Ler',
    description: 'Ler pelo menos 20 páginas de um livro',
    category: 'desenvolvimento',
    points: 20,
    icon: 'menu_book',
    color: '#e67e22',
    frequency: 'daily',
    timeOfDay: 'evening',
    streak: 5,
    createdAt: '2023-08-20T10:00:00Z'
  }
];
```

## 📅 Checklist Diário

```typescript
export const mockDailyChecklist = [
  {
    id: 1,
    userId: 1,
    date: '2023-09-05',
    habits: [
      {
        habitId: 1,
        completed: true,
        completedAt: '2023-09-05T14:30:00Z',
        notes: 'Consegui beber toda a água hoje!'
      },
      {
        habitId: 2,
        completed: true,
        completedAt: '2023-09-05T07:15:00Z',
        notes: 'Meditação matinal muito relaxante.'
      },
      {
        habitId: 3,
        completed: false,
        completedAt: null,
        notes: ''
      }
    ],
    totalPointsEarned: 25
  },
  {
    id: 2,
    userId: 1,
    date: '2023-09-04',
    habits: [
      {
        habitId: 1,
        completed: true,
        completedAt: '2023-09-04T21:30:00Z',
        notes: ''
      },
      {
        habitId: 2,
        completed: true,
        completedAt: '2023-09-04T08:00:00Z',
        notes: ''
      },
      {
        habitId: 3,
        completed: true,
        completedAt: '2023-09-04T22:45:00Z',
        notes: 'Li 30 páginas hoje!'
      }
    ],
    totalPointsEarned: 45
  }
];
```

## 🎯 Metas

```typescript
export const mockGoals = [
  {
    id: 1,
    userId: 1,
    title: 'Completar 90 dias sem recaídas',
    description: 'Manter-se abstinente por 90 dias consecutivos',
    category: 'abstinência',
    targetValue: 90,
    currentValue: 45,
    unit: 'dias',
    startDate: '2023-07-23T00:00:00Z',
    endDate: '2023-10-21T00:00:00Z',
    status: 'in_progress',
    priority: 'alta',
    reward: 'Comprar tênis novo',
    rewardPoints: 500
  },
  {
    id: 2,
    userId: 1,
    title: 'Treinar 4x por semana',
    description: 'Completar 4 treinos por semana durante um mês',
    category: 'fitness',
    targetValue: 16,
    currentValue: 6,
    unit: 'treinos',
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-09-30T00:00:00Z',
    status: 'in_progress',
    priority: 'média',
    reward: 'Massagem relaxante',
    rewardPoints: 300
  },
  {
    id: 3,
    userId: 1,
    title: 'Ler 5 livros',
    description: 'Ler 5 livros de desenvolvimento pessoal',
    category: 'desenvolvimento',
    targetValue: 5,
    currentValue: 1,
    unit: 'livros',
    startDate: '2023-08-01T00:00:00Z',
    endDate: '2023-12-31T00:00:00Z',
    status: 'in_progress',
    priority: 'baixa',
    reward: 'Comprar e-reader novo',
    rewardPoints: 400
  }
];
```

## 🧍 Avatar

```typescript
export const mockAvatars = [
  {
    userId: 1,
    level: 3,
    bodyType: 'athletic',
    height: 180, // cm
    weight: 75, // kg
    skinTone: 'medium',
    hairStyle: 'short',
    hairColor: 'black',
    eyeColor: 'brown',
    facialHair: 'none',
    accessories: ['fitness_watch'],
    outfit: {
      top: 'athletic_shirt_blue',
      bottom: 'athletic_shorts_black',
      shoes: 'running_shoes_red'
    },
    evolution: {
      level1: {
        imageUrl: 'https://example.com/avatars/user1_level1.png',
        unlockedAt: '2023-07-30T15:45:00Z'
      },
      level2: {
        imageUrl: 'https://example.com/avatars/user1_level2.png',
        unlockedAt: '2023-08-15T10:20:00Z'
      },
      level3: {
        imageUrl: 'https://example.com/avatars/user1_level3.png',
        unlockedAt: '2023-09-01T18:30:00Z'
      },
      level4: {
        imageUrl: 'https://example.com/avatars/user1_level4.png',
        unlockedAt: null
      },
      level5: {
        imageUrl: 'https://example.com/avatars/user1_level5.png',
        unlockedAt: null
      }
    }
  }
];
```

## 🏆 Conquistas

```typescript
export const mockAchievements = [
  {
    id: 1,
    name: 'Primeiro Passo',
    description: 'Complete 7 dias sem recaídas',
    category: 'abstinência',
    icon: 'emoji_events',
    color: '#f1c40f',
    points: 100,
    requiredValue: 7,
    difficulty: 'fácil'
  },
  {
    id: 2,
    name: 'Mês Limpo',
    description: 'Complete 30 dias sem recaídas',
    category: 'abstinência',
    icon: 'calendar_month',
    color: '#2ecc71',
    points: 300,
    requiredValue: 30,
    difficulty: 'médio'
  },
  {
    id: 3,
    name: 'Trimestre Vitorioso',
    description: 'Complete 90 dias sem recaídas',
    category: 'abstinência',
    icon: 'workspace_premium',
    color: '#3498db',
    points: 500,
    requiredValue: 90,
    difficulty: 'difícil'
  },
  {
    id: 4,
    name: 'Atleta Iniciante',
    description: 'Complete 10 treinos',
    category: 'fitness',
    icon: 'fitness_center',
    color: '#e74c3c',
    points: 150,
    requiredValue: 10,
    difficulty: 'fácil'
  },
  {
    id: 5,
    name: 'Mestre da Rotina',
    description: 'Complete todos os hábitos diários por 14 dias consecutivos',
    category: 'hábitos',
    icon: 'repeat',
    color: '#9b59b6',
    points: 250,
    requiredValue: 14,
    difficulty: 'médio'
  }
];
```

## 🏅 Conquistas do Usuário

```typescript
export const mockUserAchievements = [
  {
    userId: 1,
    achievementId: 1,
    unlockedAt: '2023-07-30T00:00:00Z',
    progress: 100
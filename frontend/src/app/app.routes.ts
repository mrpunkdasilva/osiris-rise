import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    data: {
      title: 'Transformação Pessoal Gamificada',
      description: 'Supere vícios, construa hábitos saudáveis e acompanhe sua evolução através de uma jornada gamificada inspirada na mitologia egípcia.',
      ogImage: '/assets/images/osiris-social-share.jpg'
    }
  },
  {
    path: 'features',
    loadComponent: () => import('./features/features/features.component').then(m => m.FeaturesComponent),
    data: {
      title: 'Recursos',
      description: 'Conheça os recursos do Osiris Rise: contador de recaídas, sistema de hábitos, gerenciamento de treinos, avatar personalizável e gamificação.',
      ogImage: '/assets/images/features-social-share.jpg'
    }
  },
  {
    path: 'pricing',
    loadComponent: () => import('./features/pricing/pricing.component').then(m => m.PricingComponent),
    data: {
      title: 'Planos',
      description: 'Escolha o plano ideal para sua jornada de transformação pessoal com o Osiris Rise.',
      ogImage: '/assets/images/pricing-social-share.jpg'
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    data: {
      title: 'Sobre',
      description: 'Conheça a história e a missão do Osiris Rise, um aplicativo de transformação pessoal inspirado na mitologia egípcia.',
      ogImage: '/assets/images/about-social-share.jpg'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

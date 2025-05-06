import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from '../feature-card/feature-card.component';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent],
  template: `
    <div class="features-section">
      <h2>Recursos Principais</h2>
      <div class="features-grid">
        <app-feature-card 
          *ngFor="let feature of features"
          [icon]="feature.icon"
          [title]="feature.title"
          [description]="feature.description">
        </app-feature-card>
      </div>
    </div>
  `,
  styles: [`
    .features-section {
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 3rem;
      position: relative;
    }
    
    h2:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background-color: #e74c3c;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    @media (max-width: 768px) {
      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FeaturesSectionComponent {
  features: Feature[] = [
    {
      icon: '⏱️',
      title: 'Contador de Recaídas',
      description: 'Acompanhe seu progresso na superação de vícios com métricas detalhadas e insights personalizados.'
    },
    {
      icon: '🔄',
      title: 'Sistema de Hábitos',
      description: 'Desenvolva rotinas saudáveis com nosso sistema de rastreamento de hábitos baseado em evidências científicas.'
    },
    {
      icon: '💪',
      title: 'Gerenciamento de Treinos',
      description: 'Crie e acompanhe treinos personalizados para melhorar sua saúde física e mental.'
    },
    {
      icon: '🎮',
      title: 'Gamificação',
      description: 'Mantenha-se motivado com elementos de jogos como pontos, níveis e conquistas inspirados na mitologia egípcia.'
    }
  ];
}
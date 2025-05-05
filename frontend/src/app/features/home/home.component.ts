import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h2>Bem-vindo ao Osiris Rise</h2>
      <p>Sua jornada de transformação pessoal começa aqui.</p>
      
      <div class="features">
        <div class="feature-card">
          <h3>Contador de Recaídas</h3>
          <p>Acompanhe seu progresso na superação de vícios</p>
        </div>
        
        <div class="feature-card">
          <h3>Sistema de Hábitos</h3>
          <p>Desenvolva rotinas saudáveis</p>
        </div>
        
        <div class="feature-card">
          <h3>Gerenciamento de Treinos</h3>
          <p>Crie treinos personalizados</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    h2 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    
    .features {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .feature-card {
      flex: 1;
      min-width: 250px;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      background-color: #f8f9fa;
      transition: transform 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
    }
    
    .feature-card h3 {
      color: #e74c3c;
      margin-bottom: 0.5rem;
    }
  `]
})
export class HomeComponent {
}
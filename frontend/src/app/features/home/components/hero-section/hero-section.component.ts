import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="hero-section">
      <div class="hero-content">
        <h1>Transforme sua vida com <span class="highlight">Osiris Rise</span></h1>
        <p class="hero-subtitle">
          Supere vícios, construa hábitos saudáveis e acompanhe sua evolução através de uma 
          jornada gamificada inspirada na mitologia egípcia.
        </p>
        <div class="cta-buttons">
          <a routerLink="/auth/register" class="btn btn-primary">Comece Agora</a>
          <a routerLink="/auth/login" class="btn btn-secondary">Já tenho uma conta</a>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-placeholder">
          <div class="placeholder-icon">🏆</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #2c3e50 0%, #4a6491 100%);
      color: white;
      border-radius: 0 0 50px 50px;
      margin-bottom: 4rem;
    }
    
    .hero-content {
      flex: 1;
      max-width: 600px;
    }
    
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
    
    .highlight {
      color: #e74c3c;
      font-weight: 800;
    }
    
    .hero-subtitle {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .hero-image {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .image-placeholder {
      width: 400px;
      height: 400px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .placeholder-icon {
      font-size: 8rem;
    }
    
    .cta-buttons {
      display: flex;
      gap: 1rem;
    }
    
    .btn {
      padding: 0.8rem 1.5rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .btn-primary {
      background-color: #e74c3c;
      color: white;
      border: none;
    }
    
    .btn-primary:hover {
      background-color: #c0392b;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .btn-secondary {
      background-color: transparent;
      color: white;
      border: 2px solid white;
    }
    
    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
    }
    
    @media (max-width: 768px) {
      .hero-section {
        flex-direction: column;
        text-align: center;
        padding: 3rem 1rem;
      }
      
      .hero-content {
        margin-bottom: 2rem;
      }
      
      .image-placeholder {
        width: 300px;
        height: 300px;
      }
      
      .cta-buttons {
        justify-content: center;
      }
      
      h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class HeroSectionComponent {}
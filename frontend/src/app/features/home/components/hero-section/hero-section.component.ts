import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="hero-section">
      <div class="cyber-grid"></div>
      <div class="hero-content">
        <h1>
          <span class="hero-subtitle-top">INICIE SUA</span>
          JORNADA DE <span class="highlight">RENASCIMENTO</span>
          <span class="hero-subtitle-bottom">COM OSIRIS RISE</span>
        </h1>
        <p class="hero-description">
          Supere vícios, construa hábitos saudáveis e acompanhe sua evolução através de uma
          jornada gamificada inspirada na mitologia egípcia e potencializada por tecnologia futurista.
        </p>
        <div class="cta-buttons">
          <a routerLink="/auth/register" class="btn btn-primary">
            <span class="btn-text">INICIAR JORNADA</span>
            <span class="btn-icon">→</span>
          </a>
          <a routerLink="/auth/login" class="btn btn-secondary">ACESSAR CONTA</a>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-value">10K+</div>
            <div class="stat-label">USUÁRIOS</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">87%</div>
            <div class="stat-label">TAXA DE SUCESSO</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">4.8/5</div>
            <div class="stat-label">AVALIAÇÃO</div>
          </div>
        </div>
      </div>

      <div class="hero-image">
        <img src="assets/images/osiris-logo.svg" alt="Osiris Rise Logo" class="hero-logo">
        <div class="glow-effect"></div>
        <div class="hero-image-overlay"></div>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6rem 2rem;
      overflow: hidden;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
      min-height: 80vh;
    }

    .cyber-grid {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image:
        linear-gradient(rgba(231, 76, 60, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(231, 76, 60, 0.1) 1px, transparent 1px);
      background-size: 30px 30px;
      z-index: 1;
      perspective: 1000px;
      transform: rotateX(45deg) scale(2);
      transform-origin: center bottom;
      opacity: 0.3;
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

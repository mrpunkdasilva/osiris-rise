import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="pricing-container">
      <section class="pricing-header">
        <div class="container">
          <h1>Planos do Osiris Rise</h1>
          <p>Escolha o plano ideal para sua jornada de transformação pessoal.</p>
        </div>
      </section>

      <!-- Planos de preços -->
      <section class="pricing-plans">
        <div class="container">
          <div class="pricing-grid">
            <div class="pricing-card">
              <h2>Gratuito</h2>
              <div class="price">R$ 0</div>
              <ul class="features">
                <li>Contador de Recaídas</li>
                <li>Sistema de Hábitos Básico</li>
                <li>Avatar Personalizável</li>
              </ul>
              <a routerLink="/auth/register" class="btn btn-primary">Começar Grátis</a>
            </div>

            <div class="pricing-card featured">
              <div class="featured-label">Popular</div>
              <h2>Premium</h2>
              <div class="price">R$ 19,90<span>/mês</span></div>
              <ul class="features">
                <li>Todos os recursos gratuitos</li>
                <li>Sistema de Hábitos Avançado</li>
                <li>Gerenciamento de Treinos</li>
                <li>Estatísticas Detalhadas</li>
              </ul>
              <a routerLink="/auth/register" class="btn btn-primary">Assinar Agora</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .pricing-container {
      min-height: 100vh;
    }

    .pricing-header {
      padding: 5rem 0;
      text-align: center;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    p {
      max-width: 600px;
      margin: 0 auto 2rem;
      font-size: 1.2rem;
    }

    .pricing-grid {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .pricing-card {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 2rem;
      width: 300px;
      position: relative;
    }

    .pricing-card.featured {
      border: 2px solid #e74c3c;
    }

    .featured-label {
      position: absolute;
      top: -12px;
      right: 20px;
      background-color: #e74c3c;
      color: white;
      padding: 0.3rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: bold;
    }

    .price {
      font-size: 2.5rem;
      margin: 1.5rem 0;
    }

    .price span {
      font-size: 1rem;
      opacity: 0.7;
    }

    .features {
      margin-bottom: 2rem;
    }

    .features li {
      margin-bottom: 0.8rem;
      position: relative;
      padding-left: 1.5rem;
    }

    .features li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #e74c3c;
    }

    .btn {
      display: block;
      text-align: center;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background-color: #e74c3c;
      color: white;
    }

    .btn-primary:hover {
      background-color: #c0392b;
    }
  `]
})
export class PricingComponent {}

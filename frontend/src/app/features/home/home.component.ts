import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
        <!-- Placeholder para imagem -->
        <div class="image-placeholder">
          <div class="placeholder-icon">🏆</div>
        </div>
      </div>
    </div>

    <div class="features-section">
      <h2>Recursos Principais</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">⏱️</div>
          <h3>Contador de Recaídas</h3>
          <p>Acompanhe seu progresso na superação de vícios com métricas detalhadas e insights personalizados.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3>Sistema de Hábitos</h3>
          <p>Desenvolva rotinas saudáveis com nosso sistema de rastreamento de hábitos baseado em evidências científicas.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">💪</div>
          <h3>Gerenciamento de Treinos</h3>
          <p>Crie e acompanhe treinos personalizados para melhorar sua saúde física e mental.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🎮</div>
          <h3>Gamificação</h3>
          <p>Mantenha-se motivado com elementos de jogos como pontos, níveis e conquistas inspirados na mitologia egípcia.</p>
        </div>
      </div>
    </div>

    <div class="testimonials-section">
      <h2>O que nossos usuários dizem</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <p class="testimonial-text">"Osiris Rise mudou completamente minha relação com hábitos saudáveis. A gamificação torna tudo mais divertido e motivador."</p>
          <div class="testimonial-author">- Carlos S.</div>
        </div>

        <div class="testimonial-card">
          <p class="testimonial-text">"Depois de várias tentativas frustradas, finalmente consegui superar meu vício em redes sociais graças ao contador de recaídas."</p>
          <div class="testimonial-author">- Ana P.</div>
        </div>

        <div class="testimonial-card">
          <p class="testimonial-text">"O sistema de treinos personalizados é incrível! Consigo acompanhar meu progresso e me manter motivado."</p>
          <div class="testimonial-author">- Rafael M.</div>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <h2>Pronto para iniciar sua jornada?</h2>
      <p>Junte-se a milhares de pessoas que estão transformando suas vidas com Osiris Rise.</p>
      <a routerLink="/auth/register" class="btn btn-primary btn-large">Comece Gratuitamente</a>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Roboto', sans-serif;
      color: #333;
    }

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

    .btn-large {
      padding: 1rem 2rem;
      font-size: 1.2rem;
    }

    .features-section, .testimonials-section {
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

    .feature-card {
      background-color: #f8f9fa;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
    }

    .feature-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      background-color: white;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      position: relative;
    }

    .testimonial-card:before {
      content: '"';
      position: absolute;
      top: 10px;
      left: 20px;
      font-size: 4rem;
      color: rgba(231, 76, 60, 0.1);
      font-family: Georgia, serif;
    }

    .testimonial-text {
      font-style: italic;
      margin-bottom: 1rem;
      line-height: 1.6;
      position: relative;
      z-index: 1;
    }

    .testimonial-author {
      font-weight: 600;
      color: #e74c3c;
      text-align: right;
    }

    .cta-section {
      background-color: #f8f9fa;
      padding: 4rem 2rem;
      text-align: center;
      border-radius: 50px 50px 0 0;
      margin-top: 4rem;
    }

    .cta-section p {
      max-width: 600px;
      margin: 0 auto 2rem;
      font-size: 1.2rem;
      opacity: 0.8;
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

      .features-grid, .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {
}

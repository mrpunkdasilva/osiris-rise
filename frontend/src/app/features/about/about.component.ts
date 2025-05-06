import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="about-container">
      <section class="about-header">
        <div class="cyber-grid"></div>
        <div class="scanline"></div>

        <div class="container">
          <h1 class="page-title">Sobre o <span class="text-gradient">Osiris Rise</span></h1>
          <p class="page-subtitle">
            Conheça a história e a missão do Osiris Rise, um aplicativo de transformação pessoal
            inspirado na mitologia egípcia.
          </p>
        </div>
      </section>

      <section class="about-content">
        <div class="container">
          <div class="about-section">
            <h2>Nossa História</h2>
            <p>
              O Osiris Rise nasceu da visão de unir tecnologia moderna com sabedoria antiga para criar uma
              plataforma que realmente ajude as pessoas a superarem seus desafios pessoais e alcançarem seu
              potencial máximo.
            </p>
            <p>
              Inspirados pela lenda de Osíris - o deus egípcio que simboliza morte e renascimento - criamos
              um sistema que ajuda os usuários a "renascerem" através da superação de vícios e do desenvolvimento
              de hábitos positivos.
            </p>
          </div>

          <div class="about-section">
            <h2>Nossa Missão</h2>
            <p>
              Nossa missão é ajudar pessoas a superarem vícios, estabelecerem hábitos saudáveis e acompanharem
              seu progresso físico e mental através de uma jornada gamificada que mantém a motivação e torna o
              processo de transformação mais engajador e efetivo.
            </p>
          </div>

          <div class="about-section">
            <h2>Nossa Equipe</h2>
            <p>
              Somos um grupo de desenvolvedores, designers e especialistas em comportamento humano apaixonados
              por criar ferramentas que impactam positivamente a vida das pessoas. Acreditamos no poder da
              tecnologia como catalisadora de mudanças positivas.
            </p>
          </div>

          <div class="about-cta">
            <h2>Junte-se à Nossa Comunidade</h2>
            <p>
              Faça parte de uma comunidade de pessoas comprometidas com o crescimento pessoal e a superação de desafios.
            </p>
            <a routerLink="/auth/register" class="btn btn-primary btn-glow">
              Começar Agora
              <span class="btn-icon">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-container {
      min-height: 100vh;
    }

    /* Header Section */
    .about-header {
      padding: var(--spacing-xxl) 0;
      text-align: center;
      position: relative;
      overflow: hidden;
      background-color: var(--color-bg-dark);
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
      animation: gridMove 20s linear infinite;
    }

    @keyframes gridMove {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 30px 30px;
      }
    }

    .scanline {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 10px;
      background: linear-gradient(to bottom,
        rgba(231, 76, 60, 0) 0%,
        rgba(231, 76, 60, 0.3) 50%,
        rgba(231, 76, 60, 0) 100%);
      z-index: 2;
      animation: scanline 8s linear infinite;
      opacity: 0.5;
    }

    @keyframes scanline {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(100vh);
      }
    }

    .page-title {
      font-size: 3rem;
      margin-bottom: var(--spacing-lg);
      position: relative;
      z-index: 3;
      animation: fadeInUp 1s ease-out;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .text-gradient {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }

    .page-subtitle {
      max-width: 600px;
      margin: 0 auto;
      font-size: 1.2rem;
      color: var(--color-text-secondary);
      position: relative;
      z-index: 3;
      animation: fadeInUp 1s ease-out 0.2s both;
    }

    /* About Content */
    .about-content {
      padding: var(--spacing-xxl) 0;
      background-color: var(--color-bg-medium);
    }

    .about-section {
      margin-bottom: var(--spacing-xxl);
      background: rgba(10, 10, 10, 0.5);
      border: 1px solid rgba(231, 76, 60, 0.3);
      padding: var(--spacing-xl);
      border-radius: var(--border-radius-lg);
      transition: all var(--transition-normal);
    }

    .about-section:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .about-section h2 {
      font-size: 1.8rem;
      margin-bottom: var(--spacing-md);
      position: relative;
      padding-bottom: var(--spacing-sm);
    }

    .about-section h2::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: var(--color-primary);
      transition: width var(--transition-normal);
    }

    .about-section:hover h2::after {
      width: 100px;
    }

    .about-section p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-md);
    }

    .about-section p:last-child {
      margin-bottom: 0;
    }

    .about-cta {
      text-align: center;
      margin-top: var(--spacing-xxl);
      padding: var(--spacing-xl);
      background: rgba(10, 10, 10, 0.5);
      border: 1px solid rgba(231, 76, 60, 0.3);
      border-radius: var(--border-radius-lg);
      transition: all var(--transition-normal);
    }

    .about-cta:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .about-cta h2 {
      font-size: 2rem;
      margin-bottom: var(--spacing-md);
    }

    .about-cta p {
      font-size: 1.2rem;
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-xl);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-md) var(--spacing-xl);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all var(--transition-normal);
      position: relative;
      overflow: hidden;
      cursor: pointer;
      border: none;
      outline: none;
      border-radius: var(--border-radius-md);
      text-decoration: none;
    }

    .btn-primary {
      background: var(--color-primary);
      color: white;
    }

    .btn-primary:hover {
      background: var(--color-primary-dark);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(231, 76, 60, 0.4);
    }

    .btn-glow {
      position: relative;
    }

    .btn-glow::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: all 0.8s ease;
    }

    .btn-glow:hover::before {
      left: 100%;
    }

    .btn-icon {
      margin-left: var(--spacing-xs);
      transition: transform var(--transition-normal);
    }

    .btn:hover .btn-icon {
      transform: translateX(5px);
    }

    @media (max-width: 768px) {
      .page-title {
        font-size: 2.2rem;
      }

      .about-cta h2 {
        font-size: 1.8rem;
      }
    }
  `]
})
export class AboutComponent {}

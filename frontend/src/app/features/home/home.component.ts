import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="cyber-grid"></div>
        <div class="scanline"></div>

        <div class="container hero-content">
          <div class="hero-text">
            <div class="hero-badge">TRANSFORMAÇÃO PESSOAL GAMIFICADA</div>
            <h1 class="hero-title">
              DESPERTE SEU <span class="text-gradient">POTENCIAL</span>
              <br>COM <span class="text-accent">OSIRIS RISE</span>
            </h1>
            <p class="hero-description">
              Supere vícios, construa hábitos saudáveis e acompanhe sua evolução através de uma
              jornada gamificada inspirada na mitologia egípcia e potencializada por tecnologia futurista.
            </p>

            <div class="hero-cta">
              <a routerLink="/auth/register" class="btn btn-primary btn-glow">
                INICIAR JORNADA
                <span class="btn-icon">→</span>
              </a>
              <a routerLink="/features" class="btn btn-secondary btn-glow">
                EXPLORAR RECURSOS
              </a>
            </div>

            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-value">10K+</div>
                <div class="stat-label">USUÁRIOS</div>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <div class="stat-value">87%</div>
                <div class="stat-label">TAXA DE SUCESSO</div>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <div class="stat-value">4.8/5</div>
                <div class="stat-label">AVALIAÇÃO</div>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="logo-container">
              <img src="assets/images/osiris-logo.svg" alt="Osiris Rise Logo" class="hero-logo">
              <div class="logo-glow"></div>
            </div>
            <div class="hieroglyphs top-hieroglyphs">𓀀 𓀁 𓀂 𓀃 𓀄 𓀅 𓀆 𓀇 𓀈 𓀉</div>
            <div class="hieroglyphs bottom-hieroglyphs">𓀊 𓀋 𓀌 𓀍 𓀎 𓀏 𓀐 𓀑 𓀒 𓀓</div>
          </div>
        </div>
      </section>

      <!-- Features Preview Section -->
      <section class="features-section">
        <div class="container">
          <h2 class="section-title">RECURSOS <span class="text-gradient">PRINCIPAIS</span></h2>
          <p class="section-subtitle">Ferramentas poderosas para sua jornada de transformação</p>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🔄</div>
              <h3 class="feature-title">Jornada Personalizada</h3>
              <p class="feature-description">
                Crie sua própria jornada baseada em seus objetivos e desafios pessoais.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">📊</div>
              <h3 class="feature-title">Análise de Progresso</h3>
              <p class="feature-description">
                Acompanhe sua evolução com métricas detalhadas e visualizações intuitivas.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">🏆</div>
              <h3 class="feature-title">Sistema de Recompensas</h3>
              <p class="feature-description">
                Ganhe recompensas virtuais e desbloqueie conquistas ao atingir seus objetivos.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">👥</div>
              <h3 class="feature-title">Comunidade de Apoio</h3>
              <p class="feature-description">
                Conecte-se com outros usuários em jornadas semelhantes para motivação mútua.
              </p>
            </div>
          </div>

          <div class="features-cta">
            <a routerLink="/features" class="btn btn-secondary btn-glow">VER TODOS OS RECURSOS</a>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2 class="cta-title">PRONTO PARA INICIAR SUA <span class="text-gradient">TRANSFORMAÇÃO</span>?</h2>
            <p class="cta-description">
              Junte-se a milhares de pessoas que estão transformando suas vidas com Osiris Rise.
            </p>
            <a routerLink="/auth/register" class="btn btn-primary btn-large btn-glow">
              COMEÇAR AGORA
              <span class="btn-icon">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      position: relative;
    }

    /* Hero Section */
    .hero-section {
      position: relative;
      min-height: 90vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      padding: var(--spacing-xxl) 0;
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

    .hero-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 3;
    }

    .hero-text {
      flex: 1;
      max-width: 600px;
    }

    .hero-badge {
      display: inline-block;
      background: rgba(231, 76, 60, 0.1);
      color: var(--color-primary);
      padding: var(--spacing-xs) var(--spacing-md);
      border-left: 3px solid var(--color-primary);
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 1px;
      margin-bottom: var(--spacing-md);
    }

    .hero-title {
      font-size: 3rem;
      line-height: 1.2;
      margin-bottom: var(--spacing-lg);
      font-weight: 800;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .text-accent {
      color: var(--color-secondary);
      text-shadow: 0 0 10px var(--color-highlight-glow);
    }

    .hero-description {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: var(--spacing-xl);
      color: var(--color-text-secondary);
    }

    .hero-cta {
      display: flex;
      gap: var(--spacing-md);
      margin-bottom: var(--spacing-xl);
    }

    .btn-icon {
      margin-left: var(--spacing-xs);
      transition: transform var(--transition-normal);
    }

    .btn:hover .btn-icon {
      transform: translateX(5px);
    }

    .hero-stats {
      display: flex;
      align-items: center;
      padding: var(--spacing-md);
      background: rgba(10, 10, 10, 0.5);
      border: 1px solid rgba(231, 76, 60, 0.3);
      backdrop-filter: blur(10px);
    }

    .stat-item {
      text-align: center;
      flex: 1;
    }

    .stat-value {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: var(--spacing-xs);
    }

    .stat-label {
      font-size: 0.8rem;
      color: var(--color-text-secondary);
      letter-spacing: 1px;
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, transparent, var(--color-primary), transparent);
      margin: 0 var(--spacing-md);
    }

    .hero-visual {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .logo-container {
      position: relative;
      width: 300px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-logo {
      width: 100%;
      height: 100%;
      object-fit: contain;
      animation: float 6s ease-in-out infinite;
      position: relative;
      z-index: 2;
    }

    .logo-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background: var(--gradient-glow);
      border-radius: 50%;
      filter: blur(30px);
      opacity: 0.7;
      z-index: 1;
      animation: glow 4s ease-in-out infinite;
    }

    .hieroglyphs {
      font-family: 'Noto Sans Egyptian Hieroglyphs', sans-serif;
      color: var(--color-gold);
      opacity: 0.3;
      letter-spacing: 5px;
      font-size: 1.5rem;
      position: absolute;
      white-space: nowrap;
    }

    .top-hieroglyphs {
      top: 20%;
      left: 50%;
      transform: translateX(-50%) rotate(-5deg);
    }

    .bottom-hieroglyphs {
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%) rotate(5deg);
    }

    /* Features Section */
    .features-section {
      padding: var(--spacing-xxl) 0;
      background-color: var(--color-bg-medium);
      position: relative;
      overflow: hidden;
    }

    .features-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(to right, transparent, var(--color-primary), transparent);
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: var(--spacing-md);
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .section-subtitle {
      text-align: center;
      font-size: 1.1rem;
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-xxl);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-xxl);
    }

    .feature-card {
      background: rgba(10, 10, 10, 0.5);
      border: 1px solid rgba(231, 76, 60, 0.3);
      padding: var(--spacing-xl);
      transition: all var(--transition-normal);
      position: relative;
      overflow: hidden;
      border-radius: var(--border-radius-md);
    }

    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 0;
      background: var(--gradient-primary);
      transition: height var(--transition-normal);
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .feature-card:hover::before {
      height: 100%;
    }

    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: var(--spacing-md);
      transition: transform var(--transition-normal);
    }

    .feature-card:hover .feature-icon {
      transform: scale(1.2);
    }

    .feature-title {
      font-size: 1.3rem;
      margin-bottom: var(--spacing-md);
      position: relative;
      padding-bottom: var(--spacing-sm);
    }

    .feature-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background: var(--color-primary);
      transition: width var(--transition-normal);
    }

    .feature-card:hover .feature-title::after {
      width: 50px;
    }

    .feature-description {
      color: var(--color-text-secondary);
      line-height: 1.6;
    }

    .features-cta {
      text-align: center;
    }

    /* CTA Section */
    .cta-section {
      padding: var(--spacing-xxl) 0;
      background: linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%),
                  url('/assets/images/cta-bg.jpg') center/cover no-repeat;
      position: relative;
      overflow: hidden;
      border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
      margin-top: var(--spacing-xl);
    }

    .cta-section::before {
      content: '';
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
      opacity: 0.2;
      animation: gridMove 20s linear infinite;
    }

    .cta-content {
      text-align: center;
      position: relative;
      z-index: 2;
      max-width: 800px;
      margin: 0 auto;
      padding: var(--spacing-xl);
      background: rgba(10, 10, 10, 0.5);
      border: 1px solid rgba(231, 76, 60, 0.3);
      backdrop-filter: blur(10px);
      border-radius: var(--border-radius-lg);
      transform: translateY(0);
      transition: transform var(--transition-normal);
    }

    .cta-content:hover {
      transform: translateY(-5px);
    }

    .cta-title {
      font-size: 2.5rem;
      margin-bottom: var(--spacing-lg);
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .cta-description {
      font-size: 1.2rem;
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-xl);
    }

    .btn-large {
      padding: var(--spacing-md) var(--spacing-xxl);
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .hero-content {
        flex-direction: column;
        text-align: center;
      }

      .hero-text {
        margin-bottom: var(--spacing-xxl);
      }

      .hero-title {
        font-size: 2.2rem;
      }

      .hero-cta {
        justify-content: center;
      }

      .hero-stats {
        flex-direction: column;
        gap: var(--spacing-md);
      }

      .stat-divider {
        width: 50px;
        height: 1px;
        margin: var(--spacing-sm) 0;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }

      .cta-title {
        font-size: 2rem;
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
  `]
})
export class HomeComponent {}

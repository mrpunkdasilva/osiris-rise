import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="features-container">
      <section class="features-header">
        <div class="cyber-grid"></div>
        <div class="scanline"></div>

        <div class="container">
          <h1 class="page-title">RECURSOS <span class="text-gradient">AVANÇADOS</span></h1>
          <p class="page-subtitle">
            Conheça as ferramentas que tornam o Osiris Rise uma plataforma única para sua transformação pessoal.
          </p>
        </div>
      </section>

      <!-- Lista de recursos -->
      <section class="features-list">
        <div class="container">
          <div class="feature-item">
            <div class="feature-icon">🔄</div>
            <div class="feature-content">
              <h2 class="feature-title">Contador de Recaídas</h2>
              <p class="feature-description">
                Acompanhe seu progresso na superação de vícios com nosso contador intuitivo.
                Visualize estatísticas detalhadas, identifique padrões e celebre marcos importantes
                em sua jornada de recuperação.
              </p>
              <ul class="feature-details">
                <li>Rastreamento de dias consecutivos</li>
                <li>Análise de padrões e gatilhos</li>
                <li>Visualização de progresso ao longo do tempo</li>
                <li>Celebração de marcos importantes</li>
              </ul>
              <a routerLink="/auth/register" class="btn btn-primary btn-glow">
                Experimentar
                <span class="btn-icon">→</span>
              </a>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">📊</div>
            <div class="feature-content">
              <h2 class="feature-title">Sistema de Hábitos</h2>
              <p class="feature-description">
                Desenvolva rotinas saudáveis e acompanhe sua consistência diariamente.
                Crie hábitos personalizados, defina lembretes e visualize seu progresso
                em calendários e gráficos intuitivos.
              </p>
              <ul class="feature-details">
                <li>Criação de hábitos personalizados</li>
                <li>Lembretes e notificações</li>
                <li>Sequências e estatísticas</li>
                <li>Visualização em calendário</li>
              </ul>
              <a routerLink="/auth/register" class="btn btn-primary btn-glow">
                Experimentar
                <span class="btn-icon">→</span>
              </a>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">💪</div>
            <div class="feature-content">
              <h2 class="feature-title">Gerenciamento de Treinos</h2>
              <p class="feature-description">
                Crie treinos personalizados e acompanhe seu progresso físico.
                Acesse uma biblioteca de exercícios, registre seu desempenho e
                visualize sua evolução ao longo do tempo.
              </p>
              <ul class="feature-details">
                <li>Biblioteca de exercícios</li>
                <li>Criação de treinos personalizados</li>
                <li>Registro de séries, repetições e cargas</li>
                <li>Gráficos de evolução</li>
              </ul>
              <a routerLink="/auth/register" class="btn btn-primary btn-glow">
                Experimentar
                <span class="btn-icon">→</span>
              </a>
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-icon">🎮</div>
            <div class="feature-content">
              <h2 class="feature-title">Gamificação Avançada</h2>
              <p class="feature-description">
                Mantenha-se motivado com elementos de gamificação que tornam sua jornada
                mais engajadora. Ganhe pontos, suba de nível, desbloqueie conquistas e
                personalize seu avatar à medida que progride.
              </p>
              <ul class="feature-details">
                <li>Sistema de pontos e níveis</li>
                <li>Conquistas e troféus</li>
                <li>Avatar personalizável</li>
                <li>Desafios diários e semanais</li>
              </ul>
              <a routerLink="/auth/register" class="btn btn-primary btn-glow">
                Experimentar
                <span class="btn-icon">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2 class="cta-title">PRONTO PARA <span class="text-gradient">COMEÇAR</span>?</h2>
            <p class="cta-description">
              Junte-se a milhares de pessoas que estão transformando suas vidas com Osiris Rise.
              Crie sua conta gratuitamente e inicie sua jornada hoje mesmo.
            </p>
            <a routerLink="/auth/register" class="btn btn-primary btn-glow btn-large">
              CRIAR CONTA GRATUITA
              <span class="btn-icon">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .features-container {
      min-height: 100vh;
    }

    /* Header Section */
    .features-header {
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
      text-transform: uppercase;
      letter-spacing: 2px;
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

    /* Features List */
    .features-list {
      padding: var(--spacing-xxl) 0;
      background-color: var(--color-bg-medium);
    }

    .feature-item {
      display: flex;
      margin-bottom: var(--spacing-xxl);
      background: rgba(10, 10, 10, 0.5);
      border: 1px solid rgba(231, 76, 60, 0.3);
      padding: var(--spacing-xl);
      border-radius: var(--border-radius-lg);
      transition: all var(--transition-normal);
      position: relative;
      overflow: hidden;
    }

    .feature-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .feature-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 0;
      background: var(--gradient-primary);
      transition: height var(--transition-normal);
    }

    .feature-item:hover::before {
      height: 100%;
    }

    .feature-icon {
      font-size: 3rem;
      margin-right: var(--spacing-xl);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      background: rgba(231, 76, 60, 0.1);
      border-radius: 50%;
      transition: all var(--transition-normal);
    }

    .feature-item:hover .feature-icon {
      transform: scale(1.1) rotate(10deg);
      background: rgba(231, 76, 60, 0.2);
    }

    .feature-content {
      flex: 1;
    }

    .feature-title {
      font-size: 1.8rem;
      margin-bottom: var(--spacing-md);
      position: relative;
      padding-bottom: var(--spacing-sm);
    }

    .feature-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: var(--color-primary);
      transition: width var(--transition-normal);
    }

    .feature-item:hover .feature-title::after {
      width: 100px;
    }

    .feature-description {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: var(--spacing-md);
      color: var(--color-text-secondary);
    }

    .feature-details {
      margin-bottom: var(--spacing-lg);
      padding-left: var(--spacing-lg);
    }

    .feature-details li {
      margin-bottom: var(--spacing-sm);
      position: relative;
    }

    .feature-details li::before {
      content: '✓';
      position: absolute;
      left: -20px;
      color: var(--color-primary);
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

    /* CTA Section */
    .cta-section {
      padding: var(--spacing-xxl) 0;
      background: linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%),
                  url('../../../assets/images/cta-bg.svg') center/cover no-repeat;
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
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
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
      .page-title {
        font-size: 2.2rem;
      }

      .feature-item {
        flex-direction: column;
      }

      .feature-icon {
        margin-right: 0;
        margin-bottom: var(--spacing-md);
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
export class FeaturesComponent {}

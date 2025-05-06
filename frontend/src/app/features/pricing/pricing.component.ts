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
        <div class="cyber-grid"></div>
        <div class="scanline"></div>

        <div class="container">
          <h1 class="page-title">Planos do <span class="text-gradient">Osiris Rise</span></h1>
          <p class="page-subtitle">
            Escolha o plano ideal para sua jornada de transformação pessoal.
          </p>
        </div>
      </section>

      <!-- Planos de preços -->
      <section class="pricing-plans">
        <div class="container">
          <div class="pricing-grid">
            <!-- Plano Gratuito -->
            <div class="pricing-card">
              <div class="card-header">
                <div class="plan-icon">🚀</div>
                <h2>Gratuito</h2>
                <div class="price">R$ 0</div>
                <div class="price-period">para sempre</div>
              </div>
              <div class="card-divider"></div>
              <ul class="features">
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Contador de Recaídas</span>
                    <span class="feature-desc">Acompanhe seu progresso diário</span>
                  </div>
                </li>
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Sistema de Hábitos Básico</span>
                    <span class="feature-desc">Até 3 hábitos simultâneos</span>
                  </div>
                </li>
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Avatar Personalizável</span>
                    <span class="feature-desc">Opções básicas de personalização</span>
                  </div>
                </li>
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Comunidade de Apoio</span>
                    <span class="feature-desc">Acesso ao fórum da comunidade</span>
                  </div>
                </li>
              </ul>
              <div class="card-footer">
                <a routerLink="/auth/register" class="btn btn-primary btn-glow">
                  Começar Grátis
                  <span class="btn-icon">→</span>
                </a>
              </div>
            </div>

            <!-- Plano Premium -->
            <div class="pricing-card featured">
              <div class="featured-label">Popular</div>
              <div class="card-header">
                <div class="plan-icon">⭐</div>
                <h2>Premium</h2>
                <div class="price">R$ 19,90<span>/mês</span></div>
                <div class="price-period">cobrado mensalmente</div>
              </div>
              <div class="card-divider"></div>
              <ul class="features">
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Todos os recursos gratuitos</span>
                    <span class="feature-desc">Tudo do plano gratuito e mais</span>
                  </div>
                </li>
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Sistema de Hábitos Avançado</span>
                    <span class="feature-desc">Hábitos ilimitados e análises detalhadas</span>
                  </div>
                </li>
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Gerenciamento de Treinos</span>
                    <span class="feature-desc">Crie e acompanhe seus treinos</span>
                  </div>
                </li>
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Estatísticas Detalhadas</span>
                    <span class="feature-desc">Gráficos e insights personalizados</span>
                  </div>
                </li>
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Suporte Prioritário</span>
                    <span class="feature-desc">Atendimento em até 24 horas</span>
                  </div>
                </li>
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Sem Anúncios</span>
                    <span class="feature-desc">Experiência limpa e sem distrações</span>
                  </div>
                </li>
              </ul>
              <div class="card-footer">
                <a routerLink="/auth/register" class="btn btn-primary btn-glow">
                  Assinar Agora
                  <span class="btn-icon">→</span>
                </a>
              </div>
            </div>

            <!-- Plano Anual -->
            <div class="pricing-card">
              <div class="featured-label accent">Economia</div>
              <div class="card-header">
                <div class="plan-icon">💎</div>
                <h2>Anual</h2>
                <div class="price">R$ 179,90<span>/ano</span></div>
                <div class="price-period">2 meses grátis</div>
              </div>
              <div class="card-divider"></div>
              <ul class="features">
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Todos os recursos Premium</span>
                    <span class="feature-desc">Acesso completo por um ano</span>
                  </div>
                </li>
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Economia de 25%</span>
                    <span class="feature-desc">Comparado ao plano mensal</span>
                  </div>
                </li>
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Itens Exclusivos para Avatar</span>
                    <span class="feature-desc">Desbloqueie itens especiais</span>
                  </div>
                </li>
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Acesso Antecipado</span>
                    <span class="feature-desc">Experimente novos recursos primeiro</span>
                  </div>
                </li>
                <li>
                  <span class="feature-icon">✓</span>
                  <div class="feature-content">
                    <span class="feature-name">Suporte VIP</span>
                    <span class="feature-desc">Atendimento em até 12 horas</span>
                  </div>
                </li>
              </ul>
              <div class="card-footer">
                <a routerLink="/auth/register" class="btn btn-primary btn-glow">
                  Economizar Agora
                  <span class="btn-icon">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Seção de Garantia e FAQ -->
      <section class="pricing-guarantee">
        <div class="container">
          <div class="guarantee-faq-container">
            <div class="guarantee-box">
              <div class="guarantee-icon">🛡️</div>
              <h3>Garantia de 14 dias</h3>
              <p>Se você não estiver satisfeito com o Osiris Rise nos primeiros 14 dias, devolveremos seu dinheiro integralmente. Sem perguntas.</p>
            </div>

            <div class="faq-section">
              <h3>Perguntas Frequentes</h3>

              <div class="faq-item">
                <h4>Como funciona a cobrança?</h4>
                <p>A cobrança é feita automaticamente no início de cada período. Você pode cancelar a qualquer momento antes da próxima renovação.</p>
              </div>

              <div class="faq-item">
                <h4>Posso mudar de plano depois?</h4>
                <p>Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor imediatamente.</p>
              </div>

              <div class="faq-item">
                <h4>Quais formas de pagamento são aceitas?</h4>
                <p>Aceitamos cartões de crédito, débito, PayPal e Pix para todos os planos pagos.</p>
              </div>
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

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      position: relative;
      z-index: 3;
    }

    p {
      max-width: 600px;
      margin: 0 auto 2rem;
      font-size: 1.2rem;
      position: relative;
      z-index: 3;
    }

    .pricing-plans {
      padding: 3rem 0 5rem;
      background-color: var(--color-bg-medium);
    }

    .pricing-grid {
      display: flex;
      justify-content: center;
      gap: 2.5rem;
      flex-wrap: wrap;
      margin: 0 auto;
      max-width: 1200px;
    }

    .pricing-card {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      width: 350px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(231, 76, 60, 0.2);
    }

    .pricing-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(231, 76, 60, 0.2);
      border-color: rgba(231, 76, 60, 0.4);
    }

    .pricing-card.featured {
      border: 2px solid var(--color-primary);
      transform: scale(1.05);
      z-index: 2;
    }

    .pricing-card.featured:hover {
      transform: scale(1.05) translateY(-10px);
    }

    .featured-label {
      position: absolute;
      top: 10px;
      right: 20px;
      background-color: var(--color-primary);
      color: white;
      padding: 0.3rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: bold;
      box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
      z-index: 3;
    }

    .featured-label.accent {
      background-color: var(--color-secondary);
    }

    .card-header {
      padding: 2rem 2rem 1.5rem;
      text-align: center;
      position: relative;
    }

    .plan-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      display: inline-block;
      animation: pulse 3s infinite ease-in-out;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }

    .card-header h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .price {
      font-size: 2.5rem;
      font-weight: 700;
      margin: 1rem 0 0.5rem;
      color: var(--color-text-primary);
    }

    .price span {
      font-size: 1rem;
      opacity: 0.7;
      font-weight: 400;
    }

    .price-period {
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      margin-bottom: 0.5rem;
    }

    .card-divider {
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(231, 76, 60, 0.3), transparent);
      margin: 0 1.5rem;
    }

    .features {
      padding: 1.5rem 1.5rem;
      flex-grow: 1;
    }

    .features li {
      margin-bottom: 1.2rem;
      display: flex;
      align-items: flex-start;
    }

    .feature-icon {
      color: var(--color-primary);
      margin-right: 0.8rem;
      font-weight: bold;
      flex-shrink: 0;
      margin-top: 0.2rem;
    }

    .feature-content {
      display: flex;
      flex-direction: column;
    }

    .feature-name {
      font-weight: 500;
      margin-bottom: 0.2rem;
    }

    .feature-desc {
      font-size: 0.85rem;
      color: var(--color-text-secondary);
      line-height: 1.4;
    }

    .card-footer {
      padding: 1.5rem 2rem 2rem;
      text-align: center;
    }

    .btn {
      display: block;
      text-align: center;
      padding: 0.9rem 1.5rem;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.3s ease;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-primary {
      background-color: var(--color-primary);
      color: white;
    }

    .btn-primary:hover {
      background-color: var(--color-primary-dark);
      transform: translateY(-3px);
      box-shadow: 0 8px 15px rgba(231, 76, 60, 0.3);
    }

    .btn-icon {
      margin-left: 0.5rem;
      transition: transform 0.3s ease;
    }

    .btn:hover .btn-icon {
      transform: translateX(5px);
    }

    /* Seção de Garantia e FAQ */
    .pricing-guarantee {
      padding: 5rem 0;
      background-color: var(--color-bg-dark);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .guarantee-faq-container {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      align-items: flex-start;
    }

    .guarantee-box {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      border: 1px solid rgba(231, 76, 60, 0.2);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      flex: 1;
      min-width: 300px;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .guarantee-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      display: inline-block;
    }

    .guarantee-box h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: var(--color-text-primary);
    }

    .guarantee-box p {
      font-size: 1.1rem;
      color: var(--color-text-secondary);
      max-width: 400px;
    }

    .faq-section {
      flex: 1;
      min-width: 300px;
      max-width: 600px;
    }

    .faq-section h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
      color: var(--color-text-primary);
    }

    .faq-item {
      background: rgba(255, 255, 255, 0.03);
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      border: 1px solid rgba(231, 76, 60, 0.1);
      transition: all 0.3s ease;
    }

    .faq-item:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(231, 76, 60, 0.3);
      transform: translateY(-3px);
    }

    .faq-item h4 {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
      color: var(--color-primary);
    }

    .faq-item p {
      font-size: 1rem;
      color: var(--color-text-secondary);
      margin: 0;
    }

    /* Responsividade */
    @media (max-width: 1100px) {
      .pricing-grid {
        gap: 2rem;
      }

      .pricing-card {
        width: 320px;
      }
    }

    @media (max-width: 992px) {
      .pricing-card.featured {
        transform: scale(1);
      }

      .pricing-card.featured:hover {
        transform: translateY(-10px);
      }
    }

    @media (max-width: 768px) {
      .pricing-grid {
        flex-direction: column;
        align-items: center;
      }

      .pricing-card {
        width: 100%;
        max-width: 450px;
        margin-bottom: 2rem;
      }

      .pricing-card:last-child {
        margin-bottom: 0;
      }

      .guarantee-faq-container {
        flex-direction: column;
      }
    }

    @media (max-width: 480px) {
      .pricing-header {
        padding: 3rem 0;
      }

      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }

      .card-header {
        padding: 1.5rem 1.5rem 1rem;
      }

      .price {
        font-size: 2rem;
      }

      .features {
        padding: 1rem;
      }

      .card-footer {
        padding: 1rem 1.5rem 1.5rem;
      }
    }
  `]
})
export class PricingComponent {}

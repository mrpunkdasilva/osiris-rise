import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1 class="error-title">Página Não Encontrada</h1>
        <p class="error-message">
          Parece que você se perdeu na jornada. Esta página não existe ou foi movida.
        </p>
        <div class="hieroglyphs">𓀀 𓁹 𓂀 𓃾 𓆣 𓇋 𓈖 𓉐 𓊖 𓋴 𓌂 𓍯 𓎛 𓏲</div>
        <a routerLink="/" class="btn-return">
          <span class="btn-icon">←</span> Voltar para a Página Inicial
        </a>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 80vh;
      background-color: var(--color-bg-dark);
      position: relative;
      overflow: hidden;
    }

    .not-found-container::before {
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
      perspective: 1000px;
      transform: rotateX(45deg) scale(2);
      transform-origin: center bottom;
      opacity: 0.3;
    }

    .not-found-content {
      text-align: center;
      padding: 2rem;
      max-width: 600px;
      position: relative;
      z-index: 2;
      background: rgba(10, 10, 10, 0.7);
      border: 1px solid rgba(231, 76, 60, 0.3);
      backdrop-filter: blur(10px);
      border-radius: 8px;
    }

    .error-code {
      font-size: 8rem;
      font-weight: 800;
      line-height: 1;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 20px var(--color-highlight-glow);
    }

    .error-title {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: var(--color-text-primary);
    }

    .error-message {
      font-size: 1.1rem;
      color: var(--color-text-secondary);
      margin-bottom: 2rem;
    }

    .hieroglyphs {
      font-family: 'Noto Sans Egyptian Hieroglyphs', sans-serif;
      color: var(--color-secondary);
      opacity: 0.6;
      letter-spacing: 5px;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    .btn-return {
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 15px var(--color-highlight-glow);
    }

    .btn-return:hover {
      transform: translateY(-3px);
      box-shadow: 0 7px 20px var(--color-highlight-glow);
    }

    .btn-icon {
      margin-right: 0.5rem;
      transition: transform 0.3s ease;
    }

    .btn-return:hover .btn-icon {
      transform: translateX(-5px);
    }

    @media (max-width: 768px) {
      .error-code {
        font-size: 6rem;
      }

      .error-title {
        font-size: 1.5rem;
      }
    }
  `]
})
export class PageNotFoundComponent {}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-container">
      <header>
        <div class="header-content">
          <div class="logo">
            <a routerLink="/">
              <img src="assets/images/osiris-logo.svg" alt="Osiris Rise Logo" class="logo-image">
              <span class="logo-text">Osiris Rise</span>
            </a>
          </div>

          <nav class="main-nav">
            <ul>
              <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
              <li><a routerLink="/features" routerLinkActive="active">Recursos</a></li>
              <li><a routerLink="/pricing" routerLinkActive="active">Planos</a></li>
              <li><a routerLink="/about" routerLinkActive="active">Sobre</a></li>
            </ul>
          </nav>

          <div class="auth-buttons">
            <a routerLink="/auth/login" class="btn btn-login btn-glow">Login</a>
            <a routerLink="/auth/register" class="btn btn-register btn-glow">Registrar</a>
          </div>

          <button class="mobile-menu-toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>
      </header>

      <main>
        <router-outlet></router-outlet>
      </main>

      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>Osiris Rise</h3>
            <p>Transformação pessoal gamificada inspirada na mitologia egípcia.</p>
            <div class="social-links">
              <a href="#" class="social-link">📱</a>
              <a href="#" class="social-link">💻</a>
              <a href="#" class="social-link">📧</a>
            </div>
          </div>

          <div class="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/features">Recursos</a></li>
              <li><a routerLink="/pricing">Planos</a></li>
              <li><a routerLink="/about">Sobre</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a routerLink="/terms">Termos de Uso</a></li>
              <li><a routerLink="/privacy">Política de Privacidade</a></li>
              <li><a routerLink="/cookies">Cookies</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Contato</h3>
            <ul>
              <li>📧 contato&#64;osirisrise.com</li>
              <li>📱 (11) 99999-9999</li>
              <li>🏢 São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-logo">
            <img src="assets/images/osiris-logo.svg" alt="Osiris Rise Logo" class="footer-logo-image">
          </div>
          <p>© 2025 Osiris Rise - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: var(--color-bg-dark);
      color: var(--color-text-primary);
      position: relative;
    }

    .app-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image:
        radial-gradient(circle at 20% 30%, rgba(231, 76, 60, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 193, 7, 0.05) 0%, transparent 50%);
      pointer-events: none;
      z-index: 1;
    }

    /* Header Styles */
    header {
      background-color: rgba(10, 10, 10, 0.9);
      backdrop-filter: blur(10px);
      color: var(--color-text-primary);
      padding: var(--spacing-md) 0;
      position: sticky;
      top: 0;
      z-index: var(--z-index-sticky);
      box-shadow: 0 2px 20px var(--color-highlight-glow);
      border-bottom: 1px solid rgba(231, 76, 60, 0.5);
    }

    .header-content {
      max-width: var(--container-xl);
      margin: 0 auto;
      padding: 0 var(--spacing-md);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--color-text-primary);
    }

    .logo-image {
      height: 40px;
      width: 40px;
      margin-right: var(--spacing-sm);
      filter: drop-shadow(0 0 5px var(--color-highlight-glow));
      animation: pulse 3s infinite ease-in-out;
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 10px var(--color-highlight-glow);
      letter-spacing: 1px;
    }

    .main-nav ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .main-nav li {
      margin: 0 var(--spacing-md);
    }

    .main-nav a {
      color: var(--color-text-primary);
      text-decoration: none;
      font-weight: 500;
      padding: var(--spacing-sm) 0;
      position: relative;
      transition: color var(--transition-normal);
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 0.9rem;
    }

    .main-nav a:hover, .main-nav a.active {
      color: var(--color-primary);
    }

    .main-nav a:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient-primary);
      transition: width var(--transition-normal);
      box-shadow: 0 0 10px var(--color-highlight-glow);
    }

    .main-nav a:hover:after, .main-nav a.active:after {
      width: 100%;
    }

    .auth-buttons {
      display: flex;
      gap: var(--spacing-md);
    }

    .btn {
      padding: var(--spacing-sm) var(--spacing-lg);
      border-radius: 0;
      font-weight: 600;
      text-decoration: none;
      transition: all var(--transition-normal);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.9rem;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }

    .btn-login {
      color: var(--color-text-primary);
      border: 1px solid var(--color-primary);
      background-color: transparent;
    }

    .btn-login:hover {
      box-shadow: 0 0 15px var(--color-highlight-glow);
    }

    .btn-register {
      background: var(--gradient-primary);
      color: var(--color-bg-dark);
      border: none;
    }

    .btn-register:hover {
      box-shadow: 0 0 20px var(--color-highlight-glow);
      transform: translateY(-2px);
    }

    .mobile-menu-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
      background: transparent;
      border: none;
    }

    .mobile-menu-toggle .bar {
      width: 25px;
      height: 2px;
      background-color: var(--color-text-primary);
      margin: 4px 0;
      transition: all var(--transition-normal);
    }

    /* Main Styles */
    main {
      flex: 1;
      background: var(--gradient-dark);
      position: relative;
      z-index: 2;
    }

    /* Footer Styles */
    footer {
      background-color: var(--color-bg-dark);
      color: var(--color-text-primary);
      padding: var(--spacing-xxl) 0 var(--spacing-lg);
      border-top: 1px solid rgba(231, 76, 60, 0.5);
      position: relative;
      z-index: 2;
    }

    .footer-content {
      max-width: var(--container-xl);
      margin: 0 auto;
      padding: 0 var(--spacing-md);
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-xxl);
    }

    .footer-section {
      flex: 1;
      min-width: 150px;
    }

    .footer-section h3 {
      font-size: 1.2rem;
      margin-bottom: var(--spacing-md);
      color: var(--color-secondary);
      position: relative;
      padding-bottom: var(--spacing-sm);
      letter-spacing: 1px;
    }

    .footer-section h3:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background: var(--gradient-primary);
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      margin: var(--spacing-sm) 0;
    }

    .footer-section ul li a {
      color: var(--color-text-primary);
      text-decoration: none;
      transition: color var(--transition-normal);
      position: relative;
      padding-left: 15px;
    }

    .footer-section ul li a:before {
      content: '›';
      position: absolute;
      left: 0;
      color: var(--color-primary);
    }

    .footer-section ul li a:hover {
      color: var(--color-primary);
    }

    .social-links {
      display: flex;
      gap: var(--spacing-md);
      margin-top: var(--spacing-md);
    }

    .social-link {
      font-size: 1.5rem;
      color: var(--color-text-primary);
      transition: all var(--transition-normal);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(231, 76, 60, 0.5);
    }

    .social-link:hover {
      color: var(--color-bg-dark);
      background: var(--gradient-primary);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px var(--color-highlight-glow);
    }

    .footer-bottom {
      margin-top: var(--spacing-xxl);
      border-top: 1px solid rgba(231, 76, 60, 0.3);
      padding-top: var(--spacing-md);
      text-align: center;
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      max-width: var(--container-xl);
      margin-left: auto;
      margin-right: auto;
    }

    .footer-logo {
      margin-bottom: var(--spacing-md);
    }

    .footer-logo-image {
      height: 50px;
      margin: 0 auto;
      filter: grayscale(50%) opacity(0.7);
      transition: all var(--transition-normal);
    }

    .footer-logo-image:hover {
      filter: grayscale(0%) opacity(1);
    }

    @media (max-width: 768px) {
      .header-content {
        flex-wrap: wrap;
      }

      .mobile-menu-toggle {
        display: flex;
      }

      .main-nav, .auth-buttons {
        display: none;
      }

      .footer-content {
        flex-direction: column;
        text-align: center;
      }

      .footer-section h3:after {
        left: 50%;
        transform: translateX(-50%);
      }

      .social-links {
        justify-content: center;
      }

      .footer-section ul li a {
        padding-left: 0;
      }

      .footer-section ul li a:before {
        display: none;
      }
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Osiris Rise';

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.init();
    this.seoService.updateCanonicalUrl();
  }
}

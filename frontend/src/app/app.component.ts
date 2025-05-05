import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

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
              <span class="logo-icon">🔆</span>
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
            <a routerLink="/auth/login" class="btn btn-login">Login</a>
            <a routerLink="/auth/register" class="btn btn-register">Registrar</a>
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
              <li>📧 contato@osirisrise.com</li>
              <li>📱 (11) 99999-9999</li>
              <li>🏢 São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2025 Osiris Rise - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      font-family: 'Roboto', sans-serif;
    }

    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    /* Header Styles */
    header {
      background-color: #2c3e50;
      color: white;
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
    }

    .logo-icon {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .main-nav ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .main-nav li {
      margin: 0 1rem;
    }

    .main-nav a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 0;
      position: relative;
      transition: color 0.3s ease;
    }

    .main-nav a:hover, .main-nav a.active {
      color: #e74c3c;
    }

    .main-nav a:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #e74c3c;
      transition: width 0.3s ease;
    }

    .main-nav a:hover:after, .main-nav a.active:after {
      width: 100%;
    }

    .auth-buttons {
      display: flex;
      gap: 1rem;
    }

    .btn {
      padding: 0.5rem 1rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .btn-login {
      color: white;
      border: 1px solid white;
    }

    .btn-login:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .btn-register {
      background-color: #e74c3c;
      color: white;
      border: 1px solid #e74c3c;
    }

    .btn-register:hover {
      background-color: #c0392b;
    }

    .mobile-menu-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }

    .mobile-menu-toggle .bar {
      width: 25px;
      height: 3px;
      background-color: white;
      margin: 3px 0;
    }

    /* Main Styles */
    main {
      flex: 1;
      padding: 1rem;
    }

    /* Footer Styles */
    footer {
      background-color: #2c3e50;
      color: white;
      padding: 1rem 0;
      text-align: center;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .footer-section {
      flex: 1;
      min-width: 150px;
    }

    .footer-section h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      margin: 0.5rem 0;
    }

    .footer-section ul li a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section ul li a:hover {
      color: #e74c3c;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .social-link {
      font-size: 1.5rem;
      color: white;
      transition: color 0.3s ease;
    }

    .social-link:hover {
      color: #e74c3c;
    }

    .footer-bottom {
      margin-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 1rem;
    }
  `]
})
export class AppComponent {
  title = 'Osiris Rise';
}

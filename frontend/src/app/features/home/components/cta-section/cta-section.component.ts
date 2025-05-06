import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="cta-section">
      <h2>Pronto para iniciar sua jornada?</h2>
      <p>Junte-se a milhares de pessoas que estão transformando suas vidas com Osiris Rise.</p>
      <a routerLink="/auth/register" class="btn btn-primary btn-large">Comece Gratuitamente</a>
    </div>
  `,
  styles: [`
    .cta-section {
      background-color: #f8f9fa;
      padding: 4rem 2rem;
      text-align: center;
      border-radius: 50px 50px 0 0;
      margin-top: 4rem;
    }
    
    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: #2c3e50;
    }
    
    p {
      max-width: 600px;
      margin: 0 auto 2rem;
      font-size: 1.2rem;
      opacity: 0.8;
    }
    
    .btn {
      padding: 1rem 2rem;
      border-radius: 50px;
      font-size: 1.2rem;
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
    
    .btn-large {
      padding: 1rem 2rem;
      font-size: 1.2rem;
    }
  `]
})
export class CtaSectionComponent {}
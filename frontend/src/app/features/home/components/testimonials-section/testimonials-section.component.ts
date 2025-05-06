import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';

interface Testimonial {
  text: string;
  author: string;
}

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, TestimonialCardComponent],
  template: `
    <div class="testimonials-section">
      <h2>O que nossos usuários dizem</h2>
      <div class="testimonials-grid">
        <app-testimonial-card 
          *ngFor="let testimonial of testimonials"
          [text]="testimonial.text"
          [author]="testimonial.author">
        </app-testimonial-card>
      </div>
    </div>
  `,
  styles: [`
    .testimonials-section {
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
    
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    @media (max-width: 768px) {
      .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class TestimonialsSectionComponent {
  testimonials: Testimonial[] = [
    {
      text: "Osiris Rise mudou completamente minha relação com hábitos saudáveis. A gamificação torna tudo mais divertido e motivador.",
      author: "Carlos S."
    },
    {
      text: "Depois de várias tentativas frustradas, finalmente consegui superar meu vício em redes sociais graças ao contador de recaídas.",
      author: "Ana P."
    },
    {
      text: "O sistema de treinos personalizados é incrível! Consigo acompanhar meu progresso e me manter motivado.",
      author: "Rafael M."
    }
  ];
}
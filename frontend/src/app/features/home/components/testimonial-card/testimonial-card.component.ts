import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  template: `
    <div class="testimonial-card">
      <p class="testimonial-text">{{ text }}</p>
      <div class="testimonial-author">- {{ author }}</div>
    </div>
  `,
  styles: [`
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
  `]
})
export class TestimonialCardComponent {
  @Input() text: string = '';
  @Input() author: string = '';
}
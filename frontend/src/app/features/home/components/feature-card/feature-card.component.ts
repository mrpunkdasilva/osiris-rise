import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  template: `
    <div class="feature-card">
      <div class="feature-icon">{{ icon }}</div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  `,
  styles: [`
    .feature-card {
      background-color: #f8f9fa;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
    }
    
    .feature-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
    
    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #2c3e50;
    }
    
    p {
      line-height: 1.6;
      color: #555;
    }
  `]
})
export class FeatureCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
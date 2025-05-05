import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  @Input() type: 'success' | 'info' | 'warning' | 'error' = 'info';
  @Input() message = '';
  @Input() dismissible = true;
  @Output() dismissed = new EventEmitter<void>();

  onDismiss(): void {
    this.dismissed.emit();
  }
}
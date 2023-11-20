import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss'
})
export class CtaButtonComponent {
  @Input() text: string = "";
  @Output() onClickEvent: EventEmitter<void> = new EventEmitter();

  onClickTriggered() {
    this.onClickEvent.emit()
  }
}

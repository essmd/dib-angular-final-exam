import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input()
  text?: string;

  @Input()
  routerLink?: string;

  @Output()
  onClick = new EventEmitter();

  onButtonClick() {
    if (this.routerLink) {
      return;
    }

    this.onClick.emit();
  }
}

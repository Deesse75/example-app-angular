import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-app-button',
  styleUrl: './app-button.scss',
  templateUrl: './app-button.html',
})
export class AppButton {
  value = input<number>();
  outClick = output<number>();

  onClick(event: Event): void {
    event.stopPropagation();
    this.outClick.emit(this.value() ?? 0);
  }
}

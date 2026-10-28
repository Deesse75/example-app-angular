import { Component, signal } from '@angular/core';
import { AppButton } from './components/app-button/app-button';


@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  imports: [AppButton],
})
export class App {
  protected readonly result = signal(0);

  protected add(value: number): void {
    this.result.set(this.result() + value);
  }
}

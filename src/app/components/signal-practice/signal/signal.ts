import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  
  count = signal(5);

  increment() {
    this.count.update(value => value + 1);   
  }

  decrement() {
    this.count.update(value => value - 1);   
  }

  reset() {
    this.count.set(0);
  }
}

import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  
  count = signal(5);
  doubleCount = computed(() => this.count() * 2);
    constructor() {
    // effect(() => {
    //   console.log('Double Count changed:', this.doubleCount());
    //   console.log('Count changed:', this.count());
    // });
  }

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

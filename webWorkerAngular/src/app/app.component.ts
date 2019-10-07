import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webWorkerAngular';
  data = new BehaviorSubject([]);
  arrayOfSomething = [];

  ngOnInit(){
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./workers/infinity-loop.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        this.arrayOfSomething.push(data)
        this.data.next(this.arrayOfSomething);
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }

    this.data.subscribe((d) => {
      console.log(d);
    });
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'lib-pack-base',
  template: `
  <div class="pack-container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class PackComponent { }

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pack1Component } from './pack-1/pack1.component';
import { Pack2Component } from './pack-2/pack2.component';
import { PackComponent } from './pack.component';

const ROUTER: Routes = [{
  path: '',
  component: PackComponent,
  children: [{
    path: 'pack-1',
    component: Pack1Component
  }, {
    path: 'pack-2',
    component: Pack2Component
  }]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PackRoutingModule {
  static withRouter(): ModuleWithProviders<RouterModule> {
    return RouterModule.forChild(ROUTER);
  }
}

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pack1Component } from './pack-1/pack1.component';
import { Pack2Component } from './pack-2/pack2.component';
// import { PackRoutingModule } from './pack-routing.module';
import { PackComponent } from './pack.component';

export const ROUTER: Routes = [{
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
  declarations: [
    PackComponent,
    Pack1Component,
    Pack2Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // PackComponent,
    // Pack1Component,
    // Pack2Component,
    // RouterModule
  ]
})
export class PackModule {
  static withRoutes(): ModuleWithProviders<RouterModule> {
    return RouterModule.forChild(ROUTER);
  }
}

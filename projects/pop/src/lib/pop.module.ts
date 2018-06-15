import { NgModule } from '@angular/core';
import { PopComponent } from './pop.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
  ],
  declarations: [PopComponent, ButtonComponent],
  exports: [PopComponent, ButtonComponent]
})
export class PopModule { }

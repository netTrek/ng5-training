import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoHoverDirective } from './do-hover.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DoHoverDirective, ReversePipe],
  exports: [DoHoverDirective, ReversePipe]
})
export class CommonUiModule { }

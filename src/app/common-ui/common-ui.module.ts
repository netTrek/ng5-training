import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoHoverDirective } from './do-hover.directive';
import { ReversePipe } from './reverse.pipe';
import { ErrorMsgService } from './error-msg.service';
import { ErrorViewComponent } from './error-view/error-view.component';

@NgModule ( {
  imports     : [
    CommonModule
  ],
  providers   : [ ErrorMsgService ],
  declarations: [ DoHoverDirective,
                  ReversePipe,
                  ErrorViewComponent
  ],
  exports     : [ DoHoverDirective,
                  ReversePipe,
                  ErrorViewComponent
  ]
} )
export class CommonUiModule {
}

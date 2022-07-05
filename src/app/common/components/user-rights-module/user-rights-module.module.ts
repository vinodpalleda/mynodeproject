import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRightsComponent } from './user-rights/user-rights.component';



@NgModule({
  declarations: [UserRightsComponent],
  imports: [
    CommonModule,
  ],
  exports: [UserRightsComponent]
})
export class UserRightsModuleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStructureComponent } from './table-structure/table-structure.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableStructureComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [
    TableStructureComponent,
    // NgxPaginationModule,
  ]
})
export class CommonTableModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ClientSidePagenationComponent } from './client-side-pagenation.component';
import { RouterModule } from '@angular/router';
import { ExcelExportComponent } from './excel-export/excel-export.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientSidePagenationComponent } from './client-side-pagenation/client-side-pagenation.component';
import { PresentationComponent } from './presentation.component';
import { WheelPickerComponent } from './wheel-picker/wheel-picker.component';
import { NgxWheelModule } from 'ngx-wheel';
import { TableCommonComponent } from './table-common/table-common.component';
import { CommonTableModule } from 'app/common/components/common-table/common-table.module';



const routes = [
  {
    path: '',
    component: PresentationComponent,
    children: [
      {
        path: 'clientSidePagenation',
        component: ClientSidePagenationComponent,
        data: { data: ['/clientSidePagenation'] }
      },
      {
        path: 'export',
        component: ExcelExportComponent,
        data: { data: ['/export'] }
      },
      {
        path: 'wheelpicker',
        component: WheelPickerComponent,
        data: { data: ['/wheelpicker'] }
      },
      {
        path: 'commontable',
        component: TableCommonComponent,
        data: { data: ['/commontable'] }
      } 
    ]
  }
];

@NgModule({
  declarations: [ClientSidePagenationComponent, ExcelExportComponent, PresentationComponent, WheelPickerComponent, TableCommonComponent],
  imports: [  
    CommonModule,
    CommonTableModule,
    FormsModule,
    // MainpageRoutingModule,  
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxWheelModule,
    RouterModule.forChild(routes)
  ]
})
export class PresentationModule { }

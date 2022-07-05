import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DvasServicesComponent } from './dvas-services.component';
import { ConfigureProductComponent } from './configure-product/configure-product.component';
import { ManageProductComponent } from './manage-product/manage-product.component';

const routes = [
  {
    path: '',
    component: DvasServicesComponent,
    children: [
      {
        path: 'configProduct',
        component: ConfigureProductComponent,
        // data: { data: ['/configproduct'] }
      },
      {
        path: 'manageProduct',
        component: ManageProductComponent,
        // data: { data: ['/manage'] }
      } 
    ]
  }
];
  
@NgModule({
    declarations: [
                    DvasServicesComponent,
                    ManageProductComponent,
                    ConfigureProductComponent
                  ],
    imports:   [  
                  CommonModule,
                  FormsModule,
                  ReactiveFormsModule,
                  CommonModule,
                  RouterModule.forChild(routes)
               ],
    exports:  [
                // ConfigureProductComponent,
                ManageProductComponent
              ]
  })
  export class DvasServicesModule { }
  
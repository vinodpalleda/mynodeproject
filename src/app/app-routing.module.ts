import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PresentationModule } from './main/presentation/presentation.module';
import { DvasServicesModule } from './main/dvas-services/dvas-services.module';
  
const routes = [
    {
        path: 'dvasServices',
        loadChildren: () => import('./main/dvas-services/dvas-services.module').then(m => m.DvasServicesModule)
    },
    {
        path: 'presentation',
        loadChildren: () => import('./main/presentation/presentation.module').then(m => m.PresentationModule)
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
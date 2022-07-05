import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { CommonService } from './common/common.service';
import { NetworkService } from './common/network.service';
import { NetworkWAService } from './common/networkWA.service';
import { LoggedInUserOnlyGuard } from './common/guards/logged-in-user-only.guard';
import { UserAuthenticationService } from './common/user-authentication.service';
import { PublicViewOnlyGuard } from './common/guards/public-view-only.guard';
import { AdminUserGuard } from './common/guards/admin-user.guard';
import { IntermediateUserGuard } from './common/guards/intermediate-user.guard';
import { FilesDragDropDirective } from './common/directives/files-drag-drop.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxWheelModule } from 'ngx-wheel';
import { map } from "rxjs/operators";
import { EndUserGuard } from './common/guards/end-user.guard';
import { SuperAdminUserGuard } from './common/guards/super-admin-user.guard';
import { AppRoutingModule } from "./app-routing.module";
import { PresentationModule } from './main/presentation/presentation.module';
import { DvasServicesModule } from './main/dvas-services/dvas-services.module';


@NgModule({
    declarations: [
        AppComponent,
        FilesDragDropDirective

    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxWheelModule,
        // CommonTableModule,
        // RouterModule.forRoot(routes),
        AppRoutingModule,

        // App modules
        // ManageQuarantineListModule
        PresentationModule,
        DvasServicesModule

    ],
    // "@angular/elements": "10.1.2",

    bootstrap: [
        AppComponent
    ],
    providers: [
        NetworkService,
        NetworkWAService,
        CommonService,
        LoggedInUserOnlyGuard,
        PublicViewOnlyGuard,
        UserAuthenticationService,
        // SuperAdminUserGuard,
        AdminUserGuard,
        IntermediateUserGuard,
        // EndUserGuard,
        // { provide: LocationStrategy, useClass: HashLocationStrategy },
    ]
})
export class AppModule {
}

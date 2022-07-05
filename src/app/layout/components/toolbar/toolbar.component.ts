import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { navigation } from 'app/navigation/navigation';
import { CommonService } from 'app/common/common.service';
import { ToolbarService } from '../../../common/toolbar.service';
import { DatePipe } from '@angular/common';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent implements OnInit, OnDestroy {
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];
    userData: any;
    subscription: Subscription;
    credit: string;
    userAccountType: string;
    displayDate: any;
    displayTime: any;
    receivedTime: any;
    userRole: any;
    fuseConfig: any;
    upperNavigationArr = [];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {TranslateService} _translateService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService,
        private _commonService: CommonService,
        private _toolbarService: ToolbarService,
        public datepipe: DatePipe,
        private fuseNavigationService: FuseNavigationService,
        private _changeDetectorRef: ChangeDetectorRef,
    ) {
        this.subscription = this._toolbarService.onData().subscribe(data => {
            if (data) {
                this.credit = data.data.credits;
                this.receivedTime = data.data.time;
                console.log('received Data:  ' + JSON.stringify(data.data.credits));
                setInterval(() => {
                    // const currentDate = new Date(data.data.time);

                    const currentDate = new Date();
                    this.displayDate = this.datepipe.transform(currentDate, 'dd-MMM-yyyy');
                    this.displayTime = currentDate.toLocaleTimeString();
                }, 1000);
            }
        });


        // Set the defaults
        this.userStatusOptions = [
            {
                title: 'Online',
                icon: 'icon-checkbox-marked-circle',
                color: '#4CAF50'
            },
            {
                title: 'Away',
                icon: 'icon-clock',
                color: '#FFC107'
            },
            {
                title: 'Do not Disturb',
                icon: 'icon-minus-circle',
                color: '#F44336'
            },
            {
                title: 'Invisible',
                icon: 'icon-checkbox-blank-circle-outline',
                color: '#BDBDBD'
            },
            {
                title: 'Offline',
                icon: 'icon-checkbox-blank-circle-outline',
                color: '#616161'
            }
        ];

        this.languages = [
            {
                id: 'en',
                title: 'English',
                flag: 'us'
            },
            {
                id: 'tr',
                title: 'Turkish',
                flag: 'tr'
            }
        ];
        this.userData = {
            username: ''
        };

        this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
                this.fuseConfig = settings;
            });

        // Set the selected language from default languages
        this.selectedLanguage = _.find(this.languages, { id: this._translateService.currentLang });
        this.userData.username = this._commonService.authInfo().username;
        if (this._commonService.userInfo()) {
            this.userAccountType = this._commonService.userInfo().accountTypeValue;
            this.userRole = this._commonService.userInfo().account_type;
        }
        this.fuseNavigationService.upperNavigationObs.subscribe((value) => {
            this.upperNavigationArr = [];
            this.upperNavigationArr = value;
        });
        // this.upperNavigationArr = this.fuseNavigationService.getUpperNavigationArr();
        this._changeDetectorRef.markForCheck();
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    /**
     * Search
     *
     * @param value
     */
    search(value): void {
        // Do your search here...
        console.log(value);
    }

    /**
     * Set the language
     *
     * @param lang
     */
    setLanguage(lang): void {
        // Set the selected language for the toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this._translateService.use(lang.id);
    }

    logoutTheUser(): void {
        this._commonService.logOut();
    }
}

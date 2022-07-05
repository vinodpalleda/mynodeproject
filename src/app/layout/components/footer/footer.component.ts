import { Component } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'footer',
    templateUrl: './footer.component.html',
    styleUrls  : ['./footer.component.scss']
})
export class FooterComponent
{
    fuseConfig: any;
    
    /**
     * Constructor
     */
    constructor(private _fuseConfigService: FuseConfigService)
    {
        this._fuseConfigService.config
        .subscribe((config) => {
          this.fuseConfig = config;
        });
  
    }
}

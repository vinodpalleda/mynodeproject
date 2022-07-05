import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-rights',
  templateUrl: './user-rights.component.html',
  styleUrls: ['./user-rights.component.scss']
})
export class UserRightsComponent implements OnInit {
  @Input() jsonData: any;
  constructor() { }

  ngOnInit(): void {
    console.log('data:   ' + this.jsonData);
  }

}

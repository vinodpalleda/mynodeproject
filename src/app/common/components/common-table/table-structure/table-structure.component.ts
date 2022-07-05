import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.css']
})
export class TableStructureComponent implements OnInit {

  @Output() pageUpdated = new EventEmitter()
  @Output() sortUpdated = new EventEmitter()
  @Output() searchUpdated = new EventEmitter()

  term: string = '';
  p: number = 1;
  // totalcount: any = 4;
  limit: number = 10;
  sortedColumn: string;

  @Input() columns: any[] = [];
  @Input() totalcount: any = 0;

  @Input() dataSource: any[] = [];
  @Input() headerCellTemplate: TemplateRef<any> = null;
  @Input() cellTemplate: TemplateRef<any> = null;

  // constructor() {}
  // ngOnInit(): void {

  // }
  ngOnChanges(changes) {
    console.log(">>> changes", changes);
    console.log(this.totalcount, this.limit)
  }




  public readonly pageLimitOptions = [
    { value: 5 },
    { value: 10 },
    { value: 25 },
    { value: 50 },
    { value: 100 },
  ];
  constructor(private user: UserService, private route: ActivatedRoute, 
    private router: Router) { }



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.p = +params['page'] || 1;
      this.limit = +params['limit'] || 10;
    })
    // this.getApi();
  }
  // getApi() {
  //   throw new Error('Method not implemented.');
  // }




  pageChanged(event) {
    this.p = event;
    console.log(this.p, event)
    this.router.navigate([], { queryParams: { page: event, limit: this.limit } });
    this.pageUpdated.emit({ page: this.p })
    // this.getApi() 
  }

  sortByCol(column) {
    this.sortUpdated.emit({ col: column })
  }

  search(){
    this.searchUpdated.emit({ val: this.term })
  }

}


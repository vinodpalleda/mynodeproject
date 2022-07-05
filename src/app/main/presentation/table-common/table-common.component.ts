import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-table-common',
  templateUrl: './table-common.component.html',
  styleUrls: ['./table-common.component.css']
})
export class TableCommonComponent implements OnInit {

  p: number = 1;
  data: any;
  totalcount: any = 100;
  limit: number = 10;
  // sortedColumn:string;


  //table component array data
  dataSource = []

  columns = ["id", "name", "company"];


  //table create using directive

  constructor(private user: UserService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.p = +params['page'] || 1;
      this.limit = +params['limit'] || 10;
    })
    this.getApi();
  }

  copySource: any = []
  getApi() {
    console.log("----")
    this.user.getData(`users?page=${this.p}&limit=${this.limit}`).subscribe((data: any) => {
      this.dataSource = [];
      this.dataSource = data;
      this.copySource = [...this.dataSource]
    })
  }

  pageChange($event) {
    this.p = $event.page;
    this.getApi();
  }

  sortChange($event) {
    this.sortByCol($event.col)
  }

  sortObj: any = {
    name: true,
    trips: true
  }

  //sorting table data

  sortByCol(col) {
    const data = this.dataSource.slice();
    data.sort((a, b) => {
      const isAsc = this.sortObj[col];
      switch (col) {
        case 'trips':
          return this.compare(a.trips, b.trips, isAsc);
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        default:
          return 0;
      }
    });
    this.dataSource = [...data]
    this.sortObj[col] = !this.sortObj[col];
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }


  //searh table data
  search($event) {
    if (!this.dataSource) {
      this.dataSource = []
      return
    }

    if (!$event.val) {
      this.dataSource = this.copySource
      return
    }

    this.searchItems(this.copySource, $event.val.toLowerCase());
  }


  searchItems(items: any[], searchText) {
    let results = [];
    items.forEach(it => {
      if (it.name.toLowerCase().includes(searchText.toLowerCase())) {
        console.log(it.name, searchText)

        results.push(it);
      }
    });

    this.dataSource = results;
  }

}

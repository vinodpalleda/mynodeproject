import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-client-side-pagenation',
  templateUrl: './client-side-pagenation.component.html',
  styleUrls: ['./client-side-pagenation.component.css']
})
export class ClientSidePagenationComponent implements OnInit {

  p: number = 1;
  data: any;
  totalcount: any = 100;
  limit: number = 10;
  sortedColumn: string;
  // public readonly pageLimitOptions = [
  //   { value: 5 },
  //   { value: 10 },
  //   { value: 25 },
  //   { value: 50 },
  //   { value: 100 },
  // ];
  constructor(private user: UserService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.p = +params['page'] || 1;
      // this.limit = +params['limit'] || 10;
    })
    this.getApi();
  }

  /* for select change table data limit */
  onLimitChange(value) {
    console.log(value)
    this.limit = value
    this.getApi()
  }

  /* for select change table data limit */



  pageChanged(event) {
    this.p = event;
    console.log(this.p, event)
    // console.log(this.limit)
    // this.router.navigate(
    //  [''], 
    //   {
    //   queryParams: {page:this.p}, 
    //   });
    const queryParams ={page:this.p} ;

    this.router.navigate(
      [],
      {
        queryParams: queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });

    // this.router.navigate([''], { queryParams: { page: event } });

    this.getApi()
  }





  getApi() {
    this.user.getData(`users?page=${this.p}&limit=${this.limit}`).subscribe((data: any) => {
      this.data = data;
    })
  }

}

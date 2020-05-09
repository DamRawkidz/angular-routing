import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockDataService } from 'src/app/mock-data.service';


@Component({
  selector: 'app-mock-data',
  templateUrl: './mock-data.component.html',
  styleUrls: ['./mock-data.component.css']
})
export class MockDataComponent implements OnInit {
  data
  constructor(
    public router:Router,
    public activeRoute:ActivatedRoute,
    public mockDataSV:MockDataService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(data => {
      this.data = this.mockDataSV.getMockData().find(x => +data.id == x.id) || null
    })
  }

  back(){
    this.router.navigate(['../../'],{ relativeTo: this.activeRoute})
  }

}

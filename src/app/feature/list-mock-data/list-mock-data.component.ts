import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/mock-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-mock-data',
  templateUrl: './list-mock-data.component.html',
  styleUrls: ['./list-mock-data.component.css']
})
export class ListMockDataComponent implements OnInit {
  array = []
  constructor(
    public sv:MockDataService,
    public route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.array = this.sv.getMockData()
    this.route.data.subscribe(x => console.log(x))
  }

}

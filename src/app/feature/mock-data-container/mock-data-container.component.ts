import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mock-data-container',
  templateUrl: './mock-data-container.component.html',
  styleUrls: ['./mock-data-container.component.css']
})
export class MockDataContainerComponent implements OnInit {

  constructor(
    private activeRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['../'],{ relativeTo: this.activeRoute})
  }
}

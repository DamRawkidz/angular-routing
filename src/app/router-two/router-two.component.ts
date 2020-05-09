import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-two',
  templateUrl: './router-two.component.html',
  styleUrls: ['./router-two.component.css']
})
export class RouterTwoComponent implements OnInit {

  constructor(
    public activeRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.data.subscribe(
      x => console.log(x)
    )
  }

}

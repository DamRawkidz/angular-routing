import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-one',
  templateUrl: './router-one.component.html',
  styleUrls: ['./router-one.component.css']
})
export class RouterOneComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(x => alert(x.id))
    this.route.data.subscribe(
      x => console.log(x)
    )
  }

}

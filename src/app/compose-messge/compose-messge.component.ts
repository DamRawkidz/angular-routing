import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose-messge',
  templateUrl: './compose-messge.component.html',
  styleUrls: ['./compose-messge.component.css']
})
export class ComposeMessgeComponent implements OnInit {

  constructor(
    public route:Router
  ) { }

  ngOnInit() {
  }

  closecomponent(){
    this.route.navigate([{outlets: { popup: null }}])
  }

}

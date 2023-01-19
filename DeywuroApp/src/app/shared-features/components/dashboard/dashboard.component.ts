import { Component, OnInit } from '@angular/core';
import { RouteOnClickService } from 'src/app/route-on-click.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  copyrightyear=new Date().getFullYear();

  constructor(private clickRouter:RouteOnClickService) { }

  ngOnInit(): void {
  }

  logUserOut(){
    // ***Todo: Log user out**
    this.clickRouter.routeToAnotherPage('/login')
  }

}

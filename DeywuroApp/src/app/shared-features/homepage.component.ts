import { Component,  OnInit } from '@angular/core';
import { RouteOnClickService } from '../route-on-click.service';

@Component({
  selector: 'shared-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  copyrightyear=new Date().getFullYear();
  
  constructor(private routeOnClick:RouteOnClickService) { }

  ngOnInit(): void {
  }

  

  reloadPage(){
    this.routeOnClick.reload('/deywuro/welcome')
  }

}

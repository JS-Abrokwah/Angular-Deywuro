import { Component, OnInit } from '@angular/core';
import { RouteOnClickService } from '../route-on-click.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  constructor(private _clickroute:RouteOnClickService) { }
  public hovered1:boolean=false;
  public hovered2:boolean=false;

  ngOnInit(): void {
  }

  imgclicked(){
    this._clickroute.reload('/');
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteOnClickService {

  constructor(private _router:Router, private _currentRoute:ActivatedRoute) { }

  reload(url:string):void{
    // console.log(this._router.url);
    if (url==this._router.url){
      this._router.routeReuseStrategy.shouldReuseRoute=()=>false;
      this._router.onSameUrlNavigation='reload';
      this._router.navigate([url],{relativeTo:this._currentRoute})
      // console.log('condition passed');
    }
    // else{
    //   console.log('Condition fail')
    // }
  }

  routeToAnotherPage(url:string):void{
    this._router.navigate([url])
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tab-renderer',
  templateUrl: './tab-renderer.component.html',
  styleUrls: ['./tab-renderer.component.css']
})
export class TabRendererComponent implements OnInit {
  //All @Input and @Output decorated properties are controlled by the parent of this component 
  @Input('Tabs') Tabs!:any[];


  @Input('Heading') heading!:string;

  @Input('hasTabs') hasTabs!:boolean;

  @Output() nextTab:EventEmitter<any>=new EventEmitter(); 

  @Output() prevTab:EventEmitter<any>=new EventEmitter(); 

  @Output() submit:EventEmitter<any>=new EventEmitter(); 

  @Output() save:EventEmitter<any>=new EventEmitter();

  @Input('selectTab') selectedTab!:number;

  @Input('canSaveMessage') canSaveMessage!:boolean;
  
  @Input('focusOnLastTab') focusOnLastTab!:boolean;

  @Input('saveMsgBtnColor') saveMsgBtnColor!:any; 

  //This object should be fed/populated with back-end data
  UserProfile={
    username:'Panyin',
    realName:'Joseph Abrokwah Senior',
    organization:'Kwaku Attah Panyin',
    totalCredit:'GHc 0.00'
  }
  constructor() { }

  ngOnInit(): void {
    
  }

  getBtnColor(){
    return this.saveMsgBtnColor
  }
  forwardTab(){
    this.nextTab.emit();
  }

  backwardTab(){
    this.prevTab.emit();
  }

  SubmitClicked(){
    this.submit.emit();
  }

  saveNewMessage(){
    this.save.emit();
  }
}

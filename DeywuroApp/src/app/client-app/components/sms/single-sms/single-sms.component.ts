import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'single-sms',
  templateUrl: './single-sms.component.html',
  styleUrls: ['./single-sms.component.css']
})
export class SingleSmsComponent implements OnInit {
  tabs=[
  {
    tabID:0,
    title:'SMS Message',
    subTitle:'SMS Message Details - Step 1'
  },
  {
    tabID:1,
    title:'Confirmation',
    subTitle:'Confirm the SMS details - Step 2'
  },
  
  ];

  heading='Send Single SMSs';

  hastabs:boolean=true;

  activeTab:number=0;

  isLastTab:boolean=false //Check if the active tab is the last tab

  checkFormValidation:boolean=false;

  smsSpecs={
    //this object must be populated with backend data
    Recipients:'1',
    TotalPrice:'0.000',
    AvailableCredit:'0.00'

  }
  //New messages form
  sendSMSform!:FormGroup;

  //Select options for respective formfields
  languages:string[]=["Text(English)","Other Languages"];
  senderId=[
    // Select options. to be populated by senderIDs from user profile. Must be object
    {
      sender:'Myself',
    },
    {
      sender:'',
    }
  ]
  defaultDate=new Date()
  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
    this.activeTab=0

    this.sendSMSform=this.fb.group({
      languageType:[this.languages[0],],
      mobileNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      senderID:[this.senderId[0].sender,Validators.required],
      scheduleDate:[this.defaultDate],
      messageType:['Text',Validators.required],
      pictureForMessage:[''],
      messageContent:['',Validators.required]
    })
  }

  //form field getters
  get getLanguageType(){
    return this.sendSMSform.get('languageType');
  }
  get getMobileNumber(){
    return this.sendSMSform.get('mobileNumber');
  }
  get getSenderID(){
    return this.sendSMSform.get('senderID');
  }
  get getScheduleDate(){
    return this.sendSMSform.get('scheduleDate');
  }
  get getMessageType(){
    return this.sendSMSform.get('messageType');
  }
  get getPictureForMessage(){
    return this.sendSMSform.get('pictureForMessage');
  }
  get getMessageContent(){
    return this.sendSMSform.get('messageContent');
  }

  msgPages:any=1;
  msgContentKeyUp(){
    let chars=this.getMessageContent?.value?.length
    if(chars<=160){
      this.msgPages=1;
    }
    if(chars>160 && chars<=306){
      this.msgPages=2;
    }
    if(chars>306 && chars<=459){
      this.msgPages=3;
    }
    if(chars > 459 && chars <= 621){
      this.msgPages=4;
    }
    if(chars > 621 && chars <= 766){
      this.msgPages=5;
    }
    if(chars > 766 && chars <= 919){
      this.msgPages=6;
    }
    if(chars > 919 && chars <= 1072){
      this.msgPages=7;
    }
    if(chars > 1072 && chars <= 1200){
      this.msgPages=8;
    }
  }

  NextTab($event:any):void{
    //Validate all form fields first
    let myValidator=(this.getMobileNumber?.invalid || this.getMessageType?.invalid||this.getSenderID?.invalid || this.getMessageContent?.invalid);

    if(myValidator){
      this.checkFormValidation =true;
    }
    else{
      this.checkFormValidation=false;
    }
    if(this.activeTab <= this.tabs.length-2 &&!myValidator ){
      this.activeTab++;
      if (this.activeTab>this.tabs.length-2){
        this.isLastTab=true;
      }
    }
    
  }
  PreviousTab($event:any){
    if (this.activeTab>0){
      this.activeTab--;
      this.isLastTab=false;
    }
  }

  submitForm($event:any){
    //Submit the forms.
    console.log(this.sendSMSform.value);
  }
  
}

import { group } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'group-sms',
  templateUrl: './group-sms.component.html',
  styleUrls: ['./group-sms.component.css'],
})
export class GroupSmsComponent implements OnInit {
  @ViewChild('campaignField')
  campaignField!: ElementRef;
  @ViewChild('dropdownBtn') dropdownBtn!: ElementRef;

  //child inputs properties
  tabs = [
    {
      tabID: 0,
      title: 'SMS Message',
      subTitle: 'SMS Message Details - Step 1',
    },
    {
      tabID: 1,
      title: 'Recipients',
      subTitle: 'Personalize the recipients - Step 2',
    },
    {
      tabID: 2,
      title: 'Confirmation',
      subTitle: 'Confirm the SMS details - Step 3',
    },
  ];
  heading = 'Send Group SMS';
  hastabs: boolean = true;
  activeTab: number = 0;
  isLastTab: boolean = false;
  saveMessage: boolean = true;
  saveMsgBtnColor: string = 'rgb(70, 190, 138)';

  // Component properties
  messageIsSaved: boolean = false;
  campaignNameError: boolean = false;
  alreadySavedContent: boolean = false;
  messageIsEmpty: boolean = false;
  formIsValid: boolean = false;
  languages: string[] = ['Text(English)', 'Other Languages'];
  senderId = [
    // Select options. to be populated by senderIDs from user profile. Must be object
    {
      sender: '',
    },
    {
      sender: 'Myself',
    },
  ];
  savedMessages = [
    //Must be populated by backend data
    {
      campaignName: 'My Campaign',
      content: 'Saved Message example',
    },
    {
      campaignName: 'Message 2',
      content: `jksrjk.sfjlksdfncd n.kcd jnk.zdjkzdjk.jnjks.djnlkdfvjk.f
      sejkfjkfvsjnkdvjnk.d  jkjnk.dsjkdjkd
      kdfvjnk.vajilefvilefvilefkf
      sfvjnfv jh,c sdjildfjkldfjklsljlfda
      fafvjvfvjlfjilfjklefjl
      dfvfvsjilfv lvjkfvjlfilfjkfjkdf
      fviofvsblfvafvbilfv
      `,
    },
  ];
  isReadOnly: boolean = false;
  groupSelected: boolean = false;
  defaultDate = new Date();

  groupSMSForm!: FormGroup;
  //Recipient groups object
  RecipientGroups = [
    //To be populated by backend data
    {
      name: 'Customer',
      checked: false,
      contacts:[
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Mensah Agyekum',
        phoneNumber:'1343484555'
      },
        {
        name:'John Doe',
        phoneNumber:'78438291202'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Mensah Agyekum',
        phoneNumber:'1343484555'
      },
        {
        name:'John Doe',
        phoneNumber:'78438291202'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Mensah Agyekum',
        phoneNumber:'1343484555'
      },
        {
        name:'John Doe',
        phoneNumber:'78438291202'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Mensah Agyekum',
        phoneNumber:'1343484555'
      },
        {
        name:'John Doe',
        phoneNumber:'78438291202'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Mensah Agyekum',
        phoneNumber:'1343484555'
      },
        {
        name:'John Doe',
        phoneNumber:'78438291202'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Mensah Agyekum',
        phoneNumber:'1343484555'
      },
        {
        name:'John Doe',
        phoneNumber:'78438291202'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Mensah Agyekum',
        phoneNumber:'1343484555'
      },
        {
        name:'John Doe',
        phoneNumber:'78438291202'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Mensah Agyekum',
        phoneNumber:'1343484555'
      },
        {
        name:'John Doe',
        phoneNumber:'78438291202'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Mensah Agyekum',
        phoneNumber:'1343484555'
      },
        {
        name:'John Doe',
        phoneNumber:'78438291202'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Mensah Agyekum',
        phoneNumber:'1343484555'
      },
        {
        name:'John Doe',
        phoneNumber:'78438291202'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
        {
        name:'Joseph Kofi',
        phoneNumber:'0123456789'
      },
    ]
    },
    {
      name: 'Sales agents',
      checked: false,
    },
  ];

  //Control properties and methods for dropdown checkboxes
  allChecked: boolean = false;
  updateAllChecked() {
    this.allChecked =
      this.RecipientGroups != null &&
      this.RecipientGroups.every((gp) => gp.checked);
    // console.log(this.getGroups);
  }
  someChecked(): boolean {
    if (this.RecipientGroups == null) {
      return false;
    }
    return (
      this.RecipientGroups.filter((gp) => gp.checked).length > 0 &&
      !this.allChecked
    );
  }
  setAll(checked: boolean) {
    this.allChecked = checked;
    if (this.RecipientGroups == null) {
      return;
    }
    this.RecipientGroups.forEach((gp) => (gp.checked = checked));
    this.updateGroup();
  }
  //Update groupSMSForm.groups
  updateGroup() {
    let values = this.getGroups.value;
    this.RecipientGroups.forEach((gp, i) => {
      if (gp.checked) {
        values.splice(i);
      }
    });
    if (this.RecipientGroups.length !== 0) {
      this.RecipientGroups.forEach((gp, i) => {
        if (gp.checked) {
          values.push(gp.name);
        } else {
          values.splice(i);
        }
      });
    }
    this.groupSelected = this.getGroups.value.length !== 0 ? true : false;
    if (this.getGroups.value.length !== 0) {
      this.dropdownBtn.nativeElement.innerText = this.getGroups.value;
    } else {
      this.dropdownBtn.nativeElement.innerText = 'Select group(s)';
    }

    // console.log(this.getGroups.value);
  }
  //End of Control properties and methods for dropdown checkboxes

  ////////////////////////////////////////////////////////////////////
  // Properties and Methods for Datatables
  dtoptions:any={}
  dtTableForm!:FormGroup;

  msisdnIsEmpty:boolean=false;
  postNewMsisdn(){
    if(this.dtTableForm.value.newMsisdn){
      this.msisdnIsEmpty=false;
      console.log(this.dtTableForm.value);
      this.dtTableForm.patchValue({'newMsisdn':''}); //must be executed after posting data.
    }
    else{
      this.msisdnIsEmpty=true
    }
  }

  smsSpecs={
    //this object must be populated with backend data
    Recipients:'1',
    TotalPrice:'0.000',
    AvailableCredit:'0.00'

  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activeTab = 0;
    //form definition
    this.groupSMSForm = this.fb.group({
      languageType: [this.languages[0]],
      messageType: ['Text', Validators.required],
      campaignName: [''],
      groups: this.fb.array([]),
      senderID: [this.senderId[0].sender, Validators.required],
      scheduleDate: [this.defaultDate],
      pictureForMessage: [''],
      savedMessage: [''],
      messageContent: ['', Validators.required],
      removeDuplicate: ['true'],
    });
    
    //Forms in dataTable Tab
    this.dtTableForm=this.fb.group({
      newMsisdn:[''],
    })

    //Datatables configuration
    this.dtoptions={
      pagingType:'simple_numbers',
      pageLength:10,
      search:true,
      lengthMenu:[5,10,25,50],
      processing:true,
      language:{
        searchPlaceholder:'Search Contact'
      },

      dom:'Bfrtip',
      buttons:[
        {
          extend:'collection',
          text:'<i class="fa-solid fa-download"></i> Export',
          buttons:[
            {
              extend:'csv',
              text:'<i class="fa-regular fa-file-excel"></i> csv'
            },
            {
              extend:'excel',
              text:'<i class="fa-regular fa-file-excel"></i> Excel'
            },
            {
              extend:'pdf',
              text:'<i class="fa-regular fa-file-pdf"></i> PDF'
            },
          ]
        },
        {
          extend:'print',
          text: '<i class="fa-solid fa-print"></i> Print'
        }
      ]

    }


  }

  // Form getters
  get getLanguageType() {
    return this.groupSMSForm.get('languageType');
  }
  get getMessageType() {
    return this.groupSMSForm.get('messageType');
  }
  get getCampaignName() {
    return this.groupSMSForm.get('campaignName');
  }
  get getGroups() {
    return this.groupSMSForm.get('groups') as FormArray;
  }
  get getSenderID() {
    return this.groupSMSForm.get('senderID');
  }
  get getScheduleDate() {
    return this.groupSMSForm.get('scheduleDate');
  }

  get getPictureForMessage() {
    return this.groupSMSForm.get('pictureForMessage');
  }
  get getSavedMessages() {
    return this.groupSMSForm.get('savedMessage');
  }
  get getMessageContent() {
    return this.groupSMSForm.get('messageContent');
  }

  msgPages: any = 1;
  msgContentKeyUp() {
    let chars = this.getMessageContent?.value?.length;
    if (chars <= 160) {
      this.msgPages = 1;
    }
    if (chars > 160 && chars <= 306) {
      this.msgPages = 2;
    }
    if (chars > 306 && chars <= 459) {
      this.msgPages = 3;
    }
    if (chars > 459 && chars <= 621) {
      this.msgPages = 4;
    }
    if (chars > 621 && chars <= 766) {
      this.msgPages = 5;
    }
    if (chars > 766 && chars <= 919) {
      this.msgPages = 6;
    }
    if (chars > 919 && chars <= 1072) {
      this.msgPages = 7;
    }
    if (chars > 1072 && chars <= 1200) {
      this.msgPages = 8;
    }
  }

  savedMessageChanges() {
    //Set Message Content to selected message
    let messageContent = this.getMessageContent;
    let saveMsg = this.getSavedMessages?.value;
    let campaign=this.getCampaignName;

    if (saveMsg) {
      messageContent?.patchValue(
        this.savedMessages.find((msg) => msg.campaignName === saveMsg)?.content
      );
      
      campaign?.patchValue(saveMsg)
      this.isReadOnly = true;
    } else {
      messageContent?.patchValue('');
      this.isReadOnly = false;
    }
    this.msgContentKeyUp();
  }

  NextTab(event: any) {
    //Validate Forms first

    let myValidator =
      !this.groupSelected ||
      this.getSenderID?.invalid ||
      this.getMessageContent?.invalid ||
      (this.getCampaignName?.value === '' &&
        this.getSavedMessages?.value === '');

    this.formIsValid = myValidator ? true : false;

    if (this.activeTab <= this.tabs.length - 2 && !myValidator) {
      this.activeTab++;
      if (this.activeTab > this.tabs.length - 2) {
        this.isLastTab = true;
      }
    }
  }

  PreviousTab(event: any) {
    if (this.activeTab > 0) {
      this.activeTab--;
      this.isLastTab = false;
    }
  }

  submitForm(event: any) {
    //Submit the forms.
    console.log('Submit form from Bulk SMS');
  }

  saveNewMessage() {
    //Save message or alert errors if any
    let saveMsg = this.getSavedMessages?.value;
    let campaign = this.getCampaignName?.value;
    let newContent = this.getMessageContent?.value;
    if (newContent && campaign && !saveMsg) {
      this.messageIsSaved = true;
      setTimeout(() => (this.messageIsSaved = false), 5000);
      // stage message content to be push to database
      let newMessage = {
        campaignName: campaign,
        content: newContent,
      };
      // Push newMessage to database
      this.savedMessages.push(newMessage); //This just a placeholder
    } else if (!campaign && !saveMsg) {
      this.campaignNameError = true;
      this.campaignField.nativeElement.focus();
      setTimeout(() => (this.campaignNameError = false), 5000);
    } else if (saveMsg) {
      this.alreadySavedContent = true;
      setTimeout(() => (this.alreadySavedContent = false), 5000);
    } else if (!newContent) {
      this.messageIsEmpty = true;
      setTimeout(() => (this.messageIsEmpty = false), 5000);
    }
  }
}

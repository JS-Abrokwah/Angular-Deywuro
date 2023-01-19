import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bulk-sms',
  templateUrl: './bulk-sms.component.html',
  styleUrls: ['./bulk-sms.component.css'],
})
export class BulkSmsComponent implements OnInit {
  @ViewChild('campaignField')
  campaignField!: ElementRef;

  //child inputs properties
  tabs = [
    {
      tabID: 0,
      title: 'SMS Message',
      subTitle: 'SMS Message Details - Step 1',
    },
    {
      tabID: 1,
      title: 'Confirmation',
      subTitle: 'Confirm the SMS details - Step 2',
    },
  ];
  heading = 'Send Bulk SMS';
  hastabs: boolean = true;
  activeTab: number = 0;
  isLastTab: boolean = false;
  saveMessage: boolean = true;
  saveMsgBtnColor: string = 'rgb(255, 185, 8)';

  // Component properties
  messageIsSaved: boolean = false;
  campaignNameError: boolean = false;
  alreadySavedContent: boolean = false;
  messageIsEmpty: boolean = false;
  formIsValid:boolean=false;
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
  defaultDate = new Date();

  bulkSMSForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activeTab = 0;

    this.bulkSMSForm = this.fb.group({
      languageType: [this.languages[0]],
      messageType: ['Text', Validators.required],
      campaignName: [''],
      contacts: ['', [Validators.required]],
      senderID: [this.senderId[0].sender, Validators.required],
      scheduleDate: [this.defaultDate],
      pictureForMessage: [''],
      savedMessage: [''],
      messageContent: ['', Validators.required],
      removeDuplicate: ['true'],
    });
  }
  // Form getters
  get getLanguageType() {
    return this.bulkSMSForm.get('languageType');
  }
  get getMessageType() {
    return this.bulkSMSForm.get('messageType');
  }
  get getCampaignName() {
    return this.bulkSMSForm.get('campaignName');
  }
  get getContacts() {
    return this.bulkSMSForm.get('contacts');
  }
  get getSenderID() {
    return this.bulkSMSForm.get('senderID');
  }
  get getScheduleDate() {
    return this.bulkSMSForm.get('scheduleDate');
  }

  get getPictureForMessage() {
    return this.bulkSMSForm.get('pictureForMessage');
  }
  get getSavedMessages() {
    return this.bulkSMSForm.get('savedMessage');
  }
  get getMessageContent() {
    return this.bulkSMSForm.get('messageContent');
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

    if (saveMsg) {
      messageContent?.patchValue(
        this.savedMessages.find((msg) => msg.campaignName === saveMsg)?.content
      );

      this.isReadOnly = true;
    } else {
      messageContent?.patchValue('');
      this.isReadOnly = false;
    }
    this.msgContentKeyUp();
  }

  NextTab(event: any) {
    //Validate Forms first
    let myValidator=(this.getContacts?.invalid||this.getSenderID?.invalid||this.getMessageContent?.invalid||(this.getCampaignName?.value===''&&this.getSavedMessages?.value===''));

    this.formIsValid=(myValidator)?true:false;
    
    if (this.activeTab <= this.tabs.length - 2 &&!myValidator) {
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

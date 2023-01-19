import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  registrationForm!: FormGroup;
  acceptTandC!:FormGroup;
  copyrightyear=new Date().getFullYear();
  accountType = ['', 'Client', 'Reseller'];
  businessNature = [
    '',
    'Arts, entertainment and recreation',
    'Banking & finance',
    'Beauty industry',
    'Educational service',
    'Healthcare and social assistance',
    'Information Technology',
    'Information and cultural industry',
    'Insurance',
    'Manufacturing',
    'Mining quarrying, oil and gas',
    'Non-Governmental Organizations',
    'Public administration',
    'Real estate,rental and leasing',
    'Religious Organisations',
    'Retail trade',
    'Transportation and warehousing',
    'Utilities',
    'Waste management',
    'Wholesale trade',
    'Other services',
  ];

 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      registerAs: [this.accountType[0], [Validators.required]], //select
      companyOrIndividualName: ['', [Validators.required]],
      natureOfBusiness: [this.businessNature[0], [Validators.required]], //select
      businessLocation: ['', [Validators.required]],
      companyOrIndividualTelephone: ['', Validators.minLength(10)],
      mobileMoneyNumber: ['', Validators.minLength(10)],
      businessLogo: [''],
      preferredUsername: ['', [Validators.required, Validators.minLength(6)]],
      contactPersonInfo: this.fb.group({
        personName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
        id: [''],
      }),
    });

    //Terms and Conditions acceptance radio buttons
    this.acceptTandC=this.fb.group({
      TermsAndConditions:['no',[Validators.required]]
    })
  }

  //Form field getters
  get getRegisterAs() {
    return this.registrationForm.get('registerAs');
  }
  get getCompanyOrIndividualName() {
    return this.registrationForm.get('companyOrIndividualName');
  }
  get getNatureOfBusiness() {
    return this.registrationForm.get('natureOfBusiness');
  }
  get getBusinessLocation() {
    return this.registrationForm.get('businessLocation');
  }
  get getCompanyOrIndividualTelephone() {
    return this.registrationForm.get('companyOrIndividualTelephone');
  }
  get getMobileMoneyNumber() {
    return this.registrationForm.get('mobileMoneyNumber');
  }
  get getBusinessLogo() {
    return this.registrationForm.get('businessLogo');
  }
  get getPreferredUsername() {
    return this.registrationForm.get('preferredUsername');
  }
  get getPersonName() {
    return this.registrationForm.get('contactPersonInfo')?.get('personName');
  }
  get getEmail() {
    return this.registrationForm.get('contactPersonInfo')?.get('email');
  }
  get getPhoneNumber() {
    return this.registrationForm.get('contactPersonInfo')?.get('phoneNumber');
  }
  get getId() {
    return this.registrationForm.get('contactPersonInfo')?.get('id');
  }

  sendOTP() {
    //Send OTP logic comes here
    const OTP= prompt(`An OTP has been sent to ${this.getMobileMoneyNumber?.value}
    Enter OTP recieved via SMS`);
    console.log(OTP);
  }

  TCbtnClicked() {
    // console.log(this.getPhoneNumber?.value);
  }
}

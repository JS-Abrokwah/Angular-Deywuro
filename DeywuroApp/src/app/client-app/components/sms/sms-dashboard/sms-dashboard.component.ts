import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sms-dashboard',
  templateUrl: './sms-dashboard.component.html',
  styleUrls: ['./sms-dashboard.component.css']
})
export class SmsDashboardComponent implements OnInit {
  bg='linear-gradient(to right, #0575e6, #021b79)';
  icon='send';
  label='Total Sent'

  smsSummary=[
    {
      bg:'linear-gradient(to right, #0575e6, #021b79)',
      icon:'send',
      totals:'0', //The value of this property should come from backend date
      label:'Total-sent'
    },
    {
      bg:'linear-gradient(to right, #52c234, #061700)',
      icon:'mail',
      totals:'0', //The value of this property should come from backend date
      label:'Delivered SMS'
    },
    {
      bg:'linear-gradient(to right,#ea384d , #d31027)',
      icon:'thumb_down',
      totals:'0', //The value of this property should come from backend date
      label:'Undelivered SMS'
    },
    {
      bg:'linear-gradient(to right, #000000, #434343)',
      icon:'account_balance_wallet',
      totals:'GHC 0', //The value of this property should come from backend date
      label:'Credit Balance'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

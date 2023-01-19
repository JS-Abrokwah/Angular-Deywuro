import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css'],
})
export class ClientHomeComponent implements OnInit {
  hover = false;

  cardItems = [
    {
      bgUrl: '../../../../assets/images/welcomePage/sms002.jpg',
      title: 'SMS',
      routeUrl: '/sms/dashboard',
      id: 0,
    },
    {
      bgUrl: '../../../../assets/images/welcomePage/mail.jpg',
      title: 'Email',
      routeUrl: '#',
      id: 1,
    },
    {
      bgUrl: '../../../../assets/images/welcomePage/social02.jpg',
      title: 'Social Media',
      routeUrl: '#',
      id: 2,
    },
    {
      bgUrl: '../../../../assets/images/welcomePage/dussd.jpg',
      title: 'Dynamic USSD',
      routeUrl: '#',
      id: 3,
    },
    {
      bgUrl: '../../../../assets/images/welcomePage/sentimentsface.jpg',
      title: 'Sentiment Analysis',
      routeUrl: '#',
      id: 4,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

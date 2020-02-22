import { Component, OnInit } from '@angular/core';
declare var Voguepay: any;

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	Voguepay.init({form:'payform'});
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.css']
})
export class RequestDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	window.scrollTo(0, 0);
  }

}

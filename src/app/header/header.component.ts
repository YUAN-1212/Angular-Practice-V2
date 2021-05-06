import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'title';
  url = 'http://blog.miniasp.com/';
  imgUrl = '/assets/images/logo.png';
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getStyle(){
    return {'font-size': (12 + this.counter ) + 'px'};
  }

  changeTitle(altKey: boolean){
    if(altKey){
      this.title = 'ABC';
    }
    this.counter ++;
  }
}

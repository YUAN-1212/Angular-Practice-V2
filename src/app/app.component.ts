import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  keyword = '';
  wordcount = 0;


  KeywordChanges(keyword: any){
    //console.log(keyword.target.value);
    this.wordcount = keyword.target.value.length;
  }

  KeywordReset(){
    this.keyword = '';
  }



}

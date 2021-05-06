import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent implements OnInit, OnChanges {

@Input()
item: any;

@Input()
counter: any;

  constructor() { }

  ngOnInit(): void {
    console.log("ArticleBodyComponent ngOnInit itemid=" + this.item.id );
  }

  ngOnChanges(changes: any): void{
    console.log("ArticleBodyComponent ngOnChanges " );
    console.log(changes);
  }
}

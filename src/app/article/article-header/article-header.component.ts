import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';


@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnChanges {

  @Input()
  item: any;


  // tslint:disable-next-line: variable-name
  Orig_item: any;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleChanged = new EventEmitter<any>();

  isEdit = false;
  newTitle = '';

  constructor() { }

  doEdit(title: any) {
    console.log('doEdit title='+ JSON.stringify(title));
    this.newTitle = title.title;
    // this.titleChanged.emit({ id: this.item.id, title: title });
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }

  ngOnInit(): void {
    // this.newTitle = this.item.title;
  }

  ngOnChanges(changes: any): void {
    if (changes.item) {
      this.Orig_item = changes.item.currentValue;
      this.item = Object.assign({}, changes.item.currentValue);
    }
  }

  doCancel(){
    this.item = Object.assign({}, this.Orig_item);
    this.isEdit=false;
  }

}

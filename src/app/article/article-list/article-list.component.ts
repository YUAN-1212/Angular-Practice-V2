import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/article/data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {


  counter = 0;
  data: any;

  constructor(public datasvc: DataService) {

  }



  ngOnInit(): void {
    // this.datasvc.run();

    // setTimeout(() => {
    //   this.counter = this.counter++;
    // }, 2000);

    this.datasvc.getDate().subscribe(result => {
      this.data = result;
    })


  }

  doDelete(item: any) {
    this.datasvc.doDelete(item).subscribe(result => {
      this.data = this.data.filter((y: any) => {
        //return y !== item
        return y.id !== item.id;
      });
    },
    (error) =>{
      console.log(error);
    });
  }

  changeTitle(post: any) {
    this.datasvc.changeTitle(post).subscribe(result => {
      this.data = this.data.map((item: any) => {
        if (item.id === post.id) {
          item.title = post.title;
          console.log(item);
          //return item;
          return Object.assign({}, item.$event);
        }
        return item;
      });
    });
  }


}

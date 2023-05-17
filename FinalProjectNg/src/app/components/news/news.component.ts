import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  public news: any[] = [];

constructor(public service:DataService){}

public  getNewsList():void{
  this.service.getNewsResponse().subscribe(response => {
    this.news = response;
    console.log(this.news)
    return(this.news);
  });
}

  ngOnInit(){
    this.getNewsList();
  }
}

import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  public news:string[] = [];

constructor(public service:DataService){}

public  getNewsList():void{
  this.service.getNewsResponse().subscribe(response => {
    this.news = response;
    console.log(response);
  });
}


  public dataNews: string[][] = 
  [
    ["Germany closes last nuclear plants","BERLIN, April 14 (Reuters) - Germany will pull the plug on its last three nuclear power stations by Saturday, ending a six-decade programme that spawned one of Europe's strongest protest movements but saw a brief reprieve due to the Ukraine war.","https://www.reuters.com/world/europe/atomic-angst-over-germany-closes-last-nuclear-plants-2023-04-14/","https://images.pexels.com/photos/16162419/pexels-photo-16162419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],

    ["AI's potential to destroy civilization","While tech giants across the world work on materializing the idea of having a generative artificial intelligence (AI) to aid humans in their daily lives, the risk of the nascent technology going rogue remains imminent. Considering this possibility, Tesla and Twitter chief Elon Musk reminded the people of AI’s potential to destroy civilization.","https://cryptonews.net/news/other/20825368/","https://images.pexels.com/photos/16162419/pexels-photo-16162419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],

    ["ChatGPT asked Ray Dalio","Renowned billionaire investor and founder of the world’s largest hedge fund Bridgewater Associates, Ray Dalio, in a YouTube video posted on April 15, revealed he was asked by the tool about his view on the most important principle for investing.","https://cryptonews.net/news/other/20824651/","https://images.pexels.com/photos/16162419/pexels-photo-16162419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],

    ["Banking crisis forces ECB","European Central Bank policymakers are reconsidering the path of interest rate hikes in light of last month’s banking turmoil, but remain committed to reining in core inflation.","https://www.cnbc.com/2023/04/14/ecb-policymakers-are-rethinking-rate-hikes-after-banking-turmoil.html","https://images.pexels.com/photos/16162419/pexels-photo-16162419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  ];

  ngOnInit(){
    this.getNewsList();
  }
}

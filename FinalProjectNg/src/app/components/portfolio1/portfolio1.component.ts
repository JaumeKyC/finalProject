import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { TimeSeries5Min } from 'src/app/interface/api-response';

@Component({
  selector: 'app-portfolio1',
  templateUrl: './portfolio1.component.html',
  styleUrls: ['./portfolio1.component.css']
})
export class Portfolio1Component {
  public objectValues = Object.values;  //It converts an object given to an array.
  public allStockInfo: {[key: string]: TimeSeries5Min} = {};
  public ibm: string = "IBM";
  public volume: string = "";
  

  public constructor(public service: DataService) {

  }

  public getResponse(): void {
    this.service.getApiResponse(`${this.ibm}`).subscribe(response => {
      this.allStockInfo = response['Time Series (5min)'];
      this.volume = response['Time Series (5min)'][Object.keys(response['Time Series (5min)'])[0]]['5. volume'];
      
    })
  }

  public ngOnInit(): void {
    this.getResponse();

  }

}

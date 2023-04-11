import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MetaData, TimeSeries5Min } from 'src/app/interface/api-response';

@Component({
  selector: 'app-portfolio1',
  templateUrl: './portfolio1.component.html',
  styleUrls: ['./portfolio1.component.css']
})
export class Portfolio1Component {
  public objectValues = Object.values;  //It converts an object given to an array.
  public allStockInfo: {[key: string]: TimeSeries5Min} = {};
  public generalInfo: MetaData = {
    "1. Information": "",
    "2. Symbol": "",
    "3. Last Refreshed": new Date(),
    "4. Interval": "",
    "5. Output Size": "",
    "6. Time Zone": ""
  };
  public ibm: string = "IBM";
  public volume: string = "";
  public msft: string = "MSFT";

  public constructor(public service: DataService) {

  }

  public getResponseIBM(): void {
    this.service.getApiResponse(`${this.ibm}`).subscribe(response => {
      this.allStockInfo = response['Time Series (5min)'];
      //this.volume = response['Time Series (5min)'][Object.keys(response['Time Series (5min)'])[0]]['5. volume'];
      
    })
  }
  public getResponseMSFT(): void {
    this.service.getApiResponse(`${this.msft}`).subscribe(response => {
      this.allStockInfo = response['Time Series (5min)'];
      this.generalInfo = response['Meta Data'];
      
    })
  }
  

  public ngOnInit(): void {
    this.getResponseIBM();
    this.getResponseMSFT();
  }

}

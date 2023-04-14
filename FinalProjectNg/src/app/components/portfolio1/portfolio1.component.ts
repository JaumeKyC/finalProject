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


  public msft: string = "MSFT";
  public lastPriceBRKB: string = "";
  public brkB: string = "BRK-B";
  public lastPriceMSFT : string = "";
  public cni: string = "CNI";
  public lastPriceCNI : string = "";
  public wm: string = "WM";
  public lastPriceWM : string = "";
  public cat: string = "CAT";
  public lastPriceCAT : string = "";

  public reportedPrices: number[] = [239.82, 308.91, 118.88, 156.88, 239.56];


  public constructor(public service: DataService) {

  }

  public getResponseMSFT(): void {
    this.service.getApiResponse(`${this.msft}`).subscribe(response => {
      this.allStockInfo = response['Time Series (5min)'];
      this.generalInfo = response['Meta Data'];
      this.lastPriceMSFT = response['Time Series (5min)'][Object.keys(response['Time Series (5min)'])[0]]['1. open'];
      
    })
  }

   public getResponseBRKB(): void {
    this.service.getApiResponse(`${this.brkB}`).subscribe(response => {
      this.allStockInfo = response['Time Series (5min)'];
      this.generalInfo = response['Meta Data'];
      this.lastPriceBRKB = response['Time Series (5min)'][Object.keys(response['Time Series (5min)'])[0]]['1. open'];
    })
  }

  public getResponseCNI(): void {
    this.service.getApiResponse(`${this.cni}`).subscribe(response => {
      this.allStockInfo = response['Time Series (5min)'];
      this.generalInfo = response['Meta Data'];
      this.lastPriceCNI = response['Time Series (5min)'][Object.keys(response['Time Series (5min)'])[0]]['1. open'];
    })
  }

  
  public getResponseWM(): void {
    this.service.getApiResponse(`${this.wm}`).subscribe(response => {
      this.allStockInfo = response['Time Series (5min)'];
      this.generalInfo = response['Meta Data'];
      this.lastPriceWM = response['Time Series (5min)'][Object.keys(response['Time Series (5min)'])[0]]['1. open'];
    })
  }

  public getResponseCAT(): void {
    this.service.getApiResponse(`${this.cat}`).subscribe(response => {
      this.allStockInfo = response['Time Series (5min)'];
      this.generalInfo = response['Meta Data'];
      this.lastPriceCAT = response['Time Series (5min)'][Object.keys(response['Time Series (5min)'])[0]]['1. open'];
    })
  }
  

  public ngOnInit(): void {
    this.getResponseMSFT();
    this.getResponseBRKB();
    this.getResponseCNI();
    this.getResponseWM();
    this.getResponseCAT();
  }

}

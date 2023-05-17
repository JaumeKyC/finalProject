import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-portfolio1',
  templateUrl: './portfolio1.component.html',
  styleUrls: ['./portfolio1.component.css']
})
export class Portfolio1Component {

  public objectValues = Object.values;

  public msft: string = "MSFT";
  public lastPriceMSFT: string = "";
  public winPercentageMSFT: number = 0;
  public symbolMSFT: string = "";
  public brkB: string = "BRK-B";
  public lastPriceBRKB: string = "";
  public winPercentageBRKB: number = 0;
  public symbolBRKB: string = "";
  public cni: string = "CNI";
  public lastPriceCNI: string = "";
  public winPercentageCNI: number = 0;
  public symbolCNI: string = "";
  public wm: string = "WM";
  public lastPriceWM: string = "";
  public winPercentageWM: number = 0;
  public symbolWM: string = "";
  public cat: string = "CAT";
  public lastPriceCAT: string = "";
  public winPercentageCAT: number = 0;
  public symbolCAT: string = "";

  public reportedPrices: number[] = [239.82, 308.91, 118.88, 156.88, 239.56];

  public constructor(public service: DataService) {
  
  }

  public getResponseMSFT(): void {

    this.service.getApiResponse(`${this.msft}`).subscribe(response => {
     
      this.lastPriceMSFT = response['Weekly Time Series'][Object.keys(response['Weekly Time Series'])[0]]['1. open'];
      this.winPercentageMSFT = ((parseFloat(this.lastPriceMSFT) - this.reportedPrices[0]) / this.reportedPrices[1]) * 100;
      this.winPercentageMSFT = parseFloat((((parseFloat(this.lastPriceMSFT) - this.reportedPrices[0]) / this.reportedPrices[1]) * 100).toFixed(2));

    })
  }

  public getResponseBRKB(): void {
    this.service.getApiResponse(`${this.brkB}`).subscribe(response => {

      this.lastPriceBRKB = response['Weekly Time Series'][Object.keys(response['Weekly Time Series'])[0]]['1. open'];
      this.winPercentageBRKB = parseFloat((((parseFloat(this.lastPriceBRKB) - this.reportedPrices[1]) / this.reportedPrices[1]) * 100).toFixed(2));

      console.log(this.winPercentageBRKB);
    })
  }

  public getResponseCNI(): void {
    this.service.getApiResponse(`${this.cni}`).subscribe(response => {

      this.lastPriceCNI = response['Weekly Time Series'][Object.keys(response['Weekly Time Series'])[0]]['1. open'];
      this.winPercentageCNI = parseFloat((((parseFloat(this.lastPriceCNI) - this.reportedPrices[2]) / this.reportedPrices[1]) * 100).toFixed(2));
    
    })
  }

  public getResponseWM(): void {
    this.service.getApiResponse(`${this.wm}`).subscribe(response => {

      this.lastPriceWM = response['Weekly Time Series'][Object.keys(response['Weekly Time Series'])[0]]['1. open'];
      this.winPercentageWM = parseFloat((((parseFloat(this.lastPriceWM) - this.reportedPrices[3]) / this.reportedPrices[1]) * 100).toFixed(2));

    })
  }

  public getResponseCAT(): void {
    this.service.getApiResponse(`${this.cat}`).subscribe(response => {

      this.lastPriceCAT = response['Weekly Time Series'][Object.keys(response['Weekly Time Series'])[0]]['1. open'];
      this.winPercentageCAT = parseFloat((((parseFloat(this.lastPriceCAT) - this.reportedPrices[4]) / this.reportedPrices[1]) * 100).toFixed(2));

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
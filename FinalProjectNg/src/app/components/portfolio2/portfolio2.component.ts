import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MetaData, TimeSeries5Min } from 'src/app/interface/api-response';

@Component({
  selector: 'app-portfolio2',
  templateUrl: './portfolio2.component.html',
  styleUrls: ['./portfolio2.component.css']
})
export class Portfolio2Component {
    
  public constructor(public service: DataService) {

  }


  public objectValues = Object.values;
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


  public reportedPrices: number[] = [129.93, 33.12, 179.49, 63.61, 147.75];
  public lastPrice: number[] = [165.20,29.52,172.35,63.06,163.23];
  public winPercentage: number[] = [];



  public upDown: string[] =
  
  
[`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="border-radius: 50%;" class="bi bg-success bi-arrow-up-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
</svg>`,



`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="border-radius: 50%;" class="bi bg-danger bi-arrow-down-right-circle" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"/>
</svg>`

];





  public resultUpDown: string[] = [];
  public calculatePercentage(){
    for (let i = 0; i < this.lastPrice.length; i++) {
      const calculation = parseFloat((((this.lastPrice[i] - this.reportedPrices[i]) / this.reportedPrices[i] ) * 100).toFixed(2));
      this.winPercentage.push(calculation);
      if(this.lastPrice[i]>this.reportedPrices[i]){
        this.resultUpDown.push(this.upDown[0]);
      }else{
        this.resultUpDown.push(this.upDown[1]);
      }
      
    }
  }


 public ngOnInit(): void {
    this.calculatePercentage()
  }
 
}
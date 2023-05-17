import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Main, MainWeekly } from '../interface/api-response';
import { Bitcoin } from '../interface/api-response';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) {}
  private apiKey = environment.API_KEY;
  private shortUrl = 'https://www.alphavantage.co/query';
  private getNewsUrl = 'http://localhost:8000/list/news';
  private coingeckoUrl = 'https://api.coingecko.com/api/v3/';
  public getApiResponse(symbol: string): Observable <MainWeekly> { 
    const urlIntraday5Mins = `${this.shortUrl}?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${this.apiKey}`;
    return this.http.get<MainWeekly>(urlIntraday5Mins);
   
  }

  public getBitcoinResponse(): Observable <Bitcoin>{

    const urlresultBitcoin = `${this.coingeckoUrl}simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true`;
    return this.http.get<Bitcoin>(urlresultBitcoin);
  }

  public getNewsResponse(): Observable <any>{
   
    return this.http.get(this.getNewsUrl);
  }
}




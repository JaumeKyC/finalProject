import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Main } from '../interface/api-response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }
  private apiKey = 'demo'
  public symbol = ''; //The next step is to pick up the symbol from the component. Because if you want to see 20 or 40 different stocks, this page will have a lot of code, instead of that, I will try to get this stocks information in the components.

  private shortUrl = 'https://www.alphavantage.co/query'
  public getApiResponse(symbol: string): Observable <Main> { 

    const urlIntraday5Mins = `${this.shortUrl}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${this.apiKey}`;
    return this.http.get<Main>(urlIntraday5Mins);
   
  }

}

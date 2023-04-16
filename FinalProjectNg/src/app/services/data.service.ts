import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Main } from '../interface/api-response';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { 
    
  }
  private apiKey = environment.API_KEY;
 
  private shortUrl = 'https://www.alphavantage.co/query'
  public getApiResponse(symbol: string): Observable <Main> { 
    /* WEEKLY https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=TSCO.LON&apikey=demo */
    const urlIntraday5Mins = `${this.shortUrl}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${this.apiKey}`;
    return this.http.get<Main>(urlIntraday5Mins);
   
  }

}




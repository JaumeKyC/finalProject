import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Portfolio1Component } from './components/portfolio1/portfolio1.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Portfolio2Component } from './components/portfolio2/portfolio2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatsComponent } from './components/stats/stats.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Portfolio1Component,
    Portfolio2Component,
    StatsComponent,
    NewsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

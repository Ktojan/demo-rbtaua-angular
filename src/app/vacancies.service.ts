import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

type ResponseData = {
  documents: Array<any>;
};

const proxy = 'https://thingproxy.freeboard.io/fetch/'; //to handle CORS when developing


@Injectable({ providedIn: 'root'}) export class VacanciesService {

  // private apiUrl = 'https://api.rabota.ua/vacancy/search'
  private apiUrl = 'https://dracula.robota.ua/'

  constructor(private http: HttpClient) {}
  

  public fetchVacancies(body = {}, params = {q: 'getPublishedVacanciesList'}): Observable<any[]> {    
    return this.http.post<any>(this.apiUrl, body, { params })
      .pipe(
        tap(data => console.log('Get vacancies result: ', data)),
        map(res => res.data.publishedVacancies.items)
      )
  }  
}

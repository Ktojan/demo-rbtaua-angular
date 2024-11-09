import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { DEFAULT_VACANCIES } from './model/default-data';

const proxy = 'https://thingproxy.freeboard.io/fetch/'; //to handle CORS when developing

@Injectable({ providedIn: 'root'}) export class VacanciesService {

  private apiUrl = 'https://dracula.robota.ua/'

  constructor(private http: HttpClient) {}
  
  public fetchVacancies(body = {}, params = {q: 'getPublishedVacanciesList'}): Observable<any[]> {  
    return this.http.post<any>(proxy + this.apiUrl, body, { params })
      .pipe(
        tap(data => console.log('Get vacancies result: ', data)),
        map(res => res.data.publishedVacancies.items),
        catchError(err => this.handleFetchVacanciesError(err))
      )
  }  

  handleFetchVacanciesError(err: HttpErrorResponse): Observable<any[]> {
    console.error('Помилка при завантаженні вакансій ', err);
    return of(DEFAULT_VACANCIES);
}
}

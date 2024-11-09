import { Component } from '@angular/core';
import { VacanciesService } from './vacancies.service';
import { QueryVariables, SearchObject } from './model/interfaces';
import { from, Observable } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { VACANCIES_REQUEST_BODY } from './model/request-body';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, HeaderComponent, ListComponent],
  templateUrl: './app.component.html',
  styles: `
    footer {
        background: #FF5252;
        color: white;
        width: 100%;
        .flex {
            display: flex;
            justify-content: center;
            column-gap: 5%;
        }
        .details {
            max-width: 70%;
        }
        a {
            color: #fefefe;
            cursor: pointer;
        }
        .social-media a {
            display: block;
            line-height: 2rem;
        }
    }
  `
})
export class AppComponent {
  vacancies:  Observable<any[]> = from([]);
  dislikedVacancies = [];
  getVacanciesRequestBody: { operationName: string; variables: QueryVariables; query: string } = VACANCIES_REQUEST_BODY;

  constructor(private vacanciesService: VacanciesService) {
    this.getVacancies();
  }

  getVacancies() {
    this.vacancies = this.vacanciesService.fetchVacancies(this.getVacanciesRequestBody);
  }

  updateSearchWithParams(searchObj: SearchObject) {
    const {keywords, cityFilter} = searchObj;
    if (keywords) this.getVacanciesRequestBody.variables.filter.keywords = keywords;
    if (cityFilter && cityFilter !== "0") this.getVacanciesRequestBody.variables.filter.cityId = cityFilter;
    this.getVacancies();
  }

}

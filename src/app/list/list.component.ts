import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { VacanciesService } from '../vacancies.service';
import { AsyncPipe, NgIf, NgForOf } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, NgIf, NgForOf, AsyncPipe],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [VacanciesService],
})
export class ListComponent {

  @Input('vacancies') vacancies!: Observable<any[]>;

  favoriteVacancies: any[] = [];
  dislikedVacancies: any[] = [];
  showFavorites = false;
  showDislikes = false;
  animationState = false;

  showFavorite() {
    this.showDislikes = false;
    this.showFavorites = true;
  }

  showDisliked() {
    this.showFavorites = false;
    this.showDislikes = true;
  }

  selectVacancy(updateObject: any) {
    const { vacancy } = updateObject;
    if (Object.hasOwn(updateObject, 'isFavorite')) {
      updateObject['isFavorite'] ?
      this.favoriteVacancies.push(vacancy) :
      this.favoriteVacancies = this.favoriteVacancies.filter(vac => vac.id !== vacancy.id)
    }
    if (Object.hasOwn(updateObject, 'isDisliked')) {
      this.dislikedVacancies.push(vacancy);
    }
  }


}

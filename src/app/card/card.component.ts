import { AsyncPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { fadeOutLeftAnimation } from 'angular-animations';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgForOf, AsyncPipe, NgClass],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    fadeOutLeftAnimation(),
  ]
})
export class CardComponent {
  @Output() selectVacancy = new EventEmitter();
  @Input() data: any = null
  @Input('isFavorite') isFavorite: boolean = false;

  isDisliked = false;
  animationState = false;

  constructor() { }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite
    this.selectVacancy.emit({ vacancy: this.data, isFavorite: this.isFavorite })
  }

  toggleDislike (value: boolean){
    this.isDisliked = value;
  }

  setDisliked() {
    this.selectVacancy.emit({ vacancy: this.data, isDisliked: this.isDisliked});
    this.animate();
  }

  signUp() {
    alert('Ви відгукнулись на вакансію: ' + this.data.title);
  }

  animate() {
    this.animationState = true;
    setTimeout(() => {      
      this.data = null;
    }, 500);
  }

}

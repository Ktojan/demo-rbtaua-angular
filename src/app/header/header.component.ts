import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VacanciesService } from '../vacancies.service';
import { DEFAULT_CITIES } from '../model/cities';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, NgForOf, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() updateSearch = new EventEmitter();
  public keywords = '';
  public cityFilter = '0';
  citiesList = DEFAULT_CITIES;

  ngOnInit(): void {
  }
}

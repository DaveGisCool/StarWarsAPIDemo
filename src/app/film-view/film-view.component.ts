import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../interfaces/film';
import { StarWarsService } from '../services/star-wars.service'

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {
  @Input() url: string;

  film: Film;

  constructor(private swService: StarWarsService) { }

  ngOnInit(): void {
    this.swService.getFilm(this.url).subscribe(
      (data: Film) =>
        this.film = data
    );
  }

}

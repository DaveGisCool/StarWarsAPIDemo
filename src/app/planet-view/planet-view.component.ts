import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../interfaces/planet';
import { StarWarsService } from '../services/star-wars.service'

@Component({
  selector: 'app-planet-view',
  templateUrl: './planet-view.component.html',
  styleUrls: ['./planet-view.component.css']
})
export class PlanetViewComponent implements OnInit {
  @Input() url: string;

  planet: Planet;

  constructor(private swService: StarWarsService) { }

  ngOnInit(): void {
    this.swService.getPlanet(this.url).subscribe(
      (data: Planet) =>
        this.planet = data
    );
  }

}

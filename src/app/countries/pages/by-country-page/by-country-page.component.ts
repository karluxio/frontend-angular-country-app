import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
    `
      img {
        width: 25px;
      }
    `,
  ],
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private readonly countriesService: CountriesService) {}
  searchByCountry(term: string) {
    this.countriesService
      .searchCountry(term)
      .subscribe((countries) => (this.countries = countries));
  }
}

import { Country } from './country.interface';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

interface TermCountries {
  countries: Country[];
  term: string;
}

interface RegionCountries {
  countries: Country[];
  region: Region;
}

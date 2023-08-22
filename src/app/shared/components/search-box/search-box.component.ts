import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { CountriesService } from 'src/app/countries/services/countries.service';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription: Subscription = new Subscription();

  @Output() public onValue = new EventEmitter<string>();
  @Output() public onDebounce = new EventEmitter<string>();
  @Input() public placeholder: string = '';
  @Input() public initialValue: string = '';

  constructor(private readonly countriesService: CountriesService) {}

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(350))
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription.unsubscribe();
  }

  emitValue(term: string) {
    this.onValue.emit(term);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() serchtextevent: EventEmitter<string> = new EventEmitter<string>();
  serchtext: string = '';
  yoursearch: boolean = true;
  filteredOptions: Observable<string[]>;
  myControl = new FormControl('');
  products: product[];
  options: string[] = [];

  constructor(private service: ProductService) {}
  ngOnInit(): void {
    // var someStr = 'He said "Hello my name is Foo"';
    // console.log(someStr.replace(/['"]+/g, ''));
    this.products = this.service.products;
    this.products.forEach((x) => {
      this.options.push(x.name.replace(/['"]+/g, ''));
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  search(event: HTMLInputElement) {
    debugger;
    this.serchtext = event.value;
    this.serchtextevent.emit(event.value);
    this.yoursearch = false;
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}

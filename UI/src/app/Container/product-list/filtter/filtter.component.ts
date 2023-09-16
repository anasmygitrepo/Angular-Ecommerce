import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filtter',
  templateUrl: './filtter.component.html',
  styleUrls: ['./filtter.component.css'],
})
export class FiltterComponent {
  @Input() All: number = 0;
  @Input() Available: number = 0;
  @Input() OutOfstock: number = 0;

  SelectedCheck: string = 'all';

  @Output() SelectedFiltterButtonEventchange: EventEmitter<string> =
    new EventEmitter<string>();

  change() {
    this.SelectedFiltterButtonEventchange.emit(this.SelectedCheck);
  }
}

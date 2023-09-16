import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetbackground]',
})
export class SetbackgroundDirective implements OnInit {
  constructor(private elemnt: ElementRef, private render: Renderer2) {}
  ngOnInit(): void {
    this.render.setStyle(
      this.elemnt.nativeElement,
      'backgroundColor',
      '#36454f'
    );
    this.render.setStyle(this.elemnt.nativeElement, 'color', 'yellow');
  }
}

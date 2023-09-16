import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHostListnerDirective]',
})
export class HostListnerDirectiveDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter') onmouseover() {
    this.render.setStyle(this.element.nativeElement, 'margin', '5px 10pX'),
      this.render.setStyle(this.element.nativeElement, 'padding', '30px 30pX'),
      this.render.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

  @HostListener('mouseleave') onmouseout() {
    this.render.setStyle(this.element.nativeElement, 'margin', '10px 20pX'),
      this.render.setStyle(this.element.nativeElement, 'padding', '10px 20pX'),
      this.render.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
}

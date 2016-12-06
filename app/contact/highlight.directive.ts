import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight], input' })
export class HighlightDirective {
  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'powderblue');

    console.log(`* Contact Highlight called from ${el.nativeElement.tagName}`);
  }
}

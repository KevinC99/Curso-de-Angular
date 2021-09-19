import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHi]'
})
export class HiDirective {

  constructor(
    element:ElementRef
  ) { 
    element.nativeElement.style.backgroundColor='red'
  }

}

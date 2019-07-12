import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') nuevoColor: string;

  constructor( private _elementRef: ElementRef) {
    console.log('directiva llamada');
    // _elementRef.nativeElement.style.backgroundColor = "yellow";
   }

   @HostListener('mouseenter') mouseEntro(){
     this.resaltar(this.nuevoColor || 'yellow');
   }

   @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
  }

  private resaltar( nuevoColor: string){
    this._elementRef.nativeElement.style.backgroundColor = nuevoColor;
  }

}

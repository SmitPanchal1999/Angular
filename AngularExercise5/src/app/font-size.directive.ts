import { Directive, ElementRef, HostListener,Input  } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {
  @Input('appFontSize') fontsize: string;
  
  oldSize:string;
  flag=0;
  constructor(private eleRef: ElementRef) { 
    this.oldSize =this.eleRef.nativeElement.style.fontSize;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.updateFont(this.fontsize || "20px");
  
  }

  @HostListener('mouseleave') onMouseLeave() {
  
    this.updateFont(null);
    
  }

  private updateFont(size:string) {
    
    
  
    this.eleRef.nativeElement.style.fontSize = size;
  }
}

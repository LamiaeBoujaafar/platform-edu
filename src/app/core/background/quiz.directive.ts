import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appQuizBackground]'
})
export class QuizDirective {
@Input() correctAnswer:boolean = false;
  constructor( private  elementRef: ElementRef,private  renderer: Renderer2) { }
  @HostListener('click') onAnswered(){
    if(this.correctAnswer)
        this.renderer.setStyle(this.elementRef.nativeElement,'background-color','#32CD32');
      else
        this.renderer.setStyle(this.elementRef.nativeElement,'background-color','#d52a2e');

  }

}

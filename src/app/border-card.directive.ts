import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[pkmonappBorderCard]'
})
export class BorderCardDirective {

  constructor(private el : ElementRef) {
    //on initialise dabord nos carte
    
    this.setBorder('#f5f5f5');
    this.setHeight(190);
   }

   //lorsque le curseur est sur la carte
   @HostListener('mouseenter') onMouseEnter(){
    this.setBorder('#D0237A');
   }
   //lorsque le curseur n'est plus sur la carte, on reinitialise
   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
   }



  //pour definir une meme hauteur pour tous les elements
  private setHeight(height : number){
    this.el.nativeElement.style.height = height +'px';
  }
  //mettre la bordure quand la souris passe dessus
  private setBorder(color: string){
    let border =  'solid 4px '+ color;
    this.el.nativeElement.style.border = border;
  }
}

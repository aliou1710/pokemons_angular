import { Directive, ElementRef ,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[pkmonappBorderCard]'
})
export class BorderCardDirective {
  private initialColor : string ="#f5f5f5";
  private defaulColor : string ='009688';
  private defaultHeight: number = 180;


  constructor(private el : ElementRef) {
    //on initialise dabord nos carte
    
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
   }
   @Input('pkmonappBorderCard') borderColor : string;
   //lorsque le curseur est sur la carte
   @HostListener('mouseenter') onMouseEnter(){
    // this.setBorder('#D0237A');
    this.setBorder(this.borderColor || this.defaulColor);
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

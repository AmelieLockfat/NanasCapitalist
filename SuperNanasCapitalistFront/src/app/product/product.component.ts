import {Component, Input} from '@angular/core';
import {Product} from "../../../../world";
import {WebserviceService} from "../webservice.service";
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { MyProgressBarComponent } from './progressbar.component';
import {MultiplicateurService} from "../MultiplicateurService";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatProgressBarModule,MyProgressBarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: Product = new Product();
  server : String='http://localhost:4000/';
  api="https://isiscapitalistgraphql.kk.kurasawa.fr/";
  progressbarvalue=0;
  lastupdate =0;



  @Input()
  set prod(value: Product) {
    this.product = value;
    if (!this.product) this.product = new Product()
   // console.log(this.product)
  }

  constructor(private service: WebserviceService, public multiplicateurService : MultiplicateurService) {
  }
 lancerProduction(){this.service.lancerProduction(this.product).catch(reason =>
   console.log("erreur: " + reason)
 );}

/*
engagerManager(){this.service.engagerManager(this.product.paliers).catch(reason =>
  console.log("erreur: " + reason)
);}
}

*/
acheterQtProduit(product : Product){
  console.log(product);
  console.log(this.product)
  this.service.acheterQtProduit(this.product.id, this.multiplicateurService.multiplicateurValue ).catch(reason =>
  console.log("erreur: " + reason)
);}

calcScore(){
    this.product.lastupdate = Date.now();

    if (this.product.timeleft === 0) {
        // ne rien faire si le produit n'est pas en cours de production
        return;
    } else {
        const tempsEcoule = Date.now() - this.product.lastupdate;
        this.product.timeleft -= tempsEcoule;
        
        if (this.product.timeleft <= 0) {
          const moneyEanerd = this.product.cout;
            // Si timeleft est devenu nul ou négatif
            // Remettez la barre de production à zéro
            this.progressbarvalue = 0;
            // Remettez timeleft à zéro
            this.product.timeleft = 0;
            this.notifyProduction.emit(this.product);

        } else {
            // Si timeleft est strictement positif
            // Calcul de la nouvelle valeur de la barre de progression
            this.progressbarvalue = ((this.product.vitesse - this.product.timeleft) / this.product.vitesse) * 100;
        }// on prévient le composant parent que ce produit a généré son revenu.
    
      }
    }

//déclarez un évènement de sortie
@Output() 
notifyProduction: EventEmitter<Product> = new EventEmitter<Product>();


ngOnInit(){
  setInterval(() => { 
    this.calcScore(); 
  }, 100);
}

}
function Output(): (target: ProductComponent, propertyKey: "notifyProduction") => void {
  throw new Error('Function not implemented.');
}


import {Component,OnInit, Input,Output, EventEmitter} from '@angular/core';
import {Product} from "../../../../world";
import {WebserviceService} from "../webservice.service";
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MyProgressBarComponent, Orientation} from './progressbar.component';
import {MultiplicateurService} from "../MultiplicateurService";

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

  initialValue = 0
  run = false
  vitesse: number = 0
  auto = false
  orientation = Orientation.horizontal


  ngOnInit(){
    setInterval(() => {
      this.calcScore();
    }, 100);
  }

  @Input()
  set prod(value: Product) {
    this.product = value;
    if (!this.product) this.product = new Product()
   // console.log(this.product)
  }





  constructor(private service: WebserviceService, public multiplicateurService : MultiplicateurService) {
  }
 lancerProduction(product : Product){
    this.service.lancerProduction(this.product).catch(reason =>
   console.log("erreur: " + reason)
 );}


acheterQtProduit(product : Product){
  console.log(product);
  console.log(this.product)
  this.service.acheterQtProduit(this.product.id, this.multiplicateurService.multiplicateurValue ).catch(reason =>
  console.log("erreur: " + reason)
);}
  calcScore() {
    let elapsedTime = Date.now() - this.product.lastupdate;
    if (!this.product.managerUnlocked) { // Si aucun manager n'est débloqué
      if (this.product.timeleft !== 0) { // Si le produit est en cours de production
        this.product.lastupdate = Date.now(); // Mettre à jour la dernière mise à jour sinon lastupdate ne fait qu'augmenter
        if (this.product.timeleft <= elapsedTime) { // Si le produit a eu le temps d'être créé
          this.product.timeleft = 0;
          this.notifyProduction.emit(this.product);
          this.run = false;
          // Informer le monde qu'il faut ajouter le revenu du produit au score du monde
        } else {
          this.product.timeleft -= elapsedTime; // Mettre à jour le temps restant
          // Mettre à jour la barre de progression
          this.progressbarvalue = ((this.product.vitesse - this.product.timeleft) / this.product.vitesse) * 100;
        }
      }
    } else { // S'il y a un manager
      let createdObjects = Math.floor(elapsedTime / this.product.vitesse);
      this.product.timeleft = this.product.vitesse - (elapsedTime % this.product.vitesse);
      for (let i = 0; i < createdObjects; i++) {
        this.notifyProduction.emit(this.product);
      } // Informer le monde à chaque produit créé
      this.product.lastupdate = Date.now();
    }
  }

//déclarez un évènement de sortie
@Output() notifyProduction: EventEmitter<Product> = new EventEmitter<Product>();



  setProgress(value: number) {
    if (value >= 0 && value <= 100) {
      this.progressbarvalue = value;
    } else if (value < 0) {
      this.progressbarvalue = 0;
    } else {
      this.progressbarvalue = 100;
    }
  }
}



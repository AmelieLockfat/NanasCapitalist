import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../../../../world";
import {WebserviceService} from "../webservice.service";
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { MyProgressBarComponent } from './progressbar.component';
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
  lastupdate : number=0;



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
}

import {Component, Input} from '@angular/core';
import {Product} from "../../../../world";
import {WebserviceService} from "../webservice.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: Product = new Product();
  server : String='http://localhost:4000/';
  api="https://isiscapitalistgraphql.kk.kurasawa.fr/";
  @Input()
  set prod(value: Product) {
    this.product = value;
  }
  constructor(private service: WebserviceService) {
  }
 lancerProduction(){this.service.lancerProduction(this.product).catch(reason =>
   console.log("erreur: " + reason)
 );}
}


import {Component, Input} from '@angular/core';
import {Product} from "../../../../world";
import {WebserviceService} from "../webservice.service";
import {MatProgressBarModule} from '@angular/material/progress-bar'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatProgressBarModule,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: Product = new Product();
  server : String='http://localhost:4000/';
  api="https://isiscapitalistgraphql.kk.kurasawa.fr/";
  progressbarvalue=0;
  @Input()
  set prod(value: Product) {
    this.product = value;
  }
  constructor(private service: WebserviceService) {
  }
 lancerProduction(){this.service.lancerProduction(this.product).catch(reason =>
   console.log("erreur: " + reason)
 );}

/*
engagerManager(){this.service.engagerManager(this.product.paliers).catch(reason =>
  console.log("erreur: " + reason)
);}
}


acheterQtProduit()
{this.service.engagerManager(this.product).catch(reason =>
  console.log("erreur: " + reason)
);}*/
}

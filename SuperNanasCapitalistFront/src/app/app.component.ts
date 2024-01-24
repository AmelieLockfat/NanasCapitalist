import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {World,Palier,Product} from "../../../world";
import {WebserviceService} from "./webservice.service";
import {ProductComponent} from "./product/product.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SuperNanasCapitalistFront';

world: World = new World();
api: String ='https://isiscapitalistgraphql.kk.kurasawa.fr/graphql'
constructor(private service: WebserviceService) {

  service.getWorld().then(
    world => {
      this.world = world.data.getWorld;

    });

}
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {World,Palier,Product} from "../../../world";
import {WebserviceService} from "./webservice.service";
import {ProductComponent} from "./product/product.component";
import {NgModule} from "@angular/core";
import { FormsModule } from '@angular/forms';  // Importez le module FormsModule
import { BigvaluePipe } from './bigvalue.pipe'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent,FormsModule, BigvaluePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'SuperNanasCapitalistFront';
username : string ='';
world: World = new World();
api: String ='https://isiscapitalistgraphql.kk.kurasawa.fr/graphql'
  server : String='http://localhost:4000/'
constructor(private service: WebserviceService) {
  service.getWorld().then(
    world => {
      this.world = world.data.getWorld;

    });

}
getUsername(){
  if  (localStorage.getItem("username")){
  this.username = localStorage.getItem("username")!;
}}

  onUsernameChanged(){
  localStorage.setItem("username", this.username);
}
}


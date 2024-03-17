import { Injectable } from '@angular/core';
import {createClient,fetchExchange} from "@urql/core";
import {ACHETER_PRODUIT, ENGAGER_MANAGER, GET_WORLD, LANCER_PRODUCTION} from './Grapqhrequests';
import {Palier, Product} from "../../../world";




@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  server = 'http://localhost:4000/graphql';
  user = '';
  api = "https://isiscapitalistgraphql.kk.kurasawa.fr/graphql"

  createClient() {
    this.getUsername();
    return createClient({
      url: this.server,  // Utilisation de l'URL définie dans la propriété server
      exchanges: [fetchExchange],
      fetchOptions: () => {
        return {
          headers: {'x-user': this.user}
        };
      },
    });
  }

  getUsername() {
    if (localStorage.getItem("username")) {
      this.user = localStorage.getItem("username")!;
    }
  }


    getWorld() {
    return this.createClient().query(GET_WORLD, {}).toPromise();
  }

  constructor() {
  }

  // Autres méthodes liées au service web (à ajouter selon les besoins)


  lancerProduction(product: Product) {
    return this.createClient().mutation(LANCER_PRODUCTION, {
      id:
      product.id
    }).toPromise();
  }

  engagerManager(palier: Palier) {
    return this.createClient().mutation(ENGAGER_MANAGER, {name: palier.name}).toPromise();
  }

  // Acheter un unique produit !!!!!
  acheterQtProduit(product : Product) {
    return this.createClient().mutation(ACHETER_PRODUIT, {id : product.id, quantite:1}).toPromise();
  }
}




import { Injectable } from '@angular/core';
import {createClient,fetchExchange} from "@urql/core";
import { GET_WORLD, LANCER_PRODUCTION } from './Grapqhrequests';
import {Product} from "../../../world";




@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  server = 'http://localhost:4000/';
  user = '';
  api="https://isiscapitalistgraphql.kk.kurasawa.fr/graphql"

  createClient() {
    return createClient({
      url: this.api,  // Utilisation de l'URL définie dans la propriété server
      exchanges: [fetchExchange],
      fetchOptions: () => {
        return {
          headers: { 'x-user': this.user },
        };
      },
    });
  }
  getWorld() {
    return this.createClient().query(GET_WORLD, {}).toPromise();
  }
constructor() {
}
  // Autres méthodes liées au service web (à ajouter selon les besoins)


 lancerProduction(product: Product) {
  return this.createClient().mutation(LANCER_PRODUCTION, { id:
    product.id}).toPromise();
}

}





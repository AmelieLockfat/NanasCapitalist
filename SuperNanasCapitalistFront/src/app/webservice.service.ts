import { Injectable } from '@angular/core';
import {createClient,fetchExchange} from "@urql/core";
import { GET_WORLD } from "../../../Grapqhrequests"




@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  server = 'http://localhost:4000/';
  user = '';
  createClient() {
    return createClient({
      url: this.server,  // Utilisation de l'URL définie dans la propriété server
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
}



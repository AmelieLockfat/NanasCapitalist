import {Component,Output, Inject} from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import {World,Palier,Product} from "../../../world";
import {WebserviceService} from "./webservice.service";
import {ProductComponent} from "./product/product.component";
import {CommonModule, DOCUMENT, NgFor} from "@angular/common";
import { FormsModule } from '@angular/forms';  // Importez le module FormsModule
import { BigvaluePipe } from './bigvalue.pipe';
import {MultiplicateurService} from "./MultiplicateurService";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, FormsModule, BigvaluePipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'SuperNanasCapitalistFront';
  username: string = '';
  world: World = new World();
  api: String = 'https://isiscapitalistgraphql.kk.kurasawa.fr/graphql'
  server: String = 'http://localhost:4000/'

  showManagersSection = false;
  showUnlocksSection = false;



  showContent

  constructor(private service: WebserviceService, private router: Router, public multiplicateurService : MultiplicateurService) {
 this.multiplicateurService=multiplicateurService;
    this.getUsername();
    service.getWorld().then(
      world => {
        this.world = world.data.getWorld
      });
    this.showContent = true
  }

  reloadPage() {
    this.router.navigate(['.']).then(() => {
      window.location.reload();
    });
  }

  getUsername() {
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username")!;
    }
  }

  onUsernameChanged() {
    localStorage.setItem("username", this.username);
  }

  toggleManagersSection() {
    this.showManagersSection = !this.showManagersSection;

  }

  toggleUnlocksSection() {
    this.showUnlocksSection= !this.showUnlocksSection;

  }

  engagerManager(manager: Palier) {
    this.service.engagerManager(manager).catch(reason =>
      console.log("erreur: " + reason)
    );
  }
  utiliserUnlock(unlock : Palier){
    this.service.utiliserUnlock(unlock).catch(reason =>
        console.log("erreur: " + reason)
    );
  }

  onMultiplicateurClick() {
    if (this.multiplicateurService.multiplicateurValue === 1) {
      this.multiplicateurService.multiplicateurValue = 10;
    } else if (this.multiplicateurService.multiplicateurValue === 10) {
      this.multiplicateurService.multiplicateurValue = 100;
    } else {
      // Si le multiplicateur est à 100, revenir à 1
      this.multiplicateurService.multiplicateurValue = 1;
    }
  }

  onProductionDone(p: Product) {
    this.world.score += p.revenu
    this.world.money += p.revenu
  }

}




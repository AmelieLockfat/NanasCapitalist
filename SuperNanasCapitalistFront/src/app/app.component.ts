import {Component, Output, Inject, EventEmitter} from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import {World,Palier,Product} from "../../../world";
import {WebserviceService} from "./webservice.service";
import {ProductComponent} from "./product/product.component";
import {CommonModule, DOCUMENT, NgFor} from "@angular/common";
import { FormsModule } from '@angular/forms';  // Importez le module FormsModule
import { BigvaluePipe } from './bigvalue.pipe';
import {MultiplicateurService} from "./MultiplicateurService";
import { MatSnackBar} from '@angular/material/snack-bar';

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
  showCashUpgradesSection = false;



  showContent



  constructor(private service: WebserviceService, private router: Router, public multiplicateurService : MultiplicateurService, private snackBar : MatSnackBar) {
 this.multiplicateurService=multiplicateurService;
    this.getUsername();
    service.getWorld().then(
      world => {
        this.world = world.data.getWorld
        console.log(this.world)
      });
    this.showContent = true
  }

  popMessage(message : string) : void {
    // Configuration de la boîte de notification avec une classe CSS
    this.snackBar.open(message, "", { 
      duration: 2000,
      panelClass: ['custom-snackbar'] // Appliquer la classe de style personnalisé
    });
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

  toggleCashUpgradesSection() {
    this.showCashUpgradesSection = !this.showCashUpgradesSection;

  }
  toggleUnlocksSection() {
    this.showUnlocksSection= !this.showUnlocksSection;

  }

  engagerManager(manager: Palier) {
    this.service.engagerManager(manager).catch(reason =>
      console.log("erreur: " + reason)
    )
    manager.unlocked=true;
    this.popMessage('Vous avez engagé un manager ! Bravo !');

  }
  argentPourPalier(palier  : Palier){
    return this.world.money >= palier.seuil
  }

  utiliserUnlock(unlock : Palier){
    this.service.utiliserUnlock(unlock).catch(reason =>
        console.log("erreur: " + reason)
    );
    unlock.unlocked=true;
  }

  utiliserUpgrade(upgrade : Palier){
    this.service.utiliserUpgrade(upgrade).catch(reason =>
      console.log("erreur: " + reason)
    );
    upgrade.unlocked=true;
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
    this.world.score += p.revenu*p.quantite
    this.world.money += p.revenu*p.quantite
  }


  onBuy(product: Product) {
    this.world.money -= product.cout * this.multiplicateurService.multiplicateurValue;
    //
    let unlock = this.world.allunlocks.find(unlock => unlock.idcible === product.id)?? new Palier();
    if((product.quantite >= unlock.seuil)&&!unlock.unlocked){
      this.utiliserUnlock(unlock)
      unlock.unlocked=true;
    }
  }


}




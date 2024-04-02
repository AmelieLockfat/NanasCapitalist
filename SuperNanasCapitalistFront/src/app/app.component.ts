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
import {MatBadgeModule} from '@angular/material/badge';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, FormsModule, BigvaluePipe, CommonModule, MatBadgeModule],
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

  badgeManagers : number =0;
  badgeUpgrades : number =0;

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
    this.snackBar.open(message, "", {
      duration: 2000,

    });
}

updateBadges(){
  var managers: Palier[]= this.world.managers.filter(m => m.seuil <= this.world.money);
  var cashUpgrades : Palier[]=this.world.upgrades.filter(u =>u.seuil <=this.world.money);

  this.badgeManagers = managers.filter(m=> !m.unlocked) .length;
  this.badgeUpgrades = cashUpgrades.filter( u=>!u.unlocked).length ;
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
    this.updateBadges();
  }

  toggleCashUpgradesSection() {
    this.showCashUpgradesSection = !this.showCashUpgradesSection;
    this.updateBadges();
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
    this.popMessage('Vous avez un nouvel unlock ! Incroyable !');
  }

  utiliserUpgrade(upgrade : Palier){
    this.service.utiliserUpgrade(upgrade).catch(reason =>
      console.log("erreur: " + reason)
    );
    upgrade.unlocked=true;
    this.popMessage('Sympa le nouvel upgrade ! ');
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
    this.updateBadges();
  }


  onBuy(product: Product) {
    this.world.money -= product.cout * this.multiplicateurService.multiplicateurValue;
    this.updateBadges();
    //
    let unlock = this.world.allunlocks.find(unlock => unlock.idcible === product.id)?? new Palier();
    if((product.quantite >= unlock.seuil)&&!unlock.unlocked){
      this.utiliserUnlock(unlock)
      unlock.unlocked=true;
    }
  }


}




const fs = require("fs");

function saveWorld(context) {
    fs.writeFile("userworlds/" + context.user + "-world.json",
        JSON.stringify(context.world), err => {
            if (err) {
                console.error(err)
                throw new Error(
                    `Erreur d'écriture du monde coté serveur`)
            }
        })
}
module.exports = {
    Query: {
        getWorld(parent, args, context, info) {
            saveWorld(context)
            return context.world
        }
    },
    Mutation: {
        acheterQtProduit(parent, args, context, info) {// Je veux chercher le produit dans le monde
            const produit = context.world.products.find(p => p.id === args.id);
            // Si le produit n'existe pas, je génère une erreur
            if (!produit) {
                throw new Error(`Le produit avec l'id ${args.id} n'existe pas`);
            }
            /// Calculer le coût total de l'achat
            const coutTotal = produit.cout * (1 - Math.pow(produit.croissance, args.quantite)) / (1 - produit.croissance);
            // Vérifier si l'utilisateur a assez d'argent
            if (context.world.money < coutTotal) {
                throw new Error(`Pas assez d'argent pour acheter ${args.quantite} unité(s) du produit`);
            }
            // Déduire le coût total de l'argent du monde

            context.world.money = parseFloat(context.world.money - coutTotal).toFixed(2);

            // Augmenter la quantité du produit
            produit.quantite += args.quantite;

            // Mettre à jour le coût d'achat du produit
            produit.cout = parseFloat(Math.pow(1 + produit.croissance, args.quantite) * produit.cout).toFixed(2);

            // Sauvegarder les changements dans le monde

            //context.world.lastupdate = Date.now().toString();
             saveWorld(context);
            // Retourner le produit mis à jour
            return produit;
        },


        lancerProductionProduit(parent, args, context, info) {
            const produit = context.world.products.find(p => p.id === args.id);
            produit.timeleft = produit.vitesse;
            context.world.lastupdate=Date.now();
            saveWorld(context)
         return produit
        },

        engagerManager(parent, args, context, info) {
            const nomManager = args.name;
            const manager = context.world.managers.find(manager => manager.name === nomManager);
            //Je cherche le produit géré par ce manager
            const produit = context.world.products.find(product => product.paliers.find(palier => palier.name.includes(nomManager)));
            const palier = produit.paliers.find(palier => palier.name.includes(nomManager));
            //encore faut-il trouver le produit.
            if (!produit) {
                throw new Error(`Le produit avec le nom de manager "${nomManager}" n'a pas été trouvé.`);
            }
            // Je récupère le prix du manager
            const prixManager= manager.seuil;
            // Il faut avoir assez de monnaie
            if (context.world.money < prixManager) {
                throw new Error(`Pas assez d'argent pour engager le manager "${nomManager}".`);
            }
            // manager unlocked
            produit.managerUnlocked = true;
            manager.unlocked=true;
            palier.unlocked=true;
            // je perds de l'argent en payant mon manager
            context.world.money -= prixManager;
            // je lance la prod

            // Sauvegarder les changements dans le monde
          //  context.world.lastupdate = Date.now().toString();
            context.world.lastupdate=Date.now();
            saveWorld(context);


            return palier
        }
        ,


        calcScore(parent, args, context, info) {
            const produits = context.world.products;
            const elapsetime = Date.now() - context.world.lastupdate;
            for (let p of produits) {
                if (p.managerUnlocked) {
                    nb_p_produits = Math.floor(elapsetime / p.vitesse);
                    // Augmenter la quantité du produit
                    p.quantite += nb_p_produits;
                    argent_gagne = nb_p_produits * p.revenu;
                    context.world.money += argent_gagne;
                } else {
                    if (p.timeleft !== 0) {
                        p.timeleft -= elapsetime
                        if (p <= 0){
                            p.quantite=+1
                        }
                            } else {
                    }
                }
            }
            context.world.lastupdate = Date.now().toString();
            saveWorld(context);
        },

        utiliserUnlock(parent, args, context, info){
            // product => product.paliers.find(palier => palier.name.includes(nomManager))
            const unlock =   context.world.allunlocks.find(unlock => unlock.name=== args.name);
            const product = context.world.products.find(product => product.paliers.find(palier => palier.name.includes(unlock.name)));
            //on vérifie que le unlock soit pas déjà utilisé
            if (!unlock.unlocked){
        if (unlock.typeratio =='gain') {
            product.revenu = Math.round(product.revenu * unlock.ratio);
        }
        if (unlock.typeratio=='vitesse'){
            // produit pas en production
            if (product.timeleft==0){
                //je divise la vitesse du produit par le bonus obtenu
                product.vitesse = Math.round(product.vitesse/unlock.ratio);
            }
            //produit en production
            else{
                //double bonus
                // on diminue le temps de la production en cours
                product.timeleft=Math.round(product.timeleft/unlock.ratio);
                //on divise aussi la vitesse du produit par le bonuus
                product.vitesse = Math.round(product.vitesse/unlock.ratio);
            }
        }
        unlock.unlocked=true;}
        saveWorld(context)
        return product
        },

        utiliserCashUpgrade(parent, args, context, info){
            const upgrade =   context.world.upgrades.find(upgrade => upgrade.name === args.name);
            const product = context.world.products.find(product => product.paliers.find(palier => palier.name.includes(upgrade.name)));
            if (!upgrade.unlocked){
                if (upgrade.typeratio=='gain') {
                    product.revenu = Math.round(product.revenu * upgrade.ratio);
                }
                if (upgrade.typeratio=='vitesse') {
                    // produit pas en production
                    if (product.timeleft==0){
                        //je divise la vitesse du produit par le bonus obtenu
                        product.vitesse = Math.round(product.vitesse/upgrade.ratio);
                    }
                } else{
                    //double bonus
                    // on diminue le temps de la production en cours
                    product.timeleft=Math.round(product.timeleft/upgrade.ratio);
                    //on divise aussi la vitesse du produit par le bonuus
                    product.vitesse = Math.round(product.vitesse/upgrade.ratio);
                }
                upgrade.unlocked=true;}
            saveWorld(context)
            return product
            }

                }


}

;
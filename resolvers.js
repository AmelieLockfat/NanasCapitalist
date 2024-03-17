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
            context.world.money -= coutTotal;

            // Augmenter la quantité du produit
            produit.quantite += args.quantite;

            // Mettre à jour le coût d'achat du produit
            produit.cout = Math.pow(1 + produit.croissance, args.quantite) * produit.cout;

            // Sauvegarder les changements dans le monde
            context.world.lastupdate = Date.now().toString();
             saveWorld(context);
            // Retourner le produit mis à jour
            return produit;
        },


        lancerProductionProduit(parent, args, context, info) {
            const produit = context.world.products.find(p => p.id === args.id);
            produit.timeleft = produit.vitesse;
            this.calcScore(parent, args, context)
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
            // je perds de l'argent en payant mon manager
            context.world.money -= prixManager;
            // je lance la prod
            this.lancerProductionProduit(parent, { id: produit.id }, context, info);
            // Sauvegarder les changements dans le monde
            context.world.lastupdate = Date.now().toString();
            saveWorld(context);
            this.calcScore(context)
            return palier
        }
        ,


        calcScore(parent, args, context, info) {
            const produits = context.world.products;
            const elapsetime = Date.now() - parseInt(context.world.lastupdate);
            for (let p of produits) {
                if (p.managerUnlocked) {
                    nb_p_produits = Math.floor(elapsetime / p.vitesse);
                    // Augmenter la quantité du produit
                    p.quantite += nb_p_produits;
                    argent_gagne = nb_p_produits * p.revenu;
                    context.world.money += argent_gagne;
                } else {
                    if (p.timeleft !== 0) {
                        p.quantite = p.quantite + 1;
                        argent_gagne = 1 * p.revenu;
                        context.world.money = context.world.money + argent_gagne;
                        p.timeleft -= elapsetime

                    } else {
                    }
                }
            }
            context.world.lastupdate = Date.now().toString();
            saveWorld(context);
        }

    }
}

;
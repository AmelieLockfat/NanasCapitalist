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
        acheterQtProduit(parent, args, context, info)
{// Je veux chercher le produit dans le monde
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
    produit.cout = Math.pow(1 + produit.croissance, args.quantite)*produit.cout;

    // Sauvegarder les changements dans le monde

    saveWorld(context);
    // Retourner le produit mis à jour
    return produit;},



    lancerProductionProduit(parent, args, context, info)
    {
        const produit = context.world.products.find(p => p.id === args.id);
        produit.timeleft = produit.vitesse;
    },


    engagerManager(parent, args, context, info){
        const nomManager = args.name;
            //Je cherche le produit géré par ce manager
        const produit = context.world.products.find(p => p.paliers && p.paliers.includes(NomManager));
            //Si le produit n'existe pas, alors on envoie une erreur
        if (!produit) {
            throw new Error(`Le produit avec le nom de manager "${nomManager}" n'a pas été trouvé.`);
        }
        produit.managerUnlocked=true;
        // Il faut décroître l'argent du manager + erreur si le manager est déjà débloqué
    }



    }
}


;
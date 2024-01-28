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
        acheterQtProduit(id, quantite)
{

    // Je veux chercher le produit dans le monde
    const produit = context.world.products.find(p => p.id === id);

    // Si le produit n'existe pas, je génère une erreur
    if (!produit) {
        throw new Error(`Le produit avec l'id ${id} n'existe pas`);
    }

    // Calculer le coût total de l'achat
    const coutTotal = produit.cout * quantite;

    // Vérifier si l'utilisateur a assez d'argent
    if (context.world.money < coutTotal) {
        throw new Error(`Pas assez d'argent pour acheter ${quantite} unités du produit avec l'id ${id}`);
    }

    // Déduire le coût total de l'argent du monde
    context.world.money -= coutTotal;

    // Augmenter la quantité du produit
    produit.quantite += quantite;

    // Mettre à jour le coût d'achat du produit
    produit.cout = produit.cout+produit.croissance;

    // Sauvegarder les changements dans le monde
    saveWorld(context);

    // Retourner le produit mis à jour
    return produit;}
    }
};
import {gql} from "@urql/core";
export const GET_WORLD = gql`
    query ExampleQuery {
  getWorld {
  name
  angelbonus
  logo
  money
  score
  totalangels
  activeangels
  angelbonus
  lastupdate
  managers{
  name
  logo
  seuil
  idcible
  ratio
  typeratio
  unlocked
 }
  products {
    cout
    name
    logo
croissance
revenu
vitesse
quantite
timeleft
managerUnlocked
paliers {
  idcible
  name
  logo
  seuil
  ratio
  typeratio
  unlocked
}
  }
  }
}

    `

export const LANCER_PRODUCTION = gql`
 mutation lancerProductionProduit($id: Int!) {
 lancerProductionProduit(id: $id) {
 id
 }
 }
  `
export const ENGAGER_MANAGER = gql`
 mutation engagerManager($name : string) {
 engagerManager(name : $name) {
 name
 }
 }
  `
export const ACHETER_PRODUIT = gql`
 mutation acheterQtProduit($id: Int!, $quantite: Int!) {
acheterQtProduit(id : $id, quantite : $quantite) {
 name
 }
 }
  `

const {gql} = require("apollo-server-express");
module.exports = gql`
enum RatioType {
 gain
 vitesse
 ange
}
type Palier {
 name: String!
 logo: String
 seuil: Float
 idcible: Int
 nameProduit: String
 ratio: Int
 typeratio: RatioType
 unlocked: Boolean
}
type Product {id: Int!
 name: String
 logo: String
 cout: Float
 croissance: Float
 revenu: Float
 vitesse: Int
 quantite: Int
 timeleft: Int
 managerUnlocked: Boolean
 paliers: [Palier]
}
type World {
 name: String!
 logo: String
 money: Float
 score: Float
 totalangels: Int
 activeangels: Int
 angelbonus: Int
 lastupdate: String
 products: [Product]
 allunlocks: [Palier]
 upgrades: [Palier]
 angelupgrades: [Palier]
 managers: [Palier]
}
type Query {
 getWorld: World
}
type Mutation {
 acheterQtProduit(id: Int!, quantite: Int!): Product
 lancerProductionProduit(id: Int!): Product
 engagerManager(name: String!): Palier
 acheterCashUpgrade(name: String!): Palier
 acheterAngelUpgrade(name: String!): Palier
 utiliserUnlock(name: String!) : Palier
 utiliserCashUpgrade(name:String!) : Palier
 resetWorld: World
 calcScore: World
}



enum RatioType 
{ GAIN
 VITESSE
 ANGE } 
`

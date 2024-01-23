const {gql} = require("apollo-server-express");
module.exports = gql`
type Monde {
name : String!
logo: String
money: Int!
score: Int
totalangels: Int
activeangels: Int
angelbonus: Int
lastupdate:Int
produits: [Produit]
allunlocks:[Allunlocks]
manager: [Manager]
}

type Product {
id: Int!
name: String
logo: String
count : Int
croissance : float
revenu : Int
vitesse : Int
quantite : Int
timeleft: Int
managerUnlocked: boolean
pallier :[Pallier] 
 }
type Pallier{
name:String
logo: String
seuil: Int
idcible:Int!
ratio:Int
typeratio: RatioType
unlocked: boolean
}

type Allunlocks{
name:String
logo: String
seuil : Int
idcible:Int
ratio:Int
typeratio: RatioType
unlocked: boolean

}

type Upgrades{
name:String
logo:String
seuil:Int
idcible : Int!
ratio: Int
typeratio: RatioType
unlocked: boolean
}

type AngelUpgrades {
name:String
logo;String
seuil:Int
idcible:Int
ratio:Int
typeratio: RatioType
unlocked : boolean}

type Manager {
name : String
logo :String
seuil:Int
idcible:Int
ratio: Int
typeratio : RatioType
unlocked:boolean
}


enum RatioType 
{ GAIN
 VITESSE
 ANGE } 
`

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
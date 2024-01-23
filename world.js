module.exports = {
    "name": "SupersNanas",
    "logo": "icones/fond.jpeg",
    "money": 0,
    "score": 0,
    "totalangels": 0,
    "activeangels": 0,
    "angelbonus": 2,
    "lastupdate": 0,
    "products": [
        {
            "id": 1,
            "name": "poulpette",
            "logo": "icones/poulpette.png",
            "cout": 1,
            "croissance": 0.02,
            "revenu": 1,
            "vitesse": 500,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "palliers": [
                {"name": "MOJOJOJO",
                    "logo": "icones/mojojojo.png",
                    "seuil": 20,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": "false"
                },
                {
                    "name": "Upgrade1Poulpette",
                    "logo": "icones/upgrade.png",
                    "seuil": 35,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": "false"
                }
            ]
},
{
    "id": 2,
    "name": "Telephone" ,
    "logo": "icones/phone.jpg","cout": 1,
    "croissance": 0.03,
    "revenu": 8,
    "vitesse": 5000,
    "quantite": 0,
    "timeleft": 0,
    "managerUnlocked": false,
    "palliers": [
        {"name": "SaraBellum",
            "logo": "icones/SaraBellum.jpg",
            "seuil": 1000,
            "idcible": 2,
            "ratio": 2,
            "typeratio": "vitesse",
            "unlocked": "false"
        },
        {
            "name": "Upgrade1Phone",
            "logo": "icones/upgrade.png",
            "seuil": 50,
            "idcible": 1,
            "ratio": 2,
            "typeratio": "vitesse",
            "unlocked": "false"
        }
    ]
}
],
"allunlocks": [
    {
        "name": "tele",
        "logo": "icones/premierunlock.jpg",
        "seuil": 30,
        "idcible": 0,
        "ratio": 2,
        "typeratio": "gain",
        "unlocked": "false"
    }
],
"upgrades": [
    {
        "name": "Nom du premier upgrade",
        "logo": "icones/premierupgrade.jpg",
        "seuil": 1e3,
        "idcible": 1,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": "false"
    }
],
"angelupgrades": [
    {
        "name": "Angel Sacrifice",
        "logo": "icones/angel.png",
        "seuil": 10,
        "idcible": 0,
        "ratio": 3,
        "typeratio": "gain",
        "unlocked": "false"
    }
],
"managers": [
    {
        "name": "MOJOJOJO",
        "logo": "icones/mojojojo.png",
        "seuil": 10,
        "idcible": 1,
        "ratio": 0,
        "typeratio": "gain",
        "unlocked": "false"
    },
    {
        "name": "SaraBellum",
        "logo": "icones/SaraBellum.jpg",
        "seuil": 1000,
        "idcible": 2,
        "ratio": 0,
        "typeratio": "gain",
        "unlocked": "false"
    },
    {
        "name": "MonsieurLeMaire",
        "logo": "icones/lemaire.jpg",
        "seuil": 200,
        "idcible": 3,
        "ratio": 0,
        "typeratio": "gain",
        "unlocked": "false"
    },
    {
        "name": "MlleKeane",
        "logo": "icones/mllekean.png",
        "seuil": 400,
        "idcible": 4,
        "ratio": 0,
        "typeratio": "gain",
        "unlocked": "false"
    },
    {
        "name": "ProfesseurUtonium",
        "logo": "icones/Professeur.png",
        "seuil": 100,
        "idcible": 5,
        "ratio": 0,
        "typeratio": "gain",
        "unlocked": "false"
    },
    {
        "name": "PrincesseMorbucks",
        "logo": "icones/morbucks.jpg",
        "seuil": 600,
        "idcible": 6,
        "ratio": 0,
        "typeratio": "gain",
        "unlocked": "false"
    }
]
};

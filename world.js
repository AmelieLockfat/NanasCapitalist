module.exports = {
    "name": "SupersNanas",
    "logo": "icones/ecolo.jpg",
    "money": 2,
    "score": 0,
    "totalangels": 0,
    "activeangels": 0,
    "angelbonus": 2,
    "lastupdate": 0,
    "products": [
        {
            "id": 1,
            "name": "Poulpette",
            "logo": "icones/poulpette.png",
            "cout": 2,
            "croissance": 0.07,
            "revenu": 2,
            "vitesse": 500,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {"name": "MOJOJOJO",
                    "logo": "icones/mojojojo.png",
                    "seuil": 100,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Poulpe Riche",
                    "logo": "icones/poulperiche.jpg",
                    "seuil": 50,
                    "idcible": 1,
                    "nameProduit": "Poulpette",
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                }, {
                    "name": "Bébé octopus",
                    "logo": "icones/cuteoctopus.jpg",
                    "seuil": 1000,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                }
            ]
        },
        {
            "id": 2,
            "name": "Telephone" ,
            "logo": "icones/phone.jpg",
            "cout": 60,
            "croissance": 0.15,
            "revenu": 60,
            "vitesse": 3000,
            "quantite": 0,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers": [
                {"name": "SaraBellum",
                    "logo": "icones/SaraBellum.jpg",
                    "seuil": 15000,
                    "idcible": 2,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Super Nana au Téléphone",
                    "logo": "icones/powerpuffphone.png",
                    "seuil": 50,
                    "idcible": 2,
                    "nameProduit": "Telephone",
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": false
                },
                {
                    "name": "Telephone en colere",
                    "logo": "icones/angryphone.png",
                    "seuil": 8000,
                    "idcible": 2,
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                }
            ]
        },
        {"id": 3,
            "name": "Perles" ,
            "logo": "icones/perles.jpg",
            "cout": 10,
            "croissance": 0.14,
            "revenu": 540,
            "vitesse": 5500,
            "quantite": 0,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers":[{
                "name": "La main au bracelet",
                "logo": "icones/lamainaubracelet.png",
                "seuil": 100,
                "idcible": 3,
                "nameProduit": "Perles",
                "ratio": 2,
                "typeratio": "gain",
                "unlocked": false
            },
                {
                    "name": "MonsieurLeMaire",
                    "logo": "icones/lemaire.jpg",
                    "seuil": 50000,
                    "idcible": 3,
                    "nameProduit":"Perles",
                    "ratio": 0,
                    "typeratio": "gain",
                    "unlocked": false
                },
                {
                    "name": "Perles magiques",
                    "logo": "icones/perlesviolettes.png",
                    "seuil": 10000,
                    "idcible": 3,
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                }
                ]},
        {"id": 4,
            "name": "Sceau" ,
            "logo": "icones/sceau.jpg",
            "cout": 8640,
            "croissance": 0.13,
            "revenu": 4320,
            "vitesse": 10000,
            "quantite": 0,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers":[{
                "name": "MlleKeane",
                "logo": "icones/mllekeane.png",
                "seuil": 80000,
                "idcible": 4,
                "nameProduit":"Sceau",
                "ratio": 0,
                "typeratio": "gain",
                "unlocked": false
            },
                {
                    "name": "Chateau de sable mimi",
                    "logo": "icones/chateaudesable.jpg",
                    "seuil": 200,
                    "idcible": 4,
                    "nameProduit": "Sceau",
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                },
                {
                    "name": "Amusement à la plage",
                    "logo": "icones/sand.png",
                    "seuil": 1800,
                    "idcible": 3,
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                }]},
        { "id": 5,
            "name": "CoeurPuissant" ,
            "logo": "icones/coeur.jpg",
            "cout": 50000,
            "croissance": 0.10,
            "revenu": 35000,
            "vitesse": 24000,
            "quantite": 0,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers":[{
                "name": "ProfesseurUtonium",
                "logo": "icones/Professeur.png",
                "seuil": 120000,
                "idcible": 5,
                "nameProduit":"CoeurPuissant",
                "ratio": 0,
                "typeratio": "gain",
                "unlocked": false
            },{
                "name": "Amour de soeurs",
                "logo": "icones/sisterhood.png",
                "seuil": 1000,
                "idcible": 5,
                "nameProduit": "CoeurPuissant",
                "ratio": 3,
                "typeratio": "gain",
                "unlocked": false
            },
                ,{
                    "name": "Discussion familiale",
                    "logo": "icones/pudidee.png",
                    "seuil": 50000,
                    "idcible": 5,
                    "ratio": 2,
                    "typeratio": "gain",
                    "unlocked": false
                }]},
        {"id": 6,
            "name": "Noeud" ,
            "logo": "icones/noeud.jpg",
            "cout": 600000,
            "croissance": 0.1,
            "revenu": 40000,
            "vitesse": 96000,
            "quantite": 0,
            "timeleft": 0,
            "managerUnlocked": false,
            "paliers":[{
                "name": "PrincesseMorbucks",
                "logo": "icones/morbucks.jpg",
                "seuil": 300000,
                "idcible": 6,
                "nameProduit":"Noeud",
                "ratio": 0,
                "typeratio": "gain",
                "unlocked": false
            },{
                "name": "Belle sans noeud",
                "logo": "icones/bellesansnoeud.png",
                "seuil": 1500,
                "idcible": 6,
                "nameProduit": "Noeud",
                "ratio": 3,
                "typeratio": "gain",
                "unlocked": false
            },{
                "name": "Un joli noeud",
                "logo": "icones/girl.png",
                "seuil": 69000,
                "idcible": 6,
                "ratio": 2,
                "typeratio": "gain",
                "unlocked": false
            }
            ]}],
    "allunlocks": [
        {
            "name": "Poulpe Riche",
            "logo": "icones/poulperiche.jpg",
            "seuil": 50,
            "idcible": 1,
            "nameProduit": "Poulpette",
            "ratio": 2,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "Super Nana au Téléphone",
            "logo": "icones/powerpuffphone.png",
            "seuil": 50,
            "idcible": 2,
            "nameProduit": "Telephone",
            "ratio": 2,
            "typeratio": "vitesse",
            "unlocked": false
        },
        {
            "name": "La main au bracelet",
            "logo": "icones/lamainaubracelet.png",
            "seuil": 100,
            "idcible": 3,
            "nameProduit": "Perles",
            "ratio": 2,
            "typeratio": "vitesse",
            "unlocked": false
        },
        {
            "name": "Chateau de sable mimi",
            "logo": "icones/chateaudesable.jpg",
            "seuil": 200,
            "idcible": 4,
            "nameProduit": "Sceau",
            "ratio": 2,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "Amour de soeurs",
            "logo": "icones/sisterhood.png",
            "seuil": 1000,
            "idcible": 5,
            "nameProduit": "CoeurPuissant",
            "ratio": 3,
            "typeratio": "vitesse",
            "unlocked": false
        },{
            "name": "Belle sans noeud",
            "logo": "icones/bellesansnoeud.png",
            "seuil": 1500,
            "idcible": 6,
            "nameProduit": "Noeud",
            "ratio": 3,
            "typeratio": "gain",
            "unlocked": false
        }
    ],
    "upgrades": [
        {
            "name": "Bébé octopus",
            "logo": "icones/cuteoctopus.jpg",
            "seuil": 1000,
            "idcible": 1,
            "ratio": 2,
            "typeratio": "gain",
            "unlocked": false
        },{
            "name": "Telephone en colere",
            "logo": "icones/angryphone.png",
            "seuil": 8000,
            "idcible": 2,
            "ratio": 2,
            "typeratio": "gain",
            "unlocked": false
        },{
            "name": "Perles magiques",
            "logo": "icones/perlesviolettes.png",
            "seuil": 10000,
            "idcible": 3,
            "ratio": 2,
            "typeratio": "gain",
            "unlocked": false
        },{
            "name": "Amusement à la plage",
            "logo": "icones/sand.png",
            "seuil": 18000,
            "idcible": 3,
            "ratio": 2,
            "typeratio": "gain",
            "unlocked": false
        },{
            "name": "Discussion familiale",
            "logo": "icones/pudidee.png",
            "seuil": 50000,
            "idcible": 5,
            "ratio": 2,
            "typeratio": "gain",
            "unlocked": false
        },{
            "name": "Un joli noeud",
            "logo": "icones/girl.png",
            "seuil": 69000,
            "idcible": 6,
            "ratio": 2,
            "typeratio": "gain",
            "unlocked": false
        }
    ],
    "angelupgrades": [
        {
            "name": "Angel Sacrifice",
            "logo": "icones/angel.jpg",
            "seuil": 10,
            "idcible": 0,
            "ratio": 3,
            "typeratio": "gain",
            "unlocked": false
        }
    ],
    "managers": [
        {
            "name": "MOJOJOJO",
            "logo": "icones/mojojojo.png",
            "seuil": 100,
            "idcible": 1,
            "nameProduit":"Poulpette",
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "SaraBellum",
            "logo": "icones/SaraBellum.jpg",
            "seuil": 15000,
            "idcible": 2,
            "nameProduit":"Telephone",
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "MonsieurLeMaire",
            "logo": "icones/lemaire.jpg",
            "seuil": 50000,
            "idcible": 3,
            "nameProduit":"Perles",
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "MlleKeane",
            "logo": "icones/mllekeane.png",
            "seuil": 80000,
            "idcible": 4,
            "nameProduit":"Sceau",
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "ProfesseurUtonium",
            "logo": "icones/Professeur.png",
            "seuil": 120000,
            "idcible": 5,
            "nameProduit":"CoeurPuissant",
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        },
        {
            "name": "PrincesseMorbucks",
            "logo": "icones/morbucks.jpg",
            "seuil": 300000,
            "idcible": 6,
            "nameProduit":"Noeud",
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": false
        }
    ]};

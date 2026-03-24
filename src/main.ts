interface Plat {
    id : number;
    nom : string; 
    prix : number ;
    description : string; 
}

const plat: Plat[] =[
{
    id : 1,
    nom : "Anchois 23cm", 
    prix : 7.9000 ,
    description : "sauce tomate premium, origan, huile d'olive extra vierge, anchois, olive",
},
{
    id : 2,
    nom : "Anchois 33cm", 
    prix : 11.9000 ,
    description : "sauce tomate premium, origan, huile d'olive extra vierge, anchois, olive",
},
{
    id : 3,
    nom : "Emmental 23cm", 
    prix : 7.9000 ,
    description : "sauce tomate premium, origan, huile d'olive extra vierge, emmental, basilic, olive",
}
]



console.log(plat)
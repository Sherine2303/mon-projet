// Fichier main.ts
import './style.css';

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
},
{
    id : 4,
    nom : "Margherita 23cm", 
    prix : 7.9000,
    description : "sauce tomate premium, origan, huile d'olive extra vierge, mozzarella",
}
]

function init(): void{
    const app = document.querySelector("#App");
    if (app) {
        app.innerHTML = `
        <div class="menu-container">
            ${plat
                .map(
                    (p) => `
                    <div class="card">
                        <h3>${p.nom}</h3>
                        <p>${p.description}</p>
                        <p><strong>Prix : ${p.prix.toFixed(2)} €</strong></p>
                    </div>
                `
                )
                .join("")}
        </div>
        `;
    }
}

init();
console.log(plat)
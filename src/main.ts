// Fichier main.ts
import './style.css';

interface PlatDTO {
    id : number;
    nom : string; 
    prix : string ;
    description : string; 
}

//const plat: Plat[] =[
//{
    //id : 1,
    //nom : "Anchois 23cm", 
    //prix : 7.9000 ,
    //description : "sauce tomate premium, origan, huile d'olive extra vierge, anchois, olive",
//},
//{
    //id : 2,
    //nom : "Anchois 33cm", 
    //prix : 11.9000 ,
    //description : "sauce tomate premium, origan, huile d'olive extra vierge, anchois, olive",
//},
//{
    //id : 3,
    //nom : "Emmental 23cm", 
    //prix : 7.9000 ,
    //description : "sauce tomate premium, origan, huile d'olive extra vierge, emmental, basilic, olive",
//},
//{
    //id : 4,
    //nom : "Margherita 23cm", 
    //prix : 7.9000,
    //description : "sauce tomate premium, origan, huile d'olive extra vierge, mozzarella",
//}
//]

async function chargerDonnées(): Promise<PlatDTO[]> { 
const res = await fetch('http://localhost/EatSmart-Sherine/sherine-api-eatsmart/articles'); 
return await res.json();  
} 

async function init(): Promise<void> {
    const app = document.querySelector("#app");
    // On récupère les données du serveur
    const plat = await chargerDonnées();
    console.log(plat);
    if (app) {
        app.innerHTML = `
        <div class="menu-container">
            ${plat
                .map(
                    (p) => `
                    <div class="card">
                        <h3>${p.nom}</h3>
                        <p>${p.description}</p>
                        <p><strong>Prix : ${Number(p.prix).toFixed(2)} €</strong></p>
                        <button class="btn-order">Ajouter</button>
                    </div>
                `
                )
                .join("")}
        </div>
        `;
    }
}

init();

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
let panier : PlatDTO[] = [];

async function chargerDonnées(): Promise<PlatDTO[]> { 
const res = await fetch('http://localhost/EatSmart-Sherine/sherine-api-eatsmart/articles'); 
return await res.json();  
} 

function afficherPanier() {
    const cartItems = document.querySelector("#cart-items");
    const totalPrix = document.querySelector("#total-prix");

    if (!cartItems || !totalPrix) return;

    // Si le panier est vide
    if (panier.length === 0) {
        cartItems.innerHTML = "<p>Votre panier est vide</p>";
        totalPrix.textContent = "0.00";
        return;
    }

    // Sinon, on affiche les plats
    cartItems.innerHTML = panier
        .map(
            (p) => `
            <div class="cart-item">
                <span>${p.nom}</span>
                <span>${Number(p.prix).toFixed(2)} €</span>
            </div>
        `
        )
        .join("");

    // Calcul du total
    const total = panier.reduce((sum, p) => sum + Number(p.prix), 0);
    totalPrix.textContent = total.toFixed(2);
}


async function init(): Promise<void> {
    const app = document.querySelector("#app");
    // On récupère les données du serveur
    const plat = await chargerDonnées();
    console.log(plat);
    if (app) {
    app.innerHTML = `
    <div class="content-wrapper">
        <main class="menu-container">
            ${plat.map((p) => `
                <div class="card">
                    <h3>${p.nom}</h3>
                    <p>${p.description}</p>
                    <p><strong>Prix : ${Number(p.prix).toFixed(2)} €</strong></p>
                    <button class="btn-order">Ajouter</button>
                </div>
            `).join("")}
        </main>

        <aside class="cart-container">
            <h2>Votre Panier</h2>
            <div id="cart-items">
                <p>Votre panier est vide</p>
            </div>
            <hr>
            <div class="cart-total">
                <strong>Total : <span id="total-prix">0.00</span>€</strong>
            </div>
        </aside>
    </div>
    `;
}
    const button = document.querySelectorAll<HTMLButtonElement>('.btn-order'); 
    button.forEach((btn, index) => { 
        btn.addEventListener('click', () => { 
            console.log(`Bouton n°${index} cliqué !`); 
            console.log(`Plat = ${plat[index].nom}`)
            panier.push(plat[index]);
            console.log("État du panier :", panier);
            panier.push(plat[index]);
            console.log("État du panier :", panier);
            afficherPanier();
        }); 
    }); 
    
    
}

init();

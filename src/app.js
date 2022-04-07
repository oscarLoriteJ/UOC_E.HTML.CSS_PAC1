//Importem la llibreria moment
import moment from 'moment';
//Importem l'idioma català
import 'moment/locale/ca';
moment().format('LL');

/** Ús de Moment js - DEPENDÈNCIA EXTERNA */
export function printDatesSteve(){
    //Dates Steve Jobs
    const dnaiSteve = moment('04/04/2021');
    const ddefSteve = moment('04/04/2021');

    //Substituim element amb el DOM
    document.getElementById("dnaixSteve").innerHTML = dnaiSteve;//dnaiSteve.format('LL');
    document.getElementById("ddefSteve").innerHTML = dnaiSteve;
}


export function printDatesMarie(){
    //Dates Marie Curie
    const dnaiMarie = moment('04/04/2021');
    const ddefMarie = moment('04/04/2021');

    //Substituim element amb el DOM
    document.getElementById("dnaixMarie").innerHTML = dnaiMarie;
    document.getElementById("ddefMarie").innerHTML = ddefMarie;
}


/** Gestió de l'acordió per ocultar dades */
export function desplegables(){
    let desplegable = document.getElementsByClassName("desplegable");
    
    for(let i=0; i<desplegable.length;i++){
        desplegable[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var desplegableText = this.nextElementSibling;
            if (desplegableText.style.display === "block") {
                desplegableText.style.display = "none";
            } else {
                desplegableText.style.display = "block";
            }
        });
    }
}






/** Funcionalitat JS, llistem els personatges per categories 
 * a través d'una required i el mostrem editant el DOM de 
 * la pàgina.
 */
/*const personatges = require('./resources/personatges-list.json');
for(let clau in personatges){
    //Personatges científics
    if(clau == 'cientifics'){
        //Recorrem pers. científ.
        personatges[clau].map(x => {
            //Construim element contenidor del personatge
            let newElem = document.createElement("a");
            newElem.setAttribute("class","carrouselItem");
            newElem.setAttribute("href", x.linkPag);
            newElem.setAttribute("title","Fotografia de "+x.nom);

            //Construim element contenidor de la foto
            let newImg = document.createElement("img");
            //newImg.setAttribute("src", new URL(x.linkImg, import.meta.url));
            
            // on x.linkImg = "./resources/img/personatges/einstein.jpg"
            //console.log(new URL("./resources/img/personatges/einstein.jpg", import.meta.url));
            newImg.setAttribute("alt","Imatge de "+x.nom);

            //Construim element contenidor de ltext
            let newSpan = document.createElement("span");
            newSpan.setAttribute("class","itemText");
            newSpan.innerHTML=x.nom+' '+x.cognom;

            //Afegim imatge i foto al contenidor principal
            newElem.appendChild(newImg);
            newElem.appendChild(newSpan);

            //Afegim nou element al contenidor flex 
            document.getElementById("cCientif").appendChild(newElem);

        })
    }
    
        
};*/
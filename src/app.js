console.log("Hello World");

/** Funcionalitat JS, llistem els personatges per categories 
 * a través d'una required i el mostrem editant el DOM de 
 * la pàgina.
 */
const personatges = require('./resources/personatges-list.json');

for(let clau in personatges){
    //Personatges científics
    if(clau == 'cientifics'){
        //Recorrem pers. científ.
        personatges[clau].map(x => {
            //Construim element contenidor del personatge
            let newElem = document.createElement("a");
            newElem.setAttribute("class","carrouselItem");
            newElem.setAttribute("href",x.linkDetall);
            newElem.setAttribute("title","Fotografia de "+x.nom);

            //Construim element contenidor de la foto
            let newImg = document.createElement("img");
            newImg.setAttribute("src",x.linkDetall);
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
    
        
};
console.log(personatges);
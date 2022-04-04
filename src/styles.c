/* Variables globals*/
:root{
    /* Colors */
    --color-black: #000000;

}

/* Estils Genèrics */
@font-face {
    font-family: 'TitleFont';
    src: url('./resources/VT323-Regular.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
}  

body{
    margin: 0;
    font-family: "Helvetica", sans-serif;
    font-size: 2.5rem;
}

/* Estils Encapçalaments */
.subcontainer h1{
    color: #FFFFFF;
    font-family: 'TitleFont';
    font-size: 2.5em;
    line-height: 0.8;
    margin:0;
}

.bgPortada {
    background: linear-gradient(-45deg, #0027ca, #4102ca, #a502ca,#ca028b);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
}
/* Animació de la portada */
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

/* Estils main */
main{
    margin:0px;
    padding:0px;
}

.cMain{
    height: 88vh;
    display: flex;
    justify-content:center;
    align-items: center;
}
.container, .footerContent, .headerContent{
    margin-left:auto;
    margin-right:auto;
}

.container{
    padding-bottom:3em;
}

.subcontainer{
    padding:1em 0em 1em 0em;
    width:90%;
    text-align:center;
    color: white;
}

.logoPPrincipal{
    max-height: 400px;
}

.menuPortada{
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    padding:0px;
    gap: 1.5em;
}
.menuPortada li{
    list-style: none;
}
.menuPortada li a {
    padding: 0.6em 1.1em;
    border:1px solid white;
    border-radius: 4px;
    transition: background-color 0.5s ease-out 100ms;
    transition: color 0.5s ease-out 100ms;
    color:white;
    text-decoration: none;
}

.menuPortada li a:hover{
    background-color:#FFFFFF;
    color:black;
}

/* Footer*/
footer{
    padding:0.8em 0.8em 0.6em 0.8em;
    margin:0;
    background-color: var(--color-black);
    color: white;
    height:4em;
    text-align: center;
}
.mainFooter{
    height:calc(12vh - 0.8em - 0.6em); 
}

.footerContent > p{
    margin-top: 0px;
    margin-bottom: 0px;
}

/** Moble First --> @Media conté la distribució pel Desktop**/
@media(min-width:992px){
    body{
        font-size: 1rem;
    }
    /* Estils Encapçalaments */
    .subcontainer h1{
        font-size: 3.7rem;
    }

    .c80, .footerContent, .headerContent{
        width:80%;
    }

    .subcontainer{
        padding:1em 0em 1em 0em;
        width:50%;
        height: calc(88vh - 2em);
        text-align:center;
        color: white;
    }

    .logoPPrincipal{
    max-height: 200px;
    }

    .menuPortada{
        flex-direction: row;
    }

    .menuPortada{
        gap: 0.8em;
    }
    .menuPortada li{
        list-style: none;
    }
    .menuPortada li a {
        padding: 0.3em 0.7em;
    }
    footer{ 
        width:100%;
        padding-top:0.8em;
        padding-bottom:0.6em;
        text-align: left;
    }


}

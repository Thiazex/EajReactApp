import React from "react";
import reactDom from "react-dom";
import App from "./components/App"

//css
import "../src/index.css";
import Noticias from "./pages/noticias";

const noticia = [
    {
        link: "https://i.pinimg.com/originals/1e/06/e1/1e06e107f0ca520aed316957b685ef5c.jpg",
        titulo: "Muito bom esse Titulo aqui",
        resumo: "Isso é resumindo o titulo ou seja um resumo "
    },
    {
        link: "https://www.educolorir.com/foto-elefante-dm30815.jpg",
        titulo: "Muito bom esse Titulo aqui",
        resumo: "Isso é resumindo o titulo ou seja um resumo "
    }
]

/*function ListaNoticias(){

    const = noticias_modif = noticias.map((noticia) =>{
        return(
            <Noticia 
        tit ={noticia.titulo }
        img ={noticia.link}
        res = {noticia.resumo}
        />
        );
    });

    return(
    <main>
        <Noticia 
        tit ={noticia.titulo }
        img ={noticia.link}
        res = {noticia.resumo}
            />
    </main>
    )
}

function Noticia(props){
    return(
        <>
        <h1>Titulo</h1>
        <img src="https://i.pinimg.com/originals/1e/06/e1/1e06e107f0ca520aed316957b685ef5c.jpg"/>
        <h2>Resumo</h2>
        </>

    );
}
*/


reactDom.render(<App/>, document.getElementById("root"));
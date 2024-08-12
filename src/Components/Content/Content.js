import React from "react";
import Noticias from "../../Data/Noticias";
import './Content.css';

function Content() {
    return (
        /*
        AULA 3 - PARTE 3  ↓
        <main>
            <section>
                <h2>Seção 1</h2>
                <p>Conteúdo da seção 1</p>
            </section>
            <section>
                <h2>Seção 2</h2>
                <p>Conteúdo da seção 2</p>
            </section>
        </main>

        AULA 3 - PARTE 5  ↓   */
        <main>
            <section className="ContentCard">
                <h2>Notícias</h2>
                {
                    Noticias.map(
                        noticia =>
                            <article>
                                <h3>{noticia.titulo}</h3>
                                <p>{noticia.assunto}</p>
                            </article>
                    )
                }
            </section>
            
            <section className="ContentCard">
                <h2>Esportes</h2>
                <article>
                    <h3>Título do artigo esportivo</h3>
                    <p>Descrição do artigo esportivo...</p>
                </article>
            </section>

            <section className="ContentCard">
                <h2>Clima</h2>
                <article>
                    <h3>Previsão do tempo</h3>
                    <p>Temperatura: XX °C</p>
                    <p>Condição: Ensolarado</p>
                </article>
            </section>
        </main>
    );
}

export default Content;
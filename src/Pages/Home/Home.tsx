import { useState } from "react";
import Banner from "../../assets/Banner.png";
import Cachorro from "../../assets/Cachorro.png";
import css from "./Home.module.css";

export function Home() {
    // Lista de imagens (pode adicionar mais no futuro)
    const imagens = [
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGn3H0sriZjpD9_moQA55lcVYGUIleqGpyA&s",
        },
        {
            src: "https://corhexa.com/png/600x300/000000",
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsszA_r3cTfW-OCorNuLqPDdLB3AvV_4H0DlsqlIs9eSD1Dero7MM6oJaMhvO1jNVZa-c&usqp=CAU",
        },
    ];

    // Estado que controla a imagem atual
    const [imagemAtual, setImagemAtual] = useState(0);

    // Usando setter ( () => ) para atualizar os estados
    function voltar() {
        setImagemAtual((anterior) => (anterior - 1 + imagens.length) % imagens.length);
    }

    function avancar() {
        setImagemAtual((sucessor) => (sucessor + 1) % imagens.length);
    }
    
    return (
        <main className={css.fundoPagina}>
            {/* Banner */}
            <section className={css.banner}>
                <img src={Banner} alt="Banner do site." />
            </section>
            {/* Título de produtos para cachorro */}
            <h2 className={css.produtosCachorro}>Produtos para seu cãozinho 🐶</h2>
            {/* Carrossel de produtos de cachorro */}
            <section className={css.carrosselContainer}>
                <div className={css.cachorro}>
                    <img src={Cachorro} alt="Imagem de um cachorro brincando com uma bolinha." />
                </div>
                <button type="button" className={css.voltar} onClick={voltar}>⟨</button>
                <section className={css.carrossel}>
                    {/* Declara apenas a imagem visível para o usuário e atualiza conforme ele clica nas setas */}
                    <img src={imagens[imagemAtual].src} alt="Vermelho" className={css.imagemVisivel} />
                </section>
                <button type="button" className={css.avancar} onClick={avancar}>⟩</button>
                <div className={css.cachorro2}>
                    <img src={Cachorro} alt="Imagem de um cachorro brincando com uma bolinha." />
                </div>
            </section>
        </main>
    );  
}
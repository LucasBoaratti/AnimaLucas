import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/Banner.png";
import Cachorro from "../../assets/Cachorro.png";
import Gato from "../../assets/Gato.png";
import Raposa from "../../assets/Raposa.png";
import Panda from "../../assets/Panda.png";
import GatoPensativo from "../../assets/GatoPensativo.png";
import CachorroPensativo from "../../assets/CachorroPensativo.png";
import css from "./Home.module.css";

export function Home() {
    const navigate = useNavigate();

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
    const [imagemAtual, setImagemAtual] = useState<number>(0);

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
                <div className={css.carrossel}>
                    {/* Declara apenas a imagem visível para o usuário e atualiza conforme ele clica nas setas */}
                    <img src={imagens[imagemAtual].src} alt="Vermelho" className={css.imagemVisivel} />
                </div>
                <button type="button" className={css.avancar} onClick={avancar}>⟩</button>
                <div className={css.cachorro2}>
                    <img src={Cachorro} alt="Imagem de um cachorro brincando com uma bolinha." />
                </div>
            </section>
            {/* Aqui só repete o carrossel anterior */}
            <h2 className={css.produtosGato}>Produtos para seu gatinho 😺</h2>
            <section className={css.carrosselContainer}>
                <div className={css.gato}>
                    <img src={Gato} alt="Imagem de um gato com touca de gato." />
                </div>
                <button type="button" className={css.voltar} onClick={voltar}>⟨</button>
                <div className={css.carrossel}>
                    <img src={imagens[imagemAtual].src} alt="Imagens do carrossel." className={css.imagemVisivel} />
                </div>
                <button type="button" className={css.avancar} onClick={avancar}>⟩</button>
                <div className={css.gato2}>
                    <img src={Gato} alt="Imagem de um gato com touca de gato." />
                </div>
            </section> 
            {/* Parágrafo de curiosidades com animais pensativos */}
            <section className={css.paragrafoCuriosidades}>
                <div>
                    <img src={Raposa} alt="Imagem de uma Raposa pensativa." />
                </div>
                <h2 className={css.curiosidadesAnimais}>Veja as curiosidades sobre os animais 🐕</h2>
                <div>
                    <img src={Panda} alt="Imagem de um panda pensativo." />
                </div>
            </section>
            {/* Cards de curiosidades de animais */}
            <section className={css.curiosidades}>
                {/* Card */}
                <div className={css.curiosidade}>
                    <h3 className={css.tituloVoceSabia}>Você sabia?</h3>
                    <p className={css.paragrafoExplicativo}>Ter um cachorro faz bem a saúde.
                    Sim, é isso mesmo que você leu, os cachorros podem aliviar o estresse, regular nosso peso e pressão arterial, além de melhorar a disposição para as atividades físicas e até ajudar nos relacionamentos amorosos.</p>
                </div>
                <div className={css.curiosidade}>
                    <h3 className={css.tituloVoceSabia}>Você sabia?</h3>
                    <p className={css.paragrafoExplicativo}>Os cachorros também sonham.
                    Você já observou seu cachorro dormindo? Se sim, você deve ter reparado que ele faz um latido muito baixo, e isso é um sinal bom, porque significa que seu cachorro está no estágio mais profundo do sono e, possivelmente, está sonhando. Fofo, né?</p>
                </div>
                <div className={css.curiosidade}>
                    <h3 className={css.tituloVoceSabia}>Você sabia?</h3>
                    <p className={css.paragrafoExplicativo}>Um gato dorme bastante!
                    Um gato pode passar cerca de 1/3 do dia se limpando e em média, passa 2/3 do dia dormindo ou seja, em 9 anos de vida, o gato está acordado em apenas 3 anos. Além de fofos eles costumam ser preguiçosos, né.</p>
                </div>
                <div className={css.curiosidade}>
                    <h3 className={css.tituloVoceSabia}>Você sabia?</h3>
                    <p className={css.paragrafoExplicativo}>Os gatos são velozes!
                    Acredite se quiser, mas os gatos, mesmos não correndo distâncias muito longas, eles são extremamentes rápidos, podendo chegar em até 49 km/h, correndo. Muito veloz, né?</p>
                </div>
                <div className={css.curiosidade}>
                    <h3 className={css.tituloVoceSabia}>Você sabia?</h3>
                    <p className={css.paragrafoExplicativo}>Os Ploceus são capazes de construir ninhos.
                    O Tecelão Baya (Ploceus philippinus) constroem os ninhos mais elaborados do mundo animal. Eles são nativos da ásia e do pacífico e são conhecidos por suas habilidades de construir ninhos extraordinários.</p>
                </div>
                <div className={css.curiosidade}>
                    <h3 className={css.tituloVoceSabia}>Você sabia?</h3>
                    <p className={css.paragrafoExplicativo}>A ave-lira-soberba fazem um ótimo som.
                    Essa ave é capaz de imitar sons de diferentes espécies. Ela é nativa da austrália e podem imitar sons de outras aves, sons de ambientes e até sons de seres humanos, incrível né?</p>
                </div>
            </section>
            {/* Parágrafo de adoção */}
            <section className={css.paragrafoAdocao}>
                <div>
                    <img src={CachorroPensativo} alt="Cachorro pensativo." />
                </div>
                {/* Link adicionado no final com um underline embaixo */}
                <h2 className={css.paragrafoAdocao}>Depois dessas curiosidades, você ficou curioso para adotar um animal? Veja os animais disponíveis para adoção <u onClick={() => navigate("/adotarAnimal")} className={css.link}>aqui</u></h2>
                <div>
                    <img src={GatoPensativo} alt="Gato pensativo." />
                </div>
            </section>
        </main>
    );  
}
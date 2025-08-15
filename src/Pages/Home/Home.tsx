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
    const imagensProdutosCachorros = [
        {
            src: "https://images.tcdn.com.br/img/img_prod/573283/kit_para_banho_caes_filhotes_shampoo_condicionador_e_perfume_baby_cachorro_filhote_sanol_536825_1_8a3adef49c3ea7cc540cb1bcd1ab9e6a.jpg",
        },
        {
            src: "https://dogsday.vtexassets.com/arquivos/ids/173048/79dcd832-4c59-4b35-b687-01c42a655f80.jpg?v=638711848216130000",
        },
        {
            src: "https://cdn.awsli.com.br/2500x2500/1257/1257817/produto/47899637/a676616c31.jpg",
        },
        {
            src: "https://opinioescertificadas.com.br//wp-content/uploads/2020/11/pote-enxoval-para-cachorros.jpg",
        },
        {
            src: "https://cdn.awsli.com.br/600x450/1668/1668783/produto/96623137/d987853914.jpg",
        },
    ];

    // Imagens para o carrossel de produtos para gatos
    const imagensProdutosGatos = [
        {
            src: "https://m.media-amazon.com/images/I/41McsuAg3WL._SR290,290_.jpg",
        },
        {
            src: "https://a-static.mlcdn.com.br/800x560/playground-para-gatos-9-pecas-brinquedo-de-gato-com-arranhador-nicho-ponte-degrau-rede-em-mdf-box-fan/boxfan/ga954/b7b55734fad2b6e0231e800bce137186.jpeg",
        },
        {
            src: "https://mimers.com.br/cdn/shop/files/Grande_7_1000x.png?v=1703249251",
        },
        {
            src: "https://www.distribuidorapetshop.com.br/img/products/graminha-para-gatos-50g_1_1200.jpg",
        },
        {
            src: "https://images.tcdn.com.br/img/img_prod/742943/suplemento_vitaminico_ducats_care_milk_para_gatos_280ml_6903_1_eceaace88602051fd48b2551181adeca.jpg",
        },
    ];

    // Estado que controla a imagem atual
    const [imagemAtual, setImagemAtual] = useState<number>(0);
    const [imagemAtualCarrossel, setImagemAtualCarrossel] = useState<number>(0);

    // Usando setter ( () => ) para atualizar os estados
    function voltar(): void {
        setImagemAtual((anterior) => (anterior - 1 + imagensProdutosCachorros.length) % imagensProdutosCachorros.length);
    }

    function avancar(): void {
        setImagemAtual((sucessor) => (sucessor + 1) % imagensProdutosCachorros.length);
    }

    // Carrossel de produtos para gatos
    function voltar_imagens(): void {
        setImagemAtualCarrossel((anterior) => (anterior - 1 + imagensProdutosGatos.length) % imagensProdutosGatos.length);
    }

    function avancar_imagens(): void {
        setImagemAtualCarrossel((sucessor) => (sucessor + 1) % imagensProdutosGatos.length);
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
                    <img src={imagensProdutosCachorros[imagemAtual].src} alt="Imagens do carrossel." className={css.imagemVisivel} />
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
                <button type="button" className={css.voltar} onClick={voltar_imagens}>⟨</button>
                <div className={css.carrossel}>
                    <img src={imagensProdutosGatos[imagemAtualCarrossel].src} alt="Imagens do carrossel." className={css.imagemVisivel} />
                </div>
                <button type="button" className={css.avancar} onClick={avancar_imagens}>⟩</button>
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
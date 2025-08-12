import Banner from "../../assets/Banner.png";
import Cachorro from "../../assets/Cachorro.png";
import css from "./Home.module.css";

export function Home() {
    return (
        <main className={css.fundoPagina}>
            {/* Banner */}
            <section className={css.banner}>
                <img src={Banner} alt="Banner do site." />
            </section>
            {/* Título de produtos para cachorro */}
            <h2 className={css.produtosCachorro}>Produtos para seu cãozinho 🐶</h2>
            {/* Carrossel de produtos de cachorro */}
            <section>
                <div className={css.cachorro}>
                    <img src={Cachorro} alt="Imagem de um cachorro brincando com uma bolinha." />
                </div>
                <button type="button" className={css.voltar}>⟨</button>
                <section>
                    
                </section>
            </section>
        </main>
    );  
}
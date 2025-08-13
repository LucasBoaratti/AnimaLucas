import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Pata from "../../assets/Pata.png";
import FotoPerfil from "../../assets/FotoPerfil.png";
import css from "./Cabecalho.module.css";

export function Cabecalho() {
    const navigate = useNavigate();

    return (
        // Cabeçalho
        <header className={css.containerCabecalho}>
            <section className={css.cabecalho}>
                {/* Logomarca do site */}
                <img src={Logo} alt="Logomarca do site com um fundo vermelho, letras brancas com o nome AnimaLucas e dois animais, um gato no lado esquerdo e um cachorro no lado direito." />
                {/* Botão home */}
                <section onClick={() => navigate("/")}>
                    <section className={css.home}>
                        <i className="bi bi-house-door-fill"></i>
                        <p className={css.paragrafoHome}>Home</p>
                    </section>
                </section>
                {/* Botão animal */}
                <section>
                    <section className={css.adotarAnimal}>
                        <img src={Pata} alt="Ícone de pata de animal." className={css.patinha} />
                        <p className={css.paragrafoAnimal}>Adote um <br /> animal</p>
                    </section>
                </section>
                {/* Botão login */}
                <section>
                    <section className={css.login}>
                        <i className="bi bi-person-plus-fill"></i>
                        <p className={css.paragrafoLogin}>Login</p>
                    </section>
                </section>
                {/* Botão carrinho */}
                <section>
                    <section className={css.carrinho}>
                        <i className="bi bi-cart-fill"></i>
                        <p className={css.paragrafoCarrinho}>Carrinho de <br /> compras</p>
                    </section>
                </section>
                {/* Componente da foto de perfil */}
                <section className={css.fotoPerfil}>
                    <img src={FotoPerfil} alt="Foto de perfil do usuário." className={css.foto} />
                    <p className={css.paragrafoNome}>Lucas</p>
                    <a href="">
                        <i className="bi bi-pencil-square"></i>
                    </a>
                </section>
            </section>
        </header>
    );
}
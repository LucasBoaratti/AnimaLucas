import Logo from "../../assets/Logo.png";
import Pata from "../../assets/Pata.png";
import FotoPerfil from "../../assets/FotoPerfil.png";
import css from "./Cabecalho.module.css";

export function Cabecalho() {
    return (
        <header className={css.containerCabecalho}>
            <section className={css.cabecalho}>
                <img src={Logo} alt="Logomarca do site com um fundo vermelho, letras brancas com o nome AnimaLucas e dois animais, um gato no lado esquerdo e um cachorro no lado direito." />
                <a href="">
                    <section className={css.home}>
                        <i className="bi bi-house-door-fill"></i>
                        <p className={css.paragrafoHome}>Home</p>
                    </section>
                </a>
                <a href="">
                    <section>
                        <img src={Pata} alt="Ícone de pata de animal." />
                        <p>Adote um animal</p>
                    </section>
                </a>
                <a href="">
                    <section>
                        <i className="bi bi-person-plus"></i>
                        <p>Login/cadastro</p>
                    </section>
                </a>
                <a href="">
                    <section>
                        <i className="bi bi-cart-fill"></i>
                        <p>Carrinho de compras</p>
                    </section>
                </a>
                <section>
                    <img src={FotoPerfil} alt="Foto de perfil do usuário." />
                    <p>Lucas</p>
                    <i className="bi bi-pencil-square"></i>
                </section>
            </section>
        </header>
    );
}
import { useNavigate } from "react-router-dom";
import css from "./LoginModal.module.css";

// Tipando a propriedade de abrir o modal para boolean (ou void)
type propOpenModal = {
    openModal: boolean | void,
}

export function LoginModal({ openModal }: propOpenModal) {
    // Verificação para ver se o modal está fechado (não aberto) para retornar nada
    if(!openModal) {
        return null;
    }

    // Navegação pelo site
    const navigate = useNavigate();

    return (
        // Modal do login
        <section className={css.containerModal}>
            <div className={css.modal}>
                <h1 className={css.tituloBoasVindas}>Login realizado com sucesso! Seja bem-vindo(a) à AnimaLucas!</h1>
                <div className={css.containerBotao}>
                    <button type="button" className={css.botao} onClick={() => navigate("/home")}>Avançar</button>
                </div>
            </div>
        </section>
    );
}
import { useNavigate } from "react-router-dom";
import css from "./CadastroModal.module.css";

// Tipando a propriedade openModal para boolean ou void
type propOpenModal = {
    openModal: boolean | void,
}

export function CadastroModal({ openModal }: propOpenModal) {
    // Verificação para ver se o modal está fechado (não aberto) para retornar nada
    if(!openModal) {
        return null;
    }

    // Navegação pelo site
    const navigate = useNavigate();

    return (
        // Modal do cadastro
        <section className={css.containerModal}>
            <div className={css.modal}>
                <h1 className={css.tituloCadastro}>Cadastro realizado com sucesso! Faça login para acessar seu perfil.</h1>
                <div className={css.containerBotao}>
                    <button type="button" className={css.botao} onClick={() => navigate("/")}>Avançar</button>
                </div>
            </div>
        </section>
    );
}
import css from "./Rodapé.module.css";

export function Rodape() {
    return (
        <footer className={css.rodape}>
            <h1 className={css.direitosAutorais}>©2025, AnimaLucas. Todos os direitos reservados.</h1>
        </footer>
    );
}
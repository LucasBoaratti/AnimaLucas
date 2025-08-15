import Bethany from "../../assets/Bethany.png";
import css from "./Login.module.css";

export function Login() {
    return (
        <main>
            {/* Componente de imagem  login */}
            <section className={css.containerLogin}>
                {/* Imagem chamativa e fofa */}
                <div className={css.bethany}>
                    <img src={Bethany} alt="Bethany" className={css.imagem} />
                </div>
                {/* Seção de login */}
                <section className={css.containerInformacoes}>
                    <section className={css.dadosLogin}>
                        <h1 className={css.titulo}>Seja bem-vindo(a) à AnimaLucas!</h1>
                        {/* Formulário de login */}
                        <form>
                            <label htmlFor="nome" className={css.label}>Nome</label> <br />
                            <input type="text" name="nome" className={css.nome} placeholder="Nome de usuário" minLength={1} maxLength={20} /> <br />

                            <label htmlFor="senha" className={css.label}>Senha</label> <br />
                            <input type="password" name="senha" className={css.senha} placeholder="Senha" minLength={8} maxLength={15} /> <br />

                            <p className={css.paragrafoSenha}><u className={css.esqueciMinhaSenha}>Esqueci minha senha</u></p>

                            <div className={css.containerBotao}>
                                <button type="submit" className={css.botao}>Entrar</button>
                            </div>

                            <p className={css.paragrafoCadastro}>Não possui uma conta? <u className={css.cadastro}>Cadastro</u></p>
                        </form>
                    </section>
                </section>
            </section>
        </main>
    );
}
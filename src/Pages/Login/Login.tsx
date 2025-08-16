import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginModal } from "../../Components/Modais/Login/LoginModal";
import Bethany from "../../assets/Bethany.png";
import css from "./Login.module.css";

// Campos de validação com zod
const validacaoLogin = z.object({
    nome: z.string()
        .min(3, "O campo nome tem que possuir no mínimo 3 caracteres.")
        .max(20, "O campo nome não pode passar de 20 caracteres."),
    senha: z.string()
        .min(8, "O campo senha tem que possuir no mínimo 8 caracteres.")
        .max(15, "O campo senha não pode ultrapassar 15 caracteres,"),
});

export function Login() {
    // Estados que controlam os campos do formulário e o modal
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [modalLogin, setModalLogin] = useState<boolean>(false);

    // Validações do formulário
    const {
        register,
        handleSubmit, 
        formState: { errors }
    } = useForm({
        resolver: zodResolver(validacaoLogin),
    });

    // Função do login
    function login(): void {
        try {
            setModalLogin(true);
        }
        catch(error) {
            setNome("");
            setSenha("");

            alert("Usuário, não cadastrado, ou senha incorretos.");
        }
    }
    return (
        <main>
            {/* Componente de imagem login */}
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
                        <form onSubmit={handleSubmit(login)}>
                            <label htmlFor="nome" className={css.label}>Nome</label> <br />
                            <input type="text" id="nome" className={css.nome} placeholder="Nome de usuário" minLength={3} maxLength={20} {...register("nome")} value={nome} onChange={(e) => {setNome(e.target.value)}} /> <br />
                            {nome && (errors.nome && <p>{errors.nome.message}</p>)}

                            <label htmlFor="senha" className={css.label}>Senha</label> <br />
                            <input type="password" id="senha" className={css.senha} placeholder="Senha" minLength={8} maxLength={15} {...register("senha")} value={senha} onChange={(e) => {setSenha(e.target.value)}} /> <br />
                            {senha && (errors.senha && <p>{errors.senha.message}</p>)}

                            <p className={css.paragrafoSenha}><u className={css.esqueciMinhaSenha}>Esqueci minha senha</u></p>

                            <div className={css.containerBotao}>
                                <button type="submit" className={css.botao}>Entrar</button>
                            </div>

                            <p className={css.paragrafoCadastro}>Não possui uma conta? <u className={css.cadastro}>Cadastro</u></p>

                            {/* Abrindo o modal após o preenchimento do formulário */}
                            {modalLogin && (<LoginModal openModal={modalLogin}/>)}
                        </form>
                    </section>
                </section>
            </section>
        </main>
    );
}
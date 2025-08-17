import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CadastroModal } from "../../Components/Modais/Cadastro/CadastroModal";
import Khalisse from "../../assets/Khalisse.png";
import css from "./Cadastro.module.css";

// Validações para os campos do formulário de cadastro
const validacaoCadastro = z.object({
    nome: z.string()
        .min(3, "O campo nome deve possuir pelo menos 3 caracteres.")
        .max(20, "O campo nome não pode passar de 20 caracteres."),
    email: z.string()
        .min(6, "O campo email deve possuir no mínimo 6 caracteres.")
        .max(254, "O campo email não pode ultrapassar 254 caracteres.")
        .email("Digite um email válido, com @ e ."),
    senha: z.string()
        .min(8, "O campo senha deve possuir pelo menos 8 caracteres.")
        .max(64, "O campo senha não pode passar de 64 caracteres."),
    confirmarSenha: z.string()
        .min(8, "O campo senha deve possuir pelo menos 8 caracteres.")
        .max(64, "O campo senha não pode passar de 64 caracteres."),
}).refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem.",
    path: ["confirmarSenha"],
});

export function Cadastro() {
    // Estados que controlam os campos do formulário
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [foto, setFoto] = useState("");
    const [modalCadastro, setModalCadastro] = useState<boolean>(false);
    // Navegação pelo site
    const navigate = useNavigate();

    // Validações no formulário
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(validacaoCadastro),
    });

    // Função de cadastro
    function cadastro(): void {
        try {
            setModalCadastro(true);
        }
        catch(error) {
            setNome("");
            setEmail("");
            setSenha("");
            setConfirmarSenha("");

            alert("Cadastro não realizado. Verifique seus dados.");
        }
    }

    return (
        <main>
            {/* Página de cadastro */}
            <section className={css.containerCadastro}>
                {/* Imagem */}
                <div className={css.khalisse}>
                    <img src={Khalisse} alt="Foto da Khalisse." className={css.imagem} />
                </div>
                {/* Container do cadastro */}
                <section className={css.containerDadosCadastro}>
                    {/* Formulário de cadastro */}
                    <section className={css.formularioCadastro}>
                        <h1 className={css.titulo}>Cadastre-se na AnimaLucas!</h1>
                        <form onSubmit={handleSubmit(cadastro)}>
                            <label htmlFor="nome" className={css.label}>Nome</label> <br />
                            <input type="text" className={css.input} id="nome" placeholder="Nome de usuário" minLength={3} maxLength={20} {...register("nome")} value={nome} onChange={(e) => setNome(e.target.value)} /> <br />
                            {errors.nome && <p>{errors.nome.message}</p>}

                            <label htmlFor="email" className={css.label}>Email</label> <br />
                            <input type="email" className={css.input} id="email" placeholder="Email" minLength={6} maxLength={254} {...register("email")} value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                            {errors.email && <p>{errors.email.message}</p>}

                            <label htmlFor="senha" className={css.label}>Senha</label> <br />
                            <input type="password" className={css.input} id="senha" placeholder="Senha" minLength={8} maxLength={64} {...register("senha")} value={senha} onChange={(e) => setSenha(e.target.value)} /> <br />
                            {errors.senha && <p>{errors.senha.message}</p>}

                            <label htmlFor="confirmarSenha" className={css.label}>Confirmar senha</label> <br />
                            <input type="password" className={css.input} id="confirmarSenha" placeholder="Confirme sua senha" minLength={8} maxLength={64} {...register("confirmarSenha")} value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} /> <br />
                            {errors.confirmarSenha && <p>{errors.confirmarSenha.message}</p>}

                            <label htmlFor="foto" className={css.label}>Foto de perfil</label> <br />
                            {/* Verificação de nome do arquivo */}
                            <div className={css.fotoPerfil}>
                                <input type="file" className={css.inputFoto} id="foto" onChange={(e) => {
                                    const arquivo = e.target.files?.[0];
                                    if (arquivo) {
                                        setFoto(arquivo.name);
                                    }
                                }} /> <br />
                                <p className={css.nomeArquivo}>{foto || "Nenhum arquivo selecionado"}</p>
                            </div>

                            <div className={css.containerBotao}>
                                <button type="submit" className={css.botao}>Cadastrar</button> 
                            </div>

                            <p className={css.paragrafoLogin}>Já possui uma conta? <u className={css.login} onClick={() => navigate("/")}>Login</u></p>

                            {/* O modal será aberto após o usuário clicar no botão cadastrar */}
                            {modalCadastro && (<CadastroModal openModal={modalCadastro}/>)} 
                        </form>
                    </section>
                </section>
            </section>
        </main>
    );
}
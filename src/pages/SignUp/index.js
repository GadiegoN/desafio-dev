import React, { useState } from 'react';
import { InputComponet } from '../../components/Input';
import { ButtonComponet } from '../../components/Button';

import { Container, Content, Label, LabelError, LabelSignUp, Strong } from './style';

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'

export function SignUp() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [emailConf, setEmailconf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [phone, setPhone] = useState();
    const [cpf, setCpf] = useState();
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [cep, setCep] = useState();

    const navigate = useNavigate();
    const { signUp } = useAuth();

    const handleSignUp = () => {
        if(!email | !emailConf | !senha) {
            setError("Preencha todos os campos")
            return;
        } else if(email !== emailConf) {
            setError("Os e-mails não são iguais")
            return;
        }

        const res = signUp(nome, email, senha, phone, cpf, city, uf, cep);

        if(res) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso!")
        navigate("/")
    }

    return(
        <Container>
            <Label>Faça seu cadastro</Label>
            <Content>
                <InputComponet
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => [setNome(e.target.value), setError("")]}
                    requerid
                />
                <InputComponet
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <InputComponet
                    type="email"
                    placeholder="Confirme seu e-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailconf(e.target.value), setError("")]}
                />
                <InputComponet 
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <InputComponet 
                    type="number"
                    placeholder="Digite seu CPF"
                    value={cpf}
                    onChange={(e) => [setCpf(e.target.value), setError("")]}
                    mask="123.456.789-00"
                />
                <InputComponet 
                    type="number"
                    placeholder="Digite seu telefone"
                    value={phone}
                    onChange={(e) => [setPhone(e.target.value), setError("")]}
                />
                <InputComponet 
                    type="number"
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={(e) => [setCep(e.target.value), setError("")]}
                />
                <InputComponet
                    type="text"
                    placeholder="Nome da cidade"
                    value={city}
                    onChange={(e) => [setCity(e.target.value), setError("")]}
                    requerid
                />
                <InputComponet
                    type="text"
                    placeholder="Nome do estado"
                    value={uf}
                    onChange={(e) => [setUf(e.target.value), setError("")]}
                    requerid
                />
                <LabelError>{error}</LabelError>
                <ButtonComponet
                    Text="Inscreva-se"
                    onClick={handleSignUp}
                />
                <LabelSignUp>
                    Já tem uma conta?
                    <Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </Strong>
                </LabelSignUp>
            </Content>
        </Container>
    )
} 
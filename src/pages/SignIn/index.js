import React, { useState } from 'react';
import { InputComponet } from '../../components/Input';
import { ButtonComponet } from '../../components/Button';

import { Container, Content, Label, LabelError, LabelSignUp, Strong } from './style';

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'

export function SignIn() {
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signIn(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home")
    }

    return(
        <Container>
           <Label>Login</Label>
           <Content>
            <InputComponet 
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <InputComponet 
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <LabelError>{error}</LabelError>
            <ButtonComponet
                Text="Entrar"
                onClick={handleLogin}
            />
            <LabelSignUp>
                Não tem uma conta?
                <Strong>
                    <Link to="/signup">&nbsp;Registre-se</Link>
                </Strong>
            </LabelSignUp>
           </Content>
        </Container>
    )
}
import React from 'react';
import { Container, Strong, Table, Title } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ButtonComponet } from '../../components/Button';
import { AuthContext } from '../../context/auth';
import { Pencil, Trash } from 'phosphor-react';

export function Home() {
    const { signOut, removeUser } = useAuth(AuthContext);
    const navigate = useNavigate();
    const usersStorage = JSON.parse(localStorage.getItem("user_db"));

    return(
        <Container>
            <Title>Home</Title>
            <Table>
                <thead>
                    <tr>
                        <th>email</th>
                        <th>nome</th>
                        <th>telefone</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>                      
                    {usersStorage?.map((user) => {
                        return(
                            <tr key={user.email}>
                                <td>{user.email}</td>
                                <td>{user.nome}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Pencil size={32} color="green" />
                                </td>
                                <td>
                                    <Trash size={32} color="red" onClick={() => { removeUser() }} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <ButtonComponet Text="Sair" onClick={() => [signOut(), navigate("/")]}>Sair</ButtonComponet>
            <Strong>
                <Link to="/signup">Novo Usuario</Link>
            </Strong>
        </Container>
    )
} 
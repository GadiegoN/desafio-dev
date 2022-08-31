import React from 'react';
import { Container, Table, Title } from './style';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ButtonComponet } from '../../components/Button';
import { AuthContext } from '../../context/auth';
import { Pencil, Trash } from 'phosphor-react';

export function Home() {
    const { signOut } = useAuth(AuthContext);
    const navigate = useNavigate();
    const usersStorage = JSON.parse(localStorage.getItem("user_db"));

    const removeItem = () => {
        console.log("Removendo este usuario...")
        removeItem();
    }

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
                                    <span onClick={removeItem}><Pencil size={32} /></span>
                                </td>
                                <td>
                                    <span><Trash size={32} /></span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <ButtonComponet Text="Sair" onClick={() => [signOut(), navigate("/")]}>Sair</ButtonComponet>

        </Container>
    )
} 
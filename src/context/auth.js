import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {

        let admUser = [{ 
            nome: "teste user",
            email: "teste@teste.com",
            password: "123456",
            phone: "123456789",
            cpf: "12345678900",
            city: "cidade teste",
            uf: "testada",
            cep: "00111999"
        }];
        localStorage.setItem("user_db", JSON.stringify(admUser));

        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("user_db");

        if(userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if(hasUser) setUser(hasUser[0]);
        }
    }, [])

    const signIn = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("user_db"));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if(hasUser?.length) {
            if(hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }))
                setUser({ email, password })
                return
            } else {
                return "Email ou senha incorretos"
            }
        } else {
            return "Usuário não cadastrado."
        }
    }

    const signUp = (nome, email, password, phone, cpf, city, uf, cep) => {
        const usersStorage = JSON.parse(localStorage.getItem("user_db"));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if(hasUser?.length) {
            return "Email já cadastrado"
        }

        let newUser;

        if(usersStorage) {
            newUser = [...usersStorage, { nome, email, password, phone, cpf, city, uf, cep }];
        } else {
            newUser = [{ nome, email, password, phone, cpf, city, uf, cep }]
        }

        localStorage.setItem("user_db", JSON.stringify(newUser));

        return;
    }

    const editUser = () => {
        /* Não consegui concluir */ 
    }

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    }

    const removeUser = (email) => {
        const usersStorage = JSON.parse(localStorage.getItem("user_db"));

        const newRemoveUser = usersStorage?.filter((user) => user.email === email);

        setUser(newRemoveUser);
        document.location.reload(true);
        return;
    }



    return (
        <AuthContext.Provider value={{ user, signed: !!user, signIn, signUp, signOut, removeUser, editUser }}>
            {children}
        </AuthContext.Provider> 
    )
}
import React, { useState } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import { Button, CardList, CardsSection, Form, SectionTitle } from './styles';
import GlobalStyle from './styles/global';

interface User {
    name: string;
    age: number;
    hobby: string;
}

function App() {
    const [users, setUsers] = useState<User[]>([] as User[]);
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [hobby, setHobby] = useState<string>('');

    const toSubmit = (name: string, age: number, hobby: string) => {
        const newUser = { name, age, hobby };
        setName('');
        setAge(0);
        setHobby('');
        setUsers([...users, newUser]);
    };

    return (
        <div className="react-atividade-s5-primeiro-contato-com-typescript">
            <GlobalStyle />
            <Form>
                <Input
                    type="text"
                    maxLength={15}
                    placeholder="Name"
                    label="Nome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <Input
                    type="number"
                    maxLength={15}
                    placeholder="Age"
                    label="Idade"
                    value={age}
                    onChange={(event) => setAge(parseInt(event.target.value))}
                />
                <Input
                    type="text"
                    maxLength={15}
                    placeholder="Hobby"
                    label="Hobby"
                    value={hobby}
                    onChange={(event) => setHobby(event.target.value)}
                />
                <Button
                    onClick={(event) => {
                        event.preventDefault();
                        toSubmit(name, age, hobby);
                    }}
                >
                    Enviar
                </Button>
            </Form>
            <hr />
            <CardsSection>
                <SectionTitle>Usuários:</SectionTitle>
                <CardList>
                    {users.map((user, index) => (
                        <Card
                            key={index}
                            name={user.name}
                            age={user.age}
                            hobby={user.hobby}
                        />
                    ))}
                </CardList>
            </CardsSection>
        </div>
    );
}

export default App;

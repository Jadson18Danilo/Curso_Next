import axios from "axios";

export default async function ExemploPage(params) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = res.data;

    return(
        <main>
            <h1>
                Listas de Usuários
            </h1>
            <ul>
                {users.map((user) => 
                (<li key={user.id}>
                    {user.name} {user.email}
                </li>
                ))}
            </ul>
        </main>
    )   
}
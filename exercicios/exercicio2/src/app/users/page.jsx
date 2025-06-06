'use client'

import { useEffec, useState } from "react"

export default function UsersClientPage(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then(setUsers)
    }, []) 

    return(
        <div>
            <h1>
                Usuários (Client side)
            </h1>

            <ul>
                {users.map((user)=> (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email} - {user.address}
                    </li>
                ))}
            </ul>
        </div>
    )
}
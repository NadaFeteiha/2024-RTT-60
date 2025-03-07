import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Main() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await res.json();
                console.log(data);
                setUsers(data);
            } catch (e) {
                console.error(e)
            }
        }
        fetchData();
    }, [])

    return (
        <main>
            <h1>Main Page</h1>

            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <Link to={`/profile/${user.id}`}>
                                <p> {user.name}</p >
                            </Link>
                        </div >)
                })
            }
        </main>
    );
}

export default Main;
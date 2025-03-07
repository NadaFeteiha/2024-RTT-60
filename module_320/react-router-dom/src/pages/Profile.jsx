import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



function Profile() {
    const [user, setUser] = useState(null);
    const parms = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${parms.id}`)
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser();
    }, [parms.id]);

    return (
        <main>
            <h1>Profile</h1>
            <p>Id: {user?.id}</p>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Phone: {user?.phone}</p>
            <p>Website: {user?.website}</p>
        </main>
    );
}

export default Profile;
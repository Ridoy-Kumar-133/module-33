import React from 'react';

const UsersPage = async () => {
     
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return (
        <div>
            <h2>Users page : {users.length} </h2>
        </div>
    );
};

export default UsersPage;
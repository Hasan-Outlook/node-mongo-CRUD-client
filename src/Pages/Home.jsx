import React from 'react';

const Home = () => {
    const handleSubmitUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const user = { name, email }
        // console.log(user);

        fetch('http://localhost:5000/users', {
            method: "POST", // or 'PUT'
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h1>Node Mongo CRUD</h1>
            <form onSubmit={handleSubmitUser}>
                <input type='text' name='name' placeholder='Name' />
                <br />
                <input type='text' name='email' placeholder='Email' />
                <br />
                <input type='submit' value='Add User' />
            </form>
        </div>
    );
};

export default Home;
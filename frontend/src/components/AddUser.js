// AddUser.js
import React, { useState } from 'react';
import axios from 'axios';
import './AddUser.css'; // Importer le fichier de styles CSS

const AddUser = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (firstname.trim() === '' || lastname.trim() === '' || address.trim() === '') {
            alert('Veuillez remplir tous les champs du formulaire.');
            return;
        }
        console.log({ firstname, lastname, address });
        try {
            await axios.post('http://localhost:3000/user', { firstname, lastname, address });
            setFirstname('');
            setLastname('');
            setAddress('');
        } catch (error) {
            console.error('Error adding user: ', error);
        }
    };

    return (
        <>
        <div className="centered-form">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                <input type="text" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                <button type="submit">Add User</button>
            </form>
        </div>
        </>
    );
};

export default AddUser;

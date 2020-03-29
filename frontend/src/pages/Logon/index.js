import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';
import heroesImg from '../../assets/heroes.png';
import LogImg from '../../assets/logo.svg';

export default function Logon() {
    const history = useHistory();
    const [id, setId] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (ex) {
            alert('Falha no Login, tente novamente');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogImg} alt="Be Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#e02016" /> Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}
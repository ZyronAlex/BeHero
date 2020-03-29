import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';
import LogImg from '../../assets/logo.svg';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incident', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile');
        } catch (ex) {
            alert('Erro no cadastrar caso, tente novamente');
        }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={LogImg} alt="Be Hero" />
                    <h1>Cadastar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso" type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)} />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)} />
                    <button className="button" type="submit">Cadastar</button>
                </form>
            </div>
        </div>
    );
}
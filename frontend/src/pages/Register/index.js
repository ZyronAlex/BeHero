import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api'
import LogImg from '../../assets/logo.svg';

export default function Register(){
    const history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');
    
    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try{            
            const response = await api.post('ong',data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        }catch(ex){
            alert('Erro no cadastro, tente novamente');
        }
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogImg} alt="Be Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encrotrarem os casos da sua OMG.</p>
                    <Link className="back-link" to="/"><FiArrowLeft size={16} color="#e02016"/> Voltar para Home</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da OMG" 
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                    <input 
                        placeholder="E-mail" 
                        type="email"                        
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    <input 
                        placeholder="WhatsApp" 
                        type="tel"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}/>
                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            type="text"
                            value={city}
                            onChange={e => setCity(e.target.value)}/>
                        <input 
                            placeholder="UF" 
                            style={{width:80}} 
                            type="text"
                            value={uf}
                            onChange={e => setUf(e.target.value)}/>
                    </div>
                    <button className="button" type="submit">Cadastar</button>
                </form>
            </div>
        </div>
    );
}
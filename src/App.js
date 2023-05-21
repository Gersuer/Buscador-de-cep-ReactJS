import { useState } from 'react';
import './App.css';
import api from './service/api';
import Result from './components/Result';
import './components/Result.css'

function App() {

  const [cep, setCep] = useState('');
  const [dados, setDados] = useState({});

  async function handleSearch() {
    if (cep === '') {
      alert('preencha os campos')
      return
    }
    try {
      console.log(`O cel digitado foi: ${cep}`)
      const response = await api.get(`${cep}/json`);
      console.log(response);
      setDados(response.data);
    }
    catch {
      console.log('Algo deu errado.')
    }
  }
  return (
    <div className="App">

      <div className='searchEngine'>
        <h1>Buscador de Endereços</h1>
        <form>
          <input type="text" maxLength='8' placeholder='Digite o CEP' onChange={(e) => { setCep(e.target.value) }} />
        </form>
        <button className='searchBtn' onClick={handleSearch}>Buscar</button>
      </div>
      {dados.cep && <Result
        cep={dados.cep}
        bairro={dados.bairro}
        localidade={dados.localidade}
        logradouro={dados.logradouro}
      />}
    </div>
  );
}
export default App;

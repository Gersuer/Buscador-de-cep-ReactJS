import React from 'react'

const Result = ({ cep, bairro, localidade, logradouro }) => {
  return (
    <div className='results'>
      <h2>CEP: {cep}</h2>
      <p>Bairro: {bairro}</p>
      <p>Cidade: {localidade}</p>
      <p>Rua: {logradouro} </p>
    </div>
  )
}

export default Result
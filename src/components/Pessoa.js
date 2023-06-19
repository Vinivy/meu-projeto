function Pessoa({ nome, idade, profissao, foto }) {
  //para a desnecessidade de tantos props, eu posso fazer com que as palavros 'pós-props' virem valores, ou variavéis
  return (
    <section>
      <img src={foto} alt={nome} />
      <h4>Nome : {nome}</h4>
      <p>idade : {idade}</p>
      <p>Profissão : {profissao}</p>
    </section>
  )
}

export default Pessoa

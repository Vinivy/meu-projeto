import Frase from './Frase'

//vamos criar importações pra exportação no main
function HelloWord() {
  return (
    <section>
      <h1>Ola é o HelloWord</h1>
      <h2>Reutilizavél 1</h2>
      <Frase />
    </section>
  )
}

export default HelloWord
//ele ira aparecer ao colocar o import desse arquivo la no app.js

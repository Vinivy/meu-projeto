import styles from './Evento.module.css'

import Form from './EventoForm'

function Evento({ numero }) {
  function MeuButton() {
    alert(`OPA, FUI ACIONADO! ${numero}`)
  }
  return (
    <>
      <p>Click para disparar um Evento:</p>
      {/*Veja que n colocamos o () no onClick, o seu parametr vai direto para a Function. 'AMEIIIII"*/}
      <button onClick={MeuButton}>Evento</button>
      <Form />
    </>
  )
}

export default Evento

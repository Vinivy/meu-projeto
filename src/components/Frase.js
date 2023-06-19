//para por style é só eu importar com a nomecltura 'style' e  o from deonde é
import styles from './Frase.module.css'
function Frase() {
  return (
    <section className={styles.Container}>
      <h1 className={styles.FraseH1}>Reutilizável 2</h1>
    </section>
  )
}

export default Frase

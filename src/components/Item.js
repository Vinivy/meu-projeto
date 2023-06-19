//temos uque por o PropTypes que nada mais é que uma propriedade que é aqui a sua ativassão:
import PropTypes from 'prop-types'
function Item({ marca, Lancamento }) {
  return (
    <>
      <li>
        {marca} - {Lancamento}
      </li>
    </>
  )
}

Item.propTypes = {
  //aqui ira demarcar quais os valores são 'marca' e 'Lacamento'
  marca: PropTypes.string.isRequired, //isRequired se diz que é necessario um valor
  Lancamento: PropTypes.number
}
//tambem posso botar a propriedade default para quando os requerimentos n estiverem ele avise
Item.defaultProps = {
  marca: 'Faltou a Marca', //Quando n tiver a String apropriada ira aparecer isso
  Lancamento: 0
}

export default Item

import Item from './Item'

function List() {
  //Isso é chamado defragment, pois necessaria mente vc precisa ou n de uma div, se precisar vc colocar. mas se nn, vcsó deixa o fragmento das tegs
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" Lancamento={1985} />
        <Item marca="Fiat" Lancamento={1964} />
        <Item marca="Renault" Lancamento={1945} />
        {/*Aqui esta um item default.*/}
        <Item />
      </ul>
    </>
  )
}

export default List

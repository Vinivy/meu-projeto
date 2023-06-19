function Form() {
  function cadastrarUsuario(e) {
    //crio o parametro e para eventualmente o valor insirido no inpu n se perca, co usso vou fazer co que o valor fique usando o default
    e.preventDefault()
    alert(`Cadastrou o Usuario!`)
  }
  return (
    <>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" placeholder="Digite seu Nome" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  )
}

export default Form

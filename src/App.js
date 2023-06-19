//uaremos essa parte de fora acima para importar coisas
// e para importar nossos arquivos, primeiro colocamos o nome e dps o from
import HelloWord from './components/HelloWord'
//o Frase esta importado dentro do helloWord
import SayMyName from './components/SayMyName'
//
import Pessoa from './components/Pessoa'
//
import List from './components/List'
//
//aqui é da aula 9 em diante
import Evento from './components/Evento'

import './App.css'
//
//
//
function App() {
  //aqui seria o javascript
  const name = 'Menezes'

  function soma(a, b) {
    return a + b
  }
  // alteração de atributos
  const url = 'https://mega.ibxk.com.br/2016/06/20/20192219072489.jpg?ims=610x'
  //tudo oq esta aqui reflete no nosso sait, é como fosse o nosso Html
  return (
    // para adicioarmos uma class emm um elemento, nos usamos 'className'
    <div className="App">
      {/*! aula ate a 8*/}
      <>
        <h1>React JSX</h1>
        <p>
          <strong>
            Aqui sera a primeira parte do que eu aprendi da aula 1 ate a 8
          </strong>
        </p>
        {/*podemos interpolar com o sinal '{}'*/}
        <p>Olá {name}</p>
        <p>soma: {soma(5, 5)}</p>
        {/* alteraçãi de atributos*/}
        <img src={url} alt="pilares da cirção"></img>
        {/*para aparecer o arquivo que importei, tem que colocar a teg que o nomeei*/}
        <HelloWord />
        {/*O valor nome do props esta aqui no teg*/}
        <SayMyName nome="Vinivy" />
        <SayMyName nome={name} />
        <Pessoa nome="Gabriel" idade="18" profissao="Programador" foto={url} />
        {/*Sobre o fragments*/}
        <List />
      </>
      {/*Aula 9 em diante*/}
      <>
        {/*Eventos*/}
        <h1>Eventos JSX</h1>
        <p>
          <strong>Aqui sera o que aprendi da aula 9 ate ...</strong>
        </p>
        <Evento numero={1} />
      </>
    </div>
  )
}

//aqui é para exportamos
export default App

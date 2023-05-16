import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    alert(`Usuário ${name} cadastrado com sucesso! Senha ${password}`);
  }
  
  //useState é criado com duas const
  //primeiro o atributo que vai ler, 
  //depois o valor que vamos setar pra poder mudar
  //dentro do useState() é possível setar o valor que queremos pra name.
  //é bom pra usar, por exemplo, em paginas de edição onde o name já viria setado no input
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return(
    <div>
      <h1>Meu formulário:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            id="name"
            name="name"
            placeholder="Digite seu nome:" 
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Senha</label>
          <input 
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha:" 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form;
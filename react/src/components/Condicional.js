import { useState } from "react";

function Condicional() {

  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail('');
  }

  return (
    <div>
      <h2>Testando e-mail</h2>
      <form>
        <input 
          type="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          />
        <button onClick={enviarEmail} type="submit">
          Enviar e-mail
        </button>
        {userEmail && (
          <div>
            <p>O e-mail do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </div>
  );
}

//linha 25: if no React
// o && não é um AND condicional, mas sim uma concatenação
//ou seja, se a condição for TRUE, ele vai concatenar a <div>

export default Condicional;
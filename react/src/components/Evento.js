import Button from "./evento/Button";

function Evento() {
  
  function meuEvento() {
    alert("Ativando primeiro evento!");
  }

  function segundoEvento() {
    alert("Ativando o segundo evento!");
  }

  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <Button event={meuEvento} text="Primeiro evento" />
      <Button event={segundoEvento} text="Segundo evento" />
    </div>
  )
}

// linha 12: o event é passado sem parentesis,
// pois é como o componente vai entender que é um metodo para ser chamado depois
// e não assim que renderizado
// linha 17: exemplo de reaproveitamento de componente do react
export default Evento;
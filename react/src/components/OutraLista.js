function OutraLista({ itens }) {
  return (
    <>
      <h3>Linguagens javascript:</h3>
      { itens.length > 0 ? (
          itens.map((item, index) => (
          <p key={index}>{item}</p>
          ))) : (
            <p>Não há itens na lista!</p>
          )}
    </>
  )
}

// linha 6: Utilizamos o Index para que não aconteça o erro do React onde cada item precisa de uma key
// em um projeto real, essa key seria o id do nosso objeto e não o index do map()

export default OutraLista;
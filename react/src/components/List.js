import Item from './Item';

function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1990}/>
        <Item marca="Porsche" ano_lancamento={1991}/>
        <Item />
      </ul>
    </>
  );
}

export default List;
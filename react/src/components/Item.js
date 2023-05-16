import PropTypes from 'prop-types';

function Item({ marca, ano_lancamento }) {
  return (
    <>
      <li>{marca} - {ano_lancamento}</li>    
    </>
  );
};

// A propiedade é acessada com 'p' minúsculo
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,
}

// Caso as props não tenham valor, esses serão atribuidos
Item.defaultProps = {
  marca : 'Não há registro',
  ano_lancamento: 0,
}
export default Item;
function Button(props) {
// quando vamos retornar apenas uma linha, não é necessário parentesis
  return <button onClick={props.event}>{props.text}</button>
}

export default Button;
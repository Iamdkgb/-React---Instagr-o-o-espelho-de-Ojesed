export default function TextMenu(props) {
  return (
    <li className={props.classe}>
        {props.icone}
       <p> {props.nome}</p>
    </li>
  );
}


import './SugestoesPessoas.css'
function SugestoesPessoas(props) {
  return (
    <div className='SugestoesPessoas'>

          <div className='SeuPerfil'>
              <div className='containerImg'>
                  <img src={props.imgPerfil}/>
              </div>
              <div className='containerNome'>
                <h3>{props.nome}</h3>   
                <h4>{props.acao}</h4>
              </div>
              <div className='containerButton'>
                <button>{props.seguir}</button>
              </div>
          </div>
        </div>
  )
}

export default SugestoesPessoas
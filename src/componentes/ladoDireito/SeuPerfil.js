
import FotoPerfil from '../../imagens/perfil.jpg'
import './SeuPerfil.css'
function SeuPerfil() {
  return (
    <div className='SeuPerfil'>
        <div className='containerImg'>
            <img src={FotoPerfil}/>
        </div>
        <div className='containerNome'>
          <h3>iamdkgb</h3>
          <h4>borges</h4>
        </div>
        <div className='containerButton'>
          <button>Mudar</button>
        </div>
    </div>
  )
}

export default SeuPerfil
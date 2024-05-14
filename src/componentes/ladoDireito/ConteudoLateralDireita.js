

import './ConteudoLateralDireita.css'
import '../../componentes/ladoDireito/SugestoesPessoas.css'
import SeuPerfil from './SeuPerfil'
import SugestoesPessoas from './SugestoesPessoas'
import InfoMeta from './InfosMeta'
import Perfil1 from '../../imagens/anitta.png'
import Perfil2 from '../../imagens/diplo.png'
import Perfil3 from '../../imagens/margot.png'
import Perfil4 from '../../imagens/vogue.png'
import Perfil5 from '../../imagens/perfilkylie.png'

function ConteudoLateralDireita() {
  return (
    <div className='ConteudoLateralDireita'>
        <div className='containerContentDireita'>
            <SeuPerfil/>
        <div className='SugestoesPessoas'>
            <div className='topSide'>
                <p>Sugestões para você</p>
                <button>Ver tudo</button>
            </div>
            <div className='bottomSide'>
                <SugestoesPessoas imgPerfil={Perfil1} nome ='anitta' acao='Sugestões para você' seguir='Seguir' />
                <SugestoesPessoas imgPerfil={Perfil2}  nome ='diplo' acao='Sugestões para você' seguir='Seguir' />
                <SugestoesPessoas imgPerfil={Perfil3}  nome ='margotrobbie' acao='Sugestões para você' seguir='Seguir' />
                <SugestoesPessoas imgPerfil={Perfil4} nome ='vogue' acao='Seguido(a) por kyliejenner' seguir='Seguindo' />
                <SugestoesPessoas imgPerfil={Perfil5}  nome ='kyliejenner' acao='Seguido(a) Por gigihadid' seguir='Seguindo'/>
            </div>   
        </div>
        <InfoMeta/>
    </div>
  
    </div>
  )
}

export default ConteudoLateralDireita
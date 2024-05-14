import Stories from "./Stories"
import Post from "./Post"
import './ConteudoCentral.css'
import Storie1 from '../../imagens/perfilhr.png'
import Storie2 from '../../imagens/perfiltyla.png'
import Storie3 from '../../imagens/gigi.png'
import Storie4 from "../../imagens/perfilkylie.png"
import Storie5 from '../../imagens/winnie.png'
import Storie6 from '../../imagens/vogue.png'
import Storie7 from '../../imagens/travis.png'
import PostFoto from '../../imagens/gravida.png'
import PostFoto2 from '../../imagens/feedtyla.png'
import PostFoto3 from '../../imagens/feedgigi.png'
import PostFoto4 from '../../imagens/feedkylie.png'
import TopMobile from "./TopMobile"
function ConteudoCentral () {
  return (
    <div className="conteudoCentral">
        <TopMobile/>
        <div className="containerStories">
            <Stories fotoStorie = {Storie1}
            nomeStorie = 'haileybieber'
            />
            <Stories fotoStorie = {Storie2}
            nomeStorie = 'tyla'/>
            <Stories fotoStorie = {Storie3}
            nomeStorie = 'gigihadid'/>
            <Stories fotoStorie = {Storie4}
            nomeStorie = 'kyliejenner'/>
             <Stories fotoStorie = {Storie5}
            nomeStorie = 'winnieharlow'/>
            <Stories fotoStorie = {Storie6}
            nomeStorie = 'vogue'/>    
            <Stories fotoStorie = {Storie7}
            nomeStorie = 'travisscott'/>    
        </div>
        <div className="containerPost">   
            <Post fotoUser={Storie1} title='haileybieber •' imgPostagem={PostFoto} titledown='haileybieber' titlepostagem='@justinbieber' />
            <Post fotoUser={Storie2} title='tyla •' imgPostagem={PostFoto2} titledown='tyla' titlepostagem='Stream ‘TYLA’ the album.' />
            <Post fotoUser={Storie3} title='gigi •' imgPostagem={PostFoto3} titledown='gigi' titlepostagem='✨final fit✨✨ in the world of @thombrowne 📠' />
            <Post fotoUser={Storie4} title='kyliejenner •' imgPostagem={PostFoto4} titledown='kyliejenner' titlepostagem='@oscardelarenta for the MET​' />
        </div>
    </div>
  )
}

export default ConteudoCentral
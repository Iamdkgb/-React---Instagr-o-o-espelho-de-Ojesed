
import './Stories.css'
function Stories(props) {
  return (
    <div className='Stories'>

      <div className='borderStories'>
        <img src={props.fotoStorie}/>
      </div>
        <h2>{props.nomeStorie}</h2>  
    </div>
  )
}

export default Stories
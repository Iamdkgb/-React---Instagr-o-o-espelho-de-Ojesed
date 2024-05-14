import  './Post.css'
import { AiOutlineEllipsis } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import Curtidas from './Curtidas';
import Pessoa1 from './../../imagens/winnie.png'
import Pessoa2 from './../../imagens/travis.png'
import Pessoa3 from '../../imagens/vogue.png'
import { HiCheckBadge } from "react-icons/hi2";
import Perfil from './../../imagens/perfil.jpg' 
import React, { useState } from 'react';
import './Curtidas.css'


export default function Post(props) {
 
    const [likes, setLikes] = useState(0)
  return (
      <div className="cardPost">
          <div className="cardHeader">
            <div className="leftHeaderPost"> 
                <div className="containerFotoUser">
                    <img src={props.fotoUser} alt="Foto do usúario na postagem"/>
                </div>      
                <div className="containerUser">
                    <h3>{props.title}</h3>
                    <h4>3 d</h4>
                </div>
             </div>
             <div className="rightHeaderPost">
             <AiOutlineEllipsis style={{width: '20px',
                    height: '20px', 
                    }} />
             </div>
          </div>
          <div className="cardBody">
            <div className="containerFoto">
              <img src={props.imgPostagem} />
            </div>
            <div className="interacoesPostagem">
                <div className="containerButtons">
                    <div className="leftButtons">
                        <FaRegHeart  onClick={()=> setLikes(likes+1)}  style={{
                            color: likes % 2 === 0 ? '' : 'red',  
                            width:'20px',
                            height:'20px',
                            transition:'0.5ms'
                            
                        }} />
              
                        <FaRegComment style={{
                            width:'20px',
                            height:'20px',
                            transform: 'scaleX(-1)'
                        }} />
     
                        <FaRegPaperPlane style={{
                            width:'20px',
                            height:'20px'
                        }}/>
                    </div>
                    <div className="rightButtons">
                        <FaRegBookmark style={{
                            width:'20px',
                            height:'20px'
                        }}/>
                    </div>
                </div>
                <div className="curtidoInfo">
                        <div className='fotoCurtida'>
                            <Curtidas fotoComentario={Pessoa1}/>
                            <Curtidas fotoComentario={Pessoa2}/>
                            <Curtidas fotoComentario={Pessoa3}/>
                        </div>
                    <p>Curtido por <span>vogue</span> e <span>outras pessoas</span> </p>
                </div>
        
            </div>
          </div>
          <div className="card-footer">
            <div className="descPostagem">
                <div className='comentarioUser'>
                <h4>{props.titledown}</h4>
                <HiCheckBadge 
                style={{
                    color: '#0093F3'
                }}/> 
                </div>
                <p>{props.titlepostagem}</p>
            </div>
            <div className="comentarios">
                <div className="todosComentarios">
                    <p>Ver todos os 267.916 comentários</p>
                </div>
                <div className="seuComentario">
                    <div className='comentario'>
                    <div className="comentarioFoto">
                        <img src={Perfil}></img>
                    </div>
                    <div className="digiteAqui">
                        <p>Adicionar Comentário</p>
                    </div>
                <div/>
                </div>
                 <div className='emojis'>
                    <MdOutlineEmojiEmotions
                    style={{
                        width: '15px',
                        height: '15px'
                    }}
                    />
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}
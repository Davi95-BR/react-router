import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/componentes/cartao.css'

const Post = () => {

    const {id} = useParams()                          //useParams faz o match entre a url do post com a id exata
    const[post, setPost] = useState({})

    useEffect(() => {      
        busca(`/posts/${id}`, setPost)                 // Utilizará busca na api                
    }, [id])                                         //Só irá atualizar quando o id for atualizado
                    

    return(                                                    
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="cartao__texto">{post.body}</p>
            </article>
        </main>
    )
}

export default Post;
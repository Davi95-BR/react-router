import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/componentes/cartao.css'

const Post = () => {

    let history = useHistory()  // Possui o método push e através dele conseguimos navegar até a rota indicada, que nesse caso é a rota 404.
    const {id} = useParams()                          //useParams faz o match entre a url do post com a id exata
    const[post, setPost] = useState({})

    useEffect(() => {      
        busca(`/posts/${id}`, setPost)                // Utilizará busca na api
        .catch(()=> {
            history.push('/404')                     //  Caso a busca não chegar em nenhum post(exibirá uma página com erro)
        })                           
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
import React, { useState, useEffect } from 'react'
import { busca} from '../api/api'
import { Link } from 'react-router-dom'

const ListaPost = ( { url } ) => {
    const [posts, setPosts] = useState([])  //array vazio inicial dos posts


    useEffect(() => {                       // efeito colateral/side effect usa-se o hook use Effect
        busca(url,setPosts)                // https://localhost:5000 e o estado atual dos posts
    }, [])                                //array de dependência
    

    return (
        <section className="posts container">
            {
            posts.map((post)=>(
                <Link className={`cartao-post cartao-post--${post.categoria}`}>
                    <article key={post.id}>
                        <h3 className="cartao-post__titulo">
                            {post.title}
                        </h3>
                        <p className="cartao-post__meta">
                            {post.metadescription}</p>

                    </article>
                </Link>
            ))
            }
        </section>
    )
}

export default ListaPost;
import React from 'react'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import { Router, useParams, useRouteMatch } from "react-router-dom";

const Categoria = () => {
    const { id } = useParams()
    const { path } =  useRouteMatch()


    return(
        <>
         <div className="container">
         <h2 className="titulo-pagina">Pet Notícias</h2>
         </div>
         <ListaCategorias />
         <Router exact path={`${ path }/`}>
         <ListaPost url={`/posts?categoria=${ id }`} />
         </Router>
        </>
    )
}

export default Categoria;
import { useLoaderData } from 'react-router'
import { getPost } from '../../models/posts.server'
import { formatearFecha } from '../../utils/helpers'

export function meta({ data }) {
    if (!data) {
        return {
            title: 'GuitarLA - Entrada no encontrada',
            descripcion: `Guitarras, venta de guitarras, entrada no encontrada`
        }
    }
    const titulo = data.data[0].attributes.titulo
    return {
        title: `GruitarLA - ${titulo}`,
        descripcion: `Guitarras, venta de guitarras, entrada ${titulo}`
    }
}

export async function loader({params}){
    const {postUrl} = params
    const post = await getPost(postUrl)
    if (post.data.length === 0) {
        throw new Response('',
            {
                status: 404,
                statusText: 'Entrada no encontrada'
            })
    }
    return post
}

function Post() {

    const post = useLoaderData()

    const { contenido, imagen, titulo, publishedAt } = post?.data[0]?.attributes

  return (
    <article className='contenedor post mt-3'>
          <img className='imagen' src={imagen?.data?.attributes.url} alt={`Imagen blog ${titulo}`} />
          <div className='contenido'>
              <h3>{titulo}</h3>
              <p className='fecha'>{formatearFecha(publishedAt)}</p>
              <p className='texto'>{contenido}</p>
          </div>
    </article>
  )
}

export default Post
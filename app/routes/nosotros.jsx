import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return (
    {
      title: 'GuitarLA - Sobre Nosotros',
      description: 'Venta de guitarras, blog de musica'
    }
  )
}

export function links() {
  return[
      {
        rel: 'stylesheet',
        href: styles
      },
      {
        rel: 'preload',
        href: imagen,
        as: 'image'
      }
    ]
  
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>Fusce cursus at nulla vitae dictum. Quisque ut mollis dolor. Curabitur finibus massa ligula, eget sodales nulla ultricies et. Praesent sit amet efficitur turpis, tincidunt scelerisque elit. Pellentesque elementum nisi vel neque porttitor semper. Donec posuere vel ipsum id sollicitudin. Proin ut dui at mi lobortis dignissim. Duis ornare convallis odio sed suscipit. Suspendisse mollis at orci et viverra. Pellentesque sodales lectus eu libero hendrerit, ac euismod quam feugiat. Pellentesque vestibulum molestie dui vel iaculis. Sed sed bibendum turpis, quis sodales diam.</p>

          <p>Fusce cursus at nulla vitae dictum. Quisque ut mollis dolor. Curabitur finibus massa ligula, eget sodales nulla ultricies et. Praesent sit amet efficitur turpis, tincidunt scelerisque elit. Pellentesque elementum nisi vel neque porttitor semper. Donec posuere vel ipsum id sollicitudin. Proin ut dui at mi lobortis dignissim. Duis ornare convallis odio sed suscipit. Suspendisse mollis at orci et viverra. Pellentesque sodales lectus eu libero hendrerit, ac euismod quam feugiat. Pellentesque vestibulum molestie dui vel iaculis. Sed sed bibendum turpis, quis sodales diam.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
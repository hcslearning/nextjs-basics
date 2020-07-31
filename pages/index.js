import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import axios from 'axios'

export default function Home({ usuarios }) {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Aprendiendo NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Aprendiendo NextJS
        </h1>
      <div className="productos">
          <div className="producto">
            No se afecta con el CSS de /styles/Productos.module.css ni con el otro CSS del componente
            <button>add</button>
          </div>
          <div className="producto">
            No se afecta con el CSS de /styles/Productos.module.css
            <button>add</button>
          </div>
        </div>

        <h3>Usuarios</h3>
        <ul>
          {usuarios.map(  
            (u) => <li>{u.id} - {u.name} - {u.email}</li>
          )}
        </ul>
      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </footer>
    </div>
    </Layout>
  )
}

async function getUsuariosWS() {
  let usuarios = await axios.get('https://jsonplaceholder.typicode.com/users')
  return usuarios.data
}

/**
 * Funcion creada para hacer las pruebas solamente, luego se utiliza la con sufijo WS
 */
function getUsuarios() {
  return [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
  ]
}

export async function getStaticProps() {
  const usuarios = await getUsuariosWS()
  return {
    props: {
      usuarios
    }
  }
}

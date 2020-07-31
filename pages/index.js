import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import axios from 'axios'

export default function Home({ usuarios }) {
  console.log(usuarios)
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <main>
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

/**
 * Esta funcion debería llamar datos de una API Externa, BD u otro
 */
function getProductos() {
  return [
    {id: 1, nombre: 'Producto 1', precio: 10990},
    {id: 2, nombre: 'Producto 2', precio: 91990},
    {id: 3, nombre: 'Producto 3', precio: 54990},
  ]
}

async function getProductosWS() {
  let usuarios = await axios.get('https://api.mercadolibre.com/sites/MLC/search?q=stepper')
  return usuarios
}

async function getUsuariosWS() {
  let usuarios = await axios.get('https://jsonplaceholder.typicode.com/users')
  return usuarios
}

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
  const response = await getUsuariosWS()
  const usuarios = response.data
  return {
    props: {
      usuarios
    }
  }
}

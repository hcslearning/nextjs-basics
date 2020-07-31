import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home({ productos }) {
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

        <h3>Productos Externos</h3>
        <ul>
          {productos.map(  
            (p) => <li>{p.nombre} - ${p.precio}</li>
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

function getProductos() {
  return [
    {id: 1, nombre: 'Producto 1', precio: 10990},
    {id: 2, nombre: 'Producto 2', precio: 91990},
    {id: 3, nombre: 'Producto 3', precio: 54990},
  ]
}

export async function getStaticProps() {
  const productos = getProductos()
  return {
    props: {
      productos
    }
  }
}

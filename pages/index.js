import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import useSWR from 'swr'
import getUsuariosWS, {getUsuarios} from '../lib/users'

/**
 * Consigue datos remotos desde el lado del cliente
 * Bueno para datos que no son importantes para SEO
 * usando libreria SWR
 */
function FotoPerro() {
  const {data, error} = useSWR('https://random.dog/woof.json', async (...args) => {
    const res = await fetch( args[0] )
    return res.json()
  });

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const extension = data.url.slice(-4)
  switch ( extension ) {
    case '.mp4':
      return <video autoPlay loop controls><source src={data.url} type="video/mp4" /></video>
    case 'jpeg':
    case '.jpg':
    case '.gif':
    case '.png':
    default:
      return  <img src={data.url} alt="foto aleatoria perro" style={{width: '30%', height: '30%'}} />
  }
}

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

        <div className="foto-perro">
          <FotoPerro />
        </div>

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

          {/* Prefetched data con getStaticProps() - Útil para SEO */}
          <h3>Usuarios</h3>
          <ul>
            {usuarios.map(  
              (u) => {
                return (
                  <li key={u.id}>
                    <Link href="/users/[id]" as={`/users/${u.id}`}><a>{u.id} - {u.name} - {u.email}</a></Link>
                  </li>
                )
              }
            )}
          </ul>
          {/* END Prefetched data con getStaticProps() */}

      </main>

        <footer className={styles.footer}>
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />

        </footer>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const usuarios = await getUsuariosWS()
  return {
    props: {
      usuarios
    }
  }
}

/**
 * You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request, and the result cannot be cached by a CDN without extra configuration.
 * 
 export async function getServerSideProps(context) {
   return {
    props: {
      usuarios
    }
  }
 }
 */


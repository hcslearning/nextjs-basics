import Head from 'next/head'
import styles from '../styles/Productos.module.css'
import Layout from '../components/layout'

export default function Productos() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Productos</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Productos
        </h1>
        <div className="productos">
          <div className={styles.producto}>Producto 1<button>add</button></div>
          <div className={styles.producto}>Producto 2<button>add</button></div>
        </div>
      </main>
    </div>
    <style jsx>{`
    .productos button {
      background: pink;
    }
    `}
    </style>
    </Layout>
  )
}

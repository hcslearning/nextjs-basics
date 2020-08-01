import getUsuariosWS, {getUsuarioById} from '../../lib/users'
import Layout from '../../components/layout'

export default function User({ userData }) {
    const {id, name, email} = userData
    return (
        <Layout>
        <div>
            <h1>{id} - {name}</h1>
            <p>
            {email}
            </p>
        </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const usuarios = await getUsuariosWS()
    const paths = usuarios.map( user => {
        return {
            params: {
                id: `${user.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const userId = params.id
    const userData = await getUsuarioById( userId )
    return {
        props: {
            userData 
        }
    }
}

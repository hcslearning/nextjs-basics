import Link from 'next/link'

function Menu(){
    return (
        <div className="menu">
            <ul>
                <li><Link href="/"><a>Inicio</a></Link></li>
                <li><Link href="productos"><a>Productos</a></Link></li>
                <li>dos</li>
                <li>tres</li>
            </ul>
        </div>
    )
}

export default function Layout({ children }) {
    return (
        <div>
            <Menu />
            {children}
        </div>
    )
} 
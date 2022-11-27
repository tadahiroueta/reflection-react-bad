import { Link } from 'react-router-dom'


export default function Navigation() {
    const links = [
        { name: 'Filter', path: '/filter' },
        { name: 'Movies', path: '/movies' },
        { name: 'Shows', path: '/shows' },
        { name: 'VPNs', path: '/vpns' }
    ]
    return (
        <div className='navigation'>
            {links.map((link) => {
                const linkName = link.name
                return <Link className="navigation-link" key={linkName} to={link.path}>{linkName}</Link>
            })}
        </div>
)}
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { isPreviewOpen } from "./store"
import Navigation from './Navigation.js'


export default function Header() {
    const isBlurred = useSelector(isPreviewOpen)
    return (
        <header className={isBlurred ? "blurred" : null}>
            <div className="left-header">
                <Link className="logo-link" to="/">
                    <img className="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
                </Link>
                <Navigation />
            </div>
            <div className="right-header">
                <button type="button" className="search-button icon">
                    <img className="search-icon icon-image" src={`${process.env.PUBLIC_URL}/images/search-icon.png`} alt="search" />
                </button>
                <button type="button" className="settings-button icon">
                    <img className="settings-icon icon-image" src={`${process.env.PUBLIC_URL}/images/settings-icon.png`} alt="settings" />
                </button>
            </div>
        </header>
    )
}
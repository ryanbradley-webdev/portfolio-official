import { Outlet } from 'react-router-dom'
import styles from './header.module.css'

export default function Header() {
    return (
        <>
            <header>Header</header>
            <Outlet />
        </>
    )
}
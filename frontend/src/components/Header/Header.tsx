import styles from './Header.module.css'

export default function Header({name}: { name: string }) {
    return (
        <header>
            "Hello {name}"
        </header>
    )
}
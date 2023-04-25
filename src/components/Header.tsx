import toDoLogo from '../assets/logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="ToDo Logo" />
    </header>
  )
}
